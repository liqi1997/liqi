
import { useEffect, useState } from 'react';
import { fetchList, fetchNews } from '../../api/news'
import styles from './index.module.css'

function News() {

    const [categoryList, setCategoryList] = useState([])
    const [activeId, setActiveId] = useState(-1)

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [list, setList] = useState([])
    const [updateTime, setUpdateTime] = useState('')



    useEffect(() => {
        fetchList().then(res => {
            console.log('res', res)
            if (Array.isArray(res)) {
                let arr = []
                res.forEach(item => {
                    if (Array.isArray(item.subs)) {
                        arr = [...arr, ...item.subs]
                    }
                })

                if (arr.length > 0) {
                    setCategoryList(arr)
                    setActiveId(arr[0].id)
                }


            }
        })
    }, []);

    useEffect(() => {
        if (activeId > -1) {
            fetchNews(activeId).then(res => {
                if (Array.isArray(res.data)) {
                    setName(res.name)
                    setUrl(res.url)
                    setList(res.data)
                    setUpdateTime(res.update_time)
                }
            })
        }

    }, [activeId]);

    return <div className=''>

        <div className='container'>
            <ul className={styles.list}>
                {categoryList.map(item => <li className={`${styles.category} ${activeId === item.id ? styles.active : ''}`} onClick={() => { setActiveId(item.id) }}>
                    {item.name}
                </li>)}
            </ul>

        </div>

        <div className={styles.container}>
            <div className="container">
                <div className={styles.name}>
                    <a href={url} target="_blank" rel='noreferrer'>
                        {name}
                    </a>
                </div>
                <ul>
                    {list.map((item, index) => <li className={styles.item}>


                        <span className={`${styles.index} ${index < 3 ? styles.first : ''}`}>
                            {index + 1}.
                        </span>

                        <a className={styles.title} href={item.url} target="_blank" rel='noreferrer'>
                            {item.title}
                        </a>

                        <span className={styles.tag}>{item.tag}</span>
                    </li>)}
                </ul>

                <div className={styles.time} >更新时间: {updateTime}</div>

            </div>
        </div>





    </div>
}

export default News;