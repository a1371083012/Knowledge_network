function sum(){
    var result = 0;
    for(var i = 0;i<arguments.length;i++){
        result+=arguments[i];
    }
    return result;
}
window.onload = function(){
    console.log(sum(1,2,3,4,5,6,7,9,44));
}