/*
 * @Author: liuruijun
 * @Date: 2020-06-01 17:02:20
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-04 11:57:34
 * @Description: file content
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App/App'
import './assets/less/reset.less'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
