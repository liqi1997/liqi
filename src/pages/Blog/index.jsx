import { useEffect, useState } from "react";
import Comments from "./Comments";
import styles from './index.module.css'


function Blog() {

    const [list, setList] = useState([])

    useEffect(() => {
        const url = 'https://api.github.com/repos/liqi1997/liqi/issues'
        fetch(url).then(res => res.json()).then(res => {
            console.log('res ', res)
            if (Array.isArray(res)) {
                setList(res)
            }
        })
    }, [])

    const [activeItem, setActiveItem] = useState({})

    function seeComments(item) {
        setActiveItem(item)
    }

    const [comments, setComments] = useState([])

    useEffect(() => {
        if (activeItem.comments_url) {
            fetch(activeItem.comments_url).then(res => res.json()).then(res => {
                console.log('res', res)
                setComments(res)
            })
        }
    }, [activeItem])

    return <div className='container'>
        <ul>

            <li className={styles.header}>最新博客</li>
            {list.map(item => <li className={styles.item} key={item.id}>


                <a href={item.url} target="_blank" rel='noreferrer'>
                    <div className={styles.title}>{item.title}</div>
                </a>



                <div className={styles.body}>{item.body}</div>


                <div className={styles.user}>
                    <img className={styles.avatar} src={item.user ? item.user.avatar_url : '#'} alt="avatar" />
                    <div className={styles.name}>{item.user ? item.user.login : '--'}</div>
                    <div className={styles.time}>更新于 {item.updated_at}</div>

                    <div className={styles.extra}>
                        <div className={styles.comments}>
                            <span className={`iconfont icon-read ${styles.icon}`}></span>
                            <span>{item.comments}</span>
                        </div>
                        <div className='button' onClick={() => { seeComments(item) }}>
                            查看评论
                        <span className={`iconfont icon-down`}></span>
                            {/* <span className={`iconfont icon-up`}></span> */}

                        </div>
                    </div>
                </div>

                <Comments list={comments} />


            </li>)}
        </ul>
    </div>
}

export default Blog;