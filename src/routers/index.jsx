import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AsyncComponent from '../utlis/AsyncComponent'

const Home = AsyncComponent(() => import('../containers/Home/index'))

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="<%=projectName%>">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}
