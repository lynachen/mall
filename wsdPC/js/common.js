$(function(){
	$("#header").load("../common/common.html .common-header",function(){
		// 锚点点击导航导航样式变化
		$('.menubox').on('click','li',function(e){
			var target = e.target
			var id = $(target).attr('href')
			$(this).addClass('on').siblings().removeClass('on')
			// 折叠时候的样式
			$('.nav-tab-toggle .menubox').slideUp()
			$('.navbar-toggle').addClass('collapsed')
			
			$('html,body').animate({
				scrollTop:$(id).offset().top - 88 + 'px'  //去掉导航栏高度
			},500)
		})
		// 折叠与展开
		$('.navbar-toggle').click(function(){
			if($(this).hasClass('collapsed')){
				$(this).removeClass('collapsed')
				$(this).siblings('.menubox').slideDown()
			}else{
				$(this).addClass('collapsed')
				$(this).siblings('.menubox').slideUp()
			}
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
