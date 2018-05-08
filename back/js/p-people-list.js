var $peopleListPanel = (function() {
  function show() {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append(''
	    +'<div class="mbx">用户管理>用户列表</div>'
	    +'<table id="table">'
	    +'<tr>'
	    +'</tr>'
	    +'</table>');
	  var ThArr = ['用户ID','用户性别','账号','宠物种类','宠物年龄','宠物性别','操作'];
	  for(var i=0;i<ThArr.length;i++){
	  	$('#table tr').append('<th>'+ThArr[i]+'</th>')
	  };
	  app.userDate.forEach(function(m){
	  	$('#table').append(''
	  		+'<tr>'
	  		+'<td>'+m.userid+'</td>'
	  		+'<td>'+m.usersex+'</td>'
	  		+'<td>'+m.username+'</td>'
	  		+'<td>'+m.species+'</td>'
	  		+'<td>'+m.years+'</td>'
	  		+'<td>'+m.sex+'</td>'
	  		+'<td><button>删除</button></td>'
	  		+'</tr>');
	  });
	  $('#table').on('click','button',function(){
	  	$(this).parents('tr').remove();
	  });
  }

  return {show: show};
})();