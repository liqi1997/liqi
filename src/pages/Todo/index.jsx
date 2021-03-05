import { useEffect, useState } from "react";
import store from '../../store'
import styles from './index.module.css'

function Todo() {

    const [todo, setTodo] = useState('')
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])

    useEffect(() => {

        store.app.callFunction({
            name: 'todo'
        }).then(res => {
            console.log('res', res)

            if (res.result && Array.isArray(res.result.data)) {
                setList(res.result.data)
            }

        }).catch(err => console.error)

    }, []);

    function onAdd() {

        setLoading(true)
        store.app.callFunction({
            name: 'addTodo',
            data: {
                name: todo,
            }
        }).then(res => {

            console.log('res ', res)


            store.app.callFunction({
                name: 'todo'
            }).then(res => {

                setLoading(false)

                console.log('res', res)

                if (res.result && Array.isArray(res.result.data)) {
                    setList(res.result.data)
                    setTodo('')
                }

            }).catch(err => console.error)


        }).catch(err => console.error)
    }

    function onDelete(item) {

        setLoading(true)

        store.app.callFunction({
            name: 'deleteTodo',
            data: {
                _id: item._id
            }
        }).then(res => {
            console.log('res', res)
            if (res && res.result && res.result.deleted) {


                store.app.callFunction({
                    name: 'todo'
                }).then(res => {

                    setLoading(false)

                    console.log('res', res)

                    if (res.result && Array.isArray(res.result.data)) {
                        setList(res.result.data)
                    }

                }).catch(err => console.error)


            }
        }).catch(err => console.error)

    }

    return <div className="container">

        <div className={styles.title}>
            Todo List
        </div>

        <div className={styles.panel}>
            <input type="text" placeholder='请输入待办事项' className={styles.input} value={todo} onChange={e => { setTodo(e.target.value) }} />
            <div className={styles.button} onClick={onAdd}>添加</div>
        </div>
        {loading && (
            <div style={{ padding: 8 }}>处理中...</div>
        )}

        <ul>
            {list.map((item, index) => (
                <li className={styles.li} key={index}>
                    <span className={styles.index}>
                        {index + 1}.
                    </span>
                    <span className={styles.name}>
                        {item.name}
                    </span>
                    <span className={`iconfont icon-delete ${styles.iconfont}`} onClick={() => { onDelete(item) }}>

                    </span>
                </li>
            ))}
        </ul>
    </div>
}

export default Todo;