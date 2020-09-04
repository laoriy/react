import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AsyncComponent from '../utlis/AsyncComponent'

const Home = AsyncComponent(() => import('../containers/Home/index'))

export default class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch >
          <Route path="/" exact component={Home}></Route>
          <Route path="*" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
