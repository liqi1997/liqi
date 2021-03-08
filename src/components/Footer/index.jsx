import { useEffect, useState } from "react"
import styles from './index.module.css'

function Footer() {

    const [year, setYear] = useState('')

    useEffect(() => {

        const now = new Date();
        const year = now.getFullYear();
        setYear(year)

    }, []);

    return <footer>
        &copy; {year} 版权归李奇所有 | 友情链接：<a className={styles.a} href="http://cone.love/" target="_blank" rel="noreferrer">毕中亮的网站</a>&nbsp;&nbsp;<a className={styles.a} href="http://cone387.top/" target="_blank" rel="noreferrer">毕中亮的网站</a>
    </footer>
}

export default Footer