/*
 * @Author: liuruijun
 * @Date: 2020-06-08 19:15:11
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-04 15:03:14
 * @Description: file content
 */ 
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './modules'

// eslint-disable-next-line import/no-mutable-exports
let store

if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
} else {
  store = createStore(rootReducer, applyMiddleware(thunk))
}

export default store
