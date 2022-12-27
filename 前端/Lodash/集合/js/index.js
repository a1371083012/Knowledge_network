var users1 = [
    { 'user': 'jack',    'active': false,  'id': 001},
    { 'user': 'rose',    'active': true,   'id': 002},
    { 'user': 'shy',     'active': false,  'id': 003},
    { 'user': 'mark',    'active': false,  'id': 004},
    { 'user': 'barney',  'active': true,   'id': 005},
    { 'user': 'fred',    'active': false,  'id': 006},
    { 'user': 'pebbles', 'active': false,  'id': 007}
];
var users2 = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
];
var users3 = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];
var users4 = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];
console.log("_.countBy");
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));// => { '4': 1, '6': 2 }
console.log(_.countBy(['one', 'two', 'three'], 'length'));// => { '3': 2, '5': 1 }

console.log("_.forEach");
_.forEach([1, 2], (value) => {console.log(value);});// => Logs `1` then `2`.
_.forEach({ 'a': 1, 'b': 2 }, (value, key) => {console.log(key);});// => Logs 'a' then 'b' (iteration order is not guaranteed).

console.log("_.forEachRight");
_.forEachRight([1, 2], (value) => {console.log(value);});// => Logs `1` then `2`.
_.forEachRight({ 'a': 1, 'b': 2 }, (value, key) => {console.log(key);});// => Logs 'a' then 'b' (iteration order is not guaranteed).

console.log("_.some");
var object = { 'a': 1, 'b': 2 };
console.log(_.some([]));// => false
console.log(_.some([true, 1, null, 'yes'], Boolean));// => true
console.log(_.some([9, 7, 6, 7], (o)=>{return o>5}));// => true
console.log(_.some(object, { 'a' : 1}));// => false
console.log(_.some(users2, { 'user': 'barney', 'active': false }));// => false
console.log(_.some(users2, ['active', false]));// => true
console.log(_.some(users2, 'active'));// => false

console.log("_.every");
var object = { 'a': 1, 'b': 2 };
console.log(_.every([]));// => true
console.log(_.every([true, 1, null, 'yes'], Boolean));// => true
console.log(_.every([9, 7, 6, 7], (o)=>{return o>5}));// => true
console.log(_.every(object, { 'a': 1, 'b': 2 }));// => false
console.log(_.every(users2, { 'user': 'barney', 'active': false }));// => true
console.log(_.every(users2, ['active', false]));// => true
console.log(_.every(users2, 'active'));// => false

console.log("_.filter");
console.log(_.filter(users3, (o) => { return !o.active; }));// => objects for ['fred']
console.log(_.filter(users3, { 'age': 36, 'active': true }));// => objects for ['barney']
console.log(_.filter(users3, ['active', false]));// => objects for ['fred']
console.log(_.filter(users3, 'active'));// => objects for ['barney', 'pebbles']

console.log("_.reject");
console.log(_.reject(users3, (o) => { return !o.active; }));// => objects for ['barney', 'pebbles']
console.log(_.reject(users3, { 'age': 36, 'active': true }));// => objects for ['fred', 'pebbles']
console.log(_.reject(users3, ['active', false]));// => objects for ['barney', 'pebbles']
console.log(_.reject(users3, 'active'));// => objects for ['fred']

console.log("_.find");
console.log(_.find(users3, (o) => { return o.age < 40; }));// => objects for ['barney']
console.log(_.find(users3, { 'age': 1, 'active': true }));// => objects for ['pebbles']
console.log(_.find(users3, ['active', false]));// => objects for ['fred']
console.log(_.find(users3, 'active'));// => objects for ['barney']

console.log("_.findLast");
console.log(_.findLast([1, 2, 3, 4], (n) => {return n % 2 == 1;}));// => 3

console.log("_.flatMap");
console.log(_.flatMap([1, 2], (n) => {return [n, n];}));// => [1, 1, 2, 2]

console.log("_.flatMapDeep");
console.log(_.flatMapDeep([1, 2], (n) => {return [[n, n]];}));// => [1, 1, 2, 2]

console.log("_.flatMapDepth");
console.log(_.flatMapDepth([1, 2], (n) => {return [[[n, n]]];}));// => [[1, 1], [2, 2]]

console.log("_.groupBy");
console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor));// => { '4': [4.2], '6': [6.1, 6.3] }
console.log(_.groupBy(['one', 'two', 'three'], 'length'));// =>  { '3': ['one', 'two'], '5': ['three'] }

console.log("_.includes");
console.log(_.includes([1, 2, 3], 1));// => true
console.log(_.includes([1, 2, 3], 1, 2));// => false
console.log(_.includes({ 'user': 'fred', 'age': 40 }, 'fred'));// => true
console.log(_.includes('pebbles', 'eb'));// => true

console.log("_.invokeMap");
console.log(_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'));// => [[1, 5, 7], [1, 2, 3]]
console.log(_.invokeMap([123, 456], String.prototype.split, ''));// => [['1', '2', '3'], ['4', '5', '6']]

console.log("_.keyBy");
console.log(_.keyBy(users4, (o)=>{return String.fromCharCode(o.code)}));// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
console.log(_.keyBy(users4, 'dir'));// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

console.log("_.map");
console.log(_.map([4, 8], (n)=>{return n * n;}));// => [16, 64]
console.log(_.map({ 'a': 4, 'b': 8 }, (n)=>{return n * n;}));// => [16, 64]
console.log(_.map(users4, 'dir'));// => ['left', 'right']

console.log("_.orderBy");// 以 `user` 升序排序 再  `age` 以降序排序。
console.log(_.orderBy(users3, ['user', 'age'], ['asc', 'desc']));// => objects for [['barney', 36], ['fred', 34], ['pebbles', 40]]

console.log("_.partition");
console.log(_.partition(users3, (o)=>{return o.active;}));// => objects for [['barney', 'pebbles'], ['fred']]
console.log(_.partition(users3, { 'age': 40, 'active': false }));// => objects for [['fred'], ['barney', 'pebbles']]
console.log(_.partition(users3, ['active', false]));// => objects for [['fred'], ['barney', 'pebbles']]
console.log(_.partition(users3, 'active'));// => objects for [['barney', 'pebbles'], ['fred']]

console.log("_.reduce");
console.log(_.reduce([1, 2], (sum, n)=>{return sum + n;}, 0));// => 3
console.log(_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key)=>{
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {}));// => { '1': ['a', 'c'], '2': ['b'] } (无法保证遍历的顺序)

console.log("_.reduceRight");
console.log(_.reduceRight([[0, 1], [2, 3], [4, 5]], (flattened, other) => {return flattened.concat(other);}, []));// => [4, 5, 2, 3, 0, 1]

console.log("_.sample");
console.log(_.sample([1, 2, 3, 4]));// => random num

console.log("_.sampleSize");
console.log(_.sampleSize([1, 2, 3, 4], 2));// => [x, x] 不重复
console.log(_.sampleSize([1, 2, 3, 4], 5));// => [x, x, x, x] 随机顺序

console.log("_.shuffle");
console.log(_.shuffle([1, 2, 3, 4]));// => [x, x, x, x] 随机顺序

console.log("_.size");
console.log(_.size([1, 2, 3]));// => 3
console.log(_.size({ 'a': 1, 'b': 2 }));// => 2
console.log(_.size('pebbles'));// => 7