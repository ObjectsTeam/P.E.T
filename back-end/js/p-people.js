var $peopleListPanel = (function() {
  function show() {
    $(app.config.panelContainer).html(''
	    +'<div class="mbx">用户管理>用户列表</div>'
    	+'<input type="button" value="添加" id="addBtn"/>');
    $(app.config.panelContainer).append(''
	    +'<table id="table">'
	    +'<tr>'
	    +'</tr>'
	    +'</table>');
	  var ThArr = ['用户ID','用户性别','账号','宠物种类','宠物年龄','宠物性别','操作'];
	  for(var i=0;i<ThArr.length;i++){
	  	$('#table tr').append('<th>'+ThArr[i]+'</th>')
	  };
	  app.peoplelist.forEach(function(m){
	  	$('#table').append(''
	  		+'<tr>'
	  		+'<td><input type="text" value='+m.userid+'></td>'
	  		+'<td><input type="text" value='+m.usersex+'></td>'
	  		+'<td><input type="text" value='+m.username+'></td>'
	  		+'<td><input type="text" value='+m.species+'></td>'
	  		+'<td><input type="text" value='+m.years+'></td>'
	  		+'<td><input type="text" value='+m.sex+'></td>'
	  		+'<td>'
	  		+'<button>更新</button>'
	  		+'<button>删除</button>'
	  		+'</td>'
	  		+'</tr>');
	  });
	  var arr=[];
	  $('#addBtn').click(function(){
			$('#table').append(''
	  		+'<tr>'
	  		+'<td><input type="text" /></td>'
	  		+'<td><input type="text" /></td>'
	  		+'<td><input type="text" /></td>'
	  		+'<td><input type="text" /></td>'
	  		+'<td><input type="text" /></td>'
	  		+'<td><input type="text" /></td>'
	  		+'<td>'
	  		+'<button>更新</button>'
	  		+'<button>删除</button>'
	  		+'</td>'
	  		+'</tr>');
	  		$('#table').on('blur','input',function(){
	  			arr.push($(this).val())
	  		});
		});
		$('#table').on('click','button:first-child',function(){
//			console.log($(this).parents('tr').find('td')[0].value)
//			var leng = $(this).parents('tr').find('td');
//			for(var i=0;i<leng.length-1;i++){
//				arr.push(leng[i].value)
//			}
//			console.log(arr)
			//创建http服务
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function () {
					//console.log(xhr.readyState,xhr.status);
				    if (xhr.readyState == 4) {
				        //表示服务器的相应代码是200；正确返回了数据
				        if(xhr.status == 200){
				        	
				        }
				    }
				};
				xhr.open("get","http://127.0.0.1:8079?"+arr[0]+','+arr[1]+','+arr[2]+','+arr[3]+','+arr[4]+','+arr[5]+','+localStorage.getItem('panel'),true);//使用POST方法
	    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//POST需增加
	    xhr.send();
		})
	  
	  $('#table').on('click','button:last-child',function(){
	  	$(this).parents('tr').remove();
				var id = $(this).parents('tr').find("td").find('input')[0].value;
				console.log(id)
				//创建http服务
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function () {
	//			    console.log(xhr.readyState,xhr.status);
				    if (xhr.readyState == 4) {
				        //表示服务器的相应代码是200；正确返回了数据
				        if(xhr.status == 200){
				        	
				        }
				    }
				};
				xhr.open("get","http://127.0.0.1:8081?"+localStorage.getItem("panel")+"-"+"userid="+id,true);//使用POST方法
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//POST需增加
        xhr.send();
	  });
  }

  return {show: show};
})();