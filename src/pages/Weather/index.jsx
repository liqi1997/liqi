import { useEffect, useState } from "react";
import styles from './index.module.css'
import Title from '../../components/Title'
import SvgIcon from '../../components/SvgIcon'

function Weather() {

    const [address, setAddress] = useState({})
    const [live, setLive] = useState({})
    const [foreCast, setForeCast] = useState({})

    // const [provinceList, setProvinceList] = useState([])
    // const [province, setProvince] = useState(null)
    // const [cityList, setCityList] = useState([])
    // const [city, setCity] = useState(null)

    // useEffect(() => {

    //     fetch(`https://restapi.amap.com/v3/config/district?key=e282c61b5a5bde7d9a16cd9684eefd52`).then(res => res.json()).then(res => {
    //         if (res && Array.isArray(res.districts) && res.districts.length > 0) {
    //             const list = res.districts[0].districts;
    //             if (Array.isArray(list)) {
    //                 setProvinceList(list)
    //             }
    //         }
    //     })

    // }, []);

    // useEffect(() => {
    //     if (province) {

    //         fetch(`https://restapi.amap.com/v3/config/district?key=e282c61b5a5bde7d9a16cd9684eefd52&keywords=${province}`).then(res => res.json()).then(res => {
    //             if (res && Array.isArray(res.districts) && res.districts.length > 0) {
    //                 const list = res.districts[0].districts;
    //                 if (Array.isArray(list)) {
    //                     setCityList(list)
    //                 }
    //             }
    //         })

    //     }
    // }, [province]);


    useEffect(() => {

        fetch(`https://restapi.amap.com/v3/ip?key=e282c61b5a5bde7d9a16cd9684eefd52`).then(res => res.json()).then(res => {
            setAddress(res)
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

    // function onProvinceChange(e) {
    //     setProvince(e.target.value)
    // }



    // function onCityChange(e) {
    //     setCity(e.target.value)
    // }

    function renderWeek(week) {
        if (week === '1') return '?????????'
        if (week === '2') return '?????????'
        if (week === '3') return '?????????'
        if (week === '4') return '?????????'
        if (week === '5') return '?????????'
        if (week === '6') return '?????????'
        if (week === '7') return '?????????'
    }

    return <div className='container'>

        {/* <div className={styles.header}>

            <select className={styles.select} placeholder='???????????????' value={province} onChange={onProvinceChange}>
                {provinceList.map(item => <option value={item.adcode} key={item.adcode}>{item.name}</option>)}
            </select>

            <select className={styles.select} placeholder='???????????????' value={city} onChange={onCityChange}>
                {cityList.map(item => <option value={item.adcode} key={item.adcode}>{item.name}</option>)}
            </select>

        </div> */}


        <div className={styles.header}>
            <Title>
                ????????????
        </Title>
        </div>


        <div className={styles.card}>
            <div className={styles.icon}>
                <SvgIcon name='#icon-5-xiaoshoukanban' size={48} />
                <div>
                    {live.weather}
                </div>
            </div>
            <div className={styles.content}>

                <div className={styles.title}>????????????</div>
                <div className={styles.location}>
                    {address.province}{address.city}
                </div>

                <div className='between'>

                    <div>
                        ?????? {live.temperature}??
                </div>
                    <div>
                        ?????? {live.humidity}??
                    </div>

                </div>

                <div className='between'>


                    <div>
                        ?????? {live.winddirection}
                    </div>
                    <div>
                        ?????? {live.windpower}???
                    </div>


                </div>


                <div className={styles.time}>
                    ???????????????{live.reporttime}
                </div>

            </div>
        </div>





        <div className={styles.header}>
            <Title>
                ????????????
        </Title>


        </div>

        <table className={styles.table}>
            <tr className={styles.row}>
                <th className={styles.colHeader}>??????</th>
                <th className={styles.colHeader}>??????</th>
                <th className={styles.colHeader} colSpan='4'>??????</th>
                <th className={styles.colHeader} colSpan='4'>??????</th>
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
                    {item.daytemp}???
                    </td>
                <td className={styles.col}>
                    {item.daywind}??????
                    </td>
                <td className={styles.col}>
                    {item.daypower}??????
                    </td>

                <td className={styles.col}>
                    {item.nightweather}
                </td>
                <td className={styles.col}>
                    {item.nighttemp}???
                    </td>
                <td className={styles.col}>
                    {item.nightwind}??????
                    </td>
                <td className={styles.col}>
                    {item.nightpower}??????
                    </td>
            </tr>))}
        </table>

        <div className={styles.time}>???????????????{foreCast.reporttime}</div>



    </div>
}

export default Weather;