// JavaScript Document
window.onload=function (){
	var tab=document.getElementById('tab');
	var tab_li=tab.getElementsByTagName('li');
	//alert(tab_li.length);
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

