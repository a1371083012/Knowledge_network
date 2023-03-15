<template>
  <div id="PublishView">
    <!-- 标题 -->
    <div class="title">
      <input type="text" class="titleInput" placeholder="标题" maxlength="100" v-model="title">
      <span class="titleLenght">{{title.length}}/ 100</span>
    </div>
    <!-- 摘要 -->
    <div class="abstract">
      <textarea maxlength="256" v-model="abstract"  placeholder="摘要">234234234</textarea>
      <span class="titleLenght">{{abstract.length}}/ 256</span>
    </div>
    <!-- 内容 -->
    <div class="content">
      <tinymce @onClick="onClick" ref="abc"/>
    </div>
    <!-- 配置项 -->
    <div class="options">
      
      <button>获取内容</button>
    </div>

    <!-- 底部栏 -->
    <div class="publishbar">
      <a class="backTop" href="#PublishView">回到顶部 Δ</a>
      <div class="buttonArea">
        <el-button type="warning" :icon="List" size="large" @click="temporaryStorage">内容暂存</el-button>
        <el-button type="primary" :icon="Promotion" size="large" class="publish" @click="publish">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, toRaw, watch, getCurrentInstance } from 'vue'
  import Tinymce from '@/components/Tinymce/index.vue'
  import { Promotion, List } from '@element-plus/icons-vue'
  const content = "";
  const title = ref("")
  const abstract = ref("")
  const abc = ref(null);
  let aa: any;

  // 获取页面的实例对象
  const pageInstance = getCurrentInstance();
  console.log(pageInstance);
  
  // 获取dom节点对象
  onMounted(()=>{

    console.log(pageInstance.refs.abc);
  })
  


  // 发布
  function publish () {
    console.log(title.value)
    console.log(abstract.value)
    console.log(aa.activeEditor.getContent())

  }

  // 暂存
  function temporaryStorage(){

  }

  // 鼠标单击的事件
  function onClick (e: any, editor: any) {
    aa = editor
    console.log(editor.activeEditor.getContent())
  }
  
</script>

<style lang="scss" scoped>

  #PublishView{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f6f7;
    .title, .content, .options, .abstract{
      width: 90%;
    }
    .title{
      background-color: white;
      margin: 20px 0px;
      display: flex;
      align-items: center;
      .titleLenght{
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: gray
      }
      .titleInput{
        padding: 0px 10px;
        width: calc(100% - 90px);
        height: 60px;
        border: none;
        font-size: 23px;
        font-weight: 600;
        &:focus{
          outline: 0px; 
        }
      }
    }
    .abstract{
      margin-bottom: 20px;
      background-color: white;
      display: flex;
      align-items: center;
      textarea{
        padding: 10px;
        width: calc(100% - 90px);
        border: none;
        min-height: 60px;
        font-size: 16px;
        &:focus{
          outline: 0px; 
        }
      }
      .titleLenght{
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: gray
      }
    }
    .options{
      height: 100px;
      margin: 20px 0px 80px;
      background-color: rgb(255, 234, 0);
    }
  }
  .publishbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-top: 1px solid rgb(232, 232, 232);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .backTop{
      margin-left: 30px;
      text-decoration: none;
      color:#333;
      &:hover{
        color: gray
      }
    }
    .publish{
      margin-right: 20px;
    }
  }
</style>