$(document).ready(function() {
	$("button").click(function() {
		$("h2").css("color", "#ddd4ea")
			.slideUp(2000)
			.slideDown(2000);
	});
});