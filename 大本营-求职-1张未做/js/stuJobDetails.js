// JavaScript Document
/*点击菜单时。头和尾不变，只变换main部分*/
jQuery(document).ready(function($){
	$("#Li1").click(function(){
		$("#main").empty().load("job_detail.html");
		});
	$("#Li3").click(function(){
		$("#main").empty().load("job_school.html");
		});
	$("#Li4").click(function(){
		$("#main").empty().load("job_company.html");
		});		
});