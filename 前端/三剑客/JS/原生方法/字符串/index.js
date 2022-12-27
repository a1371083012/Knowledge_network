console.log("|-------- 字符串声明 --------|");
let str, str1, str2, temp;
console.dir("".__proto__);

console.log("");
console.log("");
console.log("");
console.log("|-------- 字符串方法 --------|");
// #region 方法名：charAt(index)
str = "你好杰克，我的名字是𠮷!";
console.log("|---- charAt ----|");
console.log(str);
console.log(str.charAt(2));
console.log(str.charAt(10));
// #endregion

// #region 方法名：charCodeAt(index)
console.log("|---- charCodeAt ----|");
console.log(str);
console.log(str.charCodeAt(2));
console.log(str.charCodeAt(10));
// #endregion

// #region 方法名：codePointAt(index)
console.log("|---- codePointAt ----|");
console.log(str);
console.log(str.codePointAt(2));
console.log(str.codePointAt(10));
// #endregion

// #region 方法名：fromCharCode(...n)
console.log("|---- fromCharCode ----|");
console.log(String.fromCharCode(72, 69, 76, 76, 79));
console.log(String.fromCharCode(134071));
// #endregion

// #region 方法名：fromCodePoint(...n)
console.log("|---- fromCodePoint ----|");
console.log(String.fromCodePoint(72, 69, 76, 76, 79));
console.log(String.fromCodePoint(134071));
// #endregion

// #region 方法名：concat(...str)
console.log("|---- concat ----|");
str = "你好";
console.log(str);
console.log(str.concat("杰克", "，", "我的名字是𠮷", "!"));
// #endregion

// #region 方法名：startsWith(str, size)
console.log("|---- startsWith ----|");
console.log(str);
console.log(str.startsWith("你好", 0));
console.log(str.startsWith("杰克", 2));
console.log(str.startsWith("你好"));
// #endregion

// #region 方法名：endsWith(str, size)
console.log("|---- endsWith ----|");
console.log(str);
console.log(str.endsWith("我的", 7));
console.log(str.endsWith("𠮷!", str.length));
console.log(str.endsWith("𠮷!"));
// #endregion

// #region 方法名：includes(str, from)
console.log("|---- includes ----|");
console.log(str);
console.log(str.includes("你好", 0));
console.log(str.includes("你好", 2));
// #endregion

// #region 方法名：indexOf(str, from)
console.log("|---- indexOf ----|");
str1 = "我的名字叫小明，你的名字叫小红"
console.log(str1);
console.log(str1.indexOf("名字"));
console.log(str1.indexOf("名字", 0));
console.log(str1.indexOf("名字", 5));
// #endregion

// #region 方法名：lastIndexOf(str, from)
console.log("|---- lastIndexOf ----|");
console.log(str1);
console.log(str1.lastIndexOf('名字'));
console.log(str1.lastIndexOf('名字', 2));
console.log(str1.lastIndexOf('名字', str.length));
// #endregion

// #region 方法名：search(regex)
console.log("|---- search ----|");
console.log(str1);
console.log(str1.search('名字'));
// #endregion

// #region 方法名：localeCompare(str, locale, options)
console.log("|---- localeCompare ----|");
str1 = "aaa";
str2 = "bbb";
console.log(str1);
console.log(str2);
console.log(str1.localeCompare(str2));
// #endregion

// #region 方法名：match(regex)
console.log("|---- match ----|");
str = "aaaabcdddabceee";
console.log(str);
console.log(str.match(/abc/));
console.log(str.match(/abc/g));
// #endregion

// #region 方法名：matchAll(regex)
console.log("|---- matchAll ----|");
str = "aaaabcdddabceee";
console.log(str);
console.log(...str.matchAll(/abc/g));
// #endregion

// #region 方法名：normalize(form)
console.log("|---- normalize ----|");
console.log('ñ'=='ñ');
str = 'n\u0303';
console.log(str);
console.log(str.normalize('NFC'));
// #endregion

// #region 方法名：padStart(len, pad) 补全长度
console.log("|---- padStart ----|");
str = "a";
console.log(str);
console.log(str.padStart(10, "bcd"));
// #endregion

// #region 方法名：padEnd(len, pad) 补全长度
console.log("|---- padEnd ----|");
str = "a";
console.log(str);
console.log(str.padEnd(10, "bcd"));
// #endregion

// #region 方法名：repeat(n)
console.log("|---- repeat ----|");
str = "abc";
console.log(str);
console.log(str.repeat(10));
// #endregion

// #region 方法名：replace(str|regex, newstr|func)
console.log("|---- replace ----|");
str = "abc,你知道什么是abc吗?";
console.log(str);
console.log(str.replace("abc","def"));
// #endregion

// #region 方法名：replaceAll(str|regex, newstr|func)
console.log("|---- replaceAll ----|");
str = "abc,你知道什么是abc吗?";
console.log(str);
console.log(str.replaceAll("abc","def"));
// #endregion

// #region 方法名：slice(ini, end)
console.log("|---- slice ----|");
str = "abc,你知道什么是abc吗?";
console.log(str);
console.log(str.slice(3,7));
console.log(str.slice(7,3));
// #endregion

// #region 方法名：substr(ini, len)
console.log("|---- substr ----|");
str = "abc,你知道什么是abc吗?";
console.log(str.substr(3,7));
// #endregion

// #region 方法名：substring(ini, end)
console.log("|---- substring ----|");
str = "abc,你知道什么是abc吗?";
console.log(str);
console.log(str.substring(3,7));
// #endregion

// #region 方法名：split(sep|regex, limit)
console.log("|---- split ----|");
str = "番茄,萝卜,茄子,青瓜";
console.log(str);
console.log(str.split(""));
console.log(str.split(","));
// #endregion

// #region 方法名：toLowerCase()
console.log("|---- toLowerCase ----|");
str = "Hello, My name is Jack!";
console.log(str);
console.log(str.toLowerCase(""));
// #endregion

// #region 方法名：toUpperCase()
console.log("|---- toUpperCase ----|");
str = "Hello, My name is Jack!";
console.log(str);
console.log(str.toUpperCase(""));
// #endregion

// #region 方法名：trim()
console.log("|---- trim ----|");
str = "    Hello, My name is Jack!    ";
console.log(str);
console.log(str.trim(""));
// #endregion

// #region 方法名：trimStart()
console.log("|---- trimStart ----|");
str = "    Hello, My name is Jack!    ";
console.log(str);
console.log(str.trimStart(""));
// #endregion

// #region 方法名：trimEnd()
console.log("|---- trimEnd ----|");
str = "    Hello, My name is Jack!    ";
console.log(str);
console.log(str.trimEnd(""));
// #endregion

// #region 方法名：raw`` 将模板字符串不转义的原始字符串内容返回。
console.log("|---- raw ----|");
console.log(`Hi!\nAkira`);
console.log(String.raw`Hi!\nAkira`);
// #endregion



