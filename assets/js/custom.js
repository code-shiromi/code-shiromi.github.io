// Preload
var myVar;

function loading() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}