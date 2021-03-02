import { useEffect, useState } from "react";
import styles from './index.module.css'
import BlogItem from '../../components/BlogItem'

function Category() {

    const [list, setList] = useState([])

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const url = 'https://api.github.com/repos/liqi1997/liqi/labels'
        fetch(url).then(res => res.json()).then(res => {
            if (Array.isArray(res)) {
                setList(res)
            }
        })
    }, [])

    function changeCategory(item) {
        const url = 'https://api.github.com/repos/liqi1997/liqi/issues?labels='
        fetch(url + item.name).then(res => res.json()).then(res => {
            console.log('res ', res)
            if (Array.isArray(res)) {
                // setList(res)
                setBlogs(res)
            }
        })
    }

    return <div className='container'>

        <div className={styles.panel}>
            <div className={styles.left}>
                {blogs.map(item => <BlogItem blog={item} key={item.id} />)}
            </div>
            <div>
                <ul className={styles.list}>
                    <li className={styles.categoryTitle}>分类</li>

                    {list.map(item => <li className={styles.item} key={item.id} onClick={() => { changeCategory(item) }}>
                        {item.name}
                    </li>)}
                </ul>
            </div>
        </div>

    </div>
}

export default Category;