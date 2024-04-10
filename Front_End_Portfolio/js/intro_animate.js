

let animation_loading = bodymovin.loadAnimation({
    container: document.getElementById('intro-lottie'), 
    path: 'data/loading-animation.json', 
    renderer: 'svg', 
    loop: false, 
    autoplay: true,
    name: "intro animate"
});


animation_loading.addEventListener('complete', () => {
    const intro = document.getElementById('intro')
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.remove();
    },500);
});

// // 監聽文檔的加載完成事件
// document.addEventListener('DOMContentLoaded', () => {
//     // 等待動畫加載完成
//     animation.addEventListener('DOMLoaded', () => {
//         // 動畫加載完成後隱藏介紹元素
//         const intro = document.getElementById('intro');
//         intro.style.opacity = '0';
//         setTimeout(() => {
//             intro.remove();
//         }, 500);
//     });
// });