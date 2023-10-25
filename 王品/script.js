$(document).ready(function () {

    // Initialize Swiper
    var swiper1 = new Swiper(".mySwiper1", {
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


    // Initialize AOS
    $(function () {
        AOS.init({
            offset: 200,
            duration: 700,
            // delay: 100,
            easing: 'ease-in-sine',
            // once: true,
        });
    })



});