/* 知识点 */
// #region ES6
  /* 
    ES6常用：①let和const②解构赋值③字符串相关（模板字符串）④数组相关（拓展运算符）
      ⑤函数相关（箭头函数）⑥对象相关（简写）⑦Symbol类型⑧Proxy和Reflect对象
      ⑨Promise、Async、Generator异步操作⑩for...in、for...of遍历⑪Module模块
      ⑫Class继承
  */
// #endregion

// #region 类型判断
  /* 
    typeof：对于NULL、Array、Object的判断都是为：'object'
    instanceof：主要是判断类型原型链上的归属关系
    constructor：通过构造进行判断，缺点是构造指向是可修改的
    [].prototype.toString.call：相对完美的类型判断
  */
// #endregion

// #region 跨域方式
  /* 
    跨域的方式：
      ①JSONP
      ②后端配置请求头
      ③代理服务器
      ④WebSocket
      ⑤PostMessage
  */
// #endregion

// #region 状态码
  /* 
    1xx：信息状态码
    2xx：200（成功状态码）
    3xx：301（永久重定向）、302|303（临时重定向）、304（资源重定向、缓存）
    4xx：400（请求错误）、401（没有权限）、403（权限不足）、404（找不到资源）
    5xx：500（服务器错误）、502（网关错误）、503（服务器过载）、504（网关超时）
  */
// #endregion

// #region this指向
  /* 
    说明：正常情况谁调用this，this就指向谁
    特别说明：
      ①箭头函数：在声明的时候就已经确定了this指向，指向父级的this指向
      ②call、apply、bind的指向指向第一个参数
      ③new构造中的this指向新创建的对象
      ④对象中函数的this指向当前对象
      ⑤普通函数的this指向window，严格模式下this指向undefined
  */
// #endregion

// #region 去重
  /* 
    完美去重：①Map②Set③includes
    不完美去重：①splice②遍历=③遍历indexOf④对象方法
    注意：
      ①：==和===不能区分NaN
      ②：indexOf不能检测出NaN
      ③：对象不能检测出"true"、"false"和NaN
  */
// #endregion

/* 手写 */
// #region 防抖函数(debounce)、节流函数(throttle)
let btn = document.getElementById('btn')
btn.addEventListener('click', debounce(say))
function say(){
  console.log('Hello');
}

// 防抖函数
function debounce(fn, delay = 1000){
  let time = null
  return (...arg)=>{
    if(time != null)clearTimeout(time) 
    time = setTimeout(()=>{
      fn.apply(this, arg)
    }, delay)
  }
}

// 节流函数 - 定时器+锁
function throttle1(fn, delay = 1000){
  let lock = true
  return (...arg)=>{
    if(lock){
      lock = false
      fn.apply(this, arg)
      setTimeout(()=>{
        lock = true
      }, delay)
    }
  }
}

// 节流函数 - 时间戳
function throttle2(fn, delay = 1000){
  let time = 0
  return (...arg)=>{
    let now = Date.now()
    if(now - time > delay){
      fn.apply(this, arg)
      time = now
    }
  }
}
// #endregion

// #region 深拷贝
  /* 
    浅拷贝：
      完全浅拷贝：=
      不完全浅拷贝：
        数组：concat、splice、循环push
        通用：Object.assign、...拓展运算符
    深拷贝：
      ①JSON.parse(JSON.stringify())
        缺点：不能拷贝Function、循环引用，遇undefined报错
      ②手写深拷贝
  */
  
  function deepClone(obj, map){
    // 1.判断obj的类型
    if(typeof obj !== 'object' || obj === null){return obj}
    // 2.初始化map
    if(!map){map = new WeakMap()}
    // 3.判断是否循环引用
    if(map.has(obj)){return obj}
    // 4.将obj写入map
    map.set(obj, 1)
    // 5.根据obj类型创建一个新的对象
    let newObj = obj instanceof Array? [] : {}

    // 6.开始递归赋值
    for(let key in obj){
      let value = obj[key]
      newObj[key] = (typeof value === 'object')? deepClone(value, map) : value
    }
    // 7.返回newObj
    return newObj;
  }
// #endregion

