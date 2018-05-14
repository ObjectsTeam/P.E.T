var $login = (function(){
	var $loginDOM = ''
		+'<div class="login">'
			+'<h1>管理后台登录</h1>'
			+'<form>'
				+'<label>用户名　</label>'
				+'<input type="text" id="username"/><i style="color:black" id="user"> *</i>'
				+'<br />'
				+'<label>密　码　</label>'
				+'<input type="password" id="psw"/><i style="color:black" id="userpsw"> *</i>'
				+'<br />'
//				+'<label>验证码　</label>'
//				+'<input type="text" id="inp-yzm"/>'
//				+'<br />'
				+'<input type="submit" value="登 录"/>'
				+'<input type="button" value="注 册" id="btn"/>'
			+'</form>'
		+'</div>';
	function show(config){
		$(app.config.appContainer).html('');
		$(app.config.appContainer).html($loginDOM);
		
		var $form = $('form');
		
		$form.submit(function(e){
			//创建http服务
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
//			    console.log(xhr.readyState,xhr.status);
			    if (xhr.readyState == 4) {
			        //表示服务器的相应代码是200；正确返回了数据
			        if(xhr.status == 200){
			            var message = xhr.responseText;
			            var data = JSON.parse(message)[0];
			            console.log(data);
			            function validate(){
							if(data.username == $('#username').val()){
								$('#user').css('color','black');
								if(data.password == $('#psw').val()){
									return true;
								}else{
									$('#userpsw').css('color','red');
								}
							}else{
								$('#user').css('color','red');
							}
						}
			            e.preventDefault();
						if(validate()){
							//合法性校验
							location.hash = '#/index';
							app.isLogin = true;
						}
			        }
			    }
			};
			xhr.open("get","http://127.0.0.1:8080?"+"userlist",true);//使用POST方法
	        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//POST需增加
	        xhr.send();
			
		});
		$('#btn').click(function(){
			location.hash = '#/signUp';
		})
	}
	return {show:show}
})();