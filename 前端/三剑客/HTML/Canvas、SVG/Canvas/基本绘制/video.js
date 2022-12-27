// canvas语法提示
/** @type {HTMLCanvasElement} */
// 获取canvas标签
const canvas = document.querySelector('#canvas');
// 获取video标签
const video = document.querySelector('#video');
// 声明定时器Id
var interId;
// 获取上下文对象
var c = canvas.getContext('2d');
console.log(c);

// 起始路径
c.beginPath();

// 设置视频播放事件
video.onplay = function(){
    interId = setInterval(()=>{
        // 清屏
        c.clearRect(0, 0, 700, 700);
        // 描边
        c.fillRect(0, 0, 700, 700);
        // 绘制视频
        c.drawImage(video, 0, 0, 600, 300);
        // 设置水印
        c.font = "20px 微软雅黑";
        c.strokeStyle = "#000";
        c.strokeText("hello,world!", 50, 50);
    },16)
}
// 设置视频暂停事件
video.onpause = function(){
    clearInterval(interId);
}

// 结束路径
c.closePath();