var e = document.getElementById("e");
var f = document.getElementById("f");
var flag1 = true;
var flag2 = true;
var left1 = 0;
var left2 = 0;
var num1 = 0;
var num2 = 0;
var s1 = 0;
var s2 = 0;
let requestAnimationFrameId;

function render1(dom) {
    if(flag1 == true){
        if(left1>=100){
            flag1 = false
        }
        dom.style.left = ` ${left1++}px`
    }else{
        if(left1<=0){
            flag1 = true
        }
        dom.style.left = ` ${left1--}px`
    }
}
function render2(dom) {
    if(flag2 == true){
        if(left2>=100){
            flag2 = false
        }
        dom.style.left = ` ${left2++}px`
    }else{
        if(left2<=0){
            flag2 = true
        }
        dom.style.left = ` ${left2--}px`
    }
}

setInterval(function(){
    render1(e);
    num1++;
    if(num1%60==0){
        console.log("setInterval："+(++s1));
    }
},1000/60);

//requestAnimationFrame效果
(function animloop() {
    render2(f);
    num2++;
    if(num2%60==0){
        console.log("requestAnimationFrame："+(++s2));
    }
    requestAnimationFrameId = window.requestAnimationFrame(animloop);
})();

//停止requestAnimationFrame运行
// cancelAnimationFrame(requestAnimationFrameId);