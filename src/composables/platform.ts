import platform from 'platform'

export function usePlatform() {
    switch (platform.os?.family) {
        case 'Windows':
            return 'Win32'
        case 'OS X':
            return 'Mac'
        case 'Ubuntu':
        case 'Debian':
        case 'SuSE':
        case 'Fedora':
        case 'Red Hat':
            return 'Linux'
    }
    return 'Win32'
}
