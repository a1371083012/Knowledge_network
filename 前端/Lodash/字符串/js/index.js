console.log("_.camelCase");
console.log(_.camelCase('Foo Bar'));// => 'fooBar'
console.log(_.camelCase('--foo-bar--'));// => 'fooBar'
console.log(_.camelCase('__FOO_BAR__'));// => 'fooBar'

console.log("_.capitalize");
console.log(_.capitalize('FRED'));// => 'Fred'

console.log("_.deburr");
console.log(_.deburr('déjà vu'));// => 'deja vu'

console.log("_.endsWith");
console.log(_.endsWith('abc', 'c'));// => true
console.log(_.endsWith('abc', 'b'));// => false
console.log(_.endsWith('abc', 'b', 2));// => true

console.log("_.escape");
console.log(_.escape('fred, barney, > & pebbles'));// => 'fred, barney, &gt; & pebbles'

console.log("_.escapeRegExp");
console.log(_.escapeRegExp('[lodash](https://lodash.com/)'));// => '\[lodash\]\(https://lodash\.com/\)'

console.log("_.kebabCase");
console.log(_.kebabCase('Foo Bar'));// => 'foo-bar'
console.log(_.kebabCase('fooBar'));// => 'foo-bar'
console.log(_.kebabCase('__FOO_BAR__'));// => 'foo-bar'

console.log("_.lowerCase");
console.log(_.lowerCase('--Foo-Bar--'));// => 'foo bar'
console.log(_.lowerCase('fooBar'));// => 'foo bar'
console.log(_.lowerCase('__FOO_BAR__'));// => 'foo bar'

console.log("_.lowerFirst");
console.log(_.lowerFirst('Fred'));// => 'fred'
console.log(_.lowerFirst('FRED'));// => 'fRED'

console.log("_.pad");
console.log(_.pad('abc', 8));// => '  abc   '
console.log(_.pad('abc', 8, '_-'));// => '_-abc_-_'
console.log(_.pad('abc', 3));// => 'abc'

console.log("_.padEnd");
console.log(_.padEnd('abc', 6));// => 'abc   '
console.log(_.padEnd('abc', 6, '_-'));// => 'abc_-_'
console.log(_.padEnd('abc', 3));// => 'abc'

console.log("_.padStart");
console.log(_.padStart('abc', 8));// => '   abc'
console.log(_.padStart('abc', 8, '_-'));// => '-_-abc'
console.log(_.padStart('abc', 3));// => 'abc'

console.log("_.parseInt");
console.log(_.parseInt('08'));// => 8
console.log(_.map(['6', '08', '10'], _.parseInt));// => [6, 8, 10]

console.log("_.repeat");
console.log(_.repeat('*', 3));// => '***'
console.log(_.repeat('abc', 2));// => 'abcabc'
console.log(_.repeat('abc', 0));// => ''

console.log("_.replace");
console.log(_.replace('Hi Fred', 'Fred', 'Barney'));// => 'Hi Barney'

console.log("_.snakeCase");
console.log(_.snakeCase('Foo Bar'));// => 'foo_bar'
console.log(_.snakeCase('fooBar'));// => 'foo_bar'
console.log(_.snakeCase('--FOO-BAR--'));// => 'foo_bar'

console.log("_.split");
console.log(_.split('a-b-c', '-', 2));// => ['a', 'b']

console.log("_.startCase");
console.log(_.startCase('--foo-bar--'));// => 'Foo Bar'
console.log(_.startCase('fooBar'));// => 'Foo Bar'
console.log(_.startCase('__FOO_BAR__'));// => 'Foo Bar'

console.log("_.startsWith");
console.log(_.startsWith('abc', 'a'));// => true
console.log(_.startsWith('abc', 'b'));// => false
console.log(_.startsWith('abc', 'b', 1));// => true

