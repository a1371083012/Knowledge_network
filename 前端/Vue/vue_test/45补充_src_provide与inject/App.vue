<template>
  <div>
    <Son/>
  </div>
</template>

<script>
  import Son from './components/Son'

  export default {
    name: 'App',
    components: { Son },
    provide(){
      return{
        test: '12345'
      }
    },
  }
</script>
