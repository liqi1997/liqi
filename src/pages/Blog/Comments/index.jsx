
import React from 'react'
import styles from './index.module.css'

class Comments extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }


    render() {

        const { list } = this.props;

        return <div>

            <ul>
                {list.map(item => <li className={styles.item}>
                    <img className={styles.avatar} src={item.user ? item.user.avatar_url : '#'} alt="avatar" />

                    <div>
                        <div className={styles.name}>{item.user ? item.user.login : '--'}</div>
                        <div>{item.body}</div>
                    </div>
                </li>)}
            </ul>



        </div>
    }
}

export default Comments;