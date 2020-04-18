import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import StatsTable from './components/users/StatsTable'
import GraphPage from './components/users/GraphPage'
import NotFound404 from './components/404/NotFound404'
import './App.css'

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path ="/" component={Landing} />
          <Route exact path ="/users" component={StatsTable} />
          <Route exact path ="/users/:user_id" component={GraphPage} />
          <Route component = {NotFound404} />
        </Switch>
    </Router>
  )
}

export default App

