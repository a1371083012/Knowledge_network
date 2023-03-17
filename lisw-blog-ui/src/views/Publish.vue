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
      <tinymce :value="content" @getContent="getContent"/>
    </div>
    <!-- 配置项 -->
    <div class="options">
      <div class="optionsContent">
        <div class="optionRow">
          <el-tooltip raw-content content="<strong>文章头部位置展示</strong><ul><li>设置合适的标签，能方便分类检索</li></ul>" placement="top-start">
            <div class="optionName">文章标签<QuestionFilled style="width: 1em;"/></div>
          </el-tooltip>
          <el-tag
            v-for="tag in dynamicTags"
            :key="tag"
            style="user-select: none"
            class="mx-1 tag"
            closable
            effect="plain"
            @close="handleClose(tag)"
            size="large"
          >{{ tag }}</el-tag>
          <el-popover placement="bottom" :width="380" trigger="hover" popper-class="customTag">
            <template #reference>
              <el-button class="button-new-tag ml-1">+ 添加文章标签</el-button>
            </template>
            <template #default>
              <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                status-icon
                :rules="rules"
                class="demo-ruleForm"
              >
                <el-form-item prop="pass">
                  <el-input v-model="ruleForm.pass" autocomplete="off" placeholder="自定义标签，Enter键入确定"/>
                </el-form-item>
              </el-form>
              推荐标签
            </template>
          </el-popover>
        </div>
      </div>
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
  import { ref, reactive } from 'vue'
  import Tinymce from '@/components/Tinymce/index.vue'
  import { Promotion, List, QuestionFilled } from '@element-plus/icons-vue'
  import type { FormInstance, FormRules } from 'element-plus'
  const content = ref('')
  const title = ref('')
  const abstract = ref('')
  const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
  const ruleFormRef = ref<FormInstance>()

  const ruleForm = reactive({
    pass: '',
    checkPass: '',
    age: '',
  })

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}

const rules = reactive<FormRules>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
})

  // 发布
  function publish () {
    console.log(title.value)
    console.log(abstract.value)
    console.log(content.value)

  }

  // 暂存
  function temporaryStorage(){

  }

  // 获取到内容
  const getContent = (v: string) => {
    content.value = v
  }

  const addTag = (e: any) =>{
    console.log(e.target.value);
  }

  // 移除标签
  const handleClose = (tag: string) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
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
      background-color: white;
      border-radius: 5px;
      .optionsContent{
        padding: 20px;
      }
      .optionRow{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      /* #region 文章标签 */
      .optionName{
        display: flex;
        user-select: none;
        margin-right: 20px;
      }
      .tag{
        margin: 0px 5px;
      }
      .button-new-tag{
        margin-left: 5px;
      }
      .customTag{
        input{
          width: 100%;
          border: none;
          &:focus{
            outline: none;
          }
        }
      }
      /* #endregion */
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

<!-- 气泡框的样式 -->
<style lang="scss">
  .el-popover.customTag {

  }
</style>