// Preload
var s;

function loading() {
  s = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}

function getYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("Year").innerHTML = n;
}