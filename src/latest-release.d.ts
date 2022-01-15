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
