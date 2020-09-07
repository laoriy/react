/*
 * @Author: liuruijun
 * @Date: 2020-06-01 17:02:20
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-07 16:19:14
 * @Description: file content
 */

import React from 'react'
import ReactDOM from 'react-dom'
<% if (needRedux) { %>
import { Provider } from 'react-redux'
import store from './redux/store'
<% } %>
import App from './containers/App/App'
import './assets/less/reset.less'
<% if (!isH5 && uiLibrary === 'antd') { %>
import 'antd/dist/antd.less'
<% } %>

ReactDOM.render(
    <% if (needRedux) { %>
    <Provider store={store}>
        <App />
    </Provider>,
    <% } else { %>
    <App />,
    <% } %>
  document.getElementById('root')
)
