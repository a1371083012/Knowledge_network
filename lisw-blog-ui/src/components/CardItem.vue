<template>
  <el-divider class="cardTitle" content-position="left" @click="cardClick($event, '123')">浏览器版本检测&IE检测</el-divider>
  <div class="cardItem">
    <div class="cardInfo">
      <div class="cardTags">
        <el-tag type="warning" class="mx-2" effect="dark">JavaScript</el-tag>
      </div>
      <div class="cardInfoRight">
        <div class="cardWatch"><el-icon size="14"><View /></el-icon>123</div>
        <div class="cardDate">2022-03-21</div>
      </div>
    </div>
    <div class="cardGuide" @click="cardClick($event, '123')">很多时候在网上搜到的都是旧版的浏览器版本检测，旧版的检测中是测不准现在浏览器的信息，如我现在使用的是Edge浏览器，但是通过旧版检测代码的现实如下：，通过新版的检测代码就可以完全测出浏览器版本：</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let router = useRouter()
function cardClick(event: any, url: string){
  // console.log(url);
  router.push('/publish')
}
  
</script>

<style lang="scss" scoped>
  $color-subtitle: #999aaa;
  $color-select: #FC5531;
  $fontSize-subtitle: 14px;

  .el-divider{
    margin: 30px 0px 15px;
  }
  :deep(.el-divider__text){
    cursor: pointer;
    font-size: 16px;
    max-width: calc(100% - 80px);
    overflow:hidden;
    text-overflow:ellipsis;//文本溢出显示省略号
    white-space:nowrap;//文本不会换行
    &:hover{
      color: $color-select;
    }
  }
  .cardItem{
    .cardInfo{
      margin-bottom: 3px;
      display: flex;
      justify-content: space-between;
      line-height: 25px;
      .cardTags > :deep(.el-tag){
        margin: 0px 3px;
      }
      .cardInfoRight{
        font-size: $fontSize-subtitle;
        color: $color-subtitle;
        display: flex;
        .cardDate{
          margin-left: 15px;
        }
        .cardWatch{
          display: flex;
          justify-content: center;
          align-items: center;
          .el-icon{
            color: #bbbbbb;
            margin-right: 5px;
          }
        }
      }
    }
    .cardGuide{
      cursor: pointer;
      font-size: $fontSize-subtitle;
      color: $color-subtitle;
      overflow:hidden;
      text-overflow:ellipsis;//文本溢出显示省略号
      white-space:nowrap;//文本不会换行
    }
  }
</style>