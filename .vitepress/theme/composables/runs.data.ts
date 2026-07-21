import { WorkflowRun, getRuns } from "./runs";
import { loadCachedGitHubData } from './github-cache'


export declare const data: WorkflowRun[]

async function load(): Promise<WorkflowRun[]> {
    return loadCachedGitHubData('workflow-runs', () => getRuns(process.env.VITE_GITHUB_TOKEN ?? ''), () => [])
}

export default {
    load,
}