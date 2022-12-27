/* 监听安装事件，install 事件一般是被用来设置你的浏览器的离线缓存逻辑 */
this.addEventListener('install', event => {
 	console.log('进行install状态！');
    /* 通过这个方法可以防止缓存未完成，就关闭serviceWorker */
    event.waitUntil(
        /* 创建一个名叫V1的缓存版本 */
        caches.open('v1').then(function (cache) {
            /* 指定要缓存的内容，地址为相对于跟域名的访问路径 */
            return cache.addAll([
                '/index.html',
                '/image/1.png'
            ]);
        })
    );
});

/* 监听活动后事件 active 事件中通常做一些过期资源释放的工作*/
const cacheStorageKey = 'v1';// 这是要保留的缓存
this.addEventListener('activate', event => {
    console.log('进行activate状态！');
    event.waitUntil(
        // 这里通常我们要检查并删除旧缓存
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => cacheStorageKey!== cacheName);
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }))
        }).then(()=> {
            // 立即接管所有页面
            console.log('立即接管所有页面');
            self.clients.claim();
        })
    );
});

/* 注册fetch事件，拦截全站的请求 */
this.addEventListener('fetch', function(event) {
    /* 在缓存中匹配对应请求资源直接返回 */
    console.log(event);
    event.respondWith(
        caches.match(event.request).then(function(resp){console.log(resp);
            return resp || fetch(event.request).then(function(response){
                return caches.open('v1').then(function(cache){
                    cache.put(event.request, response.clone());
                    return response;
                })
            })
        })
    );
});