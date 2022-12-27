console.log("_.clamp");
console.log(_.clamp(-10, 2, 6));// => -5
console.log(_.clamp(10, -5, 5));// => 5

console.log("_.inRange");
console.log(_.inRange(3, 2, 4));// => true
console.log(_.inRange(4, 8));// => true
console.log(_.inRange(4, 2));// => false
console.log(_.inRange(2, 2));// => false
console.log(_.inRange(1.2, 2));// => true
console.log(_.inRange(5.2, 4));// => false
console.log(_.inRange(-3, -2, -6));// => true

console.log("_.random");
console.log(_.random(0, 5));// => an integer between 0 and 5
console.log(_.random(5));// => also an integer between 0 and 5
console.log(_.random(5, true));// => a floating-point number between 0 and 5
console.log(_.random(1.2, 5.2));// => a floating-point number between 1.2 and 5.2
