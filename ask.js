/*
 * @Author: liuruijun
 * @Date: 2020-09-02 14:12:08
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-04 17:12:03
 * @Description: file content
 */
const CUSTOME_UI = 'use another ui library'
const deletePath = {
  h5: [],
  pc: ['src/assets/js/common.js', 'src/assets/less/hairline.less']
 
}
const deleteFolder = {
  reduxtrue: ['src/redux']
}
const compiles = ['js', 'json', 'vue', 'less']
const h5ask = [
  {
    type: 'confirm',
    message: 'project need redux?',
    name: 'redux'
  },
  {
    type: 'input',
    name: 'proxyIp',
    message: 'Please enter the project proxyIp'
  },
  {
    type: 'list',
    name: 'uiLibrary',
    choices: [
      'ant-design-mobile',
      CUSTOME_UI
    ],
    message: 'Please choose a ui library'
  }]
  
const pcask = [
  {
    type: 'confirm',
    message: 'project need redux?',
    name: 'redux'
  },
  {
    type: 'input',
    name: 'proxyIp',
    message: 'Please enter the project proxyIp'
  },
  {
    type: 'list',
    name: 'uiLibrary',
    choices: [
      'ant-design',
      CUSTOME_UI
    ],
    message: 'Please choose a ui library'
  }]

module.exports = {
  h5ask,
  pcask,
  CUSTOME_UI,
  deletePath,
  deleteFolder,
  compiles
}
