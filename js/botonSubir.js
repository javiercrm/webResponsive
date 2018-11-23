/* Mostramos el boton una vez bajemos 350 px la pantalla*/
$(window).scroll(function(){
    if ($(this).scrollTop() > 350) {
        $('.botonSubir').fadeIn();
    } else {
        $('.botonSubir').fadeOut();
    }
});