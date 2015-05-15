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
	
	//回车键开始检索
	  function clickButton() 
      {     
       if (event.keyCode == 13) 
       {      
        document.all('ibtnUpdate').click();
         return false;
       }
     }
 
	$(function(){
		document.onkeydown = function(e){ 
			var ev = document.all ? window.event : e;
			if(ev.keyCode==13) {
			   $('#submitFrom').submit();
			   return false;
			}
		}
	});
 
	 
};