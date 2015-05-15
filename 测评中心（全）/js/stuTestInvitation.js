// JavaScript Document
window.onload=function()
{
//下面是invitation的链接
	
	//选项卡切换效果
	var oSide=document.getElementById('side');
	var aUl=oSide.getElementsByTagName('ul')[0];
	var aLi=aUl.getElementsByTagName('li');
	var oParent=document.getElementById('invitate');
	var oMain=getByClass(oParent,'main');
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].index=i;
		aLi[i].onclick=function()
		{
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].className='';
			oMain[i].style.display='none';
		}
		this.className='current';
		oMain[this.index].style.display='block';
		};
	}
	
	//点击全选，所有的将会被选中
	var oPartOne=document.getElementById('partOne');
	var fullImg=getByClass(oPartOne,'picture')[0];
	var oPartTwo=document.getElementById('partTwo');
	var partImg=getByClass(oPartTwo,'image');
	fullImg.onclick=function()
	{
		//partImg[1].style.background='url(../inv-box.png)';

		for(var i=0;i<partImg.length;i++)
		{
			//partImg[i].className='img-two';
			partImg[i].style.background='url(../images/inv-box1.png)';
		}
		
	}
	
	
	//下面是用到的函数	
	function getByClass(oParent,sClass)
	{
	
		if(oParent.getElementsByClassName)
		{
			return oParent.getElementsByClassName(sClass);
		} 
		else 
		{
			var ret = [];
			
			var aEle = oParent.getElementsByTagName("*");
			for(var i = 0; i < aEle.length; i++){
				
				var _aTmp = aEle[i].className.split(" ");
				for(var j = 0; j < aEle.length; j++){
					if(_aTmp[j]==sClass){
						ret.push(aEle[i]);
					}
				}
			}
			return ret;
		}
	}
	
};