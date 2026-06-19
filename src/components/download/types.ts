export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  assets: GitHubAsset[];
}

export interface GitHubAsset {
  id: number;
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
  download_count: number;
}

export interface PlatformAssets {
  windows: {
    x64: GitHubAsset[];
    app: GitHubAsset[];
  };
  macos: {
    x64: GitHubAsset[];
    arm64: GitHubAsset[];
  };
  linux: {
    x64: GitHubAsset[];
    arm64: GitHubAsset[];
  };
}

export interface DownloadOption {
  label: string;
  value: string;
  description?: string;
}
