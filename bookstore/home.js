//abre menu responsive
$(document).ready(function(){$(".mobile-icon").on("click", function() {$(".menu-ul").toggleClass("mobile-shown");});});
$(document).ready(function(){$(".menu-toggle").on("click", function() {$(".menu-ul").toggleClass("mobile-shown");});});
//cambia bg de nav menu desktop al hacer scrolldown  
$(window).on("scroll", function(){if($(window).scrollTop()){$('.menu-ul').addClass('menu-black');}else {$('.menu-ul').removeClass('menu-black');}})
//animacion rubberBand trigger
$(function() { $(".anim-rubber").click(function(){$(this).addClass("animated rubberBand");
setTimeout(function(){ $(".anim-rubber").removeClass("animated rubberBand"); }, 1000);});});
//animacion flipOutX trigger
$(function() { $(".anim-flipoutX").click(function(){$(this).addClass("animated flipOutX");
setTimeout(function(){ $(".anim-flipoutX").removeClass("animated flipOutX"); }, 1000);});});
//carrito counter
var carrito = 0;
function carritoCount(){carrito += 1; document.getElementById("carrito-counter").innerHTML = carrito;};
//carousel    
$('#carouselId').carousel({interval: 4000,pause:"false"});
$('#card-carousel-1').carousel({interval: 6000,pause:"false"});  
$('#card-carousel-2').carousel({interval: 6000,pause:"false"});  
//scrollreveal class  
ScrollReveal().reveal('.scroll-anim', {
    delay: 120,
    useDelay: 'onload',
    interval: 80,
    reset:true
  });
ScrollReveal().reveal('.scroll-anim-p', {
  delay:170,
  useDelay: 'onload',
  interval:60,
  reset:true
});
$('#footer-anio').text((new Date()).getFullYear());
//descuento
$(function(){setInterval(function() {
      var animationName = 'animated tada';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$('.descuento-txt').addClass(animationName).one(animationend, function() {$(this).removeClass(animationName);});}, 3000);
});
//smooth link
$('a[href*="#"]') 
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {    
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {  
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');      
      if (target.length) {        
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {          
          var $target = $(target);
          //target.focus();         
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            //target.focus();         
          };
        });
      }
    }
  });