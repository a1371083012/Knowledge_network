let s;

console.log(String.fromCodePoint(0x20BB7)); // "𠮷"

console.log(String.raw`Hi\n${2+3}!`); // Hi\n5!

console.log('𠮷a'.codePointAt(0)); // 134071

console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize()); // true

s = 'Hello world!';
console.log(s.startsWith('Hello')); // true
console.log(s.endsWith('!')); // true
console.log(s.includes('o')); // true

console.log('x'.repeat(3)); // "xxx"
console.log('hello'.repeat(2)); // "hellohello"
console.log('na'.repeat(0)); // ""

console.log('x'.padStart(5, 'ab')); // 'ababx'
console.log('x'.padStart(4, 'ab')); // 'abax'
console.log('x'.padEnd(5, 'ab')); // 'xabab'
console.log('x'.padEnd(4, 'ab')); // 'xaba'

s = '  abc  ';
console.log(); // "abc"
console.log(s.trimStart()); // "abc  "
console.log(s.trimEnd()); // "  abc"

console.log('aabbcc'.replace('b', '_')); // 'aa_bcc'
console.log('aabbcc'.replaceAll('b', '_')); // 'aa__cc'

s = 'hello';
console.log(s.at(1)); // "e"
console.log(s.at(-1)); // "o"


