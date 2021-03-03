
import { useState } from 'react';
import styles from './index.module.css'

function Tool() {

    const [address, setAddress] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    function transfer() {
        if (!address) {
            alert('请输入地址')
            return;
        }

        let url = `https://restapi.amap.com/v3/geocode/geo?key=e282c61b5a5bde7d9a16cd9684eefd52&address=`
        fetch(url + address).then(res => res.json()).then(res => {
            console.log('ers', res)

            if (res && Array.isArray(res.geocodes) && res.geocodes.length > 0) {
                const { location } = res.geocodes[0];

                if (location) {
                    let arr = location.split(',')
                    if (arr.length === 2) {
                        const [lon, lat] = arr;
                        setLongitude(lon)
                        setLatitude(lat)
                    }
                }
            }
        })
    }

    function copy() {

    }

    return <div className='container'>
        <div className={styles.card}>
            <div className={styles.header}>
                地理/逆地理编码
            </div>
            <div className={styles.body}>

                <div className={styles.inputPanel}>

                    <input type="text" placeholder='请输入地址' className={styles.address} value={address} onChange={e => { setAddress(e.target.value) }} />

                    <span className={`iconfont icon-shuangxiangjiantou ${styles.arrow}`}></span>

                    <div className='left'>
                        <input type="text" placeholder='请输入经度' className={styles.longitude} value={longitude} />
                        <span className={styles.separator}>~</span>
                        <input type="text" placeholder='请输入纬度' className={styles.latitude} value={latitude} />
                    </div>

                    <div className='button' style={{ marginLeft: 8 }} onClick={transfer}>转换</div>

                    <div className='button' style={{ marginLeft: 8 }} onClick={copy}>复制</div>



                </div>

            </div>
        </div>
    </div>
}

export default Tool;