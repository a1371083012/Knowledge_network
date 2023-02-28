<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="https://v2.vuejs.org/images/logo.svg" alt="">
    </Category>

    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="item, index in games" :key="index">{{item}}</li>
      </ul>
    </Category>

    <Category title="电影" :listData="films">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category';

  export default {
    name: 'App',
    components: { Category },
    data(){
      return{
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        films:['《教父》','《拆弹专家》','《你好，李焕英》','《环太平洋》'],
      }
    }
  }
</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
}
</style>
