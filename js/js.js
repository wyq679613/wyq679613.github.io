;(function(){
    $(function(){
        var n = 0;
        var len = $("#imgbox li").length;
        var timer = null;
        // 默认显示第一张图片和第一个按钮
        $("#imgbox li").eq(0).css({
            "z-index":1,
            "opacity":1
        });
        $("#point li").eq(0).addClass("active");
        $("#slideBtn").hide();
        // 点next一个按钮
        $(".next").click(function(){
            // n++;
            // if(n>len-1){
            //     n=0;
            // }
            n>len-2?n=0:n=++n;
            // 图片变化
            animated();
        });
        // 点击上一个按钮
        $(".pre").click(function(){
            n--;
            if(n<0){
                n=len-1;
            }
            // n<0?n=len-1:n=--n;
            animated();
        });

        // 鼠标移动到小按钮之后，显示对应的图片
        $("#point li").hover(function(){
            n = $(this).index();
            animated();
        });

        // 添加定时器
        timer = setInterval(setTime,3000);
        function setTime(){
            n>len-2?n=0:n=++n;
            // 图片变化
            animated();
        }
        // 鼠标移入banner定时器停止
        $("#banner").hover(function(){
            clearInterval(timer);
            $("#slideBtn").fadeIn();
        },function(){
            timer = setInterval(setTime,3000);
            $("#slideBtn").fadeOut();
        });


        // 共同函数提取出来
        function animated(){
            $("#imgbox li").eq(n).stop().animate({
                "z-index":1,
                "opacity":1
            }).siblings().stop().animate({
                "z-index":0,
                "opacity":0
            });
            $("#point li").eq(n).addClass("active").siblings().removeClass("active")
        }

    })
})();

