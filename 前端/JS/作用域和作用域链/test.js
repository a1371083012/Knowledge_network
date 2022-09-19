var a=1;
console.log(a); // 11



function fun(){
    var b=2;
    console.log(b); // 22
}
fun();
console.log(b); // undefined



function f1(){
    var c = 3;
    function f2(){
        c = 4;
        console.log(c); // 4
    }
    f2();
    console.log(c); // 4
}
f1();
console.log(c); // undefined



let d = 5;
function f3(){
    d = 6;
    function f4(){
        d = 7;
        console.log(d); // 7
    }
    f4();
    console.log(d); // 7
}
f3();
console.log(d); // 7