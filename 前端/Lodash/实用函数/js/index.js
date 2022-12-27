console.log("_.attempt");
// Avoid throwing errors for invalid selectors.
var elements = _.attempt(function(selector) {return document.querySelectorAll(selector);}, '>_>');
console.log(elements);
if (_.isError(elements)) {elements = [];}

console.log("_.bindAll");
// var view = {
//     'label': 'docs',
//     'click': function() {
//         console.log('clicked ' + this.label);
//     }
// };
// _.bindAll(view, ['click']);
// jQuery(element).on('click', view.click);// => Logs 'clicked docs' when clicked.

console.log("_.cond");
var func = _.cond([
    [_.matches({ 'a': 1 }),           _.constant('matches A')],
    [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
    [_.stubTrue,                      _.constant('no match')]
]);
console.log(func({ 'a': 1, 'b': 2 }));// => 'matches A'
console.log(func({ 'a': 0, 'b': 1 }));// => 'matches B'
console.log(func({ 'a': '1', 'b': '2' }));// => 'no match'

console.log("_.conforms");
var objects = [{ 'a': 2, 'b': 1 },{ 'a': 1, 'b': 2 }];
console.log(_.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } })));// => [{ 'a': 1, 'b': 2 }]

console.log("_.constant");
var objects = _.times(2, _.constant({ 'a': 1 }));
console.log(objects);// => [{ 'a': 1 }, { 'a': 1 }]
console.log(objects[0] === objects[1]);// => true

console.log("_.defaultTo");
console.log(_.defaultTo(1, 10));// => 1
console.log(_.defaultTo(undefined, 10));// => 10

console.log("_.flow");
function square(n) {return n * n;}
var addSquare = _.flow([_.add, square]);
console.log(addSquare(1, 2));// => 9

console.log("_.flowRight");
function square(n) {return n * n;}
var addSquare = _.flowRight([square, _.add]);
console.log(addSquare(1, 2));// => 9
  
console.log("_.identity");
var object = { 'a': 1 };
console.log(_.identity(object));// => { 'a': 1 }
console.log(_.identity(object) === object);// => true

console.log("_.iteratee");
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
];
console.log(_.filter(users, _.iteratee({ 'user': 'barney', 'active': true })));// => [{ 'user': 'barney', 'age': 36, 'active': true }]
console.log(_.filter(users, _.iteratee(['user', 'fred'])));// => [{ 'user': 'fred', 'age': 40 }]
_.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
    return !_.isRegExp(func) ? iteratee(func) : function(string) {return func.test(string);};
});
console.log(_.filter(['abc', 'def'], /ef/));// => ['def']

console.log("_.matches");
var objects = [
    { 'a': 1, 'b': 2, 'c': 3 },
    { 'a': 4, 'b': 5, 'c': 6 }
];
console.log(_.filter(objects, _.matches({ 'a': 4, 'c': 6 })));// => [{ 'a': 4, 'b': 5, 'c': 6 }]

console.log("_.matchesProperty");
var objects = [
    { 'a': 1, 'b': 2, 'c': 3 },
    { 'a': 4, 'b': 5, 'c': 6 }
];
console.log(_.find(objects, _.matchesProperty('a', 4)));// => [{ 'a': 4, 'b': 5, 'c': 6 }]

console.log("_.method");
var objects = [{ 'a': { 'b': _.constant(2) } },{ 'a': { 'b': _.constant(1) } }];
console.log(_.map(objects, _.method('a.b')));// => [2, 1]
console.log(_.map(objects, _.method(['a', 'b'])));// => [2, 1]

console.log("_.methodOf");
var array = _.times(3, _.constant), object = { 'a': array, 'b': array, 'c': array };
console.log(_.map(['a[2]', 'c[0]'], _.methodOf(object)));// => [2, 0]
console.log(_.map([['a', '2'], ['c', '0']], _.methodOf(object)));// => [2, 0]

console.log("_.mixin");
function vowels(string) {return _.filter(string, function(v) {return /[aeiou]/i.test(v);});}
_.mixin({ 'vowels': vowels });
console.log(_.vowels('fred'));// => ['e']
console.log(_('fred').vowels().value());// => ['e']
_.mixin({ 'vowels': vowels }, { 'chain': false });
console.log(_('fred').vowels());// => ['e']
  
