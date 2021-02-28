
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
    </div>
}

export default Me;