// JavaScript Document
$(function(){
		 		   
	$(".content_title ul li:eq(0)").click(function(){    //����˵�����ɫ�Ӵ�
		$(this).css("font-weight","800");
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
	$(".content_title ul li:eq(4)").click(function(){
		$(this).css("font-weight","800");
		$(this).siblings().css("font-weight","400");
		var html = '';
		html += ''+$(".content_title ul li")[4].innerHTML;
		$("div #subnav a")[3].innerHTML = html ;
	})		   
		   
	$("#content_mid_report1 a").click(function(){
		$(this).css("color","#666").css("text-decoration","none");		
	}) 
	
	$("#content_mid_report1 img").click(function(){      //���Ҳఴť��������ɫ��̬����һ�ε��ǰΪ��ɫ������Ժ��ٴε��ǰΪ��ɫ
		$(this).attr("src","images/continue-text.jpg");
		$("#content_mid_report1 a").hide();
	})
	$("#content_mid_report2 img").click(function(){
		$(this).attr("src","images/continue-text.jpg");
		$("#content_mid_report2 a").hide();

	}) 
	$("#content_mid_report3 img").click(function(){
		$(this).attr("src","images/continue-text.jpg");
		$("#content_mid_report3 a").hide();

	}) 
	
	
	$("#content_bot_top img").click(function(){      //���ˢ�±�ʶ�����ݷ����仯
		if($("#first").show()){
			$("#second").show();
			$("#first").hide();	
		}else if($("#second").show()){
			$("#first").show();	
			$("#second").hide();
			}
	})   
});




