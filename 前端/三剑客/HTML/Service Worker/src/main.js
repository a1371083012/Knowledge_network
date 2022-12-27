console.log(window.Worker?'支持WebWorker！':'不支持WebWorker！');
const worker = new Worker('src/worker.js');
worker.onmessage = e => {
    console.log(e);
    const message = e.data;
    console.log(`[From Worker]: ${message}`);
    document.getElementById('app').innerHTML = message;
};
// setInterval(()=>{
//     console.log('主线程：我在走');
// },1000);
// setTimeout(()=>{
//     console.log('主线程产生阻塞');
//     alert("主线程产生阻塞")
// },2000);
worker.postMessage('写的真好!');
