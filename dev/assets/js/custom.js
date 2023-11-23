$(document).ready(function () {
    $('.first-screen-slider').slick({
        dots: true,
        infinite:true,
        speed:300,
        slidesToScroll: 1,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint:1024,
                settings: {
                    slidesToShow:4,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                }
            }
        ],
        appendArrows:'.first-screen-nav',
    });
})

const burger = document.querySelector ('.hamburger');
burger.addEventListener ('click', function() {
    burger.classList.toggle('is-active')
})

