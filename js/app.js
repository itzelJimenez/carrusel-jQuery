var cargarPagina = function(){
	var botones = document.querySelectorAll(".control");
	botones.forEach(function(boton){
		boton.addEventListener("click", cambiarImagen)
	})
}

var cambiarImagen = function(){
	var target=this.dataset.target;
	var lastSlide=document.querySelector("div.active")
	var slide  = document.querySelector("div[data-slide='" + target + "' ]");
	lastSlide.classList.remove("active");
	slide.classList.add("active");
}

window.addEventListener("load", cargarPagina);