// #region 原生ajax
// 1.new一个XMLHttpRequest构造
let xhr = new XMLHttpRequest()
// 2.打开通道
xhr.open('get', 'localhost:8080/index', true)
// 3.发送请求
xhr.send()
// 4.接收请求
xhr.onreadystatechange() = function (){
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      console.log(xhr.responseText);
    }else{
      console.log(xhr.status);
    }
  }
}
// #endregion

// #region 继承方式

  // #region 构造继承
  // function Animal(name){
  //   this.name = name
  //   this.speak = function(){
  //     console.log(`${this.name}在叫`);
  //   }
  // }
  // function Dog(name, age){
  //   this.age = age
  //   Animal.call(this, name)
  //   this.walk = function(){
  //     console.log(`${this.name}在走`);
  //   }
  // }

  // let xiaohua = new Dog('小花', 18)
  // console.log(xiaohua);
  // xiaohua.speak()
  // xiaohua.walk()

  // let xiaobai = new Dog('小白', 63)
  // console.log(xiaobai);
  // xiaobai.speak()
  // xiaobai.walk()
  // #endregion
  // #region 原型链继承
  // function Animal(name){
  //   this.name = name
  //   this.speak = function(){
  //     console.log(`${this.name}在叫`);
  //   }
  // }
  // function Dog(age){
  //   this.age = age
  //   this.walk = function(){
  //     console.log(`${this.name}在走`);
  //   }
  // }
  // Dog.prototype = new Animal('小花')
  // let xiaohua = new Dog(18)
  // console.log(xiaohua);
  // xiaohua.speak()
  // xiaohua.walk()
  
  // Dog.prototype = new Animal('小白')
  // let xiaobai = new Dog(63)
  // console.log(xiaobai);
  // xiaobai.speak()
  // xiaobai.walk()
  // #endregion
  // #region 组合继承
  // function Animal(name){
  //   this.name = name
  //   this.speak = function(){
  //     console.log(`${this.name}在叫`);
  //   }
  // }
  // function Dog(name, age){
  //   Animal.call(this, name)
  //   this.age = age
  //   this.walk = function(){
  //     console.log(`${this.name}在走`);
  //   }
  // }
  // Dog.prototype = new Animal()
  // let xiaohua = new Dog('小花', 18)
  // console.log(xiaohua);
  // xiaohua.speak()
  // xiaohua.walk()
  
  // let xiaobai = new Dog('小白', 63)
  // console.log(xiaobai);
  // xiaobai.speak()
  // xiaobai.walk()
  // #endregion
  // #region 寄生组合继承
  // function Animal(name){
  //   this.name = name
  // }
  // Animal.prototype.speak = function (){
  //   console.log(`${this.name}在叫`);
  // }
  // function Dog(name, age){
  //   Animal.call(this, name)
  //   this.age = age
  // }
  // Object.setPrototypeOf(Dog.prototype, Animal.prototype)
  // Dog.prototype.constructor = Dog
  // Dog.prototype.walk = function (){
  //   console.log(`${this.name}在走`);
  // }
  
  // let xiaohua = new Dog('小花', 18)
  // console.log(xiaohua);
  // xiaohua.speak()
  // xiaohua.walk()
  
  // let xiaobai = new Dog('小白', 63)
  // console.log(xiaobai);
  // xiaobai.speak()
  // xiaobai.walk()
  // #endregion
  // #region class继承
  // class Animal{
  //   constructor(name){
  //     this.name = name
  //     this.speak = function (){
  //       console.log(`${this.name}在叫`);
  //     }
  //   }
  // }
  // class Dog extends Animal{
  //   constructor(name, age){
  //     super(name)
  //     this.age = age
  //     this.walk = function (){
  //       console.log(`${this.name}在走`);
  //     }
  //   }
  // }
  // let xiaohua = new Dog('小花', 18)
  // console.log(xiaohua);
  // xiaohua.speak()
  // xiaohua.walk()
  
  // let xiaobai = new Dog('小白', 63)
  // console.log(xiaobai);
  // xiaobai.speak()
  // xiaobai.walk()
  // #endregion

// #endregion

// #region new关键字
function newFun(obj, ...arg){
  // 1.创建一个新的对象
  let newObj = {}
  // 2.将该对象的原型隐式指向目标obj的原型
  newObj = Object.create(obj.prototype)
  // 3.将this指向新创建的对象
  let result = obj.apply(newObj, arg)
  // 4.返回新创建的对象
  return (result instanceof Object)? result : newObj
}
// #endregion
