$(function(){
	$(".btn_top").click(function(){
        $('body,html').stop().animate({scrollTop: 0 }, 600);
    });


	$('.top_menu .m ul li a.depth1').click(function(){
		if($(this).parent().hasClass("on")) {
			$(this).parent().removeClass("on");
		} else {
			$('.top_menu .m ul li').removeClass("on");
			$(this).parent().addClass("on");
		}
	});
	
	$('.m_menu').click(function(){
		$('.top_menu').addClass("on");
		$("body").css({"overflow-y" : "hidden"});
	});	

	$('.top_menu .bg').click(function(){
		$('.top_menu').removeClass("on");
		$("body").css({"overflow-y" : "visible"});
	});

	$('.top_menu .m .con .close').click(function(){
		$('.top_menu').removeClass("on");
		$("body").css({"overflow-y" : "visible"});
	});
	
	$('.top_menu .m ul li a.depth1').click(function(){
		$('.top_menu').removeClass("on");
		$("body").css({"overflow-y" : "visible"});
	});

	$(".btn_p").click(function() {

	  var wrappos = $(".main_p1").offset().top; 

	  $('body,html').stop().animate({scrollTop: wrappos }, 500);

	 });
	

	
});

