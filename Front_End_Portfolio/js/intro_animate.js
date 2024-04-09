let animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'), 
    path: 'data/loading-animation.json', 
    renderer: 'svg', 
    loop: false, 
    autoplay: true,
    name: "intro animate"
})

animation.addEventListener('complete', () => {
    const intro = document.getElementById('intro')
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.remove();
    },500);
});