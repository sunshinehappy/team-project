$(function() {
	//subnav实现
	$('#subnav').empty().append('<a href="javascript:void(0)">学生首页</a>&nbsp;>&nbsp;<a href="javascript:void(0)">个人中心</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我的创业</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我的团队</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我是队长</a>&nbsp;>&nbsp;<a href="javascript:void(0)">团队建设</a>&nbsp;>&nbsp;<a href="javascript:void(0)">团队成员邀请</a>');
	$('.textarea_box').hover(
		function() {
			$(this).parent().find('img').show();
		},
		function() {
			$(this).parent().find('img').hide();
		}
	);
	//设置按钮
	$('.set_btn').click(function () {
		alert('还未开发');
	});
	//发起按钮
	$('.submit_btn').click(function  () {
		alert('本功能还未开发');
	});
	//系统成员推荐css样式变换
	$('.member_item img').hover(
		function() {
			$(this).addClass('js_border');
		},
		function() {
			if ($(this).attr('data-status') == '0') {
				$(this).removeClass('js_border');
			}
		}
	);
	//系统成员点击
	$('.member_item img').click(function(){
		if ($(this).attr('data-status') == '0') {
			$(this).next('.choose').show();
			$(this).attr('data-status' , '1');
		} else {
			$(this).next('.choose').hide();
			$(this).attr('data-status' , '0');
		}	
	});
	//判断全选点击
	var status=0;
	//全选
	$('.select_all').click(function() {
		if(status==0){
			$('.choose').show();
			$('.member_item img').addClass('js_border');
			$('.member_item img').attr('data-status' , '1');
			status=1;
		}else{
			$('.choose').hide();
			$('.member_item img').removeClass('js_border');
			$('.member_item img').attr('data-status' , '0');
			status=0;
		}
	});
	//发送邀请
	$('.invite').click(function() {
		//和后台交互
		//……
		alert('发送成功');
	});
	//换一批
	
})