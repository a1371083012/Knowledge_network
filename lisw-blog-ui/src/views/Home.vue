<template>
  <div id="homeView">
    <!-- 内容 -->
    <div class="content">
      <div class="blog">
        <el-image style="width: 400px; height: auto;" :src="require('@/assets/blog.png')" fit="contain" />
      </div>
      <div class="title suspension">夜繁星点点。</div>
      <div class="buttonGroup">
        <el-button class="suspension" id="likeBtn" type="warning" :icon="StarFilled" @click="throttleLike">点赞</el-button>
        <el-button class="suspension" type="primary" :icon="List">随记</el-button>
        <el-button class="suspension" type="default" :icon="Avatar">关于我</el-button>
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
    <!-- 底部按钮 -->
    <div class="bottomButton suspension">
      <el-popover
        placement="top-start"
        title="Github"
        width="auto"
        trigger="hover"
      >
        <template #reference>
          <el-image class="iconButton" @click="openGithub" style="width: 24px; height: 24px" :src="require('@/assets/svg/github.svg')" fit="contain" />
        </template>
        <template #default>
          <a href="https://github.com/a1371083012" target="_blank">https://github.com/a1371083012</a>
        </template>
      </el-popover>
      
      <el-popover
        placement="top-start"
        title="Wechat"
        width="auto"
        trigger="hover"
      >
        <template #reference>
          <el-image class="iconButton" style="width: 24px; height: 24px" :src="require('@/assets/svg/wechat.svg')" fit="contain" />
        </template>
        <template #default>
          <el-image class="iconButton" style="width: 160px; height: 160px" :src="require('@/assets/Wechat Code.jpg')" fit="contain" />
        </template>
      </el-popover>

      <el-popover
        placement="top-start"
        title="QQ"
        width="auto"
        trigger="hover"
      >
        <template #reference>
          <el-image class="iconButton" style="width: 24px; height: 24px" :src="require('@/assets/svg/qq.svg')" fit="contain" />
        </template>
        <template #default>
          <el-image class="iconButton" style="width: 160px; height: 160px" :src="require('@/assets/QQ Code.jpg')" fit="contain" />
        </template>
      </el-popover>
    </div>
    <!-- 烟花效果 -->
    <canvas id="fireworks"></canvas>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, defineAsyncComponent } from 'vue'
  import { StarFilled, List, Avatar } from '@element-plus/icons-vue'
  import { ElMessage } from 'element-plus'
  import 'animate.css';
  import fire from '@/utils/fireworks.js'
  import throttle from '@/utils/throttle'
  import { useRouter } from 'vue-router'
  let router = useRouter();

  let likeBtn: HTMLElement
  
  // 挂载完成回调
  onMounted(()=>{
    fire('fireworks')
    likeBtn = document.getElementById('likeBtn') as HTMLElement
  })

  // 打开Github
  function openGithub(){
    window.open('https://github.com/a1371083012')
  }

  // 点赞按钮
  const throttleLike =  throttle(like, 800) // 防抖处理
  function like(){
    ElMessage.success({
      message: '感谢你每一次点赞！',
      type: 'success',
    })
    
    likeBtn.classList.add('animate__animated', 'animate__bounceIn');

    likeBtn.addEventListener('animationend', () => {
      likeBtn.classList.remove('animate__animated', 'animate__bounceIn');
    });
  }

</script>

<style lang="scss" scoped>
  #homeView {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
    /* 	background: #FFAFBD;  
    background: -webkit-linear-gradient(to right, #ffc3a0, #FFAFBD);  
    background: linear-gradient(to right, #ffc3a0, #FFAFBD); 
    */
    color: white;
    .content, .wavesSvg{
      width: 100vw;
      align-self: flex-end;
      overflow: hidden;
    }
    .bottomButton{
      position: fixed;
      bottom: 5px;
      display: flex;
      justify-self: center;
      align-items: center;
    }
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

  // 下底内容
  .iconButton{
    cursor: pointer;
    margin: 0 5px;
    user-select: none;
  }

  // 烟花
  #fireworks{
    position: fixed;
  }
  .suspension{
    z-index: 999;
  }
  
  // #region 底部波浪
  .waves {
    position: relative;
    width: 100%;
    margin-bottom: -7px; /*Fix for safari gap*/
    height: 200px;
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