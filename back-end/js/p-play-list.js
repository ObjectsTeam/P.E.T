var $playListPanel = (function() {
  function show(config) {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append(''
    	+'<div class="mbx">活动管理>活动列表</div>'
    	+'<table id="table">'
    	+'<tr></tr>'
    	+'</table>');
    var ThArr = ['编号','话题圈分类','话题圈人数','敏感性词语','操作'];
    for(var i=0;i<ThArr.length;i++){
    	$('#table tr').append(''
    	+'<th>'+ThArr[i]+'</th>')
    }
    app.activeDate.forEach(function(m){
    	$('#table').append(''
    	+'<tr>'
    	+'<td>'+m.id+'</td>'
    	+'<td>'+m.fenlei+'</td>'
    	+'<td>'+m.number+'</td>'
    	+'<td>'+m.error+'</td>'
    	+'<td><button>删除</button></td>'
    	+'</tr>')
    });
    $('#table').on('click','button',function(){
	  	$(this).parents('tr').remove();
	  });
  }
  return {show: show};
})();