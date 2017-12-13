var obj = {
    t: document.getElementById("property"),
    h: document.getElementById("layoutH"),
    v: document.getElementById("layoutV")
};
obj.h.onclick = function(){
    //判断当前布局
    if(this.className === "cl on"){
        //当前非此布局，进行切换
        obj.t.className = "rows";
        this.className = "cl";
        obj.v.className = "cl on";
    }
    return false;
};
obj.v.onclick = function(){
    //判断当前布局
    if(this.className === "cl on"){
        //当前非此布局，进行切换
        obj.t.className = "grid";
        this.className = "cl";
        obj.h.className = "cl on";
    }
    return false;
};