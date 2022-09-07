let User = {
    name: '张三',
}
let BigUser = {
    name: '李四',
    show(){
        console.log(this.name);
    }
}
Object.setPrototypeOf(User, BigUser);

User.show();