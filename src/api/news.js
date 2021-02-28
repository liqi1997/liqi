import ask from './ask'

export function fetchList() {
    return ask({
        url: '/sub/cate',
    })
}

export function fetchNews(id) {
    return ask({
        url: `/sub/${id}/data`
    })
}