data = [
    {name: "小蔡", sex: "男", hobby: "唱"},
    {name: "小徐", sex: "女", hobby: "跳"},
    {name: "小坤", sex: "男", hobby: "rap"}
]

let template = `<ul>`;

for(let info of data){
    template += `<li>名字：${info.name}，性别：${info.sex}，爱好：${info.hobby}</li>`;
}
template += `</ul>`;

let container = document.querySelector(".container");

container.innerHTML = template;