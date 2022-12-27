
(function(window, $){
    let msg = 'module4';
    function foo(){
        console.log('foo()', msg);
    }
    window.module4 = foo;
    $('body').css('background', 'red');
})(window, jQuery);