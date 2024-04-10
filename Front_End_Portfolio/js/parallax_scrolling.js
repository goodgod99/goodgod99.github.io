let animation_wave = bodymovin.loadAnimation({
    container: document.getElementById('wave-lottie'),
    path: 'data/wave-lottie.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "wave animate"
});

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    let wave = document.getElementById('wave-backgroung');

    let speedMultiplier = -1.3;
    if (window.innerWidth < 1200){
        speedMultiplier = -0.5; 
    }
    if (window.innerWidth < 576) { 
        speedMultiplier = -0.1; 
    }

    wave.style.transform = 'translateY(' + offset * speedMultiplier + 'px)';
});


