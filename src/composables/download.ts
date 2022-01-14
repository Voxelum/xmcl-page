import { defineStore } from 'pinia';
import { Ref } from 'vue';
import { useGFWStore } from './gfw';

export const useDownloadStore = defineStore('download', () => {
    const source = ref('auto')
    return { source }
})

export const useArtifactsStore = defineStore('artifacts', () => {
    const gfwStore = useGFWStore()
    const downloadStore = useDownloadStore()
    const githubStore = useGithubInfoStore()

    function getAzureUrl(name: string) { return `https://xmcl-release.azureedge.net/releases/${name}`; }
    function getAzureMsUrl(name: string) { return `https://xmcl-release-ms.azureedge.net/releases/${name}`; }
    function getBaiduUrl(name: string) { return `http://maven.jihuayu.site/assets-xmcl/${githubStore.latestVersion}/${name}`; }
    function getUrl(find: (r: { name: string }) => boolean) {
        if (!githubStore.latest) return ''
        if (!githubStore.latest.assets) return ''
        const result = githubStore.latest.assets.find(find)
        if (result) {
            if (downloadStore.source === 'auto') {
                return gfwStore ? getBaiduUrl(result.name) : result.browser_download_url
            } else if (downloadStore.source === 'azure') {
                return getAzureUrl(result.name)
            } else if (downloadStore.source === 'azure-ms') {
                return getAzureMsUrl(result.name)
            } else if (downloadStore.source === 'baidu') {
                return getBaiduUrl(result.name);
            }
            return result.browser_download_url
        }
        return '';
    }
    const winWeb = computed(() => getUrl(a => a.name.indexOf('Web-Setup') !== -1 && a.name.endsWith('.exe')))
    const winZip = computed(() => getUrl(a => a.name.endsWith('win.zip') && a.name.indexOf('ia32') === -1))
    const winNsis = computed(() => getUrl(a => a.name.indexOf('-Setup') !== -1 && a.name.endsWith('.exe') && a.name.indexOf('Web') === -1))
    const macZip = computed(() => getUrl(a => a.name.endsWith('mac.zip')))
    const macDmg = computed(() => getUrl(a => a.name.endsWith('.dmg')))
    const deb = computed(() => getUrl(a => a.name.endsWith('.deb')))
    const snap = computed(() => getUrl(a => a.name.endsWith('.snap')))
    const appImage = computed(() => getUrl(a => a.name.endsWith('.AppImage')))
    const rpm = computed(() => getUrl(a => a.name.endsWith('.rpm')))

    return {
        winWeb,
        winZip,
        winNsis,
        macZip,
        macDmg,
        deb,
        snap,
        appImage,
        rpm
    }
})

export const useGithubInfoStore = defineStore('github', () => {
    const releases = ref([])
    const latest: Ref<{
        assets?: { name: string; browser_download_url: string }[];
        prerelease: boolean;
        tag_name: string;
    }> = computed(() => releases.value[0])
    const latestVersion: Ref<string> = computed(() => latest.value ? latest.value.tag_name : 'unknown')
    const prerelease = computed(() => latest.value ? !!latest.value.prerelease : false)

    function refresh() {
        fetch('https://api.github.com/repos/voxelum/x-minecraft-launcher/releases')
            .then(resp => resp.json())
            .then(r => releases.value = r);
    }

    const github = {
        latest,
        latestVersion,
        prerelease,
        refresh,
    }

    return github
})

// function setupHrefByUrl(elem, azureUrl, githubUrl) {
//     $(elem).click((event) => {
//         $(elem).addClass('loading');
//         if (DOWNLOAD_SOURCE === 'auto') {
//             getFileUrlFromLocation(azureUrl, githubUrl).then((url) => {
//                 $(elem).attr('href', url);
//                 $(elem).removeClass('loading');
//             })
//         } else if (DOWNLOAD_SOURCE === 'github') {
//             $(elem).attr('href', githubUrl);
//             $(elem).removeClass('loading');
//         } else {
//             $(elem).attr('href', azureUrl);
//             $(elem).removeClass('loading');
//         }
//     });
// }

// function buildByVersion() {
//     $('#version').text(`v${version}`);
//     function setupHref(elem, name) {
//         setupHrefByUrl(elem, getAzureUrl(name), getGithubUrl(name));
//     }

//     setupHref('[win-web]', `xmcl-Web-Setup-${version}.exe`);
//     setupHref('[win-zip]', `xmcl-${version}-win.zip`);
//     setupHref('[win-setup]', `xmcl-Setup-${version}.exe`);
//     setupHref('[mac-zip]', `xmcl-${version}-mac.zip`);
//     setupHref('[dmg]', `xmcl-${version}.dmg`);
//     setupHref('[deb]', `x-minecraft-launcher_${version}_amd64.deb`);
//     setupHref('[snap]', `x-minecraft-launcher_${version}_amd64.snap`);
//     setupHref('[appimage]', `xmcl-${version}.AppImage`);
//     setupHref('[rpm]', `x-minecraft-launcher-${version}.x86_64.rpm`);
// }


// switch (platform.os.family) {
//     case 'Windows':
//         $('[win]').clone().appendTo('[main]');
//         break;
//     case 'OS X':
//         $('[mac]').clone().appendTo('[main]');
//         break;
//     case 'Ubuntu':
//     case 'Debian':
//     case 'SuSE':
//     case 'Fedora':
//     case 'Red Hat':
//         $('[linux]').clone().appendTo('[main]');
//         break;
// }
// buildByVersion();
// buildFromGithub();
