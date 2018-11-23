/* Mostramos el boton una vez bajemos 350 px la pantalla*/

$( document ).ready(function() {
    $('.botonSubir').fadeOut(0);
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 350) {
        $('.botonSubir').fadeIn();
    } else {
        $('.botonSubir').fadeOut();
    }
});