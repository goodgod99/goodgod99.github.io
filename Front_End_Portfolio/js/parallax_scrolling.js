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

    let speedMultiplier;
    if (window.innerWidth < 576) { 
        speedMultiplier = -0.1; 
    }
    else if (576 <= window.innerWidth && window.innerWidth < 1200) {
        speedMultiplier = -0.3; 
    }
    else{
        speedMultiplier = -0.6;
    }

    wave.style.transform = 'translateY(' + offset * speedMultiplier + 'px)';
});


