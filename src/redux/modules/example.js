/*
 * @Author: liuruijun
 * @Date: 2020-06-08 19:12:39
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-04 15:01:38
 * @Description: file content
 */ 

// 初始数据
const initState = {
  example: {}
}
// types
export const types = {
  ADD_EXAMPLE: 'EXAMPLE/ADD_EXAMPLE'
}

// actions
export const actions = {
  addExample: () => ({
    type: types.ADD_EXAMPLE
  })
}

// reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_EXAMPLE:
      return state
    default:
      return state
  }
}

// selectors
export const getExample = (state) => state.example.example

export default reducer
