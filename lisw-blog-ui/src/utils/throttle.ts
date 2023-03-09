// 回调函数的类型
type ReFn = (...args:any) => void

export default (fn: ReFn, delay: number = 1000) => {
    let time: any = 0
    return (...args: any) => {
        let now = Date.now()
        if(now - time > delay){
            fn.apply(this,args)
            time = now
        }
    }
}