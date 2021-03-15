
import React from 'react'
import styles from './index.module.css'
import { Remarkable } from "remarkable";

class Comments extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }

        this.md = new Remarkable();

    }

    renderHtml = (str) => {
        return {
            __html: this.md.render(str)
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

                        <div dangerouslySetInnerHTML={this.renderHtml(item.body)} />
                    </div>
                </li>)}
            </ul>



        </div>
    }
}

export default Comments;