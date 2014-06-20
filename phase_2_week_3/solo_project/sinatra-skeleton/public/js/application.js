$(document).ready(function() {
	$('.complete img').click(function(){
		var my_element = this;
		$.ajax({
			type: 'post',
			url: "/task/" + $(this).attr('id') + "/complete",
			success: function() { 
				console.log(my_element)
				$(my_element).attr("src", "../green_check.png");
			}
		});
})});
