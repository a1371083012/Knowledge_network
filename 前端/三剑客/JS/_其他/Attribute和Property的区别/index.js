let container = document.querySelector('#container');

// 通过Attribute获取属性
console.log(container.getAttribute("class"));
// 通过Property获取属性
console.log(container.className);

// 通过Attribute设置属性
container.setAttribute("class", "main");
// 通过Property设置属性
container.className = "main";

// 通过Attribute移除属性
container.removeAttribute("class");