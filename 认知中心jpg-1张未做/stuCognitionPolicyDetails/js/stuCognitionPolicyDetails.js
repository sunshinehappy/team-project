<!--=========  菜单选项 ==========-->
 $(function(){
        var $div_li =$("#congnitive_tab li");
        $div_li.click(function(){
            $(this).addClass("active")            //当前<li>元素高亮
                   .siblings().removeClass("active");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
            $(".tab>div")       //选取子节点。不选取子节点的话，会引起错误。如果里面还有div
                    .eq(index).show()   //显示 <li>元素对应的<div>元素
                    .siblings().hide(); //隐藏其它几个同辈的<div>元素
        })
    })




<!--===========  留言框焦点事件 =============-->
$(function() {
	 var inputEl = $(".message"), 
	 defVal = inputEl.val(); 
	 inputEl.bind({ focus: function() {
		  var _this = $(this); 
		  if (_this.val() == defVal) {
			   _this.val(""); 
			   }
			    }, blur: function() { 
					var _this = $(this); 
				if ( _this.val() == "") 
				{ _this.val(defVal); 
				} 
				} 
				});
				 })




$(document).ready(function(){

	$(".replay_icon").click(function(){
		$(".replay").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
	$(".sure_icon").click(function(){
		$(".replay").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
	 
});
