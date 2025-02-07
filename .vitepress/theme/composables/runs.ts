
export type WorkflowRun = {
    name: string;
    display_title: string
    status: string;
    created_at: string;
    run_number: number;
    id: number;
    // Add more properties as needed
};

export async function getRuns(): Promise<WorkflowRun[]> {
    const runResponse = await fetch(`https://api.xmcl.app/prebuilds`, {
    });
    return await runResponse.json() as WorkflowRun[];
}