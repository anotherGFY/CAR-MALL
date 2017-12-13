window.onload = function(){
	var sum = document.getElementById("sum");
	var price = document.getElementsByName("price");
	var nam = document.getElementsByName("nam");
	var minn = document.getElementsByName("min");
	var add = document.getElementsByName("add");
	var total = document.getElementsByName("total");
	var foott = document.getElementById("foott");
	var deleteA = document.getElementsByName("delete");
	var del = document.getElementById("del");
	var table = document.getElementsByTagName("table");

	// 点击商品按钮
  $(".GoodsCheck").click(function() {
    var goods = $(this).closest(".one-shop").find(".GoodsCheck"); //获取本店铺的所有商品
    var goodsC = $(this).closest(".one-shop").find(".GoodsCheck:checked"); //获取本店铺所有被选中的商品
    var Shops = $(this).closest(".one-shop").find(".ShopCheck"); //获取本店铺的全选按钮
    if (goods.length == goodsC.length) { //如果选中的商品等于所有商品
      Shops.prop('checked', true); //店铺全选按钮被选中
      if ($(".ShopCheck").length == $(".ShopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
        $("#AllCheck").prop('checked', true); //全选按钮被选中
        tot();
      } else {
        $("#AllCheck").prop('checked', false); //else全选按钮不被选中 
        tot();
      }
    } else { //如果选中的商品不等于所有商品
      Shops.prop('checked', false); //店铺全选按钮不被选中
      $("#AllCheck").prop('checked', false); //全选按钮也不被选中
      // 计算
      tot();
      // 计算
    }
  });
  // 点击店铺按钮
  $(".ShopCheck").change(function() {
    if ($(this).prop("checked") == true) { //如果店铺按钮被选中
      $(this).parents(".one-shop").find(".goods-check").prop('checked', true); //店铺内的所有商品按钮也被选中
      if ($(".ShopCheck").length == $(".ShopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
        $("#AllCheck").prop('checked', true); //全选按钮被选中
        tot();
      } else {
        $("#AllCheck").prop('checked', false); //else全选按钮不被选中
        tot();
      }
    } else { //如果店铺按钮不被选中
      $(this).parents(".one-shop").find(".goods-check").prop('checked', false); //店铺内的所有商品也不被全选
      $("#AllCheck").prop('checked', false); //全选按钮也不被选中
      tot();
    }
  });
  // 点击全选按钮
  $("#AllCheck").click(function() {
    if ($(this).prop("checked") == true) { //如果全选按钮被选中
      $(".goods-check").prop('checked', true); //所有按钮都被选中
      tot();
    } else {
      $(".goods-check").prop('checked', false); //else所有按钮不全选
      tot();
    }
    $(".ShopCheck").change(); //执行店铺全选的操作
  });

	//合计函数
	function tot(){
		var arr = [],sumA = 0;
		for(var m = 0;m < form1.che0.length;m++){
			if(form1.che0[m].checked){
				arr.push(total[m].innerHTML);
				sumA += parseInt(nam[m].innerHTML);
			}
		}
		if(arr.length>0){
			var str = "<strong>&yen;</strong>";
			var sumB = 0;
			for(le = 0;le < arr.length;le++){
				sumB += parseFloat(arr[le])
			}
			foott.innerHTML =  str + sumB.toFixed(2);;
			sum.innerHTML = sumA;
		}
		else{
			foott.innerHTML = "<strong>&yen;</strong>0.00";
			sum.innerHTML = 0;
		}
	}
	tot()
	//选中删除
	del.onclick = function(){
		for(var i = 0;i < form1.che0.length;i++){
			if(form1.che0[i].checked){
				table[i+1].style.display = "none";
				nam[i].innerHTML = 0;
				total[i].innerHTML = (parseFloat(price[i].innerHTML)*parseFloat(nam[i].innerHTML)).toFixed(2);
			}
			tot()
		}
	}
	//单项删除
	for(p = 0;p < deleteA.length;p++){
		deleteA[p].nam = p;
		deleteA[p].onclick = function(){
			table[this.nam+1].style.display = "none";
			nam[this.nam].innerHTML = 0;
			total[this.nam].innerHTML = (parseFloat(price[this.nam].innerHTML)*parseFloat(nam[this.nam].innerHTML)).toFixed(2);
			tot()
		}
	}
	for(q = 0;q < add.length;q++){
		//货物增加
		add[q].nam = q;
		add[q].onclick = function(){
			if(parseInt(nam[this.nam].innerHTML)<50){
				nam[this.nam].innerHTML = parseFloat(nam[this.nam].innerHTML) + 1;
				total[this.nam].innerHTML = (parseFloat(price[this.nam].innerHTML)*parseFloat(nam[this.nam].innerHTML)).toFixed(2);
				tot()
			}
		}
		//货物减少
		minn[q].nam = q;
		minn[q].onclick = function(){
			if(parseInt(nam[this.nam].innerHTML)>0){
				nam[this.nam].innerHTML = parseFloat(nam[this.nam].innerHTML) - 1;
				total[this.nam].innerHTML = (parseFloat(price[this.nam].innerHTML)*parseFloat(nam[this.nam].innerHTML)).toFixed(2);
				tot()
			}
		}
	}
	//未选中弹出框
     $("#footrr").click(function() {
         var goodsC = $(".GoodsCheck").closest(".one-shop").find(".GoodsCheck:checked"); //获取本店铺所有被选中的商品
     	 if (goodsC.length == 0) {
     	 	var Footrr = document.getElementById("footrr")  
                 Footrr.setAttribute("data-toggle","modal");    
                 Footrr.setAttribute("data-target","#myfootrr");
     	}
     	else{
     		var Footrr = document.getElementById("footrr")  
                 Footrr.setAttribute("data-toggle","#");    
                 Footrr.setAttribute("data-target","#");
     	}
                 
            });
}