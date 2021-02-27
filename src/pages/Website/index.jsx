import styles from "./index.module.css";
function Website() {
    return (
        <div className='container'>
            <ul>
                <li className={styles.li}>
                    <a href="https://wangdoc.com/" target="_blank" rel='noreferrer'>网道</a>
                </li>
                <li className={styles.li}>
                    <a href="https://es6.ruanyifeng.com/" target="_blank" rel='noreferrer'>ES6入门教程</a>
                </li>
            </ul>
        </div>
    )
}


export default Website;