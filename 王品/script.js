$(document).ready(function () {

    $('#fullscreen-animation').fadeIn(1500,function(){
// 在1秒后执行动画完成后的操作
$('.content').fadeIn(2000,function(){
    $('#fullscreen-animation').fadeOut(1000);
});
    });
        
    
        
    


    // Initialize Swiper
    var swiper1 = new Swiper(".swiper1", {
        effect: "fade",
        autoplay: {
            delay: 5000, 
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        speed: 800,
    });

    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        effect: "fade",
        loop: true,
        slidesPerView: 1,
        speed: 800,
        autoplay: {
            delay: 5000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,

        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    const swiper3 = new Swiper('.swiper3', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        speed: 800,
        autoplay: {
            delay: 5000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,

        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

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


    $(window).scroll(function() {
        var header = $(".header");
        var body1 = $("#body1");
        var up = $(".bi-chevron-double-up");

        if ($(window).scrollTop() >= body1.offset().top) {
            header.css({
                position: "fixed",
                background: "linear-gradient(#000000b6, #00000000)"
            });
            up.show();
        } else {
            header.css({
                position: "absolute",
                background: "transparent"
            });
            up.hide();
        }
    });



});