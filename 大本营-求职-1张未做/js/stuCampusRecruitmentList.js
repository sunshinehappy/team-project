// JavaScript Document
window.onload=function(){
             var companyName = document.getElementById("companyname");
			 var searche=document.getElementById("search");
			 var region=document.getElementById("region"); 
			 var regindetail=document.getElementById("regiondetail");
             addListener(companyName,"click",function(){ 
                 companyName.value = "";
				 companyName.style.backgroundColor="white";
				 searche.style.background="white";
				 
				  
             }) 
             addListener(companyName,"blur",function(){ 
                 companyName.value = "请输入公司，搜一下试试吧~"; 
				 searche.style.background="#f5f5f5";
				 companyName.style.background="#f5f5f5";
             })
			 region.onmouseover=function(){
				 regiondetail.style.display="block";
			 }
			 /*选择地区的函数*/
		var regionLi=document.getElementById("regiondetail").getElementsByTagName("li");
				 for(var i=0;i<regionLi.length;i++){
				 	regionLi[i].onclick=function(){
					region.value=this.innerHTML;
					regiondetail.style.display="none";
				 };  
				}
		/*收起条件*/
		var hide=document.getElementById("hide");
		var topFooter=document.getElementById("topFooter");
		hide.onclick=function(){
			topFooter.style.display="none";
		}
		
		/*列表中的按钮出现与否*/
		/*IE的兼容性，因为在IE中没有getElementsByTagName*/
	if(!document.getElementsByClassName){
		document.getElementsByClassName=function(cls){
			var ret=[];
			var cls=document.getElementsByTagName('*');/*获取所有的标签*/
			for(var i=0;i<cls.length;i++){
				if(cls[i].className===cls||cls[i].className.indexOf(cls+'')>=0||cls[i].className.indexOf(''+cls)>=0||cls[i].className.indexOf(''+cls+'')>=0){
					ret.push(cls[i]);
				}
			}
			return ret;
		}
	}
	/*var background1=document.getElementsByClassName("background1");
	var background2=document.getElementsByClassName("background2");
	var leftUL=document.getElementById("left").getElementsByTagName("li");
	for(var i=0;i<leftUL.length;i++){
		leftUL[i].onmouseover=function(){
			for(var j=0;j<background1.length;j++){
				background1[j].style.display="block";
				j++;

			}
			for(var j=0;j<background2.length;j++){
				background2[j].style.display="block";
				j++;

			}
		};
	}*/
	
}
/*为文本框添加时间监听*/
function addListener(element,e,fn){ 
              if(element.addEventListener){ 
             element.addEventListener(e,fn,false); 
              } else { 
              element.attachEvent("on" + e,fn); 
               } 
             } 