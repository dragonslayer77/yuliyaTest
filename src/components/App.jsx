import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Employees from './pages/Employees'
import Employee from './pages/Employee'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="layout">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/employee" exact component={Employees} />
        <Route path="/employee/view/:userId" component={Employee} />
      </Switch>
    </div>
  )
}

export default App
