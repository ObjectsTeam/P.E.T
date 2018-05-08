var $login = (function(){
	var $loginDOM = ''
		+'<div class="login">'
			+'<h1>管理后台登录</h1>'
			+'<form>'
				+'<label>用户名　</label>'
				+'<input type="text" />'
				+'<br />'
				+'<label>密　码　</label>'
				+'<input type="text" />'
				+'<br />'
				+'<label>验证码　</label>'
				+'<input type="text" id="inp-yzm"/>'
				+'<br />'
				+'<input type="submit" value="登 录"/>'
			+'</form>'
		+'</div>';
	function show(config){
		$(app.config.appContainer).html('');
		$(app.config.appContainer).html($loginDOM);
		
		var $form = $('form');
		function validate(){
			return true;
		}
		$form.submit(function(e){
			e.preventDefault();
			if(validate()){
				//合法性校验
				location.hash = '#/index';
				app.isLogin = true;
			}
		})
	}
	return {show:show}
})();