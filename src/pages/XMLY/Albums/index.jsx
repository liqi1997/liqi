import { useEffect, useState } from 'react'
import styles from './index.module.css'
import v from "../../../assets/v.svg";
import { timeFormat, numFormat } from "../../../utils";
import Track from "./Track";

function Albums({ url, xmly, item = {}, audio }) {

    const [page, setPage] = useState(0)
    const [list, setList] = useState([])

    function getAudio(id) {

        xmly.get(`${url}/tracks/get_single`, {
            track_id: id,
        }).then(res => {
            console.log('res', res)

            if (res.data) {

                audio.setObj(res.data)
            }

        })


    }

    function loadMore() {
        setPage(page + 1)
    }

    useEffect(() => {

        if (page > 0 && item.id && url && xmly) {
            // getDetail();
            xmly.get(`${url}/albums/browse`, {
                album_id: item.id,
                sort: 'asc',
                page,
                count: 10
            }).then(res => {
                console.log('res', res)

                if (res.code === 0 && res.data && Array.isArray(res.data.tracks)) {

                    const { tracks } = res.data;

                    if (tracks.length === 0) {
                        alert('没有更多数据了')
                        return;
                    }

                    setList(l => [...l, ...tracks])

                    // setList([...list, ...tracks])

                }
            })
        }
    }, [page, item.id, url, xmly])

    return (
        <div className={styles.item}>

            <img className={styles.logo} src={item.cover_url_large} alt="albums" />
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>{item.album_title}</div>
                    <div className={styles.status}>
                        <div>
                            {item.is_finished === 2 && "完结"}
                        </div>
                        <div>
                            {item.is_finished === 1 && "未完结"}
                        </div>
                    </div>
                    <div className={styles.score}>{item.quality_score}分</div>
                </div>

                <div className='left' style={{ marginBottom: 8 }}>
                    <img className={styles.avatar} src={item.announcer ? item.announcer.avatar_url : '#'} alt="avatar" />
                    <div>{item.announcer ? item.announcer.nickname : '--'}</div>
                    {item.announcer && item.announcer.is_verified && (
                        <img className={styles.v} src={v} alt="vip" />
                    )}
                </div>

                <div className={styles.introduce}>{item.album_intro}</div>



                <div className={styles.tags}>
                    <div className={styles.tag} title={`音频数量：${item.include_track_count}`}>
                        <span className={`iconfont icon-customerservice ${styles.iconfont}`}></span>
                        {numFormat(item.include_track_count)}
                    </div>
                    <div className={styles.tag} title={`播放数量：${item.play_count}`}>
                        <span className={`iconfont icon-notification ${styles.iconfont}`}></span>
                        <span>{numFormat(item.play_count)}</span>
                    </div>
                    <div className={styles.tag} title={`喜欢数量：${item.favorite_count}`}>
                        <span className={`iconfont icon-heart ${styles.iconfont}`}></span>
                        <span>{numFormat(item.favorite_count)}</span>
                    </div>
                    <div className={styles.tag} title={`订阅次数：${item.subscribe_count}`}>
                        <span className={`iconfont icon-star ${styles.iconfont}`}></span>
                        <span>{numFormat(item.subscribe_count)}</span>
                    </div>
                    <div className={styles.tag} title={`分享数量：${item.share_count}`}>
                        <span className={`iconfont icon-share ${styles.iconfont}`}></span>
                        <span>{numFormat(item.share_count)}</span>
                    </div>

                </div>


                <div className='between'>
                    <div className={styles.time}>
                        更新时间: {timeFormat(item.updated_at)}
                    </div>
                    <div className='button' onClick={() => { setPage(1); setList([]) }}>
                        获取详情
                </div>
                </div>



                {list.length > 0 && (
                    <ul className={styles.trackList}>

                        <li className={styles.trackTitle}>
                            声音列表
                        </li>

                        {list.map(item => (
                            <Track item={item} getAudio={getAudio} />
                        ))}

                        <li className={styles.loadMore}>
                            <div className="button" onClick={loadMore} style={{ backgroundColor: '#eee', color: '#222', fontSize: 12 }}>加载更多</div>
                        </li>
                    </ul>
                )}





            </div>

        </div>
    )
}

export default Albums;