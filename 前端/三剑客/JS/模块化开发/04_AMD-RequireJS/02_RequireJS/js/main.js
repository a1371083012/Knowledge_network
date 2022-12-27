(function(){
    requirejs.config({
        baseUrl: 'js/', // 基本路径
        paths:{ // 配置路径
            alerter: './modules/alerter',
            dataService: './modules/dataService',
            jquery: './lib/jquery-3.6.1.min',
            angular: './lib/angular.min'
        },
        // angular不支持，独立配置模块暴露
        shim:{
            angular:{
                exports: 'angular'
            }
        }
    })

    requirejs(['alerter', 'angular'], function(alerter){
        alerter.showMsg();
        console.log(angular);
    })
})()