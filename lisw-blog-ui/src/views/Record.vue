<template>
  <div id="recordView">
    <div class="container-card">
      <el-card class="box-card">
        <el-button type="success" class="publish" @click="router.push('/publish')">发布</el-button>
        <CardItem v-for="o in 20" :key="o" class="text item"></CardItem>
        <div class="card-page">
          <el-pagination
            v-model:current-page="currentPage1"
            :page-size="20"
            :pager-count="5"
            layout="total, pager, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import CardItem from '@/components/CardItem.vue'
  const store = useStore()
  const router = useRouter()
  const currentPage1 = ref(5)
  const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
  }
  const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
  }

</script>

<style lang="scss" scoped>
  #recordView{
    background: url('@/assets/bg.jpeg');
    background-size:cover;
    .container-card{
      padding: 10px;
    }
    .card-page{
      display: flex;
      justify-content: center;
      padding: 15px 0px;
    }
    .publish{
      width: 100%;
    }
  }
  :deep(.el-card__body){
    padding: 10px 20px 0px;
  }
</style>