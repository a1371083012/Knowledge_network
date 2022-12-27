console.log("|-------- 对象声明 --------|");
let obj, obj1, obj2, temp;
console.dir({}.__proto__);

console.log("");
console.log("");
console.log("");
console.log("|-------- 对象方法 --------|");
// #region 方法名：assign(target, ...sources)
console.log("|---- assign ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
obj2 = {
    hobby: "篮球",
    game: "星际争霸",
}
console.log(obj1);
console.log(obj2);
obj = Object.assign(obj1, obj2);
console.log(obj);
console.log(obj1);
// #endregion

// #region 方法名：create(proto [, propertiesObject])
console.log("|---- create ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
console.log(obj1);
obj = Object.create(obj1, {
    bohhy: {
        value: '篮球', // 设置值
        enumerable: true, // 设置该属性可否被枚举（遍历）
    }
});
console.log(obj);
console.log(Object.getPrototypeOf(obj)==obj1); // obj的隐式原型指向obj1
// #endregion

// #region 方法名：defineProperty(obj, prop, desc) & defineProperties(obj, props) 
console.log("|---- defineProperty ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
console.log(obj1);
obj = Object.defineProperty(obj1, 'name', {

    value: '小红', // 设置属性的值
    writable: true, // 设置属性的是否可写
    enumerable: true, // 设置属性是否被枚举（遍历）
})
console.log(obj1);
console.log(obj);
console.log("|---- defineProperties ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
console.log(obj1);
obj = Object.defineProperties(obj1, {
    name: {
        value: '小红', // 设置属性的值
        writable: true, // 设置属性的是否可写
        enumerable: true, // 设置属性是否被枚举（遍历）
    },
    sex: {
        value: "女" // 设置属性的值
    },
})
console.log(obj1);
console.log(obj);
// #endregion

// #region 方法名：keys(obj)
console.log("|---- keys ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
Object.defineProperties(obj1, {
    sex: {
        enumerable:false, // 设置属性不可被枚举（遍历）
    }
})
console.log(obj1);
// keys方法只能举列出对象可被枚举的属性
console.log(Object.keys(obj1));
// #endregion

// #region 方法名：values(obj)
console.log("|---- values ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
console.log(obj1);
console.log(Object.values(obj1));
// #endregion

// #region 方法名：entries(obj)
console.log("|---- entries ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
console.log(Object.entries(obj1));
// #endregion

// #region 方法名：getOwnPropertyDescriptor(obj, prop) & getOwnPropertyNames(obj) & getOwnPropertySymbols(obj)
console.log("|---- getOwnPropertyDescriptor ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
Object.defineProperties(obj1, {
    sex: {
        enumerable:false, // 设置属性不可被枚举（遍历）
    }
})
console.log(obj1);
// getOwnPropertyNames方法可以举列出对象可被枚举和不可被枚举的属性
console.log(Object.getOwnPropertyDescriptor(obj1, 'sex')); 
console.log("|---- getOwnPropertyNames ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
Object.defineProperties(obj1, {
    sex: {
        enumerable:false, // 设置属性不可被枚举（遍历）
    }
})
console.log(obj1);
// getOwnPropertyNames方法可以举列出对象可被枚举和不可被枚举的属性
console.log(Object.getOwnPropertyNames(obj1)); 
console.log("|---- getOwnPropertySymbols ----|");
var hobby = Symbol('hobby');
obj1 = {
    name: "小明",
    sex: "男",
};
obj1[hobby] = '篮球';
console.log(obj1);
// getOwnPropertyNames方法可以举列出对象可被枚举和不可被枚举的属性
console.log(Object.getOwnPropertySymbols(obj1)); 
// #endregion

// #region 方法名：getPrototypeOf(obj) & setPrototypeOf(obj, prop)
console.log("|---- getPrototypeOf ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
console.log(obj1);
console.log(Object.getPrototypeOf(obj1)); 
console.log("|---- setPrototypeOf ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
obj2 = {
    name: "小红",
    sex: "女"
}
console.log(obj1);
console.log(obj2);
console.log(Object.setPrototypeOf(obj1, obj2)); 
console.dir(obj2.isPrototypeOf(obj1));
// #endregion

// #region 方法名：is(val1, val2)
console.log("|---- is ----|");
obj1 = {};
obj2 = {};
console.log(Object.is(obj1, obj2));
// #endregion

// #region 方法名：preventExtensions(obj) & isExtensible(obj)
console.log("|---- isExtensible ----|");
obj = {};
console.log(Object.isExtensible(obj));
Object.preventExtensions(obj)
console.log(Object.isExtensible(obj));
// #endregion

// #region 方法名：seal(obj) & isSealed(obj)
console.log("|---- isSealed ----|");
obj = {};
console.log(Object.isSealed(obj));
Object.seal(obj)
console.log(Object.isSealed(obj));
// #endregion

// #region 方法名：freeze(obj) & isFrozen(obj)
console.log("|---- isFrozen ----|");
obj = {};
console.log(Object.isFrozen(obj));
Object.freeze(obj)
console.log(Object.isFrozen(obj));
// #endregion

console.log("");
console.log("");
console.log("");
console.log("|-------- 实例方法 ---------|");
// #region 方法名：hasOwnProperty(prop)
console.log("|---- hasOwnProperty ----|");
obj = {
    name: "小明",
    sex: "男",
};
console.log(obj);
console.log(obj.hasOwnProperty("name"));
// #endregion

// #region 方法名：propertyIsEnumerable(prop)
console.log("|---- propertyIsEnumerable ----|");
obj = {
    name: "小明",
    sex: "男",
};
console.log(obj);
console.log(obj.propertyIsEnumerable("name"));
// #endregion

// #region 方法名：isPrototypeOf(obj)
console.log("|---- isPrototypeOf ----|");
obj1 = {
    name: "小明",
    sex: "男",
};
console.log(obj1);
obj = Object.create(obj1, {
    bohhy: {
        value: '篮球', // 设置值
        enumerable: true, // 设置该属性可否被枚举（遍历）
    }
});
console.log(obj);
console.log(obj1.isPrototypeOf(obj)); // obj的隐式原型指向obj1
// #endregion

// #region 方法名：valueOf()
console.log("|---- valueOf ----|");
obj = {
    name: "小明",
    sex: "男",
};
console.log(obj.valueOf());
console.log(new Date().valueOf());
// #endregion

// #region 方法名：toString()
console.log("|---- toString ----|");
obj = {
    name: "小明",
    sex: "男",
};
console.log(obj.toString());
// #endregion

// #region 方法名：toLocaleString()
console.log("|---- toLocaleString ----|");
obj = {
    name: "小明",
    sex: "男",
};
console.log(obj.toLocaleString());
// #endregion
