console.log("_.add");
console.log(_.add(6, 4));// => 10

console.log("_.subtract");
console.log(_.subtract(6, 4));// => 2

console.log("_.multiply");
console.log(_.multiply(6, 4));// => 24

console.log("_.divide");
console.log(_.divide(6, 4));// => 1.5

console.log("_.floor");
console.log(_.floor(4.006));// => 4
console.log(_.floor(0.046, 2));// => 0.04
console.log(_.floor(4060, -2));// => 4000

console.log("_.ceil");
console.log(_.ceil(4.006));// => 5
console.log(_.ceil(6.004, 2));// => 6.01
console.log(_.ceil(6040, -2));// => 6100

console.log("_.round");
console.log(_.round(4.006));// => 4
console.log(_.round(4.006, 2));// => 4.01
console.log(_.round(4.006, -2));// => 4100

console.log("_.min");
console.log(_.min([4, 2, 8, 6]));// => 2
console.log(_.min([]));// => undefined

console.log("_.minBy");
var objects = [{ 'n': 1 }, { 'n': 2 }];
console.log(_.minBy(objects, function(o) { return o.n; }));// => { 'n': 1 }
console.log(_.minBy(objects, 'n'));// => { 'n': 1 }

console.log("_.max");
console.log(_.max([4, 2, 8, 6]));// => 8
console.log(_.max([]));// => undefined

console.log("_.maxBy");
var objects = [{ 'n': 1 }, { 'n': 2 }];
console.log(_.maxBy(objects, function(o) { return o.n; }));// => { 'n': 2 }
console.log(_.maxBy(objects, 'n'));// => { 'n': 2 }

console.log("_.mean");
console.log(_.mean([4, 2, 8, 6]));// => 5

console.log("_.meanBy");
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
console.log(_.meanBy(objects, function(o) { return o.n; }));// => 5
console.log(_.meanBy(objects, 'n'));// => 5

console.log("_.sum");
console.log(_.sum([4, 2, 8, 6]));// => 20

console.log("_.sumBy");
var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
console.log(_.sumBy(objects, function(o) { return o.n; }));// => 20
console.log(_.sumBy(objects, 'n'));// => 20