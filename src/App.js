
import { HashRouter, Switch, Route } from 'react-router-dom'
import Layout from './layout'

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Route path='/'>
            <Layout />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
