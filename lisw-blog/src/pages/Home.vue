<template>
  <div class="main">
    <Header></Header>
    <!-- 内容 -->
    <div class="content">
      <div class="blog">
        <el-image style="width: 400px; height: auto;" :src="'./src/assets/blog.png'" fit="contain" />
      </div>
      <div class="title">夜繁星点点。</div>
      <div class="buttonGroup">
        <el-button id="aaa" type="warning" :icon="StarFilled" @click="like">点赞</el-button>
        <el-button type="primary" :icon="List">随记</el-button>
        <el-button type="default" :icon="Avatar">关于我</el-button>
      </div>
    </div>
    <!-- 底部波浪 -->
    <div class="wavesSvg">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { StarFilled, List, Avatar } from '@element-plus/icons-vue'
import Header from '../layout/Header.vue'
import 'animate.css';

const activeIndex = ref('0')
let element: any
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 挂载完成回调
onMounted(()=>{
  element = document.getElementById('aaa')
})

function like(){
 console.log(Math.random()*3)
  

  element.classList.add('animate__animated', 'animate__bounceIn');

  element.addEventListener('animationend', () => {
    element.classList.remove('animate__animated', 'animate__bounceIn');
  });
}
</script>

<style lang="scss" scoped>
  .main {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
    /* 	background: #FFAFBD;  
    background: -webkit-linear-gradient(to right, #ffc3a0, #FFAFBD);  
    background: linear-gradient(to right, #ffc3a0, #FFAFBD); 
    */
    color: white;
    .content{
      width: 100vw;
    }
    .wavesSvg{
      width: 100vw;
      align-self: flex-end;
    }
  }
  ::v-deep .el-image__inner{
    vertical-align: top !important
  }
  .nav-default{
    cursor: default;
  }

  // 中间内容
  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title{
      margin-bottom: 20px;
    }
    .buttonGroup{
      display: flex;
      justify-content: center;
    }
  }
  
  // #region 底部波浪
  .waves {
    position: relative;
    width: 100%;
    margin-bottom: -7px; /*Fix for safari gap*/
    min-height: 100px;
    max-height: 200px;
  }
  /* Animation */
  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
  // #endregion
</style>