$(function() {
	//subnav实现
	$('#subnav').append('<a href="javascript:void(0)">学生首页</a>&nbsp;>&nbsp;<a href="javascript:void(0)">个人中心</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我的创业</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我的团队</a>&nbsp;>&nbsp;<a href="javascript:void(0)">我是组员</a>&nbsp;>&nbsp;<a href="javascript:void(0)">邀请查看</a>');
	//table内容加载
	$.get('json/stuIAmCaptain.json', function(data) {
		var html = '';
		$.each(data, function(i, n) {
			html += '<tr data-id="id"><td>' + n.teamName + '</td><td>' + n.memberLimit + '</td><td>' + n.deadline + '</td>';
			html += '<td class="operate"><button>同意加入</button><button>拒绝加入</button></td></tr>';
		});
		$('.table_team').append(html);
	});
})