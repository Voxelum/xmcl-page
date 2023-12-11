declare module 'virtual:latest-release' {
  declare const releases: {
    // eslint-disable-next-line camelcase
    assets?: { name: string; browser_download_url: string }[]
    prerelease: boolean
    // eslint-disable-next-line camelcase
    tag_name: string
  }[];

  export default releases
}

declare module 'virtual:prebuilds' {
  type WorkflowRun = {
    name: string;
    display_title: string
    status: string;
    created_at: string;
    run_number: number;
    id: number;
    // Add more properties as needed
  };


  declare const releases: {
    total_count: number;
    workflow_runs: WorkflowRun[];
  } | undefined;

  export default releases
}
