import styles from './index.module.css'

function NotFound() {
    return <div className='container'>
        <div className={styles.status}>404</div>
        <div className={styles.title}>页面未找到</div>
        <div className={styles.controls}>
            <div className='button'>返回上一层</div>
            <div className='button'>首页</div>
        </div>


    </div>
}

export default NotFound