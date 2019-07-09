(function(){
	// 下拉菜单下拉和收回功能设置
	let dropList = $(".nav-menu");
	let app = $('#app');
	let imooc = $('#imooc');
	let drop = true;
	// 点击按钮下拉和收回菜单
	$("#btn").click(function(){
		if(drop) {
			dropList.css('top','.9rem');
			drop = false;
		}else{
			dropList.css('top','-5rem');
			drop = true;
		}
		event.stopPropagation();
	});
	// 点击下拉菜单外区域收回菜单功能设置
	app.click(function(e){
		if(e.target==imooc[0]) return;
		if(e.target.parentNode == dropList[0]) return;
		if (!drop) {
			dropList.css('top','-5rem');
			drop = true;
		}
	});
})()
