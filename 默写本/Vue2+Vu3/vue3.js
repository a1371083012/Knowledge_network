/* 知识点 */
// #region 与Vue2的区别（4点）
  /* 
    ①：性能的提升
      ①：打包速度加快
      ②：打包体积减少
    ②：源码的升级
      ①：用Proxy和Reflect方式替换defineProperty实现响应式
      ②：重写了虚拟DOM和Tree-shaking优化
    ③：更好地拥抱TypeScript
    ④：新的特性
      ①：Composition API（组合API）
        ①：setup配置
        ②：ref与reactive
        ③：computed、watch与watchEffect
        ④：provide与inject
      ②：新的内置组件
        ①：Fragment
        ②：Teleport
        ③：Suspense
      ③：其他改变
        ①：新的生命周期钩子
        ②：data应被声明位一个函数
        ③：移除了keyCode、native、filter
  */
// #endregion

// #region Composition API（9点）
  /* 
    ①setup
      参数：set(props, context)，context包括attrs、slots、emit
    ②ref
      说明：一般用来定义非对象类型的数据，如果定义对象类型的话本质是引用了reactive函数
      定义：const xxx = ref(123)
      使用：xxx.value
    ③reactive
      说明：定义对象类型数据，通过Proxy实现
      定义：const xxx = reactive({ ... })
      使用：xxx
    ④computed
      简写：let x = computed(()=> a+b)
      完整写法：let x = computed({ get(){return a+b}, set(value){y=value} })
    ⑤watch
      使用：
        非对象内属性：watch('x', (newVal, oldVal)=>{ ... })
        对象内属性：watch(() => obj.x, (newVal, oldVal)=>{ ... })
      特性：
        ①：直接监视对象时，deep强制为true
        ②：监视的类型为对象时，参数都为新value
        ③：监视对象内属性时，参数需要写成返回值
        ④：监视ref时，非对象不需要.value，对象需要.value或deep:true配置
    ⑥watchEffect
      说明：监视回调中所有响应式属性
      语法：watchEffect(()=>{ const x1 = sum.value })
      注意：watchEffect不能监视对象
    ⑦hook
      说明：类似vue2的mixin
    ⑧toRef
      说明：将响应式单独提供给外部使用
      语法：const name = toRef(person, 'name')
    ⑨toRefs
      语法：...toRefs(person)
  */

// #endregion

// #region 其他Composition API（13点）
  /* 
    shallow（浅监听）：
      ①shallowRef
      ②shallowReactive
      ③shallowReadonly
    ④readonly
    ⑤customRef：自定义ref，干预其响应
      使用：
        function myRef(value){
          return customRef(track, trigger)=>{
            return{
              get(){
                track()
                return value
              },
              set(newValue){
                value = newValue
                trigger()
              },
            }
          }
        }
    ⑥provide
      使用：provide('car', car)
    ⑦inject
      使用：const car = inject('car')
    mark：
      ⑧toRaw：将一个由reactive生成的影响是对象转为普通对象
      ⑨markRaw：标志一个对象，其不会成为响应式对象
    判断：
      ⑩isRef
      ⑪isReactive
      ⑫isReadonly
      ⑬isProxy
  */

// #endregion

// #region 新的组件（3点）
  /* 
    ①Fragment：组件中虚拟元素
    ②Teleport：将组件html转移
      使用：<teleport to='移动位置'>...</teleport>
    ③Suspense：骨架
      使用：
        第一步：异步加载组件：
          import {defineAsyncComponent} from 'vue'
          const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
        第二步：使用Suspense标签
          <Suspense>
            <template v-slot:default>
              <Child/>
            </template>
            <template v-slot:fallback>
              <h3>加载中.....</h3>
            </template>
          </Suspense>
  */
// #endregion

// #region 问题汇总（4点）
  /* 
    ①Vue3与Vue2响应式差别
      Vue2：
        原理：
          对象类型：通过Object.defineProperty对属性进行数据劫持
          数组类型：通过重写数组一系列的API进行拦截
        缺点：
          对象内新增、删除属性和通过下标修改数组都不会触发视图的变化
      Vue3：
        原理：
          通过Proxy代理对数据进行劫持，包括属性的增删改查
          通过Reflect对源对象的属性进行操作
        优点：解决了Vue2响应式的问题
        缺点：由于Proxy的特性，导致watch中检测不到对象前后的变化
    ②ref对比reactive
      定义上：
        ref：一般用于定于基本数据类型
        reactive：用于定于对象类型，不能定义基本数据类型
      原理上：
        ref：对于基本数据类型还是使用defineProperty对数据进行劫持，对于对象类型则引用reactive函数
        reactive：通过Proxy对数据进行劫持
      使用上：
        ref：需要.value进行使用
        reactive：不需要.value即可使用
    ③Composition API优势
      Options API可能将一个需求分散在各个配置项中，当项目大的时候可能会维护起来比较困难，而
      Composition则可以将代码有序地组织在一起
    ④全局API
      Vue.prototype = app.config.globalProperties
  */
// #endregion
