var contextmenu = document.getElementById('contextmenu');
    var menu = document.getElementById('menu');
    //捕捉右键事件
    contextmenu.addEventListener('contextmenu', event=>{
        event.preventDefault();
        menu.style.display = "block";
        menu.style.top = event.clientY + 'px';
        menu.style.left = event.clientX + 'px';
    })
    //鼠标按下时隐藏菜单
    window.onload= ()=>{   
		document.onmousedown= event=>{
			menu.style.display="none";
		}
    }