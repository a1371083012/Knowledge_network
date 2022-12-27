<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="keyWord" type="text" placeholder="enter the name you search" @keyup.enter="searchUsers">&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Search',
  data(){
    return{
      keyWord: '',
    }
  },
  methods: {
    searchUsers(){
      // 请求钱更新List的数据
      this.$bus.$emit('updateListData', {isFirst:false, isLoading:true, errMsg:'', users:[]});
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          // 请求成功后更新List的数据
          this.$bus.$emit('updateListData', {isLoading:false, errMsg:'', users:response.data.items});
        },
        error => {
          // 请求失败后更新List的数据
          this.$bus.$emit('updateListData', {isLoading:false, errMsg:error.message});
        }
      )
    },
  }
}
</script>

<style>

</style>
