$(document).ready(function() {
	//鼠标滑过效果 
	$("#container .base_li").hover(
		function () {
			$(this).addClass("bgMouseStyle");
		},
		function () {
			$(this).removeClass("bgMouseStyle");
		}
	);
	
	$("#container .base_a").hover(
		function () {
			$(this).addClass("bgMouseStyleA");
		},
		function () {
			$(this).removeClass("bgMouseStyleA");
		}
	);
	
	$(".busi_ul li").hover(
		function () {
			$(this).addClass("bgMouseStyle");
		},
		function () {
			$(this).removeClass("bgMouseStyle");
		}
	);
	
	$(".busi_ul a").hover(
		function () {
			$(this).addClass("bgMouseStyleA");
		},
		function () {
			$(this).removeClass("bgMouseStyleA");
		}
	);
	
	//轮播图效果
	var w=900;
	var l=0;
	var timer=null;
	var len=$(".viewpages li").length * 2; 
	
	//初始位置 
	$(".viewpages").append($(".viewpages").html()).css({'width':2700, 'left':-900});
	
	timer=setInterval(init,6000);	 //页面一加载就调用init函数触发next按钮的点击事件。
	function init(){
		$(".mentor .next").trigger('click'); 
	}
	
	function prev(){
		$(".mentor .prev").trigger('click'); 
	}
	
	$(".viewpages li").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(init,6000);
	});
	
	$(".mentor .prev").click(function(){
		l=parseInt($(".viewpages").css("left"))+w;  //这里要转成整数，因为后面带了px单位
		showCurrent(l); 
		clearInterval(timer);
		timer=setInterval( prev ,6000);
	});
	$(".next").click(function(){
		l=parseInt($(".viewpages").css("left"))-w;  
		showCurrent(l);
	});
	function showCurrent(l){     //把图片的左右切换封装成一个函数
		if($(".viewpages").is(':animated')){ //当.viewpages正在执行动画的过程中，阻止执行其它动作。
			return;
		}
		$(".viewpages").animate({"left":l},500,function(){
			if(l==-1800){ 
				$(".viewpages").css("left",-900);   
			}else if(l==0){
				$(".viewpages").css('left',-900); 
			}
		}); 	  
	 }
	
})