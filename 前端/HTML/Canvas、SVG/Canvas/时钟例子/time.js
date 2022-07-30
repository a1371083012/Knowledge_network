// canvas语法提示
/** @type {HTMLCanvasElement} */
// 获取canvas标签
const canvas = document.querySelector('#canvas');
// 获取上下文对象
var c = canvas.getContext('2d');

// 绘制一次时钟
var renderClock = function(){
    c.clearRect(0, 0, 800, 600);
    c.save()
    // 将坐标移动到画布的中央
    c.translate(400, 300);
    c.rotate(-2*Math.PI/4);

    c.save();
    // 绘制表盘
    c.beginPath() // 开启路径
    c.lineCap='round';
    c.shadowColor = 'gray';
    c.shadowOffsetX = 8;
    c.shadowOffsetY = 8;
    c.shadowBlur = 15;
    c.arc(0, 0, 200, 0, 2*Math.PI);
    c.strokeStyle = 'orangered'; // 描边颜色
    c.lineWidth = 10; // 描边宽度
    c.stroke(); // 描边
    c.closePath() // 关闭路径
    c.restore();
    c.save();

    // 绘制分钟/秒种刻度
    for(var i=0; i<60; i++){
        c.beginPath() // 开启路径
        c.moveTo(180, 0);
        c.lineTo(190, 0);
        c.lineWidth = 2;
        c.strokeStyle = 'black'; // 描边颜色
        c.stroke(); // 描边
        c.closePath() // 关闭路径
        c.rotate(2*Math.PI/60); // 画布旋转
    }
    c.restore();
    c.save();

    // 绘制时钟刻度
    for(var i=0; i<12; i++){
        c.beginPath() // 开启路径
        c.moveTo(180, 0);
        c.lineTo(200, 0);
        c.lineWidth = 10;
        c.strokeStyle = 'black'; // 描边颜色
        c.stroke(); // 描边
        c.closePath() // 关闭路径
        c.rotate(2*Math.PI/12); // 画布旋转
    }
    c.restore();
    c.save();

    // 绘制时钟数字
    c.rotate(2*Math.PI/4);
    c.beginPath() // 开启路径
    c.font = '32px 楷体';
    c.fillStyle = '#000';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    for(var n=1; n<=12; n++){
        var theta = (n - 3) * (Math.PI * 2) / 12;
        var x = 230 * 0.7 * Math.cos(theta);
        var y = 230 * 0.7 * Math.sin(theta);
        c.fillText(n, x, y);
    }
    c.closePath() // 关闭路径
    c.restore();
    c.save();

    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    hour = hour>12?hour-12:hour;
    console.log(hour+':'+min+':'+sec);

    // 绘制分针
    c.beginPath() // 开启路径
    // 根据分针时间进行旋转
    c.rotate( 2*Math.PI/60*min + 2*Math.PI/60*(sec/60));
    c.lineCap='round';
    c.shadowColor = 'gray';
    c.shadowOffsetX = 8;
    c.shadowOffsetY = 8;
    c.shadowBlur = 7;
    c.moveTo(-20, 0);
    c.lineTo(140, 0);
    c.lineWidth = 5;
    c.strokeStyle = 'black'; // 描边颜色
    c.stroke(); // 描边
    c.closePath() // 关闭路径
    c.rotate(Math.PI/6); // 画布旋转
    c.restore();
    c.save();

    // 绘制时针
    c.beginPath() // 开启路径
    // 根据秒针时间进行旋转
    c.rotate(2*Math.PI/12*hour + 2*Math.PI/12*(min/60));
    c.lineCap='round';
    c.shadowColor = 'gray';
    c.shadowOffsetX = 8;
    c.shadowOffsetY = 8;
    c.shadowBlur = 7;
    c.moveTo(-15, 0);
    c.lineTo(100, 0);
    c.lineWidth = 8;
    c.strokeStyle = 'black'; // 描边颜色
    c.stroke(); // 描边
    c.closePath() // 关闭路径
    c.rotate(Math.PI/6); // 画布旋转
    c.restore();
    c.save();

    // 绘制秒针
    c.beginPath() // 开启路径
    // 根据秒针时间进行旋转
    c.rotate(2*Math.PI/60*sec);
    c.shadowColor = 'gray';
    c.shadowOffsetX = 8;
    c.shadowOffsetY = 8;
    c.shadowBlur = 7;
    c.moveTo(-30, 0);
    c.lineTo(170, 0);
    c.lineWidth = 2;
    c.strokeStyle = 'orangered'; // 描边颜色
    c.stroke(); // 描边
    c.closePath() // 关闭路径
    c.rotate(Math.PI/6); // 画布旋转
    c.restore();
    c.save();

    // 绘制大圆圈
    c.beginPath() // 开启路径
    c.arc(0, 0, 10, 0, 2*Math.PI);
    c.fillStyle = 'orangered';
    c.fill();
    c.closePath() // 关闭路径

    // 绘制小圆圈
    c.beginPath() // 开启路径
    c.arc(0, 0, 7, 0, 2*Math.PI);
    c.fillStyle = 'black';
    c.fill();
    c.closePath() // 关闭路径
    c.restore();
    c.restore();
}

// 每秒刷新一次
setInterval(()=>{
    renderClock();
},1000);