console.log("_.startsWith");
// 使用 "interpolate" 分隔符创建编译模板
var compiled = _.template('hello <%= user %>!');
console.log(compiled({ 'user': 'fred' }));// => 'hello fred!'
// 使用 HTML "escape" 转义数据的值
var compiled = _.template('<b><%- value %></b>');
console.log(compiled({ 'value': '<script>' }));// => '<b><script></b>'
// 使用 "evaluate" 分隔符执行 JavaScript 和 生成HTML代码
var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
console.log(compiled({ 'users': ['fred', 'barney'] }));// => '<li>fred</li><li>barney</li>'
// 在 "evaluate" 分隔符中使用内部的 `print` 函数
var compiled = _.template('<% print("hello " + user); %>!');
console.log(compiled({ 'user': 'barney' }));// => 'hello barney!'
// 使用 ES 分隔符代替默认的 "interpolate" 分隔符
var compiled = _.template('hello ${ user }!');
console.log(compiled({ 'user': 'pebbles' }));// => 'hello pebbles!'
// 使用自定义的模板分隔符
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var compiled = _.template('hello {{ user }}!');
console.log(compiled({ 'user': 'mustache' }));// => 'hello mustache!'
// 使用反斜杠符号作为纯文本处理
// var compiled = _.template('<%= "\\<%- value %\\>" %>');
// console.log(compiled({ 'value': 'ignored' }));// => '<%- value %>'
// 使用 `imports` 选项导入 `jq` 作为 `jQuery` 的别名
// var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
// var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
// console.log(compiled({ 'users': ['fred', 'barney'] }));// => '<li>fred</li><li>barney</li>'
// 使用 `sourceURL` 选项指定模板的来源URL
// var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
// console.log(compiled(data));// => 在开发工具的 Sources 选项卡 或 Resources 面板中找到 "greeting.jst"
// 使用 `variable` 选项确保在编译模板中不声明变量
// var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
// console.log(compiled.source);
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }
 
// 使用 `source` 特性内联编译模板
// 便以查看行号、错误信息、堆栈
// fs.writeFileSync(path.join(cwd, 'jst.js'), 'var JST = {\"main": ' + _.template(mainText).source + '\};');

console.log("_.toLower");
console.log(_.toLower('--Foo-Bar--'));// => '--foo-bar--'
console.log(_.toLower('fooBar'));// => 'foobar'
console.log(_.toLower('__FOO_BAR__'));// => '__foo_bar__'

console.log("_.toUpper");
console.log(_.toUpper('--foo-bar--'));// => '--FOO-BAR--'
console.log(_.toUpper('fooBar'));// => 'FOOBAR'
console.log(_.toUpper('__foo_bar__'));// => '__FOO_BAR__'

console.log("_.trim");
console.log(_.trim('  abc  '));// => 'abc'
console.log(_.trim('-_-abc-_-', '_-'));// => 'abc'
console.log(_.map(['  foo  ', '  bar  '], _.trim));// => ['foo', 'bar']

console.log("_.trimEnd");
console.log(_.trimEnd('  abc  '));// => '  abc'
console.log(_.trimEnd('-_-abc-_-', '_-'));// => '-_-abc'

console.log("_.trimEnd");
console.log(_.trimEnd('  abc  '));// => 'abc  '
console.log(_.trimEnd('-_-abc-_-', '_-'));// => 'abc-_-'

console.log("_.truncate");
console.log(_.truncate('hi-diddly-ho there, neighborino'));// => 'hi-diddly-ho there, neighbo...'
console.log(_.truncate('hi-diddly-ho there, neighborino', {'length': 24,'separator': ' '}));// => 'hi-diddly-ho there,...'
console.log(_.truncate('hi-diddly-ho there, neighborino', {'length': 24,'separator': /,? +/}));// => 'hi-diddly-ho there...'
console.log(_.truncate('hi-diddly-ho there, neighborino', {'omission': ' [...]'}));// => 'hi-diddly-ho there, neig [...]'

console.log("_.unescape");
console.log(_.unescape('fred, barney, & pebbles'));// => 'fred, barney, & pebbles'

console.log("_.upperCase");
console.log(_.upperCase('--foo-bar'));// => 'FOO BAR'
console.log(_.upperCase('fooBar'));// => 'FOO BAR'
console.log(_.upperCase('__foo_bar__'));// => 'FOO BAR'

console.log("_.upperFirst");
console.log(_.upperFirst('Fred'));// => 'Fred'
console.log(_.upperFirst('FRED'));// => 'FRED'

console.log("_.words");
console.log(_.words('fred, barney, & pebbles'));// => ['fred', 'barney', 'pebbles']
console.log(_.words('fred, barney, & pebbles', /[^, ]+/g));// => ['fred', 'barney', '&', 'pebbles']