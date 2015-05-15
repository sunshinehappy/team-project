// JavaScript Document



window.onload=function (){
	var tab=document.getElementById('tab');
	var tab_li=tab.getElementsByTagName('li');
	var cycle=document.getElementById('cycle');
	var button=cycle.getElementsByTagName('input');
	//alert(button.length);
	for(var i=0;i<button.length;i++)
	{
		button[i].onclick=function ()
		{
			for(var j=0;j<button.length;j++)
			{
				button[j].className='jobvalues-btn';
			}
			this.className='pitch';
		}
	}
	
	for(var i=0;i<tab_li.length;i++)
	{
		tab_li[i].onclick=function ()
		{
			for(var j=0;j<tab_li.length;j++)
			{
				tab_li[j].className='taba';
			}
			this.className='tabcourse';
		}
	}
	
}
/*
function getByClass(parent,clsName)
{
	var boxArr=new Array(),//用来存储获取到的所有class为box的元素
		oElements=parent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++)
	{
		if(oElements[i].className==clsName)
		{	
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}*/
	