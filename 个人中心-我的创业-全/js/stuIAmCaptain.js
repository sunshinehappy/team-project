$(function() {
	//subnav实现
	$('#subnav').empty().append('<a href="javascript:void(0)">学生首页</a>&nbsp;>&nbsp;<a href="javascript:void(0)">个人中心</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我的创业</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我的团队</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我是队长</a>');
	//搜索框提示切换
	$('.content_search_input').focusin(function() {
		$(this).val('');
	});
	//开始搜索
	$('.search_btn').click(function() {
		$.post('handler.php', {
			value: $('.content_search_input').val()
		}, function(data) {
			//返回数据操作
		});
		//搜索框变回原样
		$('.content_search_input').val('请输入团队名称、发起状态，搜索一下试试吧');
	});
	//table内容加载
	$.get('json/stuIAmCaptain.json', function(data) {
		var html = '';
		$.each(data, function(i, n) {
			html += '<tr data-id="id"><td>' + n.teamName + '</td><td>' + n.status + '</td><td>' + n.memberLimit + '</td><td>' + n.deadline + '</td>';
			if ('邀请中' == n.status) {
				html += '<td class="operate"><button>进度查看</button><button>成员管理</button></td></tr>';
			} else {
				html += '<td class="operate"><button>查看</button><button>成员管理</button><button>队长移权</button></td></tr>'
			}
		});
		$('.table_team').append(html);
	});
})