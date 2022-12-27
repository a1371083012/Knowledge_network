// #region 正常的this：指向window
let fun1 = function(){
    console.log(this);
}
fun1(); // window
console.log('');
// #endregion

// #region 对象中函数的this：指向当前对象
let fun3 = {
    name: '小一',
    fun4: {
        name: '小二',
        show1(){
            console.log(this); // fun4
        },
        show2(){
            let show = function(){
                console.log(this); // window
            }
            show();
        }
    }
}
fun3.fun4.show1();
fun3.fun4.show2();
console.log('');
// #endregion

// #region 箭头函数的this：指向父级
let fun5 = {
    name: '大明',
    fun6: {
        name: '二明',
        show1(){
            console.log(this); // fun6
        },
        show2:()=>{ // 这里使用了箭头函数
            console.log(this); // window
        },
        show3(){
            let fun = function(){
                console.log(this); // window
            }
            fun();
        },
        show4(){
            let fun = ()=>{ // 这里使用了箭头函数
                console.log(this); // fun6
            }
            fun();
        },
        show5:()=>{ // 这里使用了箭头函数
            let fun = ()=>{ // 这里使用了箭头函数
                console.log(this); // window
            }
            fun();
        }
    }
}
fun5.fun6.show1();
fun5.fun6.show2();
fun5.fun6.show3();
fun5.fun6.show4();
fun5.fun6.show5();
console.log('');
// #endregion

// #region 构造函数的this：指向构造函数
function User(name){
    this.name = name;
    this.sex = '男';
    // 这里的speak方法不能写成箭头函数，因为当其他函数使用call(或apply)借用时，箭头函数会改变this指向
    this.speak = function(){
        console.log("你好，" + this.name);
    }
}
let xiaoming = new User("小明");
console.log(xiaoming);
console.log('');
// #endregion

// #region call、apply的this：指向被调用对象
function Admin(name){
    this.name = name;
}
let xiaohong = new Admin("小红");
xiaoming.speak.apply(xiaohong);
// #endregion