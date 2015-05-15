$(function() {
	//subnav实现
	$('#subnav').empty().append('<a href="javascript:void(0)">学生首页</a>&nbsp;>&nbsp;<a href="javascript:void(0)">个人中心</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我的创业</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我的团队</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我是队长</a>&nbsp;>&nbsp;<a href="javascript:void(0)">团队建设</a>');
	$('.textarea_box').hover(
		function() {
			$(this).parent().find('img').show();
		},
		function() {
			$(this).parent().find('img').hide();
		}
	);
})