<template>
  <el-dialog
    title="提示"
    v-model="loginDialogflag"
    width="30%"
    style="z-index: 999;"
    :before-close="cancelDialog"
  >
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelDialog">取 消</el-button>
        <el-button type="primary" @click="cancelDialog">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { ElMessageBox } from 'element-plus';
  import { useStore } from 'vuex'
  let store = useStore()
  
  // 弹窗flag
  let loginDialogflag = computed(()=>{
    return store.state.dialogOptinons.loginDialogflag
  })
  // 弹窗取消事件
  let cancelDialog = function(){
    store.commit('dialogOptinons/loginDialogClose', false)
  }

  
</script>

<style lang="sass" scoped>
</style>