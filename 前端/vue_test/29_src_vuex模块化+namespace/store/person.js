// 人员管理相关的配置
import axios from 'axios'
import { nanoid } from 'nanoid';
export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value){
      if(value.name.indexOf('王') === 0){
        context.commit('ADD_PERSON', value)
      }
      else{
        alert('添加的人必须姓王！');
      }
    },
    addPersonServer(context){
      axios.get('http://localhost:8001/getMethod').then(
        response => {
          context.commit('ADD_PERSON', {id: nanoid(), name: response.data.name})
        },
        error => {
          console.log(error);
        }
      )
    }
  },
  mutations: {
    ADD_PERSON(state, value){
      state.personList.push(value);
    }
  },
  state: {
    personList: [
      {id: '001', name: '张三'}
    ],
  },
  getters: {
    firstPersonName(state){
      return state.personList[0].name;
    }
  },
};