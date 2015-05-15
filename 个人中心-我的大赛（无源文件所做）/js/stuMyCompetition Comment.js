// JavaScript Document
$(function(){
		   //鼠标悬浮在查阅、分享、收藏按钮上时的效果
	$("#look").hover(function(){
		$("#look") .css("background-color","#009944")
					.css("color","#fff"); 
				},function(){
    				$("#look") .css("background-color","#fff")
						.css("color","#009944");
     });  
	$("#share").hover(function(){
		$("#share") .css("background-color","#009944")
					.css("color","#fff"); 
				},function(){
    				$("#share") .css("background-color","#fff")
						.css("color","#009944");
     });  
	$("#collect").hover(function(){
		$("#collect") .css("background-color","#009944")
					.css("color","#fff"); 
				},function(){
    				$("#collect") .css("background-color","#fff")
						.css("color","#009944");
     });  
					//	鼠标点击喜欢与不喜欢时的效果
	$("#like").click(function(){
		$("#number1")[0].innerHTML = parseInt($("#number1")[0].innerHTML)+1;
		$(this).css("color","red");
		$("#dislike").css("color","#333");
		return false;
	});
	$("#dislike").click(function(){
		$("#number2")[0].innerHTML = parseInt($("#number2")[0].innerHTML)+1;
		$(this).css("color","red");
		$("#like").css("color","#333");

	});
		//点击回复，评论框显示，再次点击，评论框消失
	$.each($("div #reply"),function(index, value){
		$(this).on('click',function(){
			$("div #comment_input").eq(index).toggle();
		});
	})
	
		//点击确定后，显示回复内容
	$.each($("div #ok"),function(index,value){
		var html = '';
		html += '回复：'+$("#comment_input input")[0].value+'<br/>';
		$(this).on('click',function(){
			$("div #reply_content").eq(index).append(html);
			$("div #comment_detail").eq(index).css("height","auto");
			$("#comment_input").hide();
		});
	});
	  //点击查阅，进入作品详情页
	$("#look").click(function(){
		window.open ('guice.pdf','newwindow','height=600,width=985,position:fixed,screenX=170px,screenY=150px,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no,z-look=yes');   	
		$("body").css('width','100%')/*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/ 
      			.css('filter','alpha(opacity=40)')/*设置透明度为60%*/
				.css('opacity','0.4');  /*非IE浏览器下设置透明度为60%*/
		$("div #subnav a")[4].innerHTML = '> 作品详情页' ;
     });  
		//发表评论的时间
		//var date = new Date();
		//$("#time").eq(0).append('今天'+'&nbsp;'+'&nbsp;'+ date.getHours()  +'&nbsp;'+':' +'&nbsp;' +date.getMinutes());
		 
		 //  
});


