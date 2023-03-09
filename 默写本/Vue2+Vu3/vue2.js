/* 知识点 */
// #region 基本概念（6点）
  /* 
    ①模板语法：插值语法{{}}、v-bind
    ②数据绑定：单向绑定v-bind、双向绑定v-model
    ③事件处理：v-on
      修饰符：prevent、once、passive、capture、self、native、stop
    ④表单收集：v-model
      修饰符：lazy、number、trim
      类型：
        checkbox：type、v-model、value
        radio：type、v-model、value、name
        input：type、v-model
        select：v-model
    ⑤列表渲染：v-for
      key关键字：
        默认值：index下标
        作用：优化虚拟DOM中的diff算法
    ⑥条件渲染：v-if、v-else-if、v-else
  */
// #endregion

// #region 配置项（5点）
  /* 
    ①：computed（计算属性）
    ②：watch（监视属性）
      可选项：deep、immediate
      参数：newValue、oldValue
    ③：filter（过滤器）
    ④：directive（自定义指令）
      Vue.directive(指令名, {
        bind(){element, binding},
        inserted(){element, binding},
        update(){element, binding}
      })
      注意：普通回调默认会忽略inserted步骤
    ⑤：component（组件）
      定义：Vue.extend(options)
      注册：Vue.component: {'User': User}
      使用：<User></User>
  */
// #endregion

// #region 拓展（3点）
  /* 
    ①ref：
      html标签：获取元素DOM
      component组件：获取组件
    ②mixin（混入）：
      定义：{options}
      使用：Vue.mixin(xxx)
    ③plugin（插件）：
      定义：export default{
        install: function(Vue, options){
          ...
        }
      }
      使用：Vue.use(xxx)
  */
// #endregion

// #region 传参（7点）

  // #region ①props 【 父<=>子 】
  /*  
    接参：
      ①props: [x]
      ②props: {x: string}
      ③props: {x: {type: string, require: false, default: '1'}}
    父=>子：
      父：<Chlid :test='value'>
      子：props: [test]
    父<=子：
      父：<Chlid :test='fun'>      fun(value){console.log(value)}
      子：props: [test]             this.test(1)
  */
  // #endregion
  // #region ②自定义事件 【 父<==子 】
  /* 
    定义（父）：
      ①<Child @test='fun'>      fun(){}
      ②<Child ref='child'>      this.$refs.child.$on('test', function(params){ ... })
    触发（子）：
      this.$emit('test', params)
    销毁：
      this.$off('test')
  */
  // #endregion
  // #region ③全局事件总线 【 任意组件 】
  /* 
    全局安装：
      Vue.prototype.$bus = this
      (Vue3)
        const app = createApp(App)
        app.config.globalProperties.mittBus = mitt()
    提供：
      this.$bus.$on('test', function(params){ ... })
    接收：
      this.$bus.$emit('test', params)
    解绑：
      this.$bus.$off('test')
  */
  // #endregion
  // #region ④消息订阅与发布 【 任意组件 】
  /* 
    安装：
      npm i pubsub-js
    引入：
      import pubsub from 'pubsub-js'
    订阅：
      id = pubsub.subscribe('test', function(params){ ... })
    发布：
      pubsub.publish('test', params)
    解绑：
      pubsub.unsubscribe(id)
  */
  // #endregion
  // #region ⑤提供与注入 【 父==>子 】
  /* 
    提供：
      provide(){return { value: '1' }}
    注入：
     inject: ['value]
  */
  // #endregion
  // #region ⑥$attrs与$listeners 【 父==>子 】
  /* 
    祖传父：
      :name="value" @change="test"
    父传子：
      v-bind="$attrs" v-on="$listeners"
    子调用：
      this.$attrs.name this.$listeners.change()
  */
  // #endregion
  // #region ⑦插槽 【 父<==子 】
  /* 
    ①：默认插槽
      定义：
        <slot>没有使用时显示该文本</slot>
      使用：
        <Child> <h3>你好啊</h3> </Child>
    ②：具名插槽
      定义：
        <template><slot name='xxx'></template>
      使用：
        <Child> <template v-slot:xxx><h3>你好啊</h3></template> </Child>
    ③：作用域插槽
      定义：
        <template><slot :data="data"></template>
      使用：
        <Child> <template scope="data">{{data}}</template> </Child>
  */
  // #endregion

