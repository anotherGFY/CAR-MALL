
	function testContent(obj){
            if(document.getElementById(obj).value.length==0){

                 var testEle = document.getElementById("test1")  
                 testEle.setAttribute("data-toggle","modal");    
                 testEle.setAttribute("data-target","#myModal");

                }
            else {
                  var testEle = document.getElementById("test1")  
                 testEle.setAttribute("data-toggle","#");    
                 testEle.setAttribute("data-target","#");
                }
            }
