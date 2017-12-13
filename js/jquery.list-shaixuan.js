/**
 * jquery.sort.js
 * 商品发布-选择分类
**/
/*定义三级分类数据*/
//一级分类
var province = ["油品", "火花塞", "轮胎", "刹车片", "滤清器", "雨刮", "养护用品", "照明类品", "蓄电池"];
//二级分类
var city = [
	["汽机油", "柴机油", "刹车油","发动机清洗油", "齿轮油", "变速箱油"],
	["铂金火花塞", "铱金火花塞", "双铂金火花塞", "双铱金火花塞","镍合金火花塞","普通合金火花塞", "钇金火花塞", "白金火花塞"],
	["防爆轮胎", "普通轮胎"],
	["前刹", "后刹", "前后刹全套"],
	["机油滤清器", "汽油滤清器", "柴油滤清器", "空气滤清器", "空调滤清器"],
	["无骨雨刮", "有骨雨刮", "三段式雨刮"],
	["添加剂", "清洁剂", "雪种", "助力油"],
	["升级灯泡", "疝气灯", "卤素灯", "雾灯", "大灯", "辅助车灯", "信号灯"],
	["启动型蓄电池"]
];
//三级分类
var district = [
	/*油品*/
	[
		["油品品牌A", "品牌B", "品牌C"],
		["油品品牌AA", "品牌BB", "品牌CC"],
		["油品品牌AAA", "品牌BBB", "品牌CCC"],
		["油品品牌A", "品牌B", "品牌C"],
		["油品品牌AA", "品牌BB", "品牌CC"],
		["油品品牌AAA", "品牌BBB", "品牌CCC"]

	],
	/*火花塞*/
	[
		["火花塞品牌A", "品牌B", "品牌C"],
		["火花塞品牌AA", "品牌BB", "品牌CC"],
		["火花塞品牌AAA", "品牌BBB", "品牌CCC"],
		["火花塞品牌AAAA", "品牌BBBB", "品牌CCCC"],
		["火花塞品牌A", "品牌B", "品牌C"],
		["火花塞品牌AA", "品牌BB", "品牌CC"],
		["火花塞品牌AAA", "品牌BBB", "品牌CCC"],
		["火花塞品牌AAAA", "品牌BBBB", "品牌CCCC"]
	],
	/*轮胎*/
	[
		["轮胎品牌A", "品牌B", "品牌C"],
		["轮胎品牌AA", "品牌BB", "品牌CC"]

	],
	/*刹车片*/
	[
		["刹车片品牌A", "品牌B", "品牌C"],
		["刹车片品牌AA", "品牌BB", "品牌CC"],
		["刹车片品牌AAA", "品牌BBB", "品牌CCC"]
	],
	/*滤清器*/
	[
		["滤清器品牌A", "品牌B", "品牌C"],
		["滤清器品牌AA", "品牌BB", "品牌CC"],
		["滤清器品牌AAA", "品牌BBB", "品牌CCC"],
		["滤清器品牌A", "品牌B", "品牌C"],
		["滤清器品牌AA", "品牌BB", "品牌CC"]
	],
	/*雨刮*/
	[
		["雨刮品牌A", "品牌B", "品牌C"],
		["雨刮品牌AA", "品牌BB", "品牌CC"],
		["雨刮品牌AAA", "品牌BBB", "品牌CCC"]
	],
	/*养护用品*/
	[
		["养护用品品牌A", "品牌B", "品牌C"],
		["养护用品品牌AA", "品牌BB", "品牌CC"],
		["养护用品品牌AAA", "品牌BBB", "品牌CCC"],
		["养护用品品牌AAAA", "品牌BBBB", "品牌CCCC"]
	],
	/*照明类品*/
	[
		["照明类品品牌A", "品牌B", "品牌C"],
		["照明类品品牌AA", "品牌BB", "品牌CC"],
		["照明类品品牌AAA", "品牌BBB", "品牌CCC"],
		["照明类品品牌AAAA", "品牌BBBB", "品牌CCCC"],
		["照明类品品牌A", "品牌B", "品牌C"],
		["照明类品品牌AA", "品牌BB", "品牌CC"],
		["照明类品品牌AAA", "品牌BBB", "品牌CCC"]
	],
	/*蓄电池*/
	[
        ["蓄电池品牌A", "品牌B", "品牌C"],
	]
];
var expressP, expressC, expressD, expressArea, areaCont;
var arrow = " <font>&gt;</font> ";

/*初始化一级目录*/
function intProvince() {
	areaCont = "";
	for (var i=0; i<province.length; i++) {
		areaCont += '<li onClick="selectP(' + i + ');"><a href="javascript:void(0)">' + province[i] + '</a></li>';
	}
	$("#sort1").html(areaCont);
}
intProvince();

/*选择一级目录*/
function selectP(p) {
	areaCont = "";
	for (var j=0; j<city[p].length; j++) {
		areaCont += '<li onClick="selectC(' + p + ',' + j + ');"><a href="javascript:void(0)">' + city[p][j] + '</a></li>';
	}
	$("#sort2").html(areaCont).show();
	$("#sort3").hide();
	$("#sort1 li").eq(p).addClass("active").siblings("li").removeClass("active");
	expressP = province[p];
	$("#selectedSort").html(expressP);
	$("#releaseBtn").removeAttr("disabled");
}

/*选择二级目录*/
function selectC(p,c) {
	areaCont = "";
	expressC = "";
	for (var k=0; k<district[p][c].length; k++) {
		areaCont += '<li onClick="selectD(' + p + ',' + c + ',' + k + ');"><a href="javascript:void(0)">' + district[p][c][k] + '</a></li>';
	}
	$("#sort3").html(areaCont).show();
	$("#sort2 li").eq(c).addClass("active").siblings("li").removeClass("active");
	expressC = expressP + arrow + city[p][c];
	$("#selectedSort").html(expressC);
}

/*选择三级目录*/
function selectD(p,c,d) {
	$("#sort3 li").eq(d).addClass("active").siblings("li").removeClass("active");
	expressD = expressC + arrow + district[p][c][d];
	$("#selectedSort").html(expressD);
}

/*点击下一步*/
$("#releaseBtn").click(function() {
	var releaseS = $(this).prop("disabled");
	if (releaseS == false) {//未被禁用
		//location.href = "商品发布-详细信息.html";//跳转到下一页
	}
});
