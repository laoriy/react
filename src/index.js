/*
 * @Author: liuruijun
 * @Date: 2020-06-01 17:02:20
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-04 09:48:12
 * @Description: file content
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./assets/style/index.css";

ReactDOM.render(
    <React>
        <Provider store={store}>
            <App />
        </Provider>
    </React>,
    document.getElementById("root")
);
