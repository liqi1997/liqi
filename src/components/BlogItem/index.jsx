
import React from "react";
import styles from "./index.module.css";
import { Remarkable } from "remarkable";


class BlogItem extends React.Component {

    constructor(props) {

        super(props);

        this.md = new Remarkable();

    }

    renderHtml = (str) => {
        return {
            __html: this.md.render(str)
        }
    }

    seeComments = (params) => {

    }

    render() {

        const { blog } = this.props;

        return (
            <div className={styles.blog}>

                <a href={blog.url} target="_blank" rel='noreferrer'>
                    <div className={styles.title}>{blog.title}</div>
                </a>

                <div className={styles.body} dangerouslySetInnerHTML={this.renderHtml(blog.body)} />


                <div className={styles.user}>
                    <img className={styles.avatar} src={blog.user ? blog.user.avatar_url : '#'} alt="avatar" />
                    <div className={styles.name}>{blog.user ? blog.user.login : '--'}</div>
                    <div className={styles.time}>更新于 {blog.updated_at}</div>

                    <div className={styles.extra}>
                        <div className={styles.comments}>
                            <span className={`iconfont icon-read ${styles.icon}`}></span>
                            <span>{blog.comments}</span>
                        </div>
                        <div className='button' onClick={() => { this.seeComments(blog) }}>
                            查看评论
                        <span className={`iconfont icon-down`}></span>
                            {/* <span className={`iconfont icon-up`}></span> */}

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BlogItem;