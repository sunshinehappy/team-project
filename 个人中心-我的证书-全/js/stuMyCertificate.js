/*表格中可增减行列，整体样式不变*/
$(function (){
	$('.content_detail table tr:eq(0)').css({
		'height':40,
		'color':'#fff',
		'font-size':16,
		'background':'#666666'
	});
	$('.content_detail table tr:eq(0) td').css('border-left','1px solid #fff');
	$('.operate').css('font-size',14);
	$('.content_detail table tr td').find('span:eq(0)').css({
		'display':'inline-block',
		'width':100,
		'height':30,
		'line-height':2,
		'text-align':'center',
		'color':'#fff', 
		'background':'#898989',
		'border-radius':2
	});
	$('.content_detail table tr').find('td:last-child').find('span').css({
		'width':74,
		'height':30
	});
	$('.content_detail table tr td').find('.active').css({
		'background':'#23b16c',
		'cursor':'pointer'
	});
});