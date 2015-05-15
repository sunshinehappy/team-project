// JavaScript Document
window.onload=function (){
	var tab=document.getElementById('tab');
	var tab_li=tab.getElementsByTagName('li');
	var btn=document.getElementById('btn');
	var collectcourselist=document.getElementById('collectcourselist');
	var delate=getByClass(collectcourselist,'delete');
	btn.onclick=function (){
		//alert('a');
		for(var i=0;i<delate.length;i++){
			delate[i].style.display="block";
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
}

/*
function setSB(v, el) {
	var ie5 = (document.all  &&  document.getElementsByTagName);
    if (ie5 || document.readyState == "complete")     {
      	filterEl = el.children[0];
      	valueEl = el.children[1];
      	filterEl.style.width = v + "%";
      	valueEl.innerText = v + "%";
    }
}
function fakeProgress(v, el) {
	if (v > 100)
		  location.href = "/";
		else     {
		  setSB(v, el);
		  window.setTimeout("fakeProgress(" + (++v) + ", document.all['" + el.id + "'])", 20);
		}
  } 
*/