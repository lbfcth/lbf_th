$(function() {
	// pc下拉菜单开始
	$("nav>ul>li").mouseenter(function(){
		$(this).children("ul").css("display","block")
		
		function x(){$(this).children("ul").children("li").addClass("animated fadeInRight")
		}
		setTimeout(x,500)
		
	})
	$("nav>ul>li").mouseleave(function(){
			$(this).children("ul").css("display","none")
	})
	//pc 顶部搜索部分开始
	$(".sousuo").click(function(){
		$(this).fadeOut();
		$("nav>ul").fadeOut();
		$(".ssxl").css("display","block")
		if($(".ssxl").css("display","block")){
			$(".sstop").fadeIn(2000)
//			setTimeout(function(){$(".sstop>input").addClass("animated fadeInRight").css("display","block")
//		$(".sstop_1").addClass("animated fadeInRight").css("display","block")
//		$(".ssxl>ul>li").addClass("animated fadeInRight").css("display","block")	
//		})
	}
	})
	$(".sstop_2").click(function(){
		$(".ssxl").css("display","none")
		$("nav>ul").fadeIn(500);
		$(".sousuo").fadeIn(500);
		
	})
	// 移动端顶部开始
	$(".luoxia").click(function(){
		$(".sjxlcd").css("display","block")
		$(this).css("display","none")
		$(".shouqi").css("display","block")
			$(".sjxlcd>h3").addClass("animated fadeInDown").slideDown(600)
		$(".sjsousuo_1").css("display","none")
		
	})
	
	$(".shouqi").click(function(){
		$(this).css("display","none")
		$(".sjxlcd").css("display","none")
		$(".luoxia").css("display","block")
		$(".sjsousuo_1").css("display","block")
	})
	$(".sjxlcd>h3").click(function(){
		$(this).children("ul").slideToggle(200).parent().siblings().children("ul").slideUp()
	})
	
	$(".sjsousuo_1").click(function(){
	$(".found").stop().slideToggle(500)
		$(".luoxia").toggle();
	})
	/* 移动端顶部结束 */
	
	
	// 移动底部
	$(".sjfxlcd>h3").click(function(){
		$(this).children("ul").slideToggle(200).parent().siblings().children("ul").slideUp()
	}) 
	//返回顶部
		$(document).scroll(function(){
			$(".back").hide();
			if($(document).scrollTop()>$(window).innerHeight()){
				$(".back").show();
			}else{
				$(".back").hide();
			}
			
		})
		$(".back").click(function(){
			$("body,html").animate({"scrollTop":"0"},1000);
		})
})
		
			