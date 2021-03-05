
import { useEffect } from "react";
import styles from "./index.module.css";
function Home() {

    useEffect(() => {

        // fetch('http://www.stats.gov.cn/tjsj/zxfb/rss.xml').then(res => {
        //     console.log('res', res)
        // }).catch(err => console.error)

    }, []);

    return (
        <div className={`container ${styles.container}`}>
            <h1 className={styles.h1}>你好</h1>
            <h2 className={styles.h2}>欢迎来到李奇的网站</h2>
        </div>
    )
}

export default Home