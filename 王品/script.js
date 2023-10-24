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

    // Initialize AOS
    $(function () {
        AOS.init({
            offset: 200,
            once: true,
            duration: 700,
            delay: 100,
            easing: 'ease-in-sine',
            // once: true,
        });
    })



});