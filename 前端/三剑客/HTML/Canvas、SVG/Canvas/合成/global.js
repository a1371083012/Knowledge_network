// canvas语法提示
/** @type {HTMLCanvasElement} */
// 获取canvas标签
const canvas = document.querySelector('#canvas');
// 获取上下文对象
var c = canvas.getContext('2d');

// 第一个红色矩形为图像
c.fillStyle = 'hotpink';
c.fillRect(100, 100, 200, 200);

c.globalCompositeOperation = 'destination-out';
console.log(c);
/* 
    source-over：      默认。在目标图像上显示源图像。
    source-atop	 ：    在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。
    source-in：        在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的。
    source-out：       在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。
    destination-over： 在源图像上方显示目标图像。
    destination-atop： 在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。
    destination-in：   在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。
    destination-out：  在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
    lighter：          显示源图像 + 目标图像。
    copy：             显示源图像。忽略目标图像。
    xor：              使用异或操作对源图像与目标图像进行组合。
*/


// 第二个蓝色矩形为源图像
c.fillStyle = 'deepskyblue';
c.fillRect(200, 200, 200, 200);