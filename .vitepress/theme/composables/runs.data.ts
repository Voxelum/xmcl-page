import { WorkflowRun, getRuns } from "./runs";


export declare const data: WorkflowRun[]

async function load(): Promise<WorkflowRun[]> {
    return getRuns(process.env.VITE_GITHUB_TOKEN ?? '').catch(() => [])
}

export default {
    load,
}