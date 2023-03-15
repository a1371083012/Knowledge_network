//引入Vuex
import {createStore} from 'vuex'

// 弹窗许可
import dialogOptinons from './Dialog';
// 用户身份
import authOptinons from './Auth';

//创建并暴露store
export default createStore({
  modules :{
    dialogOptinons,
    authOptinons,
  }
})