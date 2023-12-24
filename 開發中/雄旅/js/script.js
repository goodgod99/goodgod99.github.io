const swiper = new Swiper('.swiper', {
    loop: true,
    effect: "slide",
    speed: 1000,

    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});