const SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
const KILO = 1024

export function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
        return '0 Bytes'
    }
    const dm = decimals < 0 ? 0 : decimals
    const i = Math.floor(Math.log(bytes) / Math.log(KILO))
    return parseFloat((bytes / Math.pow(KILO, i)).toFixed(dm)) + ' ' + SIZES[i]
}