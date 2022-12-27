console.log("_.castArray");
console.log(_.castArray(1));// => [1]
console.log(_.castArray([1, 2, 3]));// => [1, 2, 3]
console.log(_.castArray({ 'a': 1 }));// => [{ 'a': 1 }]
console.log(_.castArray('abc'));// => ['abc']
console.log(_.castArray(null));// => [null]
console.log(_.castArray(undefined));// => [undefined]
console.log(_.castArray());// => []

console.log("_.clone");
var objects = [{ 'a': 1 }, { 'b': 2 }];
var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);// => true

console.log("_.cloneWith");
function customizer(value){if (_.isElement(value)) {return value.cloneNode(true);}};
var el = _.cloneWith(document.body, customizer);
console.log(el === document.body);// => false
console.log(el.nodeName);// => 'BODY'
// console.log(el.childNodes.length);// => 4

console.log("_.cloneDeep");
var objects = [{ 'a': 1 }, { 'b': 2 }];
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);// => false

console.log("_.cloneDeepWith");
function customizer(value){if (_.isElement(value)) {return value.cloneNode(true);}};
var el = _.cloneDeepWith(document.body, customizer);
console.log(el === document.body);// => false
console.log(el.nodeName);// => 'BODY'
// console.log(el.childNodes.length);// => 4ß

console.log("_.conformsTo");
var object = { 'a': 1, 'b': 2 };
console.log(_.conformsTo(object, { 'b': function(n) { return n > 1; } }));// => true
console.log(_.conformsTo(object, { 'b': function(n) { return n > 2; } }));// => false

console.log("_.eq");
var object = { 'a': 1 };
var other = { 'a': 1 };
console.log(_.eq(object, object));// => true
console.log(_.eq(object, other));// => false
console.log(_.eq('a', 'a'));// => true
console.log(_.eq('a', Object('a')));// => false
console.log(_.eq(NaN, NaN));// => true

console.log("_.gt");
console.log(_.gt(3, 1));// => true
console.log(_.gt(3, 3));// => false
console.log(_.gt(1, 3));// => false

console.log("_.gte");
console.log(_.gte(3, 1));// => true
console.log(_.gte(3, 3));// => true
console.log(_.gte(1, 3));// => false

console.log("_.isArguments");
console.log(_.isArguments(function() { return arguments; }()));// => true
console.log(_.isArguments([1, 2, 3]));// => false

console.log("_.isArray");
console.log(_.isArray([1, 2, 3]));// => true
console.log(_.isArray(document.body.children));// => false
console.log(_.isArray('abc'));// => false
console.log(_.isArray(_.noop));// => false

console.log("_.isArrayBuffer");
console.log(_.isArrayBuffer(new ArrayBuffer(2)));// => true
console.log(_.isArrayBuffer(new Array(2)));// => false

console.log("_.isArrayLike");
console.log(_.isArrayLike([1, 2, 3]));// => true
console.log(_.isArrayLike(document.body.children));// => true
console.log(_.isArrayLike('abc'));// => true
console.log(_.isArrayLike(_.noop));// => false

console.log("_.isArrayLikeObject");
console.log(_.isArrayLikeObject([1, 2, 3]));// => true
console.log(_.isArrayLikeObject(document.body.children));// => true
console.log(_.isArrayLikeObject('abc'));// => false
console.log(_.isArrayLikeObject(_.noop));// => false

console.log("_.isBoolean");
console.log(_.isBoolean(false));// => true
console.log(_.isBoolean(null));// => false

console.log("_.isBuffer");
// console.log(_.isBuffer(new Buffer(2)));// => true
console.log(_.isBuffer(new Uint8Array(2)));// => false

console.log("_.isDate");
console.log(_.isDate(new Date));// => true
console.log(_.isDate('Mon April 23 2012'));// => false

console.log("_.isElement");
console.log(_.isElement(document.body));// => true
console.log(_.isElement('<body>'));// => false

console.log("_.isEmpty");
console.log(_.isEmpty(null));// => true
console.log(_.isEmpty(true));// => true
console.log(_.isEmpty(1));// => true
console.log(_.isEmpty([1, 2, 3]));// => false
console.log(_.isEmpty({ 'a': 1 }));// => false

console.log("_.isEqual");
var object = { 'a': 1 };
var other = { 'a': 1 };
console.log(_.isEqual(object, other));// => true
console.log(object === other);// => false

console.log("_.isEqualWith");
function isGreeting(value) {return /^h(?:i|ello)$/.test(value);}  
function customizer(objValue, othValue) {
    if (isGreeting(objValue) && isGreeting(othValue)) {return true;}
}
var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];
console.log(_.isEqualWith(array, other, customizer));// => true

console.log("_.isError");
console.log(_.isError(new Error));// => true
console.log(_.isError(Error));// => false

console.log("_.isFinite");
console.log(_.isFinite(3));// => true
console.log(_.isFinite(Number.MIN_VALUE));// => true
console.log(_.isFinite(Infinity));// => false
console.log(_.isFinite('3'));// => false

console.log("_.isNumber");
console.log(_.isNumber(3));// => true
console.log(_.isNumber(Number.MIN_VALUE));// => true
console.log(_.isNumber(Infinity));// => true
console.log(_.isNumber('3'));// => false

console.log("_.isFunction");
console.log(_.isFunction(_));// => true
console.log(_.isFunction(/abc/));// => false

console.log("_.isInteger");
console.log(_.isInteger(3));// => true
console.log(_.isInteger(Number.MIN_VALUE));// => false
console.log(_.isInteger(Infinity));// => false
console.log(_.isInteger('3'));// => false

console.log("_.isLength");
console.log(_.isLength(3));// => true
console.log(_.isLength(Number.MIN_VALUE));// => false
console.log(_.isLength(Infinity));// => false
console.log(_.isLength('3'));// => false

