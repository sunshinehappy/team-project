// JavaScript Document
window.onload=function()
{
	var oNav=document.getElementById('nav');
	var aUl=oNav.getElementsByTagName('ul')[0];
	var aLi=document.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].onclick=function()
		{
			for(var i=0;i<aLi.length;i++)
			{
				aLi[i].className='';
			}
			this.className='nav-cur';
			
		}
	}
	
	//下面设置选项的动态
	
	function showbgcolor(bgColor,color)
	{
	document.bgColor=color;
	document.color=color;
	}


	
}