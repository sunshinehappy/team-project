$(function (){
	for(var i=2015;i<2020;i++){
		$('.year').append('<option value=+'+i+'>'+i+'</option>');
	}
	for(var j=1;j<13;j++){
		$('.mounth').append('<option value='+j+'>'+j+'</option>');
	}
	for(var s=1;s<32;s++){
		$('.day').append('<option value='+s+'>'+s+'</option>');
	}


	$('.content_detail ul li textarea').focus(function () {
		$('.content_detail ul li img').css('display','block');
	});
	$('.content_detail ul li textarea').blur(function () {
		$('.content_detail ul li img').css('display','none');
	});
});