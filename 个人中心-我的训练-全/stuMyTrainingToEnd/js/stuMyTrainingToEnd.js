// JavaScript Document
window.onload=function()
{
	var oDiv=document.getElementById("rank");
	var oBtn=oDiv.getElementsByTagName("img")[0];
	var oP0=oDiv.getElementsByTagName("p")[0];
	var oP1=oDiv.getElementsByTagName("p")[1];
	var t="";
	var a="按默认";
	var b="按时间";
	
	oBtn.onclick=function(ev)
	{
		oP1.style.display="block";
		var oEvent=ev||event;
		
		oEvent.cancelBubble=true;
	};
	
	document.onclick=function()
	{
		oP1.style.display="none";
	};
	
	oP1.onclick=function()
	{
		t=a;
		a=b;
		b=t;
		oP0.innerHTML=a;
		oP1.innerHTML=b;
	};
};

