//abrir y cerrar side menu
$(".menu-icon").on("click", function() {$(".sidenav").toggleClass("active");});
$(".sidenav-close-icon").on("click", function() {$(".sidenav").toggleClass("active");});
//abrir drop lists del menu
$("#drop-subtitle-1").on("click", function () { $("#drop-sublist-hidden-1").toggleClass("drop-sublist-show");});
$("#drop-subtitle-1").on("click", function() { $("#drop-li-arrow-1").toggleClass("drop-li-arrow-open");});
$("#drop-subtitle-2").on("click", function () { $("#drop-sublist-hidden-2").toggleClass("drop-sublist-show");});
$("#drop-subtitle-2").on("click", function() { $("#drop-li-arrow-2").toggleClass("drop-li-arrow-open");});
$("#drop-subtitle-3").on("click", function () { $("#drop-sublist-hidden-3").toggleClass("drop-sublist-show");});
$("#drop-subtitle-3").on("click", function() { $("#drop-li-arrow-3").toggleClass("drop-li-arrow-open");});
$("#drop-subtitle-4").on("click", function () { $("#drop-sublist-hidden-4").toggleClass("drop-sublist-show");});
$("#drop-subtitle-4").on("click", function() { $("#drop-li-arrow-4").toggleClass("drop-li-arrow-open");});
$("#drop-subtitle-5").on("click", function () { $("#drop-sublist-hidden-5").toggleClass("drop-sublist-show");});
$("#drop-subtitle-5").on("click", function() { $("#drop-li-arrow-5").toggleClass("drop-li-arrow-open");});
$("#drop-subtitle-6").on("click", function () { $("#drop-sublist-hidden-6").toggleClass("drop-sublist-show");});
$("#drop-subtitle-6").on("click", function() { $("#drop-li-arrow-6").toggleClass("drop-li-arrow-open");});
//get fecha actual
function formatDate(date) {
    var mes = [
      "Enero", "Febrero", "Marzo",
      "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octubre",
      "Noviembre", "Diciembre"
    ];

    var dia = date.getDate();
    var mesIndex = date.getMonth();
    var anio = date.getFullYear();

    return dia + ' ' + mes[mesIndex] + ' ' + anio;
  }
document.getElementById("fecha").innerHTML = formatDate(new Date());

