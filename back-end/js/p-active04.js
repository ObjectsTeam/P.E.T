var $playList4Panel = (function() {
  function show(config) {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append(''
	    +'<div class="mbx">活动管理>新人折扣券</div>'
	    +'<table id="table">'
    	+'<tr></tr>'
    	+'</table>');
    var ThArr = ['编号','折扣券类型','总数','剩余量','备注','操作'];
    for(var i=0;i<ThArr.length;i++){
    	$('#table tr').append(''
    	+'<th>'+ThArr[i]+'</th>')
    }
    app.playlist4.forEach(function(m){
    	$('#table').append(''
    	+'<tr>'
    	+'<td>'+m.id+'</td>'
    	+'<td>'+m.name+'</td>'
    	+'<td>'+m.Totalnum+'</td>'
    	+'<td>'+m.Remnum+'</td>'
    	+'<td>'+m.text+'</td>'
    	+'<td><button>删除</button></td>'
    	+'</tr>')
    });
    $('#table').on('click','button',function(){
	  	$(this).parents('tr').remove();
	  });
  }
  return {show: show};
})();