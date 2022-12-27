let box = document.querySelector("#box");
console.log("offsetHeight:" + box.offsetHeight); // 容器的高
console.log("offsetWidth:" + box.offsetWidth); // 容器的宽
console.log("offsetLeft:" + box.offsetLeft); // 容器相对父辈元素左边缘的距离
console.log("offsetTop:" + box.offsetTop); // 容器相对父辈元素顶部的距离
console.log("");
console.log("clientHeight:" + box.clientHeight); // 内部的高
console.log("clientWidth:" + box.clientWidth); // 内部的宽
console.log("clientLeft:" + box.clientLeft); // 内部相对容器元素左边缘的距离
console.log("clientTop:" + box.clientTop); // 内部相对容器元素顶部的距离
console.log("");
console.log("scrollHeight:" + box.scrollHeight); // 内部的高（包括内容溢出）
console.log("scrollWidth:" + box.scrollWidth); // 内部的宽（包括内容溢出）

box.onclick = function(e){
    console.log("");
    console.log("offsetX:" + e.offsetX); // 鼠标相对于事件源x轴的位置
    console.log("offsetY:" + e.offsetY); // 鼠标相对于事件源y轴的位置
    console.log("clientX:" + e.clientX); // 鼠标相对于浏览器窗口x轴的位置
    console.log("clientY:" + e.clientY); // 鼠标相对于浏览器窗口y轴的位置
    console.log("pageX:" + e.pageX); // 鼠标相对于页面（含滚动条）x轴的位置
    console.log("pageY:" + e.pageY); // 鼠标相对于页面（含滚动条）y轴的位置
    console.log("x:" + e.x); // 同clientX
    console.log("y:" + e.y); // 同clientY
    console.log("screenX:" + e.screenX); // 鼠标相对于显示器屏幕x轴的位置
    console.log("screenY:" + e.screenY); // 鼠标相对于显示器屏幕y轴的位置
}