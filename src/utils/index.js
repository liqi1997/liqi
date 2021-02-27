export function timeFormat(timestamp) {
    const date = new Date(timestamp)

    const year = date.getFullYear();
    let month = date.getMonth();
    let dateStr = date.getDate();

    if (month < 10) {
        month = '0' + month
    }
    if (dateStr < 10) {
        dateStr = '0' + dateStr
    }

    return `${year}/${month}/${dateStr}`
}

export function numFormat(num) {

    if (num > 10000) {
        const val = (num / 10000).toFixed(0)
        return val + 'w'
    } else
        if (num > 1000) {
            const val = (num / 1000).toFixed(0)
            return val + 'k'
        }
        else {
            return num
        }

}

export function secondFormat(second) {
    if (second < 60) {
        return `${second}秒`
    }
    if (second < 3600) {
        const min = parseInt(second / 60);
        return `${min}分`
    } else {
        const hour = parseInt(second / 3600);
        return `${hour}时`
    }
}