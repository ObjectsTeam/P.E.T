$(function(){
	if(!app.isLogin){
		$login.show();
	}
	
	window.onhashchange = function(){
		if(location.hash === '#/index'){
			$('#admin-app').html("");
			$header.show();
			$menu.show();
			$stage.show();
			$footer.show();
		}else if(location.hash === '#/login'){
			$login.show();
			app.isLogin = false;
		}else {
	    	$stage.load(location.hash);
	    }
	}
})
