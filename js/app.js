$(document).ready(function(){
	$('.slides').hide();
	$('#no1').show();
	$('#point1').css("background-color", "gray");
	
	$('#point1').click(function(){
		$('#no1').fadeIn("slow");
		$('#point1').css("background-color", "gray");
	});

	$('#point2').click(function(){
		$('.slides').hide();
		$('#no2').fadeIn("slow");
		$('.indicador-item').css('background-color', '#fff');
		$('#point2').css("background-color", "gray");
	});

	$('#point3').click(function(){
		$('.slides').hide();
		$('#no3').fadeIn("slow");
		$('.indicador-item').css('background-color', '#fff');
		$('#point3').css("background-color", "gray");
	});

	$('#point4').click(function(){
		$('.slides').hide();
		$('#no4').fadeIn("slow");
		$('.indicador-item').css('background-color', '#fff');
		$('#point4').css("background-color", "gray");
	});

	$('#point5').click(function(){
		$('.slides').hide();
		$('#no5').fadeIn("slow");
		$('.indicador-item').css('background-color', '#fff');
		$('#point5').css("background-color", "gray");
	});

	$('.previous').click(function(){
		$("li").prev().show();
	});

	$('.next').click(function(){
		alert("washu")
	});
});