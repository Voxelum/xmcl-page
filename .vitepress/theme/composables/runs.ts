
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
    const runResponse = await fetch(`https://api.github.com/repos/voxelum/x-minecraft-launcher/actions/workflows/1220495/runs`, {
        headers: token ? {
            Authorization: `token ${token}`,
        } : {},
    });
    return processData(await runResponse.json() as any)
}

const processData = (data: { workflow_runs: WorkflowRun[] }) => {
    return data.workflow_runs.filter(r => r.status !== 'in_progress').sort((a, b) => a.created_at > b.created_at ? -1 : 1);
}