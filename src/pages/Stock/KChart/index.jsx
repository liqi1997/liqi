import { Component } from 'react'
import { init } from 'echarts'
import styles from './index.module.css'

class KChart extends Component {

    state = {
        list: [],
        page: 50
    }

    componentDidMount() {
        this.fetchList();
    }

    fetchList() {

        const { code } = this.props;
        const { page } = this.state;

        fetch(`http://cone387.top:8080/stock/market/?code=${code}&page=1&page_size=${page}`).then(res => res.json()).then(res => {
            if (res && Array.isArray(res.results)) {

                this.setState({
                    list: res.results
                }, () => {
                    this.setChart();
                })

            }
        }).catch(err => console.error)
    }

    setChart = () => {

        const { list = [] } = this.state;

        const dom = document.getElementById('k-chart');

        this.chart = init(dom)

        this.chart.setOption({
            xAxis: {
                data: list.map(item => item.opening_date)
            },
            yAxis: {},
            series: [{
                type: 'k',
                data: list.map(item => [
                    item.opening_price,
                    item.closing_price,
                    item.min_price,
                    item.max_price
                ]),
            }],
            tooltip: {
                show: true,
            }
        })

    }

    setPage = (page) => {
        this.setState({
            page,
        }, () => {
            this.fetchList();
        })
    }

    render() {

        const { page } = this.state;

        return (

            <div>

                <div id='k-chart' style={{ height: 400, width: '100%' }}>

                </div>

                <div className='center'>

                    <div className={`${styles.item} ${page === 50 ? styles.active : ''}`} onClick={() => { this.setPage(50) }}>最近50条</div>
                    <div className={`${styles.item} ${page === 100 ? styles.active : ''}`} onClick={() => { this.setPage(100) }}>最近100条</div>
                    <div className={`${styles.item} ${page === 200 ? styles.active : ''}`} onClick={() => { this.setPage(200) }}>最近200条</div>

                </div>
            </div>
        )
    }
}

export default KChart