console.log("_.noConflict");
// var lodash = _.noConflict();

console.log("_.noop");
console.log(_.times(2, _.noop));// => [undefined, undefined]

console.log("_.nthArg");
var func = _.nthArg(1);
console.log(func('a', 'b', 'c', 'd'));// => 'b'
var func = _.nthArg(-2);
console.log(func('a', 'b', 'c', 'd'));// => 'c'

console.log("_.over");
var func = _.over([Math.max, Math.min]);
console.log(func(1, 2, 3, 4));// => [4, 1]

console.log("_.overEvery");
var func = _.overEvery([Boolean, isFinite]);
console.log(func('1'));// => true
console.log(func(null));// => false
console.log(func(NaN));// => false

console.log("_.overSome");
var func = _.overSome([Boolean, isFinite]);
console.log(func('1'));// => true
console.log(func(null));// => true
console.log(func(NaN));// => false

console.log("_.property");
var objects = [{ 'a': { 'b': 2 } },{ 'a': { 'b': 1 } }];
console.log(_.map(objects, _.property('a.b')));// => [2, 1]
console.log(_.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b'));// => [1, 2]

console.log("_.propertyOf");
var array = [0, 1, 2], object = { 'a': array, 'b': array, 'c': array };
console.log(_.map(['a[2]', 'c[0]'], _.propertyOf(object)));// => [2, 0]
console.log(_.map([['a', '2'], ['c', '0']], _.propertyOf(object)));// => [2, 0]

console.log("_.range");
console.log(_.range(4));// => [0, 1, 2, 3]
console.log(_.range(-4));// => [0, -1, -2, -3]
console.log(_.range(1, 5));// => [1, 2, 3, 4]
console.log(_.range(0, 20, 5));// => [0, 5, 10, 15]
console.log(_.range(0, -4, -1));// => [0, -1, -2, -3]
console.log(_.range(1, 4, 0));// => [1, 1, 1]
console.log(_.range(0));// => []
 
console.log("_.rangeRight");
console.log(_.rangeRight(4));// => [3, 2, 1, 0]
console.log(_.rangeRight(-4));// => [-3, -2, -1, 0]
console.log(_.rangeRight(1, 5));// => [4, 3, 2, 1]
console.log(_.rangeRight(0, 20, 5));// => [15, 10, 5, 0]
console.log(_.rangeRight(0, -4, -1));// => [-3, -2, -1, 0]
console.log(_.rangeRight(1, 4, 0));// => [1, 1, 1]
console.log(_.rangeRight(0));// => []

console.log("_.runInContext");
_.mixin({ 'foo': _.constant('foo') });
var lodash = _.runInContext();
lodash.mixin({ 'bar': lodash.constant('bar') });
console.log(_.isFunction(_.foo));// => true
console.log(_.isFunction(_.bar));// => false
console.log(_.isFunction(lodash.foo));// => false
console.log(_.isFunction(lodash.bar));// => true
// 使用 `context` 模拟 `Date#getTime` 调用 `_.now`
// var stubbed = _.runInContext({'Date': function() {return { 'getTime': stubGetTime };}});
// 或者在 Node.js 中创建一个更高级的 `defer`
// var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;

console.log("_.stubArray");
var arrays = _.times(2, _.stubArray);
console.log(arrays);// => [[], []]
console.log(arrays[0] === arrays[1]);// => false

console.log("_.stubFalse");
console.log(_.times(2, _.stubFalse));// => [false, false]

console.log("_.stubObject");
var objects = _.times(2, _.stubObject);
console.log(objects);// => [{}, {}]
console.log(objects[0] === objects[1]);// => false

console.log("_.stubString");
var objects = _.times(2, _.stubString);
console.log(objects);// => ['', '']

console.log("_.stubTrue");
console.log(_.times(2, _.stubTrue));// => [true, true]
  
console.log("_.times");
console.log(_.times(3, String));// => ['0', '1', '2']
console.log(_.times(4, _.constant(0)));// => [0, 0, 0, 0]

console.log("_.toPath");
console.log(_.toPath('a.b.c'));// => ['a', 'b', 'c']
console.log(_.toPath('a[0].b.c'));// => ['a', '0', 'b', 'c']

console.log("_.uniqueId");
console.log(_.uniqueId('contact_'));// => 'contact_104'
console.log(_.uniqueId());// => '105'