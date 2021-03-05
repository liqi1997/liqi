import { useEffect, useState } from "react"
import styles from "./index.module.css";

function Repo() {

    const [page, setPage] = useState(1);
    const [perPage,] = useState(10);
    const [question, setQuestion] = useState('JavaScript')
    const [status, setStatus] = useState(true)
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {

        if (!status) { return; }

        fetch(`https://api.github.com/search/repositories?page=${page}&per_page=${perPage}&sort=stars&q=${question}`).then(res => res.json()).then(res => {
            setStatus(false)
            console.log('res ', res.total_count, res.items);
            setTotal(res.total_count)
            if (Array.isArray(res.items)) {
                setList(res.items)
            }
        }).catch(err => {
            setStatus(false)
        })

    }, [page, perPage, question, status])

    function search() {
        setStatus(true)
    }

    function prev() {
        if (page === 1) {
            return;
        }
        setStatus(true)
        setPage(page - 1)
    }
    function next() {
        setStatus(true)
        setPage(page + 1)
    }

    return <div className={`container ${styles.container}`}>


        <div className={styles.header}>
            <h3>热门仓库（{total}条）</h3>

            <div className={styles.button} style={{ marginRight: 8 }} onClick={prev}>上一页</div>
            <div className={styles.button} onClick={next}>下一页</div>


            <div className={styles.inputPanel}>
                <input className={styles.input} type="text" placeholder='请输入关键词' value={question} onChange={e => setQuestion(e.target.value)} />
                <div className={styles.button} onClick={search}>
                    <span className={`iconfont icon-search ${styles.iconfont}`}></span>
                </div>
            </div>
        </div>


        <ul>
            {list.map(item => (<li className={styles.item} key={item.id}>

                <div className={styles.title}>

                    <a href={item.html_url} target="_blank" rel='noreferrer'>
                        <span className={styles.name}>
                            {item.full_name}
                        </span>
                    </a>
                    <div className={styles.language}>
                        {item.language}
                    </div>

                    <div className={styles.extra}>
                        <div title={`star ${item.stargazers_count}`}>
                            <span className='iconfont icon-star'></span>
                            {item.stargazers_count}
                        </div>
                        <div title={`watcher ${item.watchers_count}`}>
                            <span className='iconfont icon-read'></span>
                            {item.watchers_count}
                        </div>

                        <div className={`fork ${item.forks_count}`}>
                            <span className='iconfont icon-book'></span>
                            {item.forks_count}
                        </div>
                    </div>
                </div>





                <div className={styles.description}>
                    {item.description}
                </div>


                <div>
                    <a href={item.homepage} target="_blank" rel='noreferrer'>{item.homepage}</a>
                </div>

                <div className={styles.footer}>
                    <div className={styles.time}>
                        更新时间: {item.updated_at}
                    </div>
                    <a href={item.downloads_url} download>
                        <div className="button">下载</div>
                    </a>
                </div>





            </li>))}
        </ul>
    </div>
}

export default Repo