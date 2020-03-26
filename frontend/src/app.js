import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '../styles/style.scss'

import Home from '../components/Home'
// import NavBar from '../components/NavBar'



const App = () => (
  <BrowserRouter>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)