var $playListPanel = (function() {
  function show(config) {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append(''
    	+'<div class="mbx">活动管理>活动列表</div>'
    	+'<table id="table">'
    	+'<tr></tr>'
    	+'</table>');
    var ThArr = ['编号','活动类型','限定人数','已报名人数','操作'];
    for(var i=0;i<ThArr.length;i++){
    	$('#table tr').append(''
    	+'<th>'+ThArr[i]+'</th>')
    }
    app.playlist.forEach(function(m){
    	$('#table').append(''
    	+'<tr>'
    	+'<td>'+m.id+'</td>'
    	+'<td>'+m.class+'</td>'
    	+'<td>'+m.Totalnum+'</td>'
    	+'<td>'+m.peoplenum+'</td>'
    	+'<td><button>删除</button></td>'
    	+'</tr>')
    });
    $('#table').on('click','button',function(){
	  	$(this).parents('tr').remove();
	  });
  }
  return {show: show};
})();