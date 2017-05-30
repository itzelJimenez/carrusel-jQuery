<!DOCTYPE html>
<html lang="es">
	<head>
		<title>Carousel con JS/jQuery</title>
		<meta charset="utf-8">
		<script src="https://use.fontawesome.com/75919d6994.js"></script>
		<link rel="stylesheet" type="text/css" href="css/main.css">
	</head>
	<body>
		<div class="carousel">
			<div data-slide="0" class="carousel-content active">
				<img src="" alt="Imagen 1">
			</div>
			<div data-slide="1" class="carousel-content">
				<img src="" alt="Imagen 2">
			</div>
			<div data-slide="2" class="carousel-content">
				<img src="" alt="Imagen 3">
			</div>
			<div data-slide="3" class="carousel-content">
				<img src="" alt="Imagen 4">
			</div>
		</div>
		<div class="controls">
			<a class="previous"><</a>
			<button type="button" data-target="0" class="control"></button>
			<button type="button" data-target="1" class="control"></button>
			<button type="button" data-target="2" class="control"></button>
			<button type="button" data-target="3" class="control"></button>
			<a class="next">></a>
		</div>


		<script src="js/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="js/app.js"></script>
	</body>
</html>


.carousel-content{
	display: none;
}

.carousel-content.active{
	display: block;
}

var target = 0;
var cargarPagina = function(){
	var $botones = $(".control");
	var $anterior = $(".previous");
	var $siguiente = $(".next");
	$botones.click(cambiarImagen);
	$anterior.click(imagenAnterior);
	$siguiente.click(imagenSiguiente);

};

var cambiarImagen = function(){
	target=($(this).data("target"));
	console.log(target);
	mostrarImagen(target);
};

var mostrarImagen = function(){
	var $lastSlide= $("div.active");
	var $slide = $("div[data-slide='" + target + "' ]");
	$lastSlide.removeClass("active");
	$slide.addClass("active");
};

var imagenAnterior=function(e){
	e.preventDefault();
	target=target-1;
	target=(target<0)?3:target--;
	mostrarImagen(target);
};

var imagenSiguiente = function(e){
	e.preventDefault();
	target=target+1;
	target=(target>3)?0:target++;
	mostrarImagen(target);
};


$(document).ready(cargarPagina);