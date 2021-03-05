import styles from './index.module.css'
import React from 'react'

import store from '../../store'

class Translate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            searchValue: '',
            list: [],
        }
    }

    onChange = (e) => {

        const that = this;

        const val = e.target.value;

        this.setState({
            searchValue: val,
            loading: true,
        })

        if (this.timer) {
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
            console.log("run")

            if (!val) { return; }



            store.app.callFunction({
                name: 'translate',
                data: {
                    q: val
                }
            }).then(res => {
                console.log('res, ', res)

                this.setState({
                    loading: false
                })

                if (res.result && Array.isArray(res.result.trans_result)) {
                    that.setState({
                        list: res.result.trans_result
                    })
                }
            }).catch(err => {
                console.error('err', err)
            })

        }, 2500);
    }


    render() {

        const { loading, searchValue, list } = this.state;

        return (
            <div className='container'>

                <div className={styles.panel}>

                    <textarea className={styles.input} type="text" placeholder='请输入要翻译的内容（支持中英文）' value={searchValue} onChange={this.onChange} />

                    <div className={styles.info}>

                        {!searchValue ? ('请输入要翻译的内容（支持中英文）') : (<div>
                            {loading ? ('正在翻译中') : (
                                <ul>
                                    {list.map((item, index) => <li key={index} className={styles.item}>
                                        {item.dst}
                                    </li>)}
                                </ul>
                            )}
                        </div>)}
                    </div>

                </div>


            </div>
        )
    }
}

export default Translate;