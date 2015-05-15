// JavaScript Document

window.onload=function (){
	var container=document.getElementById('container');
	var myresume=document.getElementById('myresume');
	var compile=getByClass(myresume,'compile');
	var message=getByClass(myresume,'message');
	var compile_message=getByClass(myresume,'compile-message');
	var btn=getByClass(myresume,'btn');
	var btnReset=getByClass(myresume,'reset');
	var btnSubmit=getByClass(myresume,'submit');
 	var tab=document.getElementById('tab');
	var tab_li=tab.getElementsByTagName('li');
	
 /****************	选项卡   *****************/
	for (var i=0;i<tab_li.length;i++)
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
 /****************	编辑信息   *****************/	
   for (var i=0;i<compile.length;i++){
	    var oldmyresumeH=myresume.offsetHeight;
		var containerH=container.offsetHeight;
	    compile[i].index=i;
		compile[i].onclick=function (){
			message[this.index].style.display='none';
			compile_message[this.index].style.display='block';
			btn[this.index].style.display='block';
			var	myresumeH=myresume.offsetHeight;
			container.style.height=containerH+myresumeH-oldmyresumeH+'px';
			var id=this.index;
			btnReset[id].onclick=function (){
				var newinput=compile_message[id].getElementsByTagName('input');
				for(var n=0;n<newinput.length;n++){
					newinput[n].value='';
				}
				oldmyresumeH=myresumeH.offsetHeight;
				containerH=container.offsetHeight;
		    }
		    btnSubmit[id].onclick=function (){
				var newinput=compile_message[id].getElementsByTagName('input');
				var oldinput=message[id].getElementsByTagName('input');
				message[id].style.display='block';
				compile_message[id].style.display='none';
				btn[id].style.display='none';
				var	myresumeH=myresume.offsetHeight;
				container.style.height=containerH+myresumeH-oldmyresumeH+'px';
				for(var m=0;m<input.length;n++){
					oldinput[m].innerHTML=newinput[m].value;
				}
				oldmyresumeH=myresumeH.offsetHeight;
				containerH=container.offsetHeight;
		    }
		}
	}
    for (var i=0;i<btnReset.length;i++){
		btnReset[i].onclick=function (){
			btnReset[i].index=i;alert('a');
			var input=compile_message[this.index].getElementByTagName('input');
			for(var i=0;i<input.length;i++){
				input[j].value='';
			}
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
	