console.log("_.isMap");
console.log(_.isMap(new Map));// => true
console.log(_.isMap(new WeakMap));// => false

console.log("_.isMatch");
var object = { 'a': 1, 'b': 2 };
console.log(_.isMatch(object, { 'b': 2 }));// => true
console.log(_.isMatch(object, { 'b': 1 }));// => false

console.log("_.isMatchWith");
function isGreeting(value) {return /^h(?:i|ello)$/.test(value);}
function customizer(objValue, srcValue) {
    if (isGreeting(objValue) && isGreeting(srcValue)) {return true;}
}
var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };
console.log(_.isMatchWith(object, source, customizer));// => true

console.log("_.isNaN");
console.log(_.isNaN(NaN));// => true
console.log(_.isNaN(new Number(NaN)));// => true
console.log(isNaN(undefined));// => true
console.log(_.isNaN(undefined));// => false

console.log("_.isNil");
console.log(_.isNil(null));// => true
console.log(_.isNil(void 0));// => true
console.log(_.isNil(NaN));// => false

console.log("_.isNull");
console.log(_.isNull(null));// => true
console.log(_.isNull(void 0));// => false

console.log("_.isNative");
console.log(_.isNative(Array.prototype.push));// => true
console.log(_.isNative(_));// => false

console.log("_.isObject");
console.log(_.isObject({}));// => true
console.log(_.isObject([1, 2, 3]));// => true
console.log(_.isObject(_.noop));// => true
console.log(_.isObject(null));// => false

console.log("_.isObjectLike");
console.log(_.isObjectLike({}));// => true
console.log(_.isObjectLike([1, 2, 3]));// => true
console.log(_.isObjectLike(_.noop));// => false
console.log(_.isObjectLike(null));// => false

console.log("_.isPlainObject");
function Foo() {this.a = 1;}
console.log(_.isPlainObject(new Foo));// => false
console.log(_.isPlainObject([1, 2, 3]));// => false
console.log(_.isPlainObject({ 'x': 0, 'y': 0 }));// => true
console.log(_.isPlainObject(Object.create(null)));// => true

console.log("_.isRegExp");
console.log(_.isRegExp(/abc/));// => true
console.log(_.isRegExp('/abc/'));// => false

console.log("_.isSafeInteger");
console.log(_.isSafeInteger(3));// => true
console.log(_.isSafeInteger(Number.MIN_VALUE));// => false
console.log(_.isSafeInteger(Infinity));// => false
console.log(_.isSafeInteger('3'));// => false

console.log("_.isSet");
console.log(_.isSet(new Set));// => true
console.log(_.isSet(new WeakSet));// => false

console.log("_.isString");
console.log(_.isString('abc'));// => true
console.log(_.isString(1));// => false

console.log("_.isSymbol");
console.log(_.isSymbol(Symbol.iterator));// => true
console.log(_.isSymbol('abc'));// => false

console.log("_.isTypedArray");
console.log(_.isTypedArray(new Uint8Array));// => true
console.log(_.isTypedArray([1]));// => false

console.log("_.isUndefined");
console.log(_.isUndefined(void 0));// => true
console.log(_.isUndefined(null));// => false

console.log("_.isWeakMap");
console.log(_.isWeakMap(new WeakMap));// => true
console.log(_.isWeakMap(new Map));// => false

console.log("_.isWeakSet");
console.log(_.isWeakSet(new WeakSet));// => true
console.log(_.isWeakSet(new Set));// => false

console.log("_.toArray");
console.log(_.toArray({ 'a': 1, 'b': 2 }));// => [1, 2]
console.log(_.toArray('abc'));// => ['a', 'b', 'c']
console.log(_.toArray(1212));// => []
console.log(_.toArray(null));// => []

console.log("_.toFinite");
console.log(_.toFinite(3.2));// => 3.2
console.log(_.toFinite(Number.MIN_VALUE));// => 5e-324
console.log(_.toFinite(Infinity));// => 1.7976931348623157e+308
console.log(_.toFinite('3.2'));// => 3.2

console.log("_.toInteger");
console.log(_.toInteger(3.2));// => 3
console.log(_.toInteger(Number.MIN_VALUE));// => 0
console.log(_.toInteger(Infinity));// => 1.7976931348623157e+308
console.log(_.toInteger('3.2'));// => 3

console.log("_.toLength");
console.log(_.toLength(3.2));// => 3
console.log(_.toLength(Number.MIN_VALUE));// => 0
console.log(_.toLength(Infinity));// => 4294967295
console.log(_.toLength('3.2'));// => 3

console.log("_.toNumber");
console.log(_.toNumber(3.2));// => 3.2
console.log(_.toNumber(Number.MIN_VALUE));// => 5e-324
console.log(_.toNumber(Infinity));// => Infinity
console.log(_.toNumber('3.2'));// => 3.2

console.log("_.toPlainObject");
function Foo() {this.b = 2;}
Foo.prototype.c = 3;
console.log(_.assign({ 'a': 1 }, new Foo));// => { 'a': 1, 'b': 2 }
console.log(_.assign({ 'a': 1 }, _.toPlainObject(new Foo)));// => { 'a': 1, 'b': 2, 'c': 3 }

console.log("_.toSafeInteger");
console.log(_.toSafeInteger(3.2));// => 3
console.log(_.toSafeInteger(Number.MIN_VALUE));// => 0
console.log(_.toSafeInteger(Infinity));// => 9007199254740991
console.log(_.toSafeInteger('3.2'));// => 3

console.log("_.toString");
console.log(_.toString(null));// => ''
console.log(_.toString(-0));// => '-0'
console.log(_.toString([1, 2, 3]));// => '1,2,3'