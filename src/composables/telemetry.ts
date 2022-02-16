import { AppInsightKey } from "~/modules/telemetry";

export function useTelemetry() {
    const telemetry = inject(AppInsightKey)
    if (!telemetry) { throw new Error() }
    const trackDownload = (platform: string, type: string) => {
        telemetry.then((app) => {
            app.trackEvent({ name: 'download', properties: { platform, type } })
        })
    }
    return {
        trackDownload
    }
}
