window.onload = function () {
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
