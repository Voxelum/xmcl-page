---
date: 2023-12-18
title: "X Minecraft Launcher 최적화: Azure Application Insights 및 Azure Storage를 활용한 안전한 소스 관리"
description: X Minecraft Launcher를 Azure Application Insights와 Azure Storage로 최적화해보세요. 소스맵 활용법을 배우고, 성능 모니터링을 강화하며, 프로덕션에서 사용하는 파일을 안전하게 관리하는 방법도 함께 소개합니다.
category: Article
author: "Unknown"
---

Azure Storage Blob에 소스맵 구성을 사용하여 Electron에서 Azure Application Insights를 활용하세요.

---

<PostDetail>

## 소스맵 및 디버깅

X Minecraft launcher에서는 프로덕션 코드에 소스맵을 포함해 배포했습니다. `source-map-support` 패키지를 사용하면 에러 스택이 문제를 해결하는 데 상당히 유용해집니다.

<!-- image of the error stack -->

소스 코드의 어느 줄에 문제가 있는지 직접 알 수 있습니다.

그러나 프로덕션 환경에서 소스맵을 포함하면 최종 패키지 크기가 커집니다. 기본적으로 최종 asar 빌드 크기를 **두 배**로 증가시킵니다. 동시에 소스맵을 메모리에 로드해야 하므로 프로덕션 사용 시 많은 메모리를 소모하게 됩니다. 이는 그닥 좋지 않습니다. :/

따라서 우리는 완전하고 명확한 오류 스택을 확보할 수 있을 뿐만 아니라, 프로덕션 빌드에서 소스맵을 제거할 수 있는 접근 방식을 찾기 시작했어요.

## Azure 애플리케이션 인사이트

launcher는 텔레메트리 수집을 위해 [Azure Application Insight](https://learn.microsoft.com/ko-kr/azure/azure-monitor/app/app-insights-overview)를 사용합니다. [공식 문서](https://learn.microsoft.com/ko-kr/azure/azure-monitor/app/javascript-sdk-configuration#source-map)에 따르면, 텔레메트리에서 오류 스택을 압축 해제하는 기능을 지원합니다. 멋져 보이지만, 문제가 있었습니다.

## 문제

공식 문서에서, 난독화된 **브라우저 자바스크립트 오류 스택**을 소스 코드 호출 스택으로 다시 매핑하는 예시를 확인했습니다. 브라우저 자바스크립트 오류 스택은 다음과 같습니다:

```
x 에서 (https://xyz.com/path/js/a.js:123:456)
```

도메인으로 시작헤서, Azure는 프로토콜과 도메인을 무시하고 경로 `/path/js/a.js`를 직접 사용하여 Azure 스토리지 블롭 `<config-container>/path/js/a.js.map` 내의 해당 `.map` 파일을 검색합니다.

launcher에서 우리의 오류 스택은 항상 js 파일의 전체 디스크 경로입니다. 이는 오류 스택 경로가 사용자가 프로그램을 배치한 위치에 따라 달라진다는 것을 뜻해요. 예를들어:

```
x 에서 (C:\Users\username\x-minecraft-launcher\resources\app.asar\index.js:123:456)
```

Azure가 이 매핑을 처리하도록 하는 것은 불가능합니다.

## 아이디어

Azure 리매핑 로직의 성격을 이해한 후, 우리는 호출 스택(callstack)을 Azure 로직에 맞게 수정하는 방법을 찾아야 한다고 생각했습니다.

`source-map-support`가 아이디어의 실마리를 주었습니다.

`source-map-support`는 비슷한 일을 수행하는데, 호출 스택을 소스 코드로 매핑해주는 기능을 합니다. 소스 코드를 읽어보면서, 우리는 [V8 stack trace API](https://github.com/v8/v8/wiki/Stack-Trace-API)를 사용하면 원하는 형태로 스택을 수정할 수 있다는 것을 알게 되었습니다.

우리가 해야 할 일은 V8 스택 트레이스 생성 과정을 가로채서, 절대 파일 경로를 Azure Storage Blob에 있는 sourcemap의 상대 경로로 바꾸는 것입니다.

## 해결 방법

런처는 GitHub Action을 사용하여 아티팩트를 빌드하며, 우리는 GitHub 실행(run) 번호를 런처 빌드 번호로 사용합니다.  
각 빌드의 sourcemap을 Azure Storage Blob에 저장하고, 빌드 번호로 오류 스택을 매핑하기로 결정했습니다.

즉, sourcemap은 다음과 같이 저장됩니다:

```
<storage-url>/<build_number>/<file>.map
```

오류 스택은 다음과 같이 표시됩니다:

```
at x (/<build_number>/index.js:123:456)
```

우선 `source-map-support`에서 인터셉트 코드를 복사합니다:

```ts
Error.prepareStackTrace = (error, stack) => {
  const name = error.name || 'Error'
  const message = error.message || ''
  const errorString = name + ': ' + message

  const processedStack = []
  for (let i = stack.length - 1; i >= 0; i--) {
    processedStack.push('\n    at ' + wrapCallSite(stack[i]))
  }
  return errorString + processedStack.reverse().join('')
}

```

원래 구현에서는 wrapCallSite가 호출 스택을 소스로 변환하는 복잡한 함수입니다.

우리는 간단하게 구현하면 됩니다:


```ts
const buildNumber = process.env.BUILD_NUMBER
const prefix = `/${buildNumber}`

const wrapCallSite = (frame: any) => {
  if (frame.isNative()) return frame
  frame = cloneCallSite(frame)
  const original = frame.getScriptNameOrSourceURL
  frame.getScriptNameOrSourceURL = function () {
    // substract the path
    let name = original.call(this)
    if (name) {
      name = name.replace(__dirname, prefix)
      name = name.replace(/\\/g, '/')
    }
    return name
  }
  return frame
}
```

cloneCallSite는 원래 구현에서 가져온 함수입니다.

</PostDetail>