$(document).ready(function () {
    $('.first-screen-slider').slick({
        dots: true,
        appendArrows:'.first-screen-nav',
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });
})


const burger = document.querySelector ('.hamburger');
burger.addEventListener ('click', function() {
    burger.classList.toggle('is-active')
})

