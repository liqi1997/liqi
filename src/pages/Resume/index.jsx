import { useEffect, useState } from "react";
import styles from './index.module.css'

function Resume() {

    const [password,] = useState('8888')

    const [age, setAge] = useState(0)

    useEffect(() => {
        const now = new Date();

        setAge(now.getFullYear() - 1997)
    }, [])


    return <div className='container'>

        {password === '8888' ? (
            <div className={styles.container}>

                <div className='right'>
                    <div title='导出为PDF'>
                        <span className='iconfont icon-PDF'></span>
                    </div>
                    <div title='导出为Word'>
                        <span className='iconfont icon-word'></span>
                    </div>
                    <div title='导出为Markdown'>
                        <span className='iconfont icon-file-markdown'></span>
                    </div>
                    <div title='导出为PNG'>
                        <span className='iconfont icon-png'></span>
                    </div>
                    <div title='打印'>
                        <span className='iconfont icon-print'></span>
                    </div>
                </div>



                <table className={styles.table}>
                    <tr>
                        <td className={styles.td}>姓名</td>
                        <td className={styles.td} colSpan='5'>李奇</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>年龄</td>
                        <td className={styles.td} colSpan='5'>{age}</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>毕业院校</td>
                        <td className={styles.td} colSpan='2'>安徽师范大学皖江学院</td>
                        <td className={styles.td}>毕业时间</td>
                        <td className={styles.td} colSpan='2'>2019年6月</td>
                    </tr>
                    <tr>
                        <td className={styles.td} colSpan='6'>工作经历</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>公司</td>
                        <td className={styles.td} colSpan='4'>南京小宝科技有限公司</td>
                        <td className={styles.td} colSpan='2'>2018/06 - 2020/04</td>
                    </tr>
                    <tr>
                        <td colSpan='6'>

                        </td>
                    </tr>
                </table>


                <ol>
                    <li><a href="https://jobs.bytedance.com/experienced/position/6754200851130091779/detail">字节跳动 前端招聘</a></li>
                    <li><a href="https://jobs.bytedance.com/experienced/position/6754245066035824909/detail">字节跳动 前端招聘</a></li>
                </ol>

            </div>
        ) : (
                <div className={styles.passwordPage}>
                    <label className={styles.label} htmlFor="password">输入密码</label>
                    <input className={styles.input} id='password' type="text" />
                </div>

            )}







    </div>
}

export default Resume;