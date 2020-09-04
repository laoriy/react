/*
 * @Author: liuruijun
 * @Date: 2020-06-08 19:15:11
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-04 10:02:04
 * @Description: file content
 */ 
import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './modules'
import thunk from 'redux-thunk'
let store


if (process.env.NODE_ENV !== 'production'){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, api)));
}else{
  store = createStore(rootReducer, applyMiddleware(thunk));
}


export default store