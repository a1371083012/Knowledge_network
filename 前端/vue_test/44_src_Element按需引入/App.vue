<template>
  <div>
    <button>原生的按钮</button>
    <input type="text">
    <atguigu-row>
      <atguigu-button>默认按钮</atguigu-button>
      <atguigu-button type="primary">主要按钮</atguigu-button>
      <atguigu-button type="success">成功按钮</atguigu-button>
      <atguigu-button type="info">信息按钮</atguigu-button>
      <atguigu-button type="warning">警告按钮</atguigu-button>
      <atguigu-button type="danger">危险按钮</atguigu-button>
    </atguigu-row>
    <atguigu-date-picker
      type="date"
      placeholder="选择日期">
    </atguigu-date-picker>
    <atguigu-row>
      <atguigu-button icon="atguigu-icon-search" circle></atguigu-button>
      <atguigu-button type="primary" icon="atguigu-icon-s-check" circle></atguigu-button>
      <atguigu-button type="success" icon="atguigu-icon-check" circle></atguigu-button>
      <atguigu-button type="info" icon="atguigu-icon-message" circle></atguigu-button>
      <atguigu-button type="warning" icon="atguigu-icon-star-off" circle></atguigu-button>
      <atguigu-button type="danger" icon="atguigu-icon-datguiguete" circle></atguigu-button>
    </atguigu-row>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>