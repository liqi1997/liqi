import styles from "./index.module.css";
import { secondFormat } from "../../../../utils";

import { observer } from "mobx-react-lite";

function Track({ item = {}, getAudio }) {

    return (
        <li className={styles.item}>

            <div className={styles.title}>
                {item.track_title}
            </div>



            <div className={styles.line}></div>

            <div className={styles.listen} onClick={() => { getAudio(item.id) }}>
                <span className='iconfont icon-customerservice'></span>
            </div>

            <div className={styles.duration}>
                {secondFormat(item.duration)}
            </div>

        </li>
    )
}

export default observer(Track);