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