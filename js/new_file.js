/***************导航背景色显示**************/
(function(){
	
	$(function(){
		$(window).scroll(function(){
		    if($(window).scrollTop()>10){
		    	$("#header").css("background","rgba(247,233,131,.3)")
		    }else{
		    	$("#header").css("background","transparent")
		    }
		});
/***************锚点链接*****************/
		$('.nav-rihght').find("a").click(function(){
//			var _index = $('.nav-rihght li').index($(this).parent());
            var _index = $(this).parent().index()
            //  目的，点击a的时候，获取li标签的索引
	    	$('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top-$("#header").height()
		    }, 400);
		    $(".nav-rihght").find("li").eq(_index).addClass("now").siblings().removeClass("now"); 
		    return false;		   
		});

		var n = 0;
		var len=$(".lun_img div").length;
		var timer=null;
		//背景轮播部分
		//默认显示第一张背景和第一个按钮、第一个导航标题
		$(".lun_img div").eq(0).css({"display":"block"});
		$(".button span").eq(0).addClass("active");
		$(".nav-rihght li").eq(0).addClass("now");
		//让鼠标移动到圆点时显示相应的图片
		$(".button span").click(function(){
			n = $(this).index();
            $(".lun_img div").eq(n).show().siblings(".lun_img div").hide();
			$(".button span").eq(n).addClass("active").siblings().removeClass("active");
		})
		//添加定时器
//		timer=setInterval(setTime,3000);
		function setTime(){
			n++;
			if(n>len-1){
				n = 0;
			}
			$(".lun_img div").eq(n).show().siblings(".lun_img div").hide();
			$(".button span").eq(n).addClass("active").siblings().removeClass("active");
		}
		//logo动画
		    $(".nav .logo img").addClass("animated swing");
		//背景轮播内的字体动画
		    $(".bj1 h1,.span_01").addClass("animated fadeInDown");
		    $(".bj2 h1,.span_02").addClass("animated fadeInLeft");
		    $(".bj3 h1,.span_03").addClass("animated fadeInRight");	
		//关于内容动画
		    $(".about .about_content").addClass("animated ");	
		//关于内容内的动画效果
		$(".a_02").click(function(){
			$(".h1_01").addClass("animated fadeInUp");
			$(".about_title span").addClass("animated fadeInDownBig");
			$(".about_left").addClass("animated fadeInLeft");
			$(".about_right").addClass("animated fadeInRight");
		});	
		//提供的服务动画
		$(".a_03").click(function(){
			$(".h1_02").addClass("animated lightSpeedIn");
			$(".Tigong_title span").addClass("animated fadeInLeft");
			$(".xiaohezi P").addClass("animated fadeInDown");
			$(".xiaohezi h2").addClass("animated fadeInDown");
			$(".xiaohezi span").addClass("animated fadeInDown");
			
		})
		//摄影库动画
		$(".a_04").click(function(){
			$(".Portfolio_title").addClass("animated bounceInDown");
			$(".Portfolio_text span").addClass("animated fadeInLeft");
			$(".Portfolio_btn li").addClass("animated fadeInRight");
			$(".Portfolio_photo").addClass("animated zoomIn");			
		})
		//定价动画
		$(".a_05").click(function(){
			$(".Pricing_title").addClass("animated rotateIn");
			$(".Pricing_text span").addClass("animated rotateInDownLeft");
			$(".hezi_01").addClass("animated fadeInLeftBig");
			$(".hezi_02").addClass("animated fadeInDownBig");
			$(".hezi_03").addClass("animated fadeInRightBig");
		})
		//联系我们动画
		$(".a_06").click(function(){
			$(".h2_04").addClass("animated fadeInDown");
			$(".span0").addClass("animated fadeInDownBig");
			$("#ipt_1").addClass("animated fadeInLeftBig");
			$("#ipt_2").addClass("animated fadeInRightBig");
			$("#ipt_3").addClass("animated fadeInUpBig");
		})
		//点击的时候变换图片
		//点击工作室的时候
//	$(".li_2").click(function(){
//		$(".img_1").animate({"left":"0","top":"280"},200);
//		$(".img_2").animate({"left":"355","top":"0"},200);
//		$(".img_3").animate({"left":"-355","top":"0"},200);
//		$(".img_6").animate({"left":"-355","top":"-280"},200);
//		$(".img_5").animate({"left":"1065","top":"-280"},200);
//		$(".img_7").hide();
//		$(".img_8").animate({"left":"710","top":"280"},200);
//		$(".img02").hide();
//	})
	//点击摄影
//	$(".li_3").click(function(){
//		$(".img_1").animate({"left":"0","top":"0"},200);
//		$(".img_2").animate({"left":"710","top":"0"},200);
//		$(".img_3").animate({"left":"-710","top":"280"},200);
//		$(".img_6").animate({"left":"-355","top":"-280"},200);
//		$(".img_5").animate({"left":"355","top":"-280"},200);
//		$(".img_4").animate({"left":"-355","top":"0"},200);
//		$(".img_7").hide();
//		$(".img_8").hide();
//		$(".img02").hide();
//	})
	//点击故事书
//	$(".li_4").click(function(){
//		$(".img_1").animate({"left":"355","top":"0"},200);
//		$(".img_2").animate({"left":"355","top":"0"},200);
//		$(".img_3").animate({"left":"1065","top":"0"},200);
//		$(".img_6").animate({"left":"-355","top":"-280"},200);
//		$(".img_5").animate({"left":"1065","top":"-280"},200);
//		$(".img_7").hide();
//		$(".img_8").hide();
//		$(".img02").hide();
//	})
	//点击品牌
//	$(".li_5").click(function(){
//		$(".img_1").animate({"left":"710","top":"0"},200);
//		$(".img_2").animate({"left":"-355","top":"0"},200);
//		$(".img_3").animate({"left":"-355","top":"0"},200);
//		$(".img_5").animate({"left":"1065","top":"-280"},200);
//		$(".img_6").hide();
//		$(".img_7").hide();
//		$(".img_8").hide();
//		$(".img02").hide();
//	})
	//点击全部
//		$(".li_1").click(function(){
////			$(".Portfolio_photo div").fadeIn();
//			
//		})
	})
})();
//摄影库内 关掉全屏轮播按钮
(function(){
	$(function(){
		var n=1;//一个变量
		var _this;
		//全局索引
		var _index;
		//   图片数据
		var w = $(".Full_box img").width();//读取图片的宽
		$(".Full_box").width(w*$(".Full_box img").length);
		var arrImg = ["center (19).jpg","timg1.jpg","img/9.jpg","bj6.jpg","hunsha.jpg","儿童3.jpg","闺蜜1.jpg","亲子.jpg"]
	//图片的数组
	//  循环添加数据
		$.each($(".Portfolio_photo>div"),function(index,elem){
			$(elem).find("img").attr("src","images/"+arrImg[index])
		})
		//循环
		
		$(".Portfolio_photo>div").hover(function(){
			var oMb = $("<div id='module'><img></div>");   
			_this = $(this).index();
		
			$(".Portfolio_photo>div").eq(_this).append(oMb)
		},function(){
			
			$(".Portfolio_photo>div").eq(_this).find($("#module")).remove()
		})
		
		//点击的时候执行
		$(".Portfolio_photo>div").click(function(){
			_index = $(this).index();//点击的当前索引赋值给_index
			console.log(_index)
			var fullLeft = ( _index+1)*w;//定义一个长度，这个长度=当前索引+1*图片的宽度
			$(".Full").show();//点击的时候让隐藏的大div显示
			$(".Full_box").animate({"left":-fullLeft},0);	//点击的时候让full内full_box	对应当前点击图片	
		})
		//  关闭按钮
		$(".Full_hide").click(function(){
			$(".Full").hide();
			
		})
		
		//点击下一张按钮
		$(".Full_next").click(function(){
			//  8 1 2 3 4 5 6 7 8 1
			//_index的初始值为0
			_index++;
			//点击的时候让_index++，_index+1是点击的时候的图片的索引值，最开始图片的left值是0，点击的时候让后面一长串的图片的left值=-（索引+1）*图片的宽度
			$(".Full_box").stop().animate({"left":-(_index+1)*w},300);
		     
		    //如果索引==8的时候，让后面显示的图片的left值回到刚开始的left值，就是-W
			if(_index == 8){
			$(".Full_box").animate({"left":-w},0);	
				_index = 0;
			}
		})
		
		//  点击上一张
		$(".Full_prev").click(function(){
			//  8 1 2 3 4 5 6 7 8 1
			_index--;
			$(".Full_box").stop().animate({"left":-(_index+1)*w},300);
//			console.log(_index)      
			if(_index == -1){
			$(".Full_box").animate({"left":-w*8},0);	
				_index = 7;
			}
		})
		
	});
})();
//返回顶部
(function(){
	$(function(){
		$(window).scroll(function(){
			if($(window).scrollTop()>200){
				$("#Gotop").show();
			}else{
				$("#Gotop").hide();
			}			
		});
		$("#Gotop").click(function(){
			$("html,body").animate({"scrollTop":0},800);
		});
	});
})();
