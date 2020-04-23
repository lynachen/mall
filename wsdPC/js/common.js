$(function(){
	$("#header").load("../common/common.html .common-header",function(){
		// 锚点点击导航导航样式变化
		$('#menubox').on('click','li',function(e){
			var target = e.target
			var id = $(target).attr('href')
			$(this).addClass('on').siblings().removeClass('on')
			$('html,body').animate({
				scrollTop:$(id).offset().top - 20 + 'px'  //错位20px，以免跳转位置靠屏幕上方
			},500)
		})
	});
	$("#footer").load("../common/common.html .common-footer");
})
//滚动时页头固定
$(window).on("scroll",function(){
	if($(window).scrollTop() == 0){
		$(".common-header").removeClass("fixed");
	} else{
		$(".common-header").addClass("fixed");
	}
})
