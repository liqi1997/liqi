
import styles from "./index.module.css";
function Home() {
    return (
        <div className={`container ${styles.container}`}>
            <h1 className={styles.h1}>你好</h1>
            <h2 className={styles.h2}>欢迎来到李奇的网站</h2>
        </div>
    )
}

export default Home