// 求和功能相关的配置
export default {
  namespaced: true,
  actions: {
    addOdd(context, value){
      if(context.state.sum % 2){
        context.commit('ADD', value);
      }
    },
    addWait(context, value){
      setTimeout(() => {
        context.commit('ADD', value);
      }, 500);
    },
  },
  mutations: {
    ADD(state, value){
      state.sum += value;
    },
    REDUCE(state, value){
      state.sum -= value;
    },
  },
  state: {
    sum: 0, //当前的值
    school: '北京大学',
    subject: 'Vue',
  },
  getters: {
    bigSum(state){
      return state.sum*10;
    }
  },
};