$(document).ready(function(){
	$("#nav-menu-left").click(function() {
		console.log('Clicked!');
		$("#nav-left").toggle('slide');
		if (!$("#menuToggle").hasClass('btn-close')) {
			$("#menuToggle").addClass('btn-close');
		} else {
			$("#menuToggle").removeClass('btn-close');
		}
		
	});
});