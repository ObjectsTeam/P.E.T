var $playList4Panel = (function() {
  function show(config) {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append(''
	    +'<div class="mbx">活动管理>新人折扣券</div>'
	    	+'<h1>$playListPanel4</h1>');
  }
  return {show: show};
})();