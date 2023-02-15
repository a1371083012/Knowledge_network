<template>
  <div>
    <h3>我是孙组件，获取到来自祖组件的数据：{{ test }}</h3>
  </div>
</template>

<script>

export default {
  name: 'Child',
  inject: ['test']
}
</script>
