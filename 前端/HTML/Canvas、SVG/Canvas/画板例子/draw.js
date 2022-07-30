// canvas语法提示
/** @type {HTMLCanvasElement} */
// 获取canvas标签
const canvas = document.querySelector('#canvas');
// 获取上下文对象
var c = canvas.getContext('2d');
// 设置canvas的宽度和高度
canvas.setAttribute("width", canvas.offsetWidth);
canvas.setAttribute("height", canvas.offsetHeight);
var huaban = {
    type: 'pen',
    isDraw: false,
    beginX:0,
    beginY:0,
    lineWidth:8,
    strokeStyle:'black',
    imageData: null,
    penFn: e=>{
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        c.lineTo(x, y);
        c.lineCap = 'round';
        c.lineJoin = 'round';
        c.strokeStyle = huaban.strokeStyle;
        c.lineWidth = huaban.lineWidth;
        c.stroke();
    },
    rectFn: e=>{
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        c.beginPath();
        c.strokeStyle = huaban.strokeStyle;
        c.lineWidth = huaban.lineWidth;
        c.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        if(huaban.imageData!=null){
            c.putImageData(huaban.imageData, 0, 0, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        }
        c.rect(huaban.beginX, huaban.beginY, x-huaban.beginX, y-huaban.beginY);
        c.stroke();
        c.closePath();
    },
    arcFn: e=>{
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        c.beginPath();
        c.strokeStyle = huaban.strokeStyle;
        c.lineWidth = huaban.lineWidth;
        c.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        if(huaban.imageData!=null){
            c.putImageData(huaban.imageData, 0, 0, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        }
        c.arc(huaban.beginX, huaban.beginY,(x-huaban.beginX)>(y-huaban.beginY)?(x-huaban.beginX):(y-huaban.beginY), 0, 2*Math.PI, false);
        c.stroke();
        c.closePath();
    },
    eraserFn: e=>{
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        c.save();
        c.beginPath();
        c.arc(x, y, huaban.lineWidth, 0, Math.PI * 2, false);
        c.clip();
        c.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        c.closePath();
        c.restore();
    },
}

// #region 按钮的点击事件
// 获取绘图按钮
var drawBtn = document.querySelectorAll('.btn');
// 获取线段按钮
var lineWidthBtn = document.querySelectorAll('.lineWidth');
// 画笔点击事件
var pen = document.querySelector('#pen');
pen.onclick = ()=>{
    drawBtn.forEach((item,i)=>{
        item.classList.remove('active');
    });
    huaban.type = 'pen';
    pen.classList.add('active');
}
// 矩形点击事件
var rect = document.querySelector('#rect');
rect.onclick = ()=>{
    drawBtn.forEach((item,i)=>{
        item.classList.remove('active');
    });
    huaban.type = 'rect';
    rect.classList.add('active');
}
// 圆形点击事件
var arc = document.querySelector('#arc');
arc.onclick = ()=>{
    drawBtn.forEach((item,i)=>{
        item.classList.remove('active');
    });
    huaban.type = 'arc';
    arc.classList.add('active');
}
// 橡皮擦点击事件
var eraser = document.querySelector('#eraser');
eraser.onclick = ()=>{
    drawBtn.forEach((item,i)=>{
        item.classList.remove('active');
    });
    huaban.type = 'eraser';
    eraser.classList.add('active');
}
// 清空点击事件
var empty = document.querySelector('#empty');
empty.onclick = ()=>{
    huaban.imageData=null;
    c.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
}
// 下载点击事件
var download = document.querySelector('#download');
download.onclick = ()=>{
    var url = canvas.toDataURL();
    var img = new Image();
    img.src = url;
    var downloadA = document.querySelector('#downloadA')
    downloadA.setAttribute('href',url);
    downloadA.click();
}
// 线段1点击事件
var lineWidth1 = document.querySelector('#lineWidth1');
lineWidth1.onclick = ()=>{
    lineWidthBtn.forEach((item,i)=>{
        item.classList.remove('lineActive');
    });
    huaban.lineWidth = 8;
    lineWidth1.classList.add('lineActive');
}
// 线段2点击事件
var lineWidth2 = document.querySelector('#lineWidth2');
lineWidth2.onclick = ()=>{
    lineWidthBtn.forEach((item,i)=>{
        item.classList.remove('lineActive');
    });
    huaban.lineWidth = 14;
    lineWidth2.classList.add('lineActive');
}
// 线段3点击事件
var lineWidth3 = document.querySelector('#lineWidth3');
lineWidth3.onclick = ()=>{
    lineWidthBtn.forEach((item,i)=>{
        item.classList.remove('lineActive');
    });
    huaban.lineWidth = 20;
    lineWidth3.classList.add('lineActive');
}
// 颜色触发事件
var penColor = document.querySelector('#penColor');
penColor.onchange = ()=>{
    huaban.strokeStyle = penColor.value;
}
// #endregion

// #region 鼠标事件
// 监听鼠标按下事件
canvas.onmousedown = e=>{
    huaban.isDraw = true;
    if(huaban.type=='pen'){
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        c.beginPath();
        c.moveTo(x, y);
    }
    else if(huaban.type=='rect' || huaban.type=='arc' || huaban.type=='eraser'){
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        huaban.beginX = x;
        huaban.beginY = y;
    }
}
// 监听鼠标抬起事件
canvas.onmouseup = ()=>{
    huaban.imageData = c.getImageData(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    huaban.isDraw = false;
    if(huaban.type=='pen'){
        c.closePath();
    }
}
// 监听鼠标移动事件
canvas.onmousemove = (e)=>{
    if(huaban.isDraw){
        huaban[huaban.type+'Fn'](e);
    }
}
// #endregion