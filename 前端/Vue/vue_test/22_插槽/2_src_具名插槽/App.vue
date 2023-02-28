<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img slot="center" src="https://v2.vuejs.org/images/logo.svg" alt="">
      <a slot="footer" href="http://www.baidu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="item, index in games" :key="index">{{item}}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com">单击游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影" :listData="films">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
      <!-- <template #footer> -->
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4 slot="footer">欢迎前来观影</h4> 
      </template>
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
.container, .foot{
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>
