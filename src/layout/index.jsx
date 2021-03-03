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

import { useState } from "react";

import store from '../store'

function Layout() {

    const { path, } = useRouteMatch();

    const { pathname } = useLocation();

    const [visible, setVisible] = useState(false)

    function handleLogin() {
        setVisible(true)
    }

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
                            <Link className={`${styles.nav} ${pathname === path ? styles.active : ''}`} to={path}>首页</Link>
                        </li>

                        <li>
                            <Link className={`${styles.nav} ${pathname.includes('blog') ? styles.active : ''} `} to={path + 'blog'}>博客</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('category') ? styles.active : ''}`} to={path + 'category'}>分类</Link>
                        </li>
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
                            <Link className={`${styles.nav}  ${pathname.includes('repo') ? styles.active : ''}`} to={path + 'repo'}>热门项目</Link>
                        </li>

                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('website') ? styles.active : ''}`} to={path + 'website'}>常用网站</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('todo') ? styles.active : ''}`} to={path + 'todo'}>待办事项</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('weather') ? styles.active : ''}`} to={path + 'weather'}>天气</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('tool') ? styles.active : ''}`} to={path + 'tool'}>工具</Link>
                        </li>
                        <li>
                            <Link className={`${styles.nav}  ${pathname.includes('me') ? styles.active : ''}`} to={path + 'me'}>关于我</Link>
                        </li>
                    </ul>




                    <div className={styles.login} onClick={handleLogin}>
                        <div className='button'>登录</div>
                    </div>
                    {/* <a href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=271b4721fbd1c239cf33`}>
                        <div >Github Login</div>
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
                    <Route path={path + 'weather'}>
                        <Weather />
                    </Route>
                    <Route path={path + 'tool'}>
                        <Tool />
                    </Route>
                    <Route path={path + 'me'}>
                        <Me />
                    </Route>
                    <Route path='*'>
                        <div>404</div>
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

            <footer>
                &copy; 版权归李奇所有
            </footer>


        </div>
    )
}

export default Layout;