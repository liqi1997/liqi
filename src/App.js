
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Website from './pages/Website'
function App() {
  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Route path='/' exact>
            <div>

              <h1>李奇的网站</h1>

              <ul>
                <li>
                  <Link to='/'>首页</Link>
                </li>
                <li>
                  <Link to='/website'>常用网站</Link>
                </li>
              </ul>

            </div>
          </Route>
          <Route path='/website'>
            <Website />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
