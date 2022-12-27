var data = {text: "你好啊，世界"};
let h3 = document.querySelector("h3");
let input = document.querySelector("input");
function buttonSwitch(){
    console.log(data.text);
}

// #region 单向绑定
// h3.innerText = data.text;
// input.value = data.text;
// input.oninput = function(e){
//     data.text = e.target.value;
//     h3.innerText = e.target.value;
// }
// #endregion

// #region 方式一：通过Object.defineProperty
let value = data.text;
// 利用defineProperty劫持数据
Object.defineProperty(data, "text", {
    get: function(){
        h3.innerText = value;
        input.value = value;
        return value;
    },
    // set方法（模型M）调用的同时修改h3和input显示值（视图V）
    set: function(newValue){
        value = newValue;
        h3.innerText = newValue;
        input.value = newValue;
    },
})
data.text
// 监听input的输入事件，修改input（视图V）值时，同时修改text（模型M）
input.oninput = function(e){
    data.text = e.target.value;
}
// #endregion

// #region 方式二：Proxy数据代理
// const proxy = new Proxy(data, {
//     get(target, key) {
//         proxy.text = target[key];
//     },
//     set: function (target, key, value) {
//         target[key] = value;
//         h3.innerHTML = value;
//         input.value = value;
//     }
// });
// proxy.text
// input.oninput = function(e){
//     proxy.text = e.target.value;
// }
// #endregion

// #region 方式三：触发对象中的get和set
// data = {
//     tempText: "你好啊，世界",
//     get text(){
//         console.log('get');
//         console.log(this);
//         h3.innerHTML = this.tempText;
//         input.value = this.tempText;
//         return this.tempText;
//     },
//     set text(value){
//         console.log('set');
//         h3.innerHTML = value;
//         input.value = value;
//         this.tempText = value;
//     },
// }
// data.text
// input.oninput = function(e){
//     data.text = e.target.value;
// }
// #endregion

// https://blog.csdn.net/qweeryyioop/article/details/121760685


  