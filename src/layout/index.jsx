import { Route, Switch, Link, useRouteMatch, useLocation } from "react-router-dom";
import styles from "./index.module.css";
import Website from '../pages/Website'
import XMLY from '../pages/XMLY'
import logo from "../assets/logo.svg";

import audio from "../store";
import Player from "../components/Player";
import Home from "../pages/Home";
import Me from "../pages/Me";
import Repo from "../pages/Repo";
import News from "../pages/News";
import Code from "../pages/Code";
import Translate from "../pages/Translate";
import Todo from "../pages/Todo";
import Blog from "../pages/Blog";
import Category from "../pages/Category";

import Weather from '../pages/Weather'
import Tool from '../pages/Tool'
import Echarts from '../pages/Echarts'
import Resume from '../pages/Resume'
import NotFound from '../pages/NotFound'
import RSS from '../pages/RSS'
import Stock from '../pages/Stock'

import Footer from '../components/Footer'

import { useEffect, useState } from "react";

import store from '../store'

function Layout() {


    const { path, } = useRouteMatch();

    const { pathname, } = useLocation();

    useEffect(() => {

        if (window.location && window.location.search) {
            const { search } = window.location;
            if (search) {
                const arr = search.split('?code=')

                console.log('code', arr)

                if (arr.length > 0) {


                    // access_token: '4572c1ff3f13bc997a39deaeba2f99de',
                    // token_type: 'bearer',

                    // store.app.callFunction({
                    //     name: 'githubLogin',
                    //     data: {
                    //         code,
                    //     }
                    // }).then(res => {
                    //     console.log('res', res)
                    // }).catch(err => console.error)
                }
            }
        }
    }, []);



    const [visible, setVisible] = useState(false)

    // function handleLogin() {
    //     setVisible(true)
    // }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('login')

    function toggle() {
        if (status === 'login') {
            setStatus('register')
        } else {
            setStatus('login')
        }
    }

    function login() {

        if (!email) {
            alert('请输入邮箱')
            return;
        }
        if (!password) {
            alert('请输入密码')
            return;
        }

        if (status === 'login') {
            store.app
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((loginState) => {
                    console.log('login state', loginState.user)

                    // store.setUser();
                    // 登录成功
                }).catch(err => {
                    console.error(err)
                })
        } else {
            store.app
                .auth()
                .signUpWithEmailAndPassword(email, password)
                .then(() => {
                    alert('验证邮件成功，请去验证')
                }).catch(err => {
                    console.log('err', err)
                })
        }
    }


    return (
        <div className={styles.layout}>


            <header>

                <div className='container left'>

                    <Link className={`left`} to={path}>
                        <img className={styles.logo} src={logo} alt="logo" />
                        <h1 className={styles.appName}>李奇的网站</h1>
                    </Link>

                    <ul className={styles.tabBar}>
                        <li>
                            <Link className={`${styles.nav} ${pathname === path ? styles.active : ''}`} to={path}>
                                首页</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('stock') ? styles.active : ''}`} to={path + 'stock'}>股票</Link>
                        </li>
                        {/* <li>
                            <Link className={`${styles.nav} ${pathname.includes('blog') ? styles.active : ''} `} to={path + 'blog'}>博客</Link>
                        </li> */}

                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('translate') ? styles.active : ''}`} to={path + 'translate'}>翻译</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('news') ? styles.active : ''}`} to={path + 'news'}>资讯</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('xmly') ? styles.active : ''}`} to={path + 'xmly'}>听听</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('rss') ? styles.active : ''}`} to={path + 'rss'}>RSS</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('repo') ? styles.active : ''}`} to={path + 'repo'}>仓库</Link>
                        </li>

                        {/* <li>
                            <Link className={`${styles.nav}  ${pathname.includes('website') ? styles.active : ''}`} to={path + 'website'}>常用网站</Link>
                        </li> */}
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('todo') ? styles.active : ''}`} to={path + 'todo'}>待办事项</Link>
                        </li>

                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('weather') ? styles.active : ''}`} to={path + 'weather'}>天气</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('tool') ? styles.active : ''}`} to={path + 'tool'}>工具</Link>
                        </li>
                        {/* <li>
                            <Link className={`${styles.nav}  ${pathname.includes('echarts') ? styles.active : ''}`} to={path + 'echarts'}>图表编辑</Link>
                        </li> */}
                        {/* <li>
                            <Link className={`${styles.nav}  ${pathname.includes('resume') ? styles.active : ''}`} to={path + 'resume'}>简历</Link>
                        </li> */}
                        <li>
                            <Link className={`${styles.nav}  ${pathname === '/me' ? styles.active : ''}`} to={path + 'me'}>关于我</Link>
                        </li>
                    </ul>


                    {/* <a href={`https://gitee.com/oauth/authorize?client_id=6deabf8a317925c972edc28ebf7867294a1501b90ce8096e1b076e17b3b230d0&redirect_uri=http://localhost:3000&response_type=code`}>
                        <div className='button'>登录</div>
                    </a> */}
                </div>


            </header>

            <main>

                <Switch>
                    <Route path={path} exact>
                        <Home />
                    </Route>
                    <Route path={path + 'code'}>
                        <Code />
                    </Route>


                    <Route path={path + 'stock'}>
                        <Stock />
                    </Route>
                    <Route path={path + 'blog'}>
                        <Blog />
                    </Route>
                    <Route path={path + 'category'}>
                        <Category />
                    </Route>
                    <Route path={path + 'translate'}>
                        <Translate />
                    </Route>
                    <Route path={path + 'repo'}>
                        <Repo />
                    </Route>
                    <Route path={path + 'news'}>
                        <News />
                    </Route>
                    <Route path={path + 'xmly'}>
                        <XMLY />
                    </Route>
                    <Route path={path + 'website'}>
                        <Website />
                    </Route>
                    <Route path={path + 'todo'}>
                        <Todo />
                    </Route>
                    <Route path={path + 'rss'}>
                        <RSS />
                    </Route>
                    <Route path={path + 'weather'}>
                        <Weather />
                    </Route>
                    <Route path={path + 'tool'}>
                        <Tool />
                    </Route>
                    <Route path={path + 'echarts'}>
                        <Echarts />
                    </Route>
                    <Route path={path + 'resume'}>
                        <Resume />
                    </Route>
                    <Route path={path + 'me'}>
                        <Me />
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>

                <Player audio={audio} />


                {visible && (
                    <div className={styles.alert}>

                        <div className={styles.alertContent}>

                            <div className={styles.alertTitle}>
                                <div>{status === 'login' ? '登录' : "注册"}</div>
                                <span className='iconfont icon-close' onClick={() => { setVisible(false) }} style={{ cursor: 'pointer' }}></span>
                            </div>

                            <div className={styles.alertBody}>

                                <input className={styles.input} type="text" placeholder='请输入邮箱' value={email} onChange={(e) => { setEmail(e.target.value) }} />

                                <input className={styles.input} type="password" placeholder='请输入密码' value={password} onChange={e => { setPassword(e.target.value) }} />

                                <div className={styles.button} onClick={login}>{status === 'login' ? '登录' : "注册"}</div>


                                <div>
                                    <span className={styles.toggle} onClick={toggle}>去
                                {status === 'login' ? '注册' : "登录"}

                                    </span>

                                </div>


                            </div>

                        </div>
                    </div>
                )}




            </main>

            <Footer />


        </div>
    )
}

export default Layout;