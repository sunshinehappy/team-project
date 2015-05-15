// JavaScript Document
$(document).ready(function() {
	
	$('#search_input').bind({
			focus:function(){
				if (this.value == this.defaultValue){
					this.value="";
					this.style.border="0px";
				}
			},
			blur:function(){
				if (this.value == ""){
						this.value = this.defaultValue;
				}
			}
	});
})
