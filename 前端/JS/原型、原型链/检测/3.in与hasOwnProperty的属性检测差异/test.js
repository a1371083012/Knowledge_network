let a = {url: "loze.com"};
let b = {name: "loze"};

// Object.prototype.web = "www.loze.com";
// console.log("web" in a);

Object.setPrototypeOf(a, b);
// console.log('name' in a);


console.log(a.hasOwnProperty("name"));

for (const key in a) {
    if (Object.hasOwnProperty.call(a, key)) {
        console.log(a[key]);
    }
} 