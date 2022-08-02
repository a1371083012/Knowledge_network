var data = [{
    data: "星期一",
    order: "1000"
},
{
    data: "星期二",
    order: "500"
},
{
    data: "星期三",
    order: "700"
},
{
    data: "星期四",
    order: "1600"
},
{
    data: "星期五",
    order: "1200"
},
{
    data: "星期六",
    order: "1000"
},
{
    data: "星期日",
    order: "1300"
}];
var xkedu = document.querySelector('#xkedu');
var ykedu = document.querySelector('#ykedu');
var barList = document.querySelector('#barList');
var jgLength = 700 / data.length;
var yLength = 450 / 15;
console.log(jgLength);
for (var i = 1; i <= data.length; i++) {
    var lineDom = document.createElement("line");
    lineDom.className = "axis";
    lineDom.setAttribute("x1", 100 + jgLength * i);
    lineDom.setAttribute("y1", 600);
    lineDom.setAttribute("x2", 100 + jgLength * i);
    lineDom.setAttribute("y2", 580);
    xkedu.innerHTML += (lineDom.outerHTML + `<text x="${75 + jgLength * i}" y="620">${data[i - 1].data}</text>`);
    var color = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`
    barList.innerHTML+= `<rect x="${75 + jgLength * i}" y="${600-(yLength*(data[i - 1].order/100))}" width="50" height="${yLength*(data[i - 1].order/100)}" fill="${color}"></rect>`;
}
for (var j = 1; j <= 15; j++) {
    var lineDom = document.createElement("line");
    lineDom.className = "axis";
    lineDom.setAttribute("x1", 100);
    lineDom.setAttribute("y1", 600 - yLength * j);
    lineDom.setAttribute("x2", 120);
    lineDom.setAttribute("y2", 600 - yLength * j);
    ykedu.innerHTML += (lineDom.outerHTML + `<text x="50" y="${600 - yLength * j}">${100 * j}</text>`);
}