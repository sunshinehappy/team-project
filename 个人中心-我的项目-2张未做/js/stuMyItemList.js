$(document).ready(function() {
	
	$('.input_test').bind({
			focus:function(){
				if (this.value == this.defaultValue){
					this.value="";
				}
			},
			blur:function(){
				if (this.value == ""){
						this.value = this.defaultValue;
				}
			}
	});
})