// #endregion

// #region 路由（10点）
  /* 
    路由相关的标签：
      跳转标签：<router-link to='' [replace]></router-link>
      路由展示：<router-view></router-view>
      路由缓存：<keep-alive include=''></keep-alive>
      to的写法：
        ①：to='/home'
        ②：:to={path, name, query, params}
      include的写法：
        ①：include='home'
        ②：include='['home', 'about']'
    路由配置项：
      ①：path（路径）
      ②：component（组件）
      ③：name（命名）
      ④：children（多级路由）
        注意：
          ①：访问需要写全路径
          ②：多级路由命名不需要写'/'
      ⑤：props（传参）
        传参：
          ①：query方式
            传参方式：
              ①：to={name: 'home', query: {id: 1, age: 18}}
              ②：to="`/home?id=${id}&age=${age}`"
            接收方式：
              this.$route.query.id
          ②：params方式
            传参方式：
              ①：to={name: 'home', params: {id: 1, age: 18}}
              ②：to="`/home/${id}/${age}`"
            配置（router/index.js）：
              path: '/home/:id/:age'
            接收方式：
              this.$route.params.id
          注意：使用params传参不能使用path方式
        prop配置：
          配置方式：
            ①：默认接收params
              props:true
            ②：对象写法
              props:{id: 1, age: 18}
            ③：函数写法
              props($route){id: $route.query.id}
          接收方式：
            props: ['id', 'age']
      ⑥：meta（元数据）
    路由守卫：
      ①前置路由守卫：
        beforeEach((to, from, next)=>{ ... })
      ②后置路由守卫
        afterEach((to, from)=>{ ... })
      ③独享路由守卫
        beforeEntry((to, from, next)=>{ ... })
      ④组件内进入守卫
        beforeRouteEntry((to, from, next)=>{ ... })
      ⑤组件内离开守卫
        beforeRouteLeave((to, from, next)=>{ ... })
    编程式导航：
      ①前进：this.$router.forward()
      ②后退：this.$router.back()
      ③跳转：this.$router.go([number])
      ④推入模式：this.$router.push(options) // options写法和to一致
      ⑤覆盖模式：this.$router.replace(options) // options写法和to一致
    路由缓存：
      <keep-alive include='home'></keep-alive>
      引出两个钩子函数：
        ①：激活钩子：activated(){}
        ②：失活钩子：deactivated(){}
    路由模式：
      历史模式：
        ①push
        ②replace
      工作模式：
        ①hash
        ②history
  */
  // #endregion

// #region vuex（5点）
  /* 
    配置项：
      ①state
        使用：
          ①：this.$store.state['ModuleA/param']
          ②：...mapState('ModuleA', ['param'])
      ②getter
        参数：fun(state)
        使用：
          ①：this.$store.getter['ModuleA/param']
          ②：...mapGetter('ModuleA', ['param'])
      ③action（dispatch）：可以进行异步操作
        参数：fun(context, value)
        使用：
          ①：this.$store.dispatch('ModuleA/fun', params)
          ②：...mapAction('ModuleA', {'fun': test})
      ④mutation（commit）：可以被开发工具捕捉
        参数：fun(state, value)
        使用：
          ①：this.$store.commit('ModuleA/fun', params)
          ②：...mapMutation('ModuleA', {'test': fun})
      ⑤module
        使用：
          import count from './count';
          import person from './person';
          export default new Vuex.Store({
            modules: {
              countAbout:count,
              personAbout:person
            }
          })

  */
// #endregion
