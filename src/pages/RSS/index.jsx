import { useEffect, useState } from "react";
import store from '../../store'
import styles from './index.module.css'

function RSS() {

    const [current, setCurrent] = useState(1)
    const [pageSize] = useState(5)
    const [list, setList] = useState([])

    useEffect(() => {
        store.app.callFunction({
            name: "getRSS",
            data: {
                current,
                pageSize,
            }
        }).then(res => {
            console.log('rees,  ', res)
            if (res && res.result && Array.isArray(res.result.data)) {

                setList(res.result.data.filter(item => item.origin))
            }
        })
    }, [current, pageSize]);

    function seeMore() {
        setCurrent(current + 1)
    }

    return <div className='container'>


        <div className="between" style={{ paddingTop: 24 }}>
            <div className={styles.pageTitle}>国家统计局</div>
            <div className='button' onClick={seeMore}>换一批</div>
        </div>

        <ul className={styles.list}>
            {list.map(item => <li key={item._id} className={styles.item}>

                <div className={styles.header}>
                    <div className={styles.title}>
                        <a href={item.link} target='_blank' rel='noreferrer'>
                            {item.title}
                        </a>
                    </div>

                    <div className={styles.tag}>{item.origin}</div>

                </div>

                <div className={styles.content}>{item.contentSnippet}</div>

                <div className={styles.time}>{item.pubDate}发布</div>


            </li>)}

        </ul>


    </div>
}

export default RSS;