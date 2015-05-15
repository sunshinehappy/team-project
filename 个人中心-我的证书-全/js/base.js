/*菜单下对应英文字体样式*/
$(function (){
	$('.menu li').find('a:eq(1)').css({
		'display':'block',
		'font-size':12,
		'font-family':'Arial'
	});
});
/*登陆之后显示下拉菜单*/
$(function (){
	$('.login').mouseover(function () {
		$('.loginAfter').show();	
	});
	$('.login').mouseout(function () {
		$('.loginAfter').hide();	
	});
	
});
