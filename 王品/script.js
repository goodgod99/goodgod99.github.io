$(document).ready(function () {

    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        effect: "fade",
        autoplay: {
            delay: 5000, 
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });



});