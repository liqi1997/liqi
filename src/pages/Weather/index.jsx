import { useEffect, useState } from "react";
import styles from './index.module.css'

function Weather() {

    const [address, setAddress] = useState({})
    const [live, setLive] = useState({})
    const [foreCast, setForeCast] = useState({})

    const [provinceList, setProvinceList] = useState([])
    const [province, setProvince] = useState(null)
    const [cityList, setCityList] = useState([])
    const [city, setCity] = useState(null)

    useEffect(() => {

        fetch(`https://restapi.amap.com/v3/ip?key=e282c61b5a5bde7d9a16cd9684eefd52`).then(res => res.json()).then(res => {
            setAddress(res)
        })

        fetch(`https://restapi.amap.com/v3/config/district?key=e282c61b5a5bde7d9a16cd9684eefd52`).then(res => res.json()).then(res => {
            if (res && Array.isArray(res.districts) && res.districts.length > 0) {
                const list = res.districts[0].districts;
                if (Array.isArray(list)) {
                    setProvinceList(list)
                }
            }
        })

        let url = `https://restapi.amap.com/v3/weather/weatherInfo?key=e282c61b5a5bde7d9a16cd9684eefd52&city=320100&extensions=base`
        fetch(url).then(res => res.json()).then(res => {
            if (res && Array.isArray(res.lives) && res.lives.length > 0) {
                setLive(res.lives[0])
            }
        })

        url = `https://restapi.amap.com/v3/weather/weatherInfo?key=e282c61b5a5bde7d9a16cd9684eefd52&city=320100&extensions=all`
        fetch(url).then(res => res.json()).then(res => {
            if (res && Array.isArray(res.forecasts) && res.forecasts.length > 0) {
                setForeCast(res.forecasts[0])
            }
        })


    }, []);

    function onProvinceChange(e) {
        setProvince(e.target.value)
    }

    useEffect(() => {
        if (province) {

            fetch(`https://restapi.amap.com/v3/config/district?key=e282c61b5a5bde7d9a16cd9684eefd52&keywords=${province}`).then(res => res.json()).then(res => {
                if (res && Array.isArray(res.districts) && res.districts.length > 0) {
                    const list = res.districts[0].districts;
                    if (Array.isArray(list)) {
                        setCityList(list)
                    }
                }
            })

        }
    }, [province]);

    function onCityChange(e) {
        setCity(e.target.value)
    }

    function renderWeek(week) {
        if (week === '1') return '星期一'
        if (week === '2') return '星期二'
        if (week === '3') return '星期三'
        if (week === '4') return '星期四'
        if (week === '5') return '星期五'
        if (week === '6') return '星期六'
        if (week === '7') return '星期日'
    }

    return <div className='container'>

        <div className={styles.card}>
            <div className={styles.icon}>
                <span className={`iconfont icon-location ${styles.locationIcon}`}></span>
                <div>
                    {live.weather}
                </div>
            </div>
            <div className={styles.content}>



                <div className={styles.title}>实时天气</div>
                <div className={styles.location}>
                    {address.province}{address.city}
                </div>

                <div className='between'>

                    <div>
                        温度 {live.temperature}°
                </div>
                    <div>
                        湿度 {live.humidity}°
                    </div>

                </div>

                <div className='between'>


                    <div>
                        风向 {live.winddirection}
                    </div>
                    <div>
                        风力 {live.windpower}级
                    </div>


                </div>


                <div className={styles.time}>
                    发布时间：{live.reporttime}
                </div>

            </div>
        </div>












        <div className={styles.header}>

            <h3>天气预报</h3>


            <select placeholder='请选择省份' value={province} onChange={onProvinceChange}>
                {provinceList.map(item => <option value={item.adcode} key={item.adcode}>{item.name}</option>)}
            </select>

            <select placeholder='请选择城市' value={city} onChange={onCityChange}>
                {cityList.map(item => <option value={item.adcode} key={item.adcode}>{item.name}</option>)}
            </select>

            <div>{foreCast.reporttime}</div>

        </div>

        <table className={styles.table}>
            <tr className={styles.row}>
                <th className={styles.colHeader}>日期</th>
                <th className={styles.colHeader}>星期</th>
                <th className={styles.colHeader} colSpan='4'>白天</th>
                <th className={styles.colHeader} colSpan='4'>夜晚</th>
            </tr>
            {Array.isArray(foreCast.casts) && foreCast.casts.map(item => (<tr className={styles.row}>
                <td className={styles.col}>
                    {item.date}
                </td>
                <td className={styles.col}>
                    {renderWeek(item.week)}
                </td>
                <td className={styles.col}>
                    {item.dayweather}
                </td>
                <td className={styles.col}>
                    {item.daytemp}度
                    </td>
                <td className={styles.col}>
                    {item.daywind}风向
                    </td>
                <td className={styles.col}>
                    {item.daypower}风力
                    </td>

                <td className={styles.col}>
                    {item.nightweather}
                </td>
                <td className={styles.col}>
                    {item.nighttemp}度
                    </td>
                <td className={styles.col}>
                    {item.nightwind}风向
                    </td>
                <td className={styles.col}>
                    {item.nightpower}风力
                    </td>
            </tr>))}
        </table>


    </div>
}

export default Weather;