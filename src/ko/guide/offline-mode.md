# 라이선스 없이 플레이하기 (오프라인 모드 및 대체 계정)

XMCL은 플레이어의 자유를 존중하는 오픈 소스 런처입니다. 현재 Minecraft Java 에디션 정품 라이선스가 없거나 Mojang 서버 연결 없이 오프라인에서 모드팩을 테스트하려는 경우, XMCL은 **오프라인 모드**와 커뮤니티 스킨 네트워크를 완벽하게 지원합니다.

---

## ⚙️ 1. 개발자 모드 활성화

오프라인 계정 및 타사 스킨 서버를 사용하려면 설정에서 **개발자 모드**를 활성화해야 합니다:

1. 런처 왼쪽 하단의 **설정**(톱니바퀴 아이콘)을 클릭합니다.
2. **"개발자 모드"** 항목을 찾아 **켜기**로 변경합니다:

   ![개발자 모드 활성화](/guidephoto/developer-mode.png)

활성화 후 계정 관리자에서 계정을 추가할 때 다양한 인증 제공자를 선택할 수 있습니다.

---

## 👥 2. 지원하는 계정 유형

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">오프라인 모드 (로컬 계정)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      인증 서버에 연결하지 않고 오프라인으로 플레이합니다. 원하는 닉네임을 입력하기만 하면 됩니다. 싱글 플레이, 로컬 모드팩 테스트, LAN 멀티플레이 및 <code>online-mode=false</code> 설정의 커뮤니티 서버에 적합합니다.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      커스텀 스킨과 망토를 지원하는 무료 커뮤니티 인증 및 스킨 서버입니다.  
      공식 웹사이트: <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      클라우드 스킨과 HD 망토를 지원하는 널리 알려진 글로벌 서드파티 인증 네트워크입니다.  
      공식 웹사이트: <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">사용자 정의 Authlib-Injector / Yggdrasil 서버</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      표준 Yggdrasil API 사양을 준수하는 비공개 인증 서버 URL을 직접 등록할 수 있습니다.
    </p>
  </div>

</div>

---

## 🎮 3. 계정 추가 및 전환 방법

1. 오른쪽 상단의 프로필 아이콘을 클릭하여 **계정 관리자**를 엽니다.
2. **"계정 추가"**를 클릭합니다.
3. **오프라인**, **LittleSkin**, **Ely.by**, 또는 **사용자 정의 서버**를 선택합니다.
4. 닉네임 또는 인증 정보를 입력합니다.
5. 추가된 계정을 클릭하여 **활성 계정**으로 설정합니다.

---

## 💡 4. 계정 유형 비교

| 기능 | Microsoft 정품 계정 | 오프라인 계정 | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **비용** | 유료 (정품 라이선스) | 무료 | 무료 |
| **공식 정품 서버 (Hypixel 등)** | ✅ 지원 | ❌ 미지원 | ❌ 미지원 |
| **커뮤니티 서버 / LAN / P2P** | ✅ 지원 | ✅ 지원 (`online-mode=false`) | ✅ 지원 |
| **싱글 플레이 및 모드팩** | ✅ 지원 | ✅ 지원 | ✅ 지원 |
| **커스텀 스킨 및 망토** | ✅ Mojang 공식 스킨 | ⚠️ 기본 스킨 | ✅ 해당 네트워크 스킨/망토 |

---

## ❓ 자주 묻는 질문

### 오프라인 계정으로 Hypixel에 접속할 수 있나요?
아닙니다. 공식 상용 서버는 Mojang 인증(`online-mode=true`)을 필수로 요구하므로 Java 에디션이 구매된 Microsoft 계정이 필요합니다.

### 라이선스 없이 친구들과 멀티플레이를 하려면 어떻게 해야 하나요?
XMCL 내장 **P2P 멀티플레이 / LAN 공유** 기능을 사용하시거나 `online-mode=false`로 설정된 커뮤니티 서버에 참가하시면 됩니다.

👉 **[Microsoft 로그인에 문제가 있으신가요? 문제 해결 가이드 보기](./microsoft-login-issues)**
