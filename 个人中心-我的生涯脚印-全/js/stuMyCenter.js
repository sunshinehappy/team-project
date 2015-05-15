 $(function (){
	 /*动态生成下拉框内容*/
	for(var i=2015;i<2020;i++){
		$('.year').append('<option value=+'+i+'>'+i+'年</option>');
	}
	for(var j=1;j<13;j++){
		$('.mounth').append('<option value='+j+'>'+j+'月</option>');
	}
	for(var s=1;s<32;s++){
		$('.day').append('<option value='+s+'>'+s+'日</option>');
	}
	$('.year').css({
		'width':100,
		'margin-left':20
	});
	$('.time_choose span:eq(1)').css({
		'width':115,
		'margin-left':32
	});
});

/*时光轴样式控制，增减<li>个数，整体样式不受影响*/
 $(function (){

	$('.time_all li:eq(0)').css('margin-top',0);
	$('.active li:eq(0)').css('margin-top',20);
	$('.active li ul').find('li:eq(0)').css({
		'position':'absolute',
		'left':-19,
		'top':10
	});
	$('.active li ul').find('li:eq(1)').css({
		'position':'absolute',
		'top':10
	});
	$('.active li ul').find('li:eq(2)').css({
		'position':'absolute',
		'left':100,
		'top':0
	});
	$('.active li:last-child ul').find('li').css('height',60);
	$('.active li:last-child ul').find('li').parent().parent().css('height',60);
	$('.active li:last-child ul').find('li:lt(2)').css({
		'position':'absolute',
		'top':45,
	});
	$('.active li:last-child ul').find('li:eq(2)').css({
		'position':'absolute',
		'top':20
	});
});