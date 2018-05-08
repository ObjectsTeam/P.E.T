var $playList2Panel = (function() {
  function show(config) {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append(''
	    +'<div class="mbx">活动管理>新人商品券</div>'
	    	+'<h1>$playListPanel2</h1>');
  }
  return {show: show};
})();