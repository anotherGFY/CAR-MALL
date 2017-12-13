
            $(".small_pic1 li").mouseover(function(){
                $(this).siblings().removeClass("on");
                $(this).addClass("on");
                var preNumber=$(this).prevAll().size()+1;
                $(".big_pic1 li").removeClass("on");
                $(".big_pic1 li:nth-child("+preNumber+")").addClass("on");
            });


            $(".small_pic2 li").mouseover(function(){
                $(this).siblings().removeClass("on");
                $(this).addClass("on");
                var preNumber=$(this).prevAll().size()+1;
                $(".big_pic2 li").removeClass("on");
                $(".big_pic2 li:nth-child("+preNumber+")").addClass("on");
            });


            $(".small_pic3 li").mouseover(function(){
                $(this).siblings().removeClass("on");
                $(this).addClass("on");
                var preNumber=$(this).prevAll().size()+1;
                $(".big_pic3 li").removeClass("on");
                $(".big_pic3 li:nth-child("+preNumber+")").addClass("on");
            });

            $(".small_pic4 li").mouseover(function(){
                $(this).siblings().removeClass("on");
                $(this).addClass("on");
                var preNumber=$(this).prevAll().size()+1;
                $(".big_pic4 li").removeClass("on");
                $(".big_pic4 li:nth-child("+preNumber+")").addClass("on");
            });


