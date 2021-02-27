import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import styles from "./index.module.css";
import Website from '../pages/Website'
import XMLY from '../pages/XMLY'
import logo from "../assets/logo.svg";

import audio from "../store";
import Player from "../components/Player";
import Home from "../pages/Home";
import Me from "../pages/Me";

function Layout() {

    const { path, } = useRouteMatch();



    return (
        <div className={styles.layout}>


            <header>

                <div className='container left'>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <h1 className={styles.appName}>李奇的网站</h1>

                    <ul className='left'>
                        <li>
                            <Link className={styles.nav} to={path}>首页</Link>
                        </li>
                        <li>
                            <Link className={styles.nav} to={path + 'website'}>常用网站</Link>
                        </li>
                        <li>
                            <Link className={styles.nav} to={path + 'xmly'}>听听</Link>
                        </li>
                        <li>
                            <Link className={styles.nav} to={path + 'me'}>关于我</Link>
                        </li>
                    </ul>
                </div>


            </header>

            <main>

                <Switch>
                    <Route path={path} exact>
                        <Home />
                    </Route>
                    <Route path={path + 'website'}>
                        <Website />
                    </Route>
                    <Route path={path + 'xmly'}>
                        <XMLY />
                    </Route>
                    <Route path={path + 'me'}>
                        <Me />
                    </Route>
                    <Route path='*'>
                        <div>404</div>
                    </Route>
                </Switch>

                <Player audio={audio} />

            </main>

            <footer>
                &copy; 版权归李奇所有
            </footer>
            {/* <Switch>
                <Route path=""></Route>
            </Switch> */}
        </div>
    )
}

export default Layout;