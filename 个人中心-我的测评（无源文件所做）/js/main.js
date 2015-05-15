$(function() {
	//sub_header图像与用户名获取
	//……
	//sub_header右侧后台数据获取
	$.get('json/systemInfo.json',function(data){
		$('.news').append(data['newsNum']);
		$('.learn_time').append(data['learnTime']);
		$('.level').append(data['level']);
	});
	//sidebar样式切换
	$('#sidebar li').click(function() {
		$('#sidebar li').removeClass('bg');
		$(this).addClass('bg');
		$('#sidebar li a').css('color', '#4C4C4C');
		$(this).find('a').css('color', '#fff');
	});
	//subnav内容填充，需根据自己的页面修改
	//$('#subnav').append('<a href="javascript:void(0)">学生首页</a>><a href="javascript:void(0)">个人中心</a>');
})