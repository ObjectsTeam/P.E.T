$(function(){
	//获取localstorage中的昵称
	$(function(){
		if(localStorage.getItem('userName') !== null){
			$('#left_name>p').html(localStorage.getItem('userName'))
		}else{
			$('#left_name>p').html('管理员昵称')
		}
	})
})
