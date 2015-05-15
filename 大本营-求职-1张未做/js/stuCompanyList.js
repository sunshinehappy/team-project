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
                 companyName.value = "请输入公司名,搜索一下试试吧~";
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
		
		waterfall('waterFull','box');
	 var dataInt={'data':[{'src':'images/IBM.jpg'},{'src':'images/tuniu.jpg'},{'src':'images/ali.jpg'},{'src':'images/baidu.jpg'}]};
	window.onscroll=function(){
		if(checkscrollside()){
			/*将数据块渲染到当前页面的尾部*/
			var oParent = document.getElementById('waterFull');// 父级对象
            for(var i=0;i<dataInt.data.length;i++){
				var opin=document.createElement('div');//添加 元素节
				opin.className='box';//添加 类名 name属性
				oParent.appendChild(opin);//添加 子节点
				var opic=document.createElement('div');
				opic.className='pic';
				opin.appendChild(opic);
				var oImg=document.createElement('img');
				oImg.src='images/'+dataInt.data[i].src;
				opic.appendChild(oImg);
			}
			waterfall('waterFull','box');
		};
	}
}
/*实现瀑布流效果的函数*/
	function waterfall(parent,box){
	/*将main下class为box的类取出来*/
		var oParent=document.getElementById(parent);
		var oBoxs=getByClass(oParent,box);
		var oBoxW=oBoxs[0].offsetWidth;
		var cols=Math.floor(document.documentElement.clientWidth/oBoxW);/*计算整个页面的列数*/
		oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto;';//设置父级居中样式：定宽+自动水平外边距
		var hArr=[];/*用于存储 每列中的所有块框相加的高度*/
		for(var i=0;i<oBoxs.length;i++){
			if(i<cols){
				hArr.push(oBoxs[i].offsetHeight);
			}
			else{
				var minH=Math.min.apply(null,hArr);
				var index=getMinhIndex(hArr,minH);
				oBoxs[i].style.position='absolute';
				oBoxs[i].style.top=minH+'px';
				oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
				hArr[index]+=oBoxs[i].offsetHeight;
			}
		}
	}
/*根据class获取元素*/
	function getByClass(parent,className){
    	var obj=parent.getElementsByTagName('*');//获取 父级的所有子集
    	var boxArr=[];//创建一个数组 用于收集子元素
    	for (var i=0;i<obj.length;i++) {//遍历子元素、判断类别、压入数组
        	if (obj[i].className==className){
            	boxArr.push(obj[i]);
        	}
    	};
    return boxArr;
	}
	function getMinhIndex(arr,val){
		for(var i in arr){
			if(arr[i]==val){
				return i;
			}
		}
	}
	
	
/*为文本框添加时间监听*/
function addListener(element,e,fn){ 
              if(element.addEventListener){ 
             element.addEventListener(e,fn,false); 
              } else { 
              element.attachEvent("on" + e,fn); 
               } 
             } 