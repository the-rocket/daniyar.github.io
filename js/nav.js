$(document).ready(function(){
	$("#nav-menu-left").click(function() {
		console.log('Clicked!');
		if (!$("#menuToggle").hasClass('btn-close')) {
			$("#menuToggle").addClass('btn-close');
			$("#nav-left").removeClass('closed');
			$("#nav-left-list").removeClass('closed');
		} else {
			$("#menuToggle").removeClass('btn-close');
			$("#nav-left").addClass('closed');
			$("#nav-left-list").addClass('closed');
		}
		
	});
});