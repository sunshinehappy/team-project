// JavaScript Document
window.onload=function()
{
	var oDiv=document.getElementById("div2");
	var oDiv1=document.getElementById("div1");
	var oDiv3=document.getElementById("div3");
	var oDiv4=document.getElementById("div4");
	var disX=0;
	
	oDiv.onmousedown=function(ev)
	{
		var oEvent=ev||event;
		var scale=oDiv1.offsetHeight-oDiv.offsetHeight;
		disY=oEvent.clientY-oDiv.offsetTop;
		document.onmousemove=function(ev)
	//当鼠标移动太快时，鼠标会跑到oDiv外，就无效，所以用document
		{
			var oEvent=ev||event;
			var t=oEvent.clientY-disY;
			
			if(t<0)
			{
				t=0;
			}
			if(t>oDiv1.offsetHeight-oDiv.offsetHeight)
			{
				t=oDiv1.offsetHeight-oDiv.offsetHeight;
			}
			oDiv.style.top=t+"px";
			
			oDiv4.style.top=-t/scale*(oDiv4.offsetHeight-oDiv3.offsetHeight)+"px";
			
			
		};
		document.onmouseup=function()
		{
			document.onmousemove=null;
			document.onmouseup=null;
		};
				
		return false;  //阻止默认，从而阻止FF对空框拖拽的bug,对IE6-8没有用
	};
	
	
	var capture1=document.getElementById("capture_1");
	var capture11=document.getElementById("capture_11");
	var capture2=document.getElementById("capture_2");
	var capture22=document.getElementById("capture_22");
	var capture3=document.getElementById("capture_3");
	var capture33=document.getElementById("capture_33");
	var a=0;
	var b=0;
	var c=0;
	
	capture1.onclick=function()
	{
		a++;
		if(a%2==1)
		{
			capture11.style.display="none";
			capture1.src="images/+.png";
		}
		else
		{
			capture11.style.display="block";
			capture1.src="images/-.png";
		}
	};

	capture2.onclick=function()
	{
		b++;
		if(b%2==1)
		{
			capture22.style.display="none";
			capture2.src="images/+.png";
		}
		else
		{
			capture22.style.display="block";
			capture2.src="images/-.png";
		}
	};

	capture3.onclick=function()
	{
		c++;
		if(c%2==0)
		{
			capture33.style.display="none";
			capture3.src="images/+.png";
		}
		else
		{
			capture33.style.display="block";
			capture3.src="images/-.png";
		}
	};

	
};