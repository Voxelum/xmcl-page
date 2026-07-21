
export type WorkflowRun = {
    name: string;
    display_title: string
    status: string;
    created_at: string;
    run_number: number;
    id: number;
    // Add more properties as needed
};

export async function getRuns(token: string): Promise<WorkflowRun[]> {
    const runResponse = await fetch('https://api.github.com/repos/voxelum/x-minecraft-launcher/actions/workflows/1220495/runs', {
        headers: token ? {
            Authorization: `token ${token}`,
        } : {},
    })
    const data = await runResponse.json()
    if (!runResponse.ok) {
        throw new Error(`GitHub API error ${runResponse.status}: ${data?.message ?? 'Unknown error'}`)
    }
    return processData(data)
}

const processData = (data: { workflow_runs?: WorkflowRun[] }) => {
    const workflowRuns = Array.isArray(data?.workflow_runs) ? data.workflow_runs : [];
    return workflowRuns.filter(r => r.status !== 'in_progress').sort((a, b) => a.created_at > b.created_at ? -1 : 1);
}
