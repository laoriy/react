/*
 * @Author: liuruijun
 * @Date: 2020-09-08 12:00:18
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-08 12:00:38
 * @Description: file content
 */
const { argv } = process

function setStart(type, defaultVal) {
  let index = 0
  argv.forEach((val, key) => {
    if (val === `-${type}`) {
      index = key
    }
  })
  if (index !== 0 && argv[index + 1]) {
    let env = argv[index + 1]
    switch (type) {
      case 'port': // 端口
        return argv[index + 1]
      case 'env': // 代理
        env = env.indexOf('http') > -1 ? env : `http://${env}`
        return env
      default:
        return defaultVal
    }
  }
  return defaultVal
}
module.exports = setStart
