const ADMIN = 'admin';
{
    var a = 1;
    let b = 2;
}
console.log(a); // 1
console.log(b); // error

console.log(ADMIN); // admin
ADMIN = 'foo'; // error
