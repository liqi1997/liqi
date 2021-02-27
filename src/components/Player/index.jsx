
import styles from "./index.module.css";
import { observer } from "mobx-react-lite";
import { useState } from "react";
function Player({ audio }) {

    const [loading, setLoading] = useState(true)

    function onPlay() {
        const audio = document.getElementById('audio');
        audio.play()
        setLoading(true)

    }
    function onParse() {
        const audio = document.getElementById('audio');
        audio.pause()
        setLoading(false)
    }
    function onClose() {
        audio.setObj({})
    }


    return (
        <div>

            <div className={`${styles.player} ${audio.obj.track_title ? styles.show : styles.hidden}`}>

                <div className={`container left ${styles.container}`}>


                    <img className={`${styles.image} ${loading ? styles.loading : ''}`} src={audio.obj.cover_url_small} alt="" />
                    {/* 3. 进度条 */}


                    <div className={styles.title}>
                        {audio.obj.track_title}
                    </div>

                    <div className={styles.play}>
                        {loading ? (
                            <span className={`iconfont icon-timeout ${styles.iconfont}`} onClick={() => { onParse() }}></span>

                        ) : (
                                <span className={`iconfont icon-play-circle ${styles.iconfont}`} onClick={() => { onPlay() }}></span>

                            )}
                    </div>

                    <span className={`iconfont icon-close-circle ${styles.iconfont}`} onClick={() => { onClose() }}></span>


                    <audio id='audio' autoPlay src={audio.obj.download_url}></audio>

                </div>

            </div>


        </div>
    )
}

export default observer(Player);