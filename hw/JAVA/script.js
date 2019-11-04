$(document).ready(function() {

	$("button").click(function() {
		$("p").hide();
	});

	$("h4").mouseover(function() {
		$("h4").css("background-color", "pink");
	});

	$("h4").mouseout(function() {
		$("h4").css("background-color", "#DDD4EA");
	});

	$("a").mouseenter(function() {
		$("a").css("background-color", "lightgray");
	});

	$("a").mouseleave(function() {
		$("a").css("background-color", "#DDD4EA");
	});

	$(".btn1").click(function() {
		$("h2").hide();
	});

	$(".btn2").click(function() {
		$("h2").show();
	});


	$("h1").click(function() {
		alert("WELCOME TO MIAMI- ENJOY OUR ENDLESS SUMMER!!.");
	});


	$("button").click(function() {
		$("ul").after("<p>These are some of my recommendations- hope you like them:)</p>");
	});


	$("button").click(function() {
		$("h3").css("color", "purple");
	});

	$("#PHOTO").mouseover(function() {
		$("#PHOTO").toggle(1000);
		console.log("")
	});

});