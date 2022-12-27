console.log("_.assign");
function Foo() {this.a = 1;}
function Bar() {this.c = 3;}
Foo.prototype.b = 2;
Bar.prototype.d = 4;
console.log(_.assign({ 'a': 0 }, new Foo, new Bar));// => { 'a': 1, 'c': 3 }

console.log("_.assignWith");
function customizer(objValue, srcValue) {return _.isUndefined(objValue) ? srcValue : objValue;}
var defaults = _.partialRight(_.assignWith, customizer);
console.log(defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }));// => { 'a': 1, 'b': 2 }

console.log("_.assignIn & _.extend");
function Foo() {this.a = 1;}
function Bar() {this.c = 3;}
Foo.prototype.b = 2;
Bar.prototype.d = 4;
console.log(_.assignIn({ 'a': 0 }, new Foo, new Bar));// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }

console.log("_.assignInWith & _.extendWith");
function customizer(objValue, srcValue) {return _.isUndefined(objValue) ? srcValue : objValue;}
var defaults = _.partialRight(_.assignInWith, customizer);
console.log(defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }));// => { 'a': 1, 'b': 2 }

console.log("_.at");
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
console.log(_.at(object, ['a[0].b.c', 'a[1]']));// => [3, 4]

console.log("_.create");
function Shape() {this.x = 0;this.y = 0;}
function Circle() {Shape.call(this);}
Circle.prototype = _.create(Shape.prototype, {'constructor': Circle});
var circle = new Circle;
console.log(circle instanceof Circle);// => true
console.log(circle instanceof Shape);// => true

console.log("_.create");
console.log(_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }));// => { 'a': 1, 'b': 2 }

console.log("_.create");
console.log(_.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }));// => { 'a': { 'b': 2, 'c': 3 } }

console.log("_.entries & _.toPairs");
function Foo() {this.a = 1;this.b = 2;}
Foo.prototype.c = 3;
console.log(_.toPairs(new Foo));// => [['a', 1], ['b', 2]]

console.log("_.entriesIn & _.toPairsIn");
function Foo() {this.a = 1;this.b = 2;}
Foo.prototype.c = 3;
console.log(_.toPairsIn(new Foo));// => [['a', 1], ['b', 2], ['c', 3]]

console.log("_.findKey");
var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
};
console.log(_.findKey(users, function(o) { return o.age < 40; }));// => 'barney'
console.log(_.findKey(users, { 'age': 1, 'active': true }));// => 'pebbles'
console.log(_.findKey(users, ['active', false]));// => 'fred'
console.log(_.findKey(users, 'active'));// => 'barney'

console.log("_.findLastKey");
console.log(_.findLastKey(users, function(o) { return o.age < 40; }));// => 'pebbles'
console.log(_.findLastKey(users, { 'age': 36, 'active': true }));// => 'barney'
console.log(_.findLastKey(users, ['active', false]));// => 'fred'
console.log(_.findLastKey(users, 'active'));// => 'pebbles'

console.log("_.forIn");
function Foo() {this.a = 1;this.b = 2;}
Foo.prototype.c = 3;
_.forIn(new Foo, function(value, key) {console.log(key);});// => Logs 'a', 'b', then 'c' (无法保证遍历的顺序)。

console.log("_.forInRight");
_.forInRight(new Foo, function(value, key) {console.log(key);});// => 输出 'c', 'b', 然后 'a'， `_.forIn` 会输出 'a', 'b', 然后 'c'。

console.log("_.forOwn");
_.forOwn(new Foo, function(value, key) {console.log(key);});// => 输出 'a' 然后 'b' (无法保证遍历的顺序)。

console.log("_.forOwnRight");
_.forOwnRight(new Foo, function(value, key) {console.log(key);});// =>  输出 'b' 然后 'a'， `_.forOwn` 会输出 'a' 然后 'b'

console.log("_.functions");
function Foo() {this.a = _.constant('a');this.b = _.constant('b');}
Foo.prototype.c = _.constant('c');
console.log(_.functions(new Foo));// => ['a', 'b']

console.log("_.functionsIn");
console.log(_.functionsIn(new Foo));// => ['a', 'b', 'c']

console.log("_.get");
var object = { 'a': [{ 'b': { 'c': 3 } }] };
console.log(_.get(object, 'a[0].b.c'));// => 3
console.log(_.get(object, ['a', '0', 'b', 'c']));// => 3
console.log(_.get(object, 'a.b.c', 'default'));// => 'default'

console.log("_.has");
var object = { 'a': { 'b': 2 } };
var other = _.create({ 'a': _.create({ 'b': 2 }) });
console.log(_.has(object, 'a'));// => true
console.log(_.has(object, 'a.b'));// => true
console.log(_.has(object, ['a', 'b']));// => true
console.log(_.has(other, 'a'));// => false

console.log("_.hasIn");
var object = _.create({ 'a': _.create({ 'b': 2 }) });
console.log(_.hasIn(object, 'a'));// => true
console.log(_.hasIn(object, 'a.b'));// => true
console.log(_.hasIn(object, ['a', 'b']));// => true
console.log(_.hasIn(object, 'b'));// => false

console.log("_.invert");
var object = { 'a': 1, 'b': 2, 'c': 1 };
console.log(_.invert(object));// => { '1': 'c', '2': 'b' }

console.log("_.invertBy");
var object = { 'a': 1, 'b': 2, 'c': 1 };
console.log(_.invertBy(object));// => { '1': ['a', 'c'], '2': ['b'] }
console.log(_.invertBy(object, function(value) {return 'group' + value;}));// => { 'group1': ['a', 'c'], 'group2': ['b'] }

console.log("_.invoke");
var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
console.log(_.invoke(object, 'a[0].b.c.slice', 1, 3));// => [2, 3]

console.log("_.key");
function Foo() {this.a = 1;this.b = 2;}
Foo.prototype.c = 3;
console.log(_.keys(new Foo));// => ['a', 'b']
console.log(_.keys('hi'));// => ['0', '1']

console.log("_.keysIn");
console.log(_.keysIn(new Foo));// => ['a', 'b', 'c']
  
console.log("_.mapKeys");
console.log(_.mapKeys({ 'a': 1, 'b': 2 }, (value, key)=>{return key + value;}));// => { 'a1': 1, 'b2': 2 }

console.log("_.mapValues");
var users = {
    'fred':    { 'user': 'fred',    'age': 40 },
    'pebbles': { 'user': 'pebbles', 'age': 1 }
};
console.log(_.mapValues(users, function(o) { return o.age; }));// => { 'fred': 40, 'pebbles': 1 }
console.log(_.mapValues(users, 'age'));// => { 'fred': 40, 'pebbles': 1 }
  
console.log("_.merge");
var object = {'a': [{ 'b': 2 }, { 'd': 4 }]};
var other = {'a': [{ 'c': 3 }, { 'e': 5 }]};
console.log(_.merge(object, other));// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

console.log("_.mergeWith");
function customizer(objValue, srcValue) {if (_.isArray(objValue)) {return objValue.concat(srcValue);}}
var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };
console.log(_.mergeWith(object, other, customizer));// => { 'a': [1, 3], 'b': [2, 4] }

console.log("_.omit");
var object = { 'a': 1, 'b': '2', 'c': 3 };
console.log(_.omit(object, ['a', 'c']));// => { 'b': '2' }

console.log("_.omitBy");
var object = { 'a': 1, 'b': '2', 'c': 3 };
console.log(_.omitBy(object, _.isNumber));// => { 'b': '2' }

console.log("_.pick");
var object = { 'a': 1, 'b': '2', 'c': 3 };
console.log(_.pick(object, ['a', 'c']));// => { 'a': 1, 'c': 3 }

console.log("_.pickBy");
var object = { 'a': 1, 'b': '2', 'c': 3 };
console.log(_.pickBy(object, _.isNumber));// => { 'a': 1, 'c': 3 }
  
console.log("_.result");
var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
console.log(_.result(object, 'a[0].b.c1'));// => 3
console.log(_.result(object, 'a[0].b.c2'));// => 4
console.log(_.result(object, 'a[0].b.c3', 'default'));// => 'default'
console.log(_.result(object, 'a[0].b.c3', _.constant('default')));// => 'default'

console.log("_.set");
var object = { 'a': [{ 'b': { 'c': 3 } }] };
_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);// => 4
_.set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);// => 5

console.log("_.setWith");
var object = {};
console.log(_.setWith(object, '[0][1]', 'a', Object));// => { '0': { '1': 'a' } }

console.log("_.toPairs");
function Foo() {this.a = 1;this.b = 2;}
Foo.prototype.c = 3;
console.log(_.toPairs(new Foo));// => [['a', 1], ['b', 2]]

console.log("_.toPairsIn");
function Foo() {this.a = 1;this.b = 2;}
Foo.prototype.c = 3;
console.log(_.toPairs(new Foo));// => [['a', 1], ['b', 2], ['c', 3]]
  
console.log("_.transform");
console.log(_.transform([2, 3, 4], (result, n)=>{
    result.push(n *= n);
    return n % 2 == 0;
}, []));// => [4, 9]
console.log(_.transform({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key)=>{
    (result[value] || (result[value] = [])).push(key);
}, {}));// => { '1': ['a', 'c'], '2': ['b'] }

console.log("_.unset");
var object = { 'a': [{ 'b': { 'c': 7 } }] };
console.log(_.unset(object, 'a[0].b.c'));// => true
console.log(object);// => { 'a': [{ 'b': {} }] };
console.log(_.unset(object, ['a', '0', 'b', 'c']));// => true
console.log(object);// => { 'a': [{ 'b': {} }] };

console.log("_.update");
var object = { 'a': [{ 'b': { 'c': 3 } }] };
_.update(object, 'a[0].b.c', function(n) { return n * n; });
console.log(object.a[0].b.c);// => 9
_.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
console.log(object.x[0].y.z);// => 0

console.log("_.update");
var object = {};
console.log(_.updateWith(object, '[0][1]', _.constant('a'), Object));// => { '0': { '1': 'a' } }

console.log("_.values");
function Foo() {this.a = 1;this.b = 2;}
Foo.prototype.c = 3;
console.log(_.values(new Foo));// => [1, 2] (无法保证遍历的顺序)
console.log(_.values('hi'));// => ['h', 'i']

console.log("_.valuesIn");
function Foo() {this.a = 1;this.b = 2;}
Foo.prototype.c = 3;
console.log(_.valuesIn(new Foo));// => [1, 2, 3] (无法保证遍历的顺序)