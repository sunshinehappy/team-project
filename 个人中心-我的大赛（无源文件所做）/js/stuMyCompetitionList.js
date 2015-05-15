// JavaScript Document
$(function(){
		   //点击菜单后颜色加粗
	$(".content_title ul li:eq(0)").click(function(){    
		$(this).css("font-weight","800");
		$(this).css("color","#4b4b4b");
		$(this).siblings().css("font-weight","400");
		var html = '';
		html += ''+$(".content_title ul li")[0].innerHTML;
		$("div #subnav a")[3].innerHTML = html ;
	})		   
	$(".content_title ul li:eq(2)").click(function(){
		$(this).css("font-weight","800");
		$(this).siblings().css("font-weight","400");
		var html = '';
		html += ''+$(".content_title ul li")[2].innerHTML;
		$("div #subnav a")[3].innerHTML = html ;
	})		   
		   
	//点击浏览，票数加1
	$.each($("div #browse"),function(index, value){
		$(this).on('click',function(){
			$("span #number1").get(index).innerHTML = parseInt($("span #number1").get(index).innerHTML)+1;
		});
	})

	//点击公投，票数加1
	$.each($("div #public-voting"),function(index, value){
		$(this).on('click',function(){
			$("span #number2").get(index).innerHTML = parseInt($("span #number2").get(index).innerHTML)+1;
		});
	})
	//点击菜单后颜色加粗			
	$("#content_title ul li:eq(0)").click(function(){    
		$(this).css("font-weight","800");
		$(this).siblings().css("font-weight","400");
	})
	
	$("#content_title ul li:eq(2)").click(function(){
		$(this).css("font-weight","800");
		$(this).siblings().css("font-weight","400");
	})
	 
	 //点击查看作品，出现我的大赛作品查看
	 
 	 $("#content-mid-report1 img").click(function() {
		$("#panel").empty().load('stuMyCompetitionComment.html');
		$("div #subnav a")[3].innerHTML = '大赛作品查看' ;
	});	
  
 	 $("#content-mid-report2 img").click(function() {
		$("#panel").empty().load('stuMyCompetitionComment.html');
		$("div #subnav a")[3].innerHTML = '大赛作品查看' ;
	});	

 	 $("#content-mid-report3 img").click(function() {
		$("#panel").empty().load('stuMyCompetitionComment.html');
		$("div #subnav a")[3].innerHTML = '大赛作品查看' ;
	});	

  //加载更多
	$("#more").click(function(){
			$("#content-mid-img2").show();
			$("#content-mid-img3").show();
			$("#content-mid-list2").show();
			$("#content-mid-list3").show();
			$(this).css("margin-left","50px");
			$(this)[0].innerHTML = "没有更多了~";
	})

});