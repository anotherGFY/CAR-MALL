
    var btntop =document.getElementById('btntop');
    //获取页面可视区的高度
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;

    //滚动条滚动时触发
    window.onscroll = function(){
    	var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    	if(osTop >= clientHeight){
    		btntop.style.display = 'block';
    	}else{
    		btntop.style.display = 'none';
    	}


    	if (!isTop){
    		clearInterval(timer);
    	}
    	isTop = false;
    }

	btntop.onclick=function(){

		//设置定时器
		timer =setInterval(function(){
			//获取滚动条距离顶部的高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;	
			var ispeed = Math.floor(-osTop / 5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;

			isTop = true;

			if (osTop == 0){
				clearInterval(timer);
			}



		},30);



	    
	    
	    
	}

