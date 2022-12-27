// canvas语法提示
/** @type {HTMLCanvasElement} */
// 获取canvas标签
const canvas = document.querySelector('#canvas');
// 获取刮刮卡标签
const ggk = document.querySelector('#ggk');
// 获取奖品标签
const jp = document.querySelector('.jp');
// 获取上下文对象
var c = canvas.getContext('2d');
// 设置奖品
var arr = [{content:'二等奖：电视机',p:0.2},{content:'一等奖：Iphone13',p:0.1},{content:'三等奖：雨伞',p:0.3},];
var randomNum = Math.random();

// 第一个红色矩形为图像
c.fillStyle = 'darkgray';
c.fillRect(0, 0, 400, 100);
c.font = '28px 微软雅黑';
c.fillStyle = '#fff';
c.fillText('刮刮卡', 150, 50);

// 声明代表当时是否在刮的状态
var isDraw = false;
// canvas鼠标按下事件：开始刮
canvas.onmousedown = ()=>{
    isDraw = true;
}
// canvas鼠标抬起事件：停止刮
canvas.onmouseup = ()=>{
    isDraw = false;
}
// canvas鼠标移动事件：刮卡过程
canvas.onmousemove = e=>{
    if(isDraw){
        c.beginPath();
        var x = e.pageX - ggk.offsetLeft;
        var y = e.pageY - ggk.offsetTop;
        c.globalCompositeOperation = 'destination-out';
        c.arc(x, y, 20, 0, 2*Math.PI);
        c.fill();
        c.closePath();
    }
}

var low=0;
for(var gl of arr){
    if(low<randomNum && randomNum<low+gl.p){
        jp.innerHTML = gl.content;
    }
    low+=gl.p;
}