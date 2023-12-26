---
date: 2023-12-18
title: Telemtry exception without sourcemap
category: Article
---

Use azure applicationinsights in Electron with sourcemap configuration in azure storage blob.

---

<PostDetail>

## Sourcemap & Debugging

In X Minecraft Launcher, we used to ship the sourcemap in production code. With the `source-map-support` package, the Error stack becomes signifcantly useful to address the problem.

<!-- image of the error stack -->

We can directly know which line in source code has issue.

However, shipping sourcemap in production making our final package larger. Basically, it **doubles** the size of the final asar build. At the same time, we need to load the sourcemap into memory, so it will also consume much memory in production usage. That's bad. :/

Therefore, we start to looking for an approach that we can not only have full & clear error stack, but also remove the sourcemap in production build.

## Azure Application Insight

The launcher is using the [Azure Application Insight](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) for telemetry. From the [official document](https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript-sdk-configuration#source-map), it supports the unminify the Error stack in telemetry. That looks cool, but soon we find the problem.

## The Problem

In official document, we seen the example that mapping the uglified **browser javascript error stack** back to source code callstack. The browser javascript error stack looks like:

```
at x (https://xyz.com/path/js/a.js:123:456)
```

It starts with domain, and Azure can ignore the protocol and domain, directly use the path `/path/js/a.js` to lookup the corresponding `.map` file in azure storage blob `<config-container>/path/js/a.js.map`.

In the launcher, our error stack is always the full disk path of the js file. Which means, the error stack path is depending on where user place the program. Example:

```
at x (C:\Users\username\x-minecraft-launcher\resources\app.asar\index.js:123:456)
```

Is impossible to let Azure to handle this mapping.

## Inspiration

After we understand the nature of the Azure remapping logic, we think we should comeup a way to modify the callstack fitting in with the Azure logic.

The `source-map-support` give me a spark.

The `source-map-support` is doing the similar thing, except it's mapping the callstack back to source. From reading its source code, we find we could use [V8 stack trace API](https://github.com/v8/v8/wiki/Stack-Trace-API) to modify the stack to the shape we want.

All we need to do, is intercepting the V8 stack trace generation process, and replace the absolute file path into relative path to our sourcemap in azure storage blob.

## Solution

The launcher use github action to build the artifact, and we are using the github run number as the build number of the launcher. We decide to store each builds sourcemaps into the azure storage blob, and map the error stack by build number.

It means, we store the sourcemap like

```
<storage-url>/<build_number>/<file>.map
```

and our error stack should be like

```
at x (/<build_number>/index.js:123:456)
```

So we first copy the intercept code from `source-map-support`

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

In original implementation, the `wrapCallSite` is a complex function to transform the callstack to source.

We only want a simple one:


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

The `cloneCallSite` is from original implementation.

</PostDetail>