//创建并暴露store
export default {
  namespaced: true,
  state: {
    loginDialogflag: false
  },
  actions: {},
  mutations: {
    loginDialogClose(state: any, flag: boolean){
      state.loginDialogflag = flag
    }
  },
  getters: {},
  modules: {},
}