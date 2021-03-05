
function Me() {
    return <div className='container' style={{ paddingTop: 24 }}>
        <h1>李奇</h1>
        <br />
        <p>前端开发工程师</p>
        <br />
        <div>
            <a href="mailto:191728146@qq.com">191728146@qq.com</a>

        </div>
        <br />
        <h4>关于本网站</h4>
        <br />

        <p>我通过腾讯云花了178块买了个10年的域名
            <em>
                liqi.space
            </em>，由于域名解析到国内的服务器需要备案，所以我新建了一个 <em>
                GitHub Pages
                </em>，将域名指向了它。


        </p>
        <br />
        <p>
            并且使用 <em>
                create-react-app
                </em> 脚手架工具搭建了本网站，并通过<em>Github Actions</em>，每次向远程仓库推送代码都自动打包构建生成环境的前端资源包，并发布到<em>Github Pages</em>。
        </p>
        <br />
        <p>
            由于本网站是个单页应用（SPA），所以对于SEO并不友好，所以后期会针对静态博客文档可能会换用<em>Next.js</em>等技术。
        </p>
        <br />
        <p>
            另外，本网站只适配于桌面端Chrome浏览器，若没有安装该浏览器，<a href="https://www.google.cn/chrome/" target='_blank' rel='noreferrer'>点我</a> 下载
        </p>

        <br />




        <h2>项目用到的技术栈</h2>
        <br />

        <h3>腾讯云开发</h3>
        <ul>
            <li>获取RSS并存储到云数据库</li>
            <li>获取RSS数据</li>
            <li>TODO List</li>
        </ul>
        <br />

        <h3>喜马拉雅</h3>
        <ul>
            <li>分类接口</li>
            <li>分类下的标签接口</li>
            <li>专辑接口</li>
            <li>音频接口</li>
        </ul>
        <br />

        <h3>Github</h3>
        <ul>
            <li>Github Search</li>
            {/* <li>issues</li>
            <li>GitHub Login</li> */}
        </ul>
        <br />

        <h3>百度翻译</h3>
        <ul>
            <li>通用翻译API</li>
        </ul>
        <br />

        <h3>高德地图</h3>
        <ul>
            <li>地理/逆地理编码</li>
            <li>IP定位</li>
            <li>实时天气</li>
            <li>天气预报</li>
            {/* <li>地区查询</li> */}
        </ul>
        <br />

        {/* 
        <h3>echarts</h3>
        <ul>
            <li>常用图表类型切换</li>
            <li>legend配置</li>
            <li>tooltip配置</li>
            <li>图表导出</li>
        </ul> */}
        {/* <div>
            <span className={`iconfont icon-we-chatpay`}></span>
            <span className={`iconfont icon-Alipaypayment`}></span>
            <span className={`iconfont icon-bitebi`}></span>
        </div> */}
    </div>
}

export default Me;