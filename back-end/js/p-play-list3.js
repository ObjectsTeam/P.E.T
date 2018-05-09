var $playList3Panel = (function() {
  function show(config) {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append(''
	    +'<div class="mbx">活动管理>新人立减券</div>'
	    	+'<h1>$playListPanel3</h1>');
  }
  return {show: show};
})();