import type { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { InjectionKey } from 'vue'
import type { UserModule } from '~/types'

export const AppInsightKey: InjectionKey<Promise<ApplicationInsights>> = Symbol('ApplicationInsights')

export const install: UserModule = ({ isClient, router, app }) => {
  // if (!isClient) {
  //   return
  // }
  app.provide(AppInsightKey, import('@microsoft/applicationinsights-web').then(({ ApplicationInsights }) => {
    const appInsights = new ApplicationInsights({
      config: {
        connectionString: 'InstrumentationKey=7a526b34-c173-43f6-9641-1e4c98863368;IngestionEndpoint=https://eastasia-0.in.applicationinsights.azure.com/'
      }
    })
    appInsights.loadAppInsights()
    router.afterEach((to) => {
      appInsights.trackPageView({ name: to.path })
    })
    return appInsights
  }))
}
