<template>
  <input type="text" v-model="keyword">
  <h3>{{ keyword }}</h3>
</template>

<script>
import {ref, customRef} from 'vue'
export default {
  name: 'App',
  setup(){
    // 自定义一个ref——名为：myRef
    function myRef(value, delay){
      let timer
      return customRef((track, trigger) => {
        return {
          get(){
            console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`);
            track() // 通知Vue追踪数据的变化（提前和get商量一下，让他人为这个value是有用的）
            return value
          },
          set(newValue){
            console.log(`有人从myRef这个容器中数据改为了：${value}`)
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue
              trigger() // 通知Vue去解析模板
            }, delay)
          }
        }
      })
    }

    // let keyword = ref('hello') // 使用Vue提供的ref
    let keyword = myRef('hello', 500) // 使用程序员自定义的ref
    
    return { keyword }
  }
}

</script>