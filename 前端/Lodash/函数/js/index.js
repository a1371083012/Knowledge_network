var users1 = [
    { 'user': 'jack',    'active': false,  'id': 001},
    { 'user': 'rose',    'active': true,   'id': 002},
    { 'user': 'shy',     'active': false,  'id': 003},
    { 'user': 'mark',    'active': false,  'id': 004},
    { 'user': 'barney',  'active': true,   'id': 005},
    { 'user': 'fred',    'active': false,  'id': 006},
    { 'user': 'pebbles', 'active': false,  'id': 007}
];
var done, arr1=[], arr2=[] ,object1={}, object2={};

console.log("_.before");
arr1 = ['profile', 'settings', 'mark', 'jack', 'rose'];
done = _.before(3, ()=>{console.log('click!');});
_.forEach(arr1, (_, index)=>{console.log(index);done()});// => 0, 'click!', 1, 'click!', 2, 3, 4

console.log("_.after");
arr1 = ['profile', 'settings', 'mark'];
done = _.after(arr1.length, ()=>{console.log('done saving!');});
_.forEach(arr1, (_, index)=>{console.log(index);done()});// => 0, 1, 2, 'done saving!'

console.log("_.ary");
arr1 = ['6', '8', '7', '3', '2', '5', '10'];
console.log(_.map(arr1, _.ary(parseInt, 1)));// => [6, 8, 7, 3, 2, 5, 10]

console.log("_.unary");
arr1 = ['6', '8', '7', '3', '2', '5', '10'];
console.log(_.map(arr1, _.unary(parseInt)));// => [6, 8, 7, 3, 2, 5, 10]

console.log("_.bind");
var greet = function(greeting, punctuation) {return greeting + ' ' + this.user + punctuation;};
object1 = { 'user': 'fred' };
var bound = _.bind(greet, object1, 'hi');
console.log(bound('!'));// => 'hi fred!'
var bound = _.bind(greet, object1, _, '!');
console.log(bound('hi'));// => 'hi fred!'

console.log("_.bindKey");
var object1 = {
    'user': 'fred',
    'greet': function(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }
};
var bound = _.bindKey(object1, 'greet', 'hi');
console.log(bound('!'));// => 'hi fred!'
object1.greet = function(greeting, punctuation) {return greeting + 'ya ' + this.user + punctuation;};
console.log(bound('!'));// => 'hiya fred!'
var bound = _.bindKey(object1, 'greet', _, '!');
console.log(bound('hi'));// => 'hiya fred!'

console.log("_.curry");
var abc = function(a, b, c) {return [a, b, c];};
var curried = _.curry(abc);
console.log(curried(1)(2)(3));// => [1, 2, 3]
console.log(curried(1, 2)(3));// => [1, 2, 3]
console.log(curried(1, 2, 3));// => [1, 2, 3]
console.log(curried(1)(_, 3)(2));// => [1, 2, 3]
  
console.log("_.debounce");
// ??????????????????????????????????????????????????????
// jQuery(window).on('resize', _.debounce(calculateLayout, 150));
// // ???????????? `sendMail` ?????????????????????
// jQuery(element).on('click', _.debounce(sendMail, 300, {
//   'leading': true,
//   'trailing': false
// }));
// // ?????? `batchLog` ??????1????????????1?????????????????????
// var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
// var source = new EventSource('/stream');
// jQuery(source).on('message', debounced);
// // ???????????? trailing ??????????????????
// jQuery(window).on('popstate', debounced.cancel);

console.log("_.defer");
_.defer(function(text) {console.log(text);}, 'deferred');// => ???????????????????????? deferred

console.log("_.delay");
_.delay(function(text) {console.log(text);}, 1000, 'later');// => ??????????????? 'later'???

console.log("_.flip");
var flipped = _.flip(function() {return _.toArray(arguments);});
console.log(flipped('a', 'b', 'c', 'd'));// => ['d', 'c', 'b', 'a']

console.log("_.memoize");
var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };
var values = _.memoize(_.values);
console.log(values(object));// => [1, 2]
console.log(values(other));// => [3, 4]
object.a = 2;
console.log(values(object));// => [1, 2]
// ?????????????????????
values.cache.set(object, ['a', 'b']);
console.log(values(object));// => ['a', 'b']
// ?????? `_.memoize.Cache`???
_.memoize.Cache = WeakMap;

console.log("_.negate");
function isEven(n) {return n % 2 == 0;}
console.log(_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven)));// => [1, 3, 5]

console.log("_.once");
var initialize = _.once(()=>{console.log("???????????????")});
initialize();// ?????????????????????
initialize();// ???????????????

console.log("_.overArgs");
function doubled(n) {return n * 2;}
function square(n) {return n * n;}
var func = _.overArgs((x, y)=>{return [x, y];}, [square, doubled]);
console.log(func(9, 3));// => [81, 6]
console.log(func(10, 5));// => [100, 10]

console.log("_.partial");
var greet = function(greeting, name) {return greeting + ' ' + name;};
var sayHelloTo = _.partial(greet, 'hello');
console.log(sayHelloTo('fred'));// => 'hello fred'
// ?????????????????????
var greetFred = _.partial(greet, _, 'fred');
console.log(sayHelloTo('hi'));// => 'hi fred'

console.log("_.partialRight");
var greet = function(greeting, name) {return greeting + ' ' + name;};
var greetFred = _.partialRight(greet, 'fred');
console.log(sayHelloTo('hi'));// => 'hi fred'
// ?????????????????????
var sayHelloTo = _.partialRight(greet, 'hello', _);
console.log(sayHelloTo('fred'));// => 'hello fred'

console.log("_.rearg");
var rearged = _.rearg((a, b, c)=>{return [a, b, c];}, [2, 0, 1]);
console.log(rearged('b', 'c', 'a'));// => ['a', 'b', 'c']

console.log("_.rest");
var say = _.rest((what, names)=>{
    return what + ' ' + _.initial(names).join(', ') +(_.size(names) > 1 ? ', & ' : '') + _.last(names);
});
console.log(say('hello', 'fred', 'barney', 'pebbles'));// => 'hello fred, barney, & pebbles'

console.log("_.spread");
var say = _.spread((who, what)=>{return who + ' says ' + what;});
console.log(say(['fred', 'hello']));// => 'fred says hello'
var numbers = Promise.all([Promise.resolve(40),Promise.resolve(36)]);
console.log(numbers.then(_.spread(function(x, y) {return x + y;})));// => a Promise of 76

console.log("_.wrap");
var p = _.wrap(_.escape, (func, text)=>{return '<p>' + func(text) + '</p>';});
console.log(p('fred, barney, & pebbles'));// => '<p>fred, barney, & pebbles</p>'
  
console.log("_.throttle");
// ???????????????????????????????????????
// jQuery(window).on('scroll', _.throttle(updatePosition, 100));
// // ?????????????????? `renewToken`??????5???????????????1??????
// var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
// jQuery(element).on('click', throttled);
// // ???????????? trailing ??????????????????
// jQuery(window).on('popstate', throttled.cancel);

