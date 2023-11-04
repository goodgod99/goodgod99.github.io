
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        // dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoWidth: true,
        center: true,
        //// AutoPlay ////
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        autoplayHoverPause: true,

    })
});

