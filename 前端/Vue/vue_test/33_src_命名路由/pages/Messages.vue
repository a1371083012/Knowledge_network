<template>
  <div>
    <ul>
      <li v-for="m of messageList" :key="m.id">
        <!-- to使用对象写法时，name不能使用path写法 -->
        <router-link :to="{
          name: 'xiangqing',
          query:{
            id: m.id,
            title: m.title
          }
        }">
          {{m.title}}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Messages",
  data() {
    return{
      messageList:[
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
      ]
    }
  },
}
</script>

<style>

</style>