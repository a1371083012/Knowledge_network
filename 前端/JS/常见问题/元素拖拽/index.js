let box = document.querySelector("#box");
let box2 = document.querySelector("#box2");
var divX = 0;
var divY = 0;

// 方式一：原生mouse事件
box.onmousedown = function (e) {
    //鼠标相对于盒子的位置
    var offsetX = e.clientX - box.offsetLeft;
    var offsetY = e.clientY - box.offsetTop;
    //鼠标移动
    document.onmousemove = function (e) {
        box.style.left = e.clientX - offsetX + "px";
        box.style.top = e.clientY - offsetY + "px";
    }
    //鼠标抬起
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

// 方式二：使用H5拖拽API
var x=0, y=0;
box2.ondragstart = function (e) {
    console.log(e);
    //鼠标相对于盒子的位置
    x = e.clientX - box2.offsetLeft;
    y = e.clientY - box2.offsetTop;
}
//鼠标抬起
document.ondragover = function (e) {
    box2.style.left = e.clientX - x + "px";
    box2.style.top = e.clientY - y + "px";
}
