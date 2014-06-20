$(document).ready(function() {
	$('.complete img').click(function(){
		var my_element = this;
		$.ajax({
			type: 'post',
			url: "/task/" + $(this).attr('id') + "/complete",
			success: function() { 
				if ($(my_element).attr("src") === "../red_x.png") {
					$(my_element).attr("src", "../green_check.png"); }
				else if ($(my_element).attr("src") === "../green_check.png") {
					$(my_element).attr("src", "../red_x.png"); }
			}
		});
})});
