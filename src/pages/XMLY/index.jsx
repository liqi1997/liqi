import { Component } from "react";
import { config, XMLY as Xmly } from '@xmly-fem/web-jssdk'
import styles from './index.module.css'
import Albums from "./Albums";
import audio from "../../store";


const url = 'https://api.ximalaya.com'


class XMLY extends Component {

    constructor(props) {
        super(props)

        this.state = {
            categoryList: [],
            activeCategoryId: 0, // 选择的分类id
            tagList: [],
            activeTagName: null,
            albumsList: [], // 专辑列表

            page: 1, // 查专辑的分页器
            count: 10,
        }
    }

    componentDidMount() {

        config({
            app_key: 'b617866c20482d133d5de66fceb37da3', // 必传，官方提供的 app_key：b617866c20482d133d5de66fceb37da3 仅供测试，有调用次数限制，上线需替换为自己的 app_key。
            sig_url: 'https://api.ximalaya.com/openapi-collector-app/jssdk_sig', // 免登录授权，必须传 sig_url，和 get_access_token 互斥
            debug: true, // 是否在控制台打印日志
        })
        this.xmly = new Xmly()

        this.getList();
    }

    getList = () => {

        this.xmly.get(`${url}/categories/list`).then(res => {
            console.log(res)
            if (res.code === 0 && Array.isArray(res.data)) {
                if (res.data.length > 0) {
                    this.setState({
                        categoryList: res.data,
                        activeCategoryId: res.data[0].id
                    }, () => {
                        this.getDetail();
                    })
                }
            }
        })

    }

    getDetail = () => {

        const { activeCategoryId } = this.state;

        this.xmly.get(`${url}/v2/tags/list`, {
            category_id: activeCategoryId,
            type: 0
        }).then(res => {
            if (res.code === 0 && Array.isArray(res.data)) {
                if (res.data.length > 0) {
                    this.setState({
                        tagList: res.data,
                        activeTagName: res.data[0].tag_name
                    }, () => {
                        this.getAlbums();
                    })
                }

            }
        })
    }

    getAlbums = () => {

        const { activeCategoryId, activeTagName, page, count } = this.state;

        this.xmly.get(`${url}/v2/albums/list`, {
            category_id: activeCategoryId,
            tag_name: activeTagName,
            calc_dimension: 1, // 1最火、2最新、3最多播放
            page,
            count,
            contains_paid: false // 免费false
        }).then(res => {
            console.log(res)
            if (res.code === 0 && res.data && Array.isArray(res.data.albums)) {

                const { albums } = res.data;

                if (albums.length === 0) {
                    alert('没有更多数据了')
                    return;
                }

                this.setState(prevState => ({
                    albumsList: [...prevState.albumsList, ...albums]
                }))
            }
        })
    }

    onClickCategory = (id) => {
        this.setState({
            activeCategoryId: id,
            page: 1,
            albumsList: [],
        }, () => {
            this.getDetail();
        })
    }

    onClickTag = (name) => {
        this.setState({
            activeTagName: name,
            page: 1,
            albumsList: [],
        }, () => {
            this.getAlbums();
        })
    }

    onLoadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }), () => {
            this.getAlbums();
        })
    }

    render() {

        const { categoryList, activeCategoryId, tagList, activeTagName, albumsList } = this.state;

        return (
            <div className='container'>

                <div className={styles.condition}>

                    <div className={styles.item}>

                        <div className={styles.title}>分类:</div>

                        <ul className={styles.list}>
                            {categoryList.map(item => (<li className={`${styles.category} ${activeCategoryId === item.id ? styles.active : ''}`} key={item.id} onClick={() => { this.onClickCategory(item.id) }}>
                                <span>{item.category_name}</span>
                            </li>))}
                        </ul>

                    </div>

                    <div className={styles.item}>

                        <div className={styles.title}>标签:</div>


                        <ul className={styles.list}>
                            {tagList.map((item, index) => (<li className={`${styles.category} ${activeTagName === item.tag_name ? styles.active : ''}`} key={index} onClick={() => { this.onClickTag(item.tag_name) }}>
                                <span>{item.tag_name}</span>
                            </li>))}
                        </ul>
                    </div>




                </div>

                <ul className={styles.albumsList}>
                    {albumsList.map(item => (
                        <Albums url={url} xmly={this.xmly} item={item} audio={audio} />
                    ))}
                </ul>

                {albumsList.length > 0 && (
                    <div className='center'>
                        <div className="button" onClick={this.onLoadMore}>加载更多</div>
                    </div>
                )}

            </div>
        )
    }
}

export default XMLY