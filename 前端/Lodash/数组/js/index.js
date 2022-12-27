var users = [
    { 'user': 'jack',    'active': false,  'id': 001},
    { 'user': 'rose',    'active': true,   'id': 002},
    { 'user': 'shy',     'active': false,  'id': 003},
    { 'user': 'mark',    'active': false,  'id': 004},
    { 'user': 'barney',  'active': true,   'id': 005},
    { 'user': 'fred',    'active': false,  'id': 006},
    { 'user': 'pebbles', 'active': false,  'id': 007}
];
console.log("_.chunk");
console.log(_.chunk(['a','b','c','d'],2));// => [['a', 'b'], ['c', 'd']]
console.log(_.chunk(['a','b','c','d'],3));// => [['a', 'b', 'c'], ['d']]

console.log("_.compact");
console.log(_.compact([0, 1, false, 2, '', 3, null, "abc", undefined, "", NaN, 4]));// => [1, 2, 3]

console.log("_.concat");
console.log(_.concat([1], 2, [3], [[4]]));// => [1, 2, 3, [4]]

console.log("_.difference");
console.log(_.difference([5, 4, 3, 2, 1],[3, 0]));// => [5, 4, 2, 1]

console.log("_.differenceBy");
console.log(_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor));// => [3.1, 1.3]
console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }, {'y':3}], [{ 'x': 1 }], 'x'));// => [{ 'x': 2 }]

console.log("_.differenceWith");
console.log(_.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual));// => [{ 'x': 2, 'y': 1 }]

console.log("_.take");
console.log(_.drop([1, 2, 3]));// => [1]
console.log(_.drop([1, 2, 3], 2));// => [1, 2]
console.log(_.drop([1, 2, 3], 5));// => [1, 2, 3]
console.log(_.drop([1, 2, 3], 0));// => []

console.log("_.takeRight");
console.log(_.dropRight([1, 2, 3]));// => [3]
console.log(_.dropRight([1, 2, 3], 2));// => [2, 3]
console.log(_.dropRight([1, 2, 3], 5));// => [1, 2, 3]
console.log(_.dropRight([1, 2, 3], 0));// => []

console.log("_.takeWhile");
console.log(_.takeWhile(users, function(o) { return !o.active; }));// => objects for ['jack']
console.log(_.takeWhile(users, {'user': 'jack'}));// => objects for ['jack']
console.log(_.takeWhile(users, ['active', false]));// => objects for ['jack']
console.log(_.takeWhile(users, 'active'));// => []

console.log("_.takeRightWhile");
console.log(_.takeRightWhile(users, function(o) { return !o.active; }));// => objects for ['fred','pebbles']
console.log(_.takeRightWhile(users, {'user': 'pebbles'}));// => objects for ['pebbles']
console.log(_.takeRightWhile(users, ['active', false]));// => objects for ['fred','pebbles']
console.log(_.takeRightWhile(users, 'active'));// => []

console.log("_.drop");
console.log(_.drop([1, 2, 3]));// => [2, 3]
console.log(_.drop([1, 2, 3], 2));// => [3]
console.log(_.drop([1, 2, 3], 5));// => []
console.log(_.drop([1, 2, 3], 0));// => [1, 2, 3]

console.log("_.dropRight");
console.log(_.dropRight([1, 2, 3]));// => [1, 2]
console.log(_.dropRight([1, 2, 3], 2));// => [1]
console.log(_.dropRight([1, 2, 3], 5));// => []
console.log(_.dropRight([1, 2, 3], 0));// => [1, 2, 3]

console.log("_.dropWhile");
console.log(_.dropWhile(users, function(o) { return !o.active; }));// => objects for ['rose','shy','mark','barney','fred','pebbles']
console.log(_.dropWhile(users, {'user': 'jack'}));// => objects for ['rose','shy','mark','barney','fred','pebbles']
console.log(_.dropWhile(users, ['active', false]));// => objects for ['rose','shy','mark','barney','fred','pebbles']
console.log(_.dropWhile(users, 'active'));// => objects for all

console.log("_.dropRightWhile");
console.log(_.dropRightWhile(users, function(o) { return !o.active; }));// => objects for ['jack','rose','shy','mark','barney']
console.log(_.dropRightWhile(users, {'user': 'pebbles'}));// => objects for ['jack','rose','shy','mark','barney','fred']
console.log(_.dropRightWhile(users, ['active', false]));// => objects for ['jack','rose','shy','mark','barney']
console.log(_.dropRightWhile(users, 'active'));// => objects for all

console.log("_.fill");
console.log(_.fill([1, 2, 3], 'a'));// => ['a', 'a', 'a']
console.log(_.fill([4, 6, 8, 10], '*', 1, 3));// => [4, '*', '*', 10]

console.log("_.findIndex");
console.log(_.findIndex(users, function(o) { return o.user == 'barney'; }));// => 4
console.log(_.findIndex(users, {'user': 'fred', 'active': false }));// => 5
console.log(_.findIndex(users, ['active', false]));// => 0
console.log(_.findIndex(users, 'active'));// => 1

console.log("_.findLastIndex");
console.log(_.findLastIndex(users, function(o) { return o.user == 'barney'; }));// => 4
console.log(_.findLastIndex(users, {'user': 'fred', 'active': false }));// => 5
console.log(_.findLastIndex(users, ['active', false]));// => 6
console.log(_.findLastIndex(users, 'active'));// => 4

console.log("_.head");
console.log(_.head([1, 2, 3]));// => 1
console.log(_.head([]));// => undefined

console.log("_.last");
console.log(_.last([1, 2, 3]));// => 3
console.log(_.last([]));// => undefined

console.log("_.nth");
console.log(_.nth(['a', 'b', 'c', 'd'], 1));// => 'b'
console.log(_.nth(['a', 'b', 'c', 'd'], -2));// => 'c'

console.log("_.flatten");
console.log(_.flatten([1, [2, [3, [4]], 5]]));// => [1, 2, [3, [4]], 5]

console.log("_.flattenDeep");
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));// => [1, 2, 3, 4, 5]

console.log("_.flattenDepth");
console.log(_.flattenDepth([1, [2, [3, [4]], 5]], 1));// => [1, 2, [3, [4]], 5]
console.log(_.flattenDepth([1, [2, [3, [4]], 5]], 2));// => [1, 2, 3, [4], 5]

console.log("_.fromPairs");
console.log(_.fromPairs([['fred', 30], ['barney', 40]]));// => { 'fred': 30, 'barney': 40 }

console.log("_.indexOf");
console.log(_.indexOf([1, 2, 1, 2], 2));// => 1
console.log(_.indexOf([1, 2, 1, 2], 2, 2));// => 3

console.log("_.lastIndexOf");
console.log(_.lastIndexOf([1, 2, 1, 2], 2));// => 3
console.log(_.lastIndexOf([1, 2, 1, 2], 2, 2));// => 1

console.log("_.tail");
console.log(_.tail([1, 2, 3]));// => [2, 3]

console.log("_.initial");
console.log(_.initial([1, 2, 3]));// => [1, 2]

console.log("_.intersection");
console.log(_.intersection([2, 1], [4, 2], [1, 2]));// => [2]

console.log("_.intersectionBy");
console.log(_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor));// => [2.1]
console.log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));// => [{ 'x': 1 }]

console.log("_.intersectionWith");
console.log(_.intersectionWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual));// => [{ 'x': 1, 'y': 2 }]

console.log("_.join");
console.log(_.join(['a', 'b', 'c'], '~'));// => 'a~b~c'

console.log("_.pull");
console.log(_.pull([1, 2, 3, 1, 2, 3], 2, 3));// => [1, 1]

console.log("_.pullAll");
console.log(_.pullAll([1, 2, 3, 1, 2, 3], [2, 3]));// => [1, 1]

console.log("_.pullAllBy");
console.log(_.pullAllBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }], [{ 'x': 1 }, { 'x': 3 }], 'x'));// => [{ 'x': 2 }]

console.log("_.pullAllWith");
console.log(_.pullAllWith([{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6}], [{ 'x': 3, 'y': 4 }], _.isEqual));// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

console.log("_.pullAt");
console.log(_.pullAt([5, 10, 15, 20], 1, 3));// => [10, 20]

console.log("_.remove");
console.log(_.remove([1, 2, 3, 4], (n)=>{return n%2==0;}));// => [2, 4]

console.log("_.reverse");
console.log(_.reverse([1, 2, 3, 4]));// => [4, 3, 2, 1]

console.log("_.slice");
console.log(_.slice([1, 2, 3, 4], 1, 3));// => [2, 3]

console.log("_.sortedIndex");
console.log(_.sortedIndex([20, 45, 60, 50, 20], 40));// => 1

console.log("_.sortedLastIndex");
console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5));// => 4

console.log("_.sortedIndexBy");
console.log(_.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, (o)=>{ return o.x; }));// => 0
console.log(_.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x'));// => 0

console.log("_.sortedLastIndexBy");
console.log(_.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, (o)=>{ return o.x; }));// => 1
console.log(_.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x'));// => 1

console.log("_.sortedIndexOf");
console.log(_.sortedIndexOf([9, 7, 4, 5, 5, 5, 6], 5));// => 1

console.log("_.sortedLastIndexOf");
console.log(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5));// => 3

console.log("_.sortedUniq");
console.log(_.sortedUniq([1, 1, 2]));// => [1, 2]

console.log("_.sortedUniqBy");
console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));// => [1.1, 2.3]

console.log("_.union");
console.log(_.union([1, 4, 6, 3, 2, 9, 7, 1, 4], [10, 2, 4, 5, 6, 1]));// => [1, 4, 6, 3, 2, 9, 7, 10, 5]

console.log("_.unionBy");
console.log(_.unionBy([2.1], [1.2, 2.3], Math.floor));// => [2.1, 1.2]
console.log(_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));// => [{ 'x': 1 }, { 'x': 2 }]

console.log("_.unionWith");
console.log(_.unionWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual));// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

console.log("_.uniq");
console.log(_.uniq([2, 1, 2]));// => [2, 1]

console.log("_.uniqBy");
console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor));// => [2.1, 1.2]
console.log(_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x'));// => [{ 'x': 1 }, { 'x': 2 }]

console.log("_.uniqWith");
console.log(_.uniqWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual));// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]

console.log("_.without");
console.log(_.without([2, 1, 4, 2, 3, 4], 1, 2));// => [4, 3, 4]

console.log("_.xor");
console.log(_.xor([2, 1], [2, 3]));// => [1, 3]

console.log("_.xorBy");
console.log(_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor));// => [1.2, 3.4]
console.log(_.xorBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x'));// => [{ 'x': 2 }]

console.log("_.xorWith");
console.log(_.xorWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual));// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

console.log("_.zip");
console.log(_.zip(['fred', 'barney'], [30, 40], [true, false]));// => [['fred', 30, true], ['barney', 40, false]]
console.log(_.zip(['fred', 'barney', 'mark'], [30, 40, 50], [true, false, true]));// => [['fred', 30, true], ['barney', 40, false], ['mark', 50, true]]

console.log("_.zipObject");
console.log(_.zipObject(['a', 'b'], [1, 2]));// => { 'a': 1, 'b': 2 }

console.log("_.zipObjectDeep");
console.log(_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]));// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }

console.log("_.zipWith");
console.log(_.zipWith([1, 2], [10, 20], [100, 200], (a, b, c)=>{return a+b+c;}));// => [111, 222]

console.log("_.unzip");
console.log(_.unzip([['fred', 30, true], ['barney', 40, false]]));// => [['fred', 'barney'], [30, 40], [true, false]]
console.log(_.unzip([['fred', 'barney', 'mark'], [30, 40, 50], [true, false, true]]));// => [['fred', 30, true], ['barney', 40, false], ['mark', 50, true]]

console.log("_.unzipWith");
console.log(_.unzipWith([1, 10, 100], [2, 20, 200], _.add));// => [3, 30, 300]
