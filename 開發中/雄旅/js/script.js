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

document.addEventListener("DOMContentLoaded", function () {
    var aside = document.querySelector("ul");
    var offset = aside.offsetTop;

    function fixAside() {
        if (window.scrollY >= offset) {
            aside.classList.add("fixed");
        } else {
            aside.classList.remove("fixed");
        }
    }

    window.addEventListener("scroll", fixAside);
});