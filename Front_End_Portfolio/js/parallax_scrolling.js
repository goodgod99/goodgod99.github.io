let animation_wave = bodymovin.loadAnimation({
    container: document.getElementById('wave-lottie'),
    path: 'data/wave-lottie.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "wave animate"
});

//縱向
window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    let wave = document.getElementById('wave-backgroung');
    let speedMultiplier;

    if (window.innerWidth < 576) {
        speedMultiplier = -0.1;
        wave.style.top = '400px';
    }
    else if (576 <= window.innerWidth && window.innerWidth < 768) {
        speedMultiplier = -0.3;
        wave.style.top = '400px';
    }
    else if (768 <= window.innerWidth && window.innerWidth < 1200) {
        speedMultiplier = -0.4;
        wave.style.top = '200px';
    }
    else {
        speedMultiplier = -0.5;
        wave.style.top = '-200px';
    }
    wave.style.transform = 'translateY(' + offset * speedMultiplier + 'px)';
});


//橫向
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', handleMouseMove);

    }
});


window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
        document.removeEventListener('mousemove', handleMouseMove);
        animation_wave.play();
    }
    else {
        document.addEventListener('mousemove', handleMouseMove);
    }
});

window.addEventListener('blur', function () {
    animation_wave.play();
});

function handleMouseMove(event) {
    animation_wave.pause();
    let mouseX = event.clientX;
    let progress = mouseX / window.innerWidth * 0.4;
    animation_wave.goToAndStop(animation_wave.totalFrames * progress, true);
}


