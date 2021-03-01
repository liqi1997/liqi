import styles from './index.module.css'
import React from 'react'

import store from '../../store'

class Translate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            list: [],
        }
    }

    onChange = (e) => {

        const that = this;

        const val = e.target.value;

        this.setState({
            searchValue: val
        })

        if (this.timer) {
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
            console.log("run")

            // console.log('store', store.user)

            if (!val) { return; }

            store.app.callFunction({
                name: 'translate',
                data: {
                    q: val
                }
            }).then(res => {
                console.log('res, ', res)

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

        const { searchValue, list } = this.state;

        return (
            <div className='container'>

                <div className={styles.panel}>

                    <textarea className={styles.input} type="text" placeholder='请输入要翻译的词' value={searchValue} onChange={this.onChange} />

                    <div className={styles.info}>

                        <ul>
                            {list.map(item => <li>
                                {item.dst}
                            </li>)}

                        </ul>
                    </div>

                </div>


            </div>
        )
    }
}

export default Translate;