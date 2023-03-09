//引入Vuex
import {createStore} from 'vuex'

import dialogOptinons from './Dialog';

//创建并暴露store
export default createStore({
  modules :{
    dialogOptinons,
  }
})