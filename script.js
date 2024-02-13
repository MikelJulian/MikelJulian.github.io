const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
    const target = e.target.closest(".card");

    if (!target) return;

    cardsContainer.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("active");
    });

    target.classList.add("active");
});


$(function () {


    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });
});

/*jslint devel: true */
/*eslint-env browser*/

/**
 * Número de imagen que se está presentando
 */
var indice = 1;


/**
 * Presenta la imagen que corresponda a partir del índice
 */
function setImagen() {
    "use strict";
    //Se buscan el primer hijo de #galeria (div que contiene los figure), de ahí es
    //extraen los hijos (figure) y se comprueba cuántos son
    var div_galeria = document.getElementById("Carrusel").firstElementChild;
    var imagenes = div_galeria.children;
    var num_imagenes = imagenes.length;

    //Si el índice ha superado el número de imágenes (queremos avanzar desde
    //la última imagen del carrusel) volvemos a presentar la primera imagen
    if (indice > num_imagenes) {
        indice = 1;
    }

    //Si el índice ha disminuido de uno (queremos retroceder desde la primera imagen
    //del carrusel) volvemos a presentar la última imagen
    if (indice < 1) {
        indice = num_imagenes;
    }

    //Calculamos el nuevo valor de left del div que contiene los figure para que se
    //desplace hasta la posición indicada
    div_galeria.style.left = ((indice - 1) * (-100)) + "%";
}

/**
 * Función llamada desde el HTML
 * Se le pasa como parámetro si queremos avanzar a la siguiente imagen (1)
 * o si queremos retroceder a la anterior (-1)
 */
function avanzaImagen(n) {
    "use strict";
    setImagen(indice += n);
}
$(function () {
    "use strict";
    setInterval(function () {
        avanzaImagen(1);
    }, 4000);
});
