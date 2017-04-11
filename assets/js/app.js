//VARIABLES GLOBALES
var productsFigure = document.getElementsByClassName("img-product");
var modalDiv = document.getElementById("modal");
var closeSpan = document.getElementById("close-modal");
//EVENTOS
closeSpan.addEventListener("click", function (){
	console.log("cerrar modal");
	modalDiv.style.display = "none";
});
productsFigure[0].addEventListener("click", function (){
	console.log("click en figura 1");
	modalDiv.style.display = "block";
});
productsFigure[1].addEventListener("click", function (){
	console.log("click en figura 2");
	modalDiv.style.display = "block";
});
