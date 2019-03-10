import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

Vue.prototype.$axios = axios

// 全局请求拦截
axios.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
  }
  if (config.method === 'post') {
    let formData = new FormData()
    for (let key in config.data) {
      formData.append(key, config.data[key])
    }
    config.data = formData
  }
  return config
},
error => {
  return Promise.reject(error)
})

// 全局回复拦截
axios.interceptors.response.use(res => {
  if (res.status === 200 && res.data.code === 2000) {
    res.data.messages.forEach(element => {
      Message({
        showClose: true,
        message: element,
        type: 'success'
      })
    })
    return res.data
  } else if (res.dsata && res.data.code !== 2000) {
    res.data.messages.forEach(element => {
      Message({
        showClose: true,
        message: element,
        type: 'warning'
      })
    })
    return Promise.reject(res.data)
  }
},
error => {
  let status = error.response.status
  if (status === 401) {
    error.response.data.messages.forEach(element => {
      Message({
        duration: 0,
        showClose: true,
        message: element,
        type: 'error'
      })
    })
    localStorage.clear()
    this.$router.push({ path: '/login' })
  } else if (status === 404) {
    this.$router.push('/error/500')
  } else if (status === 500) {
    error.response.data.messages.forEach(element => {
      Message({
        duration: 0,
        showClose: true,
        message: element,
        type: 'error'
      })
    })
    this.$router.push('/error/500')
  } else if (status === 402) {
    Message({
      showClose: true,
      message: '已登录，请不要重复操作',
      type: 'error'
    })
  } else {
  /*
   * status不在指定内容中时，将服务器端返回信息通过element-ui的错误信息提示进行提示
   * 同时通过promise返回data数据
   */
    Message({
      showClose: true,
      message: error.response.data.messages,
      type: 'error'
    })
  }
  return Promise.reject(error.response.data)
})
