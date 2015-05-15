window.onload = function () {
	var conditions = document.getElementById('conditions');
	var away = document.getElementById('away');
	var top = document.getElementById('top');
	away.onclick = function(){
		conditions.style.display = 'none';
		top.style.height = '90px';
	};
	var hoverMenu = document.getElementById('hoverMenu');
	var menu_ul = document.getElementById('menu_ul');
	hoverMenu.onmouseover = function(){
		menu_ul.style.display = 'block';
	};
	hoverMenu.onmouseout = function(){
		menu_ul.style.display = 'none';
	};
	$(function(){
		$('.input_test').bind({
				focus:function(){
					if (this.value == this.defaultValue){
						this.value="";
						this.style.background = "#fff";
					}
				},
				blur:function(){
					if (this.value == ""){
							this.value = this.defaultValue;
							this.style.background = "#F5F5F5";
					}
				}
		});
	})
};
