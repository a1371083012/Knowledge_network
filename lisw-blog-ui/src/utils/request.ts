import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { getToken } from '@/utils/auth.js'
const store = useStore()

// 1. 利用axios对象的方法create，去创建一个axios实例
// 2. request就是axios，只不过稍微配置了一下
const requests = axios.create({
  // 配置对象
  // 基础路径，发请求的时候，路径当中会出现api
  baseURL: '/api',
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // 代表请求超时的时间10s
  timeout: 10000,
})

// 请求拦截器
requests.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 让每个请求携带标记
      // 将Token存放在请求头的Authorization字段中
      config.headers['Authorization'] = 'Bearer ' + getToken()
      config.headers['Content-Type'] = 'application/json'
    }
    return config
  },
  error => {
    console.log(error) // 失败
    return Promise.reject(error)
  }
)

// 响应拦截器
requests.interceptors.response.use(
  response=>{
    const code = response.data.code
    // 当状态码为401（没有权限）
    if(code === 401){
      
    }
    return response.data
  },
  // 响应失败的回调函数
  error=>{
    if (error.message === 'Network Error') {
      ElMessage({
        message: '服务器连接异常，请检查服务器！',
        type: 'error',
        duration: 5 * 1000
      })
    return
  }
  console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default requests