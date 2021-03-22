import { useEffect, useState } from "react";
import styles from './index.module.css'
import SvgIcon from '../../components/SvgIcon'
import KChart from './KChart'


function Stock() {

    const [companyList, setCompanyList] = useState({})

    const [active, setActive] = useState(null)

    useEffect(() => {
        fetch(`http://cone387.top:8080/stock/status/`).then(res => res.json()).then(res => {
            if (res) {
                setCompanyList(res)
            }
        }).catch(err => console.error)
    }, []);

    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)

    const [stockName, setStockName] = useState(null)

    useEffect(() => {

        let str = ''
        if (active) {
            str = `&stock_type=${active}`
        }

        let name = '';
        if (stockName) {
            name = `&name=${stockName}`
        }

        fetch(`http://cone387.top:8080/stock/info/?page=${page}&page_size=10${str}${name}`).then(res => res.json()).then(res => {
            if (typeof res.count === 'number') {
                setTotal(res.count)
            }
            if (Array.isArray(res.results)) {
                setList(res.results)
            }
        })
    }, [page, active, stockName])

    function prev() {
        if (page === 1) {
            return
        }
        setPage(page - 1)
    }
    function next() {
        setPage(page + 1)
    }

    function renderCompany() {
        let arr = []
        let index = 0;
        let icon = <SvgIcon name='#icon-2-dianzishenhe' size='24' />

        for (let i in companyList) {

            if (index === 1) {
                icon = <SvgIcon name='#icon-12-changguirenwu' size='24' />
            }
            if (index === 2) {
                icon = <SvgIcon name='#icon-14-zhishiku' size='24' />
            }
            if (index === 3) {
                icon = <SvgIcon name='#icon-15-chehuixiaoxi' size='24' />
            }
            if (index === 4) {
                icon = <SvgIcon name='#icon-19-qiehuancaozuo-icon' size='24' />
            }

            index++;

            arr.push(
                <div className={`${styles.item} ${active === i ? styles.active : ''}`} onClick={() => { setActive(i); setPage(1) }}>

                    <div className={styles.icon}>{icon}</div>
                    <div className={styles.title}>{i}</div>
                    <div className={styles.value}>
                        {companyList[i]}
                    </div>
                </div>
            )
        }
        return arr;
    }

    const [detail, setDetail] = useState(null)
    function seeDetail(code) {
        setDetail(code)
    }

    const [searchValue, setSearchValue] = useState('')
    function search() {
        setStockName(searchValue);
        setPage(1);
    }

    return <div className='container'>

        <div className={styles.container}>
            <div className={styles.left}>



                <div className='between'>
                    <div className={styles.h1}>
                        股票列表
                </div>

                    <div className={styles.extra}>
                        <div className={styles.extraText}>
                            第{page}页，共{total}条
                        </div>
                        <div onClick={prev}>
                            <SvgIcon name='#icon-left' size='16' />
                        </div>
                        <div onClick={next}>
                            <SvgIcon name='#icon-right' size='16' />
                        </div>
                    </div>
                </div>
                {list.map(item => {
                    return (
                        <div className={styles.info}>
                            <div className={styles.header}>
                                <div className={styles.tag}>{item.stock_type}</div>
                                <div className={styles.title}>
                                    [{item.name}]
                                </div>
                                <div className={
                                    styles.code
                                }>
                                    {item.code}

                                </div>

                            </div>

                            <div className={styles.description}>
                                {item.business_scope}
                            </div>

                            <div className="right">
                                <div className="button" onClick={() => { seeDetail(item.code) }}>查看详情</div>
                            </div>

                            <div>
                                {detail === item.code && <KChart code={detail} />}
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className={styles.right}>

                <div className={styles.search}>
                    <input className={styles.searchInput} type="text" placeholder='请输入股票名称' value={searchValue} onChange={e => { setSearchValue(e.target.value) }} />
                    <div className={styles.searchButton} onClick={search}>搜索</div>
                </div>


                <div className={styles.card}>
                    {renderCompany()}
                </div>
            </div>
        </div>

    </div>
}

export default Stock;