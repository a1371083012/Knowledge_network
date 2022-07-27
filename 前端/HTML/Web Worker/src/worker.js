onmessage = e => {
    const message = e.data;
    console.log(`[From Main]: ${message}`);
    if(message.indexOf('好') > -1) {
        postMessage('谢谢支持');
    }
};

// setInterval(()=>{
//     console.log('子线程：我在走');
// },1000);