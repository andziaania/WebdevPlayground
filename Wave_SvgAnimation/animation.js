import anime from './lib/anime.es.js';

let btn = document.querySelector("#btn-click");
let sect1 = document.querySelector("#sect1");
let btn2 = document.querySelector("#btn2-click");
let sect2 = document.querySelector("#sect2");
let overlay = document.querySelector("#morph");

let morphing = anime({
    targets: '.morph',
    d: [
        { value: "M 0.755952381,86.8452428 L 0,96.2946475 C 59.3429319,72.3024747 60.7556866,109.412323 82.2098215,94.2157787 C 134.513865,93.7642344 153.5955,83.8143009 180.105655,84.1994098 C 220.918393,81.6872135 211.166988,90.1372931 242.282738,94.4047669 C 271.071389,90.0165192 270.438944,78.6654419 297.089285,93.0818499 V 87.223219 Z" },
        { value: "M 0.755952381,86.8452428 L 0,196.458338 C 48.7595986,218.57926 54.1411032,181.416788 75.5952381,166.220243 C 131.490055,144.602032 129.594012,182.08811 144.386905,202.505957 C 186.52256,218.514594 194.536036,185.387293 213.556548,168.110124 C 297.718711,131.404912 270.438944,193.759192 297.089285,208.1756 V 87.223219 Z" },
    ],
    duration: 2000,
    loop: false,
    easing: 'easeInOutQuint',
    autoplay: false,
})

btn.addEventListener('click', function(){
    morphing.restart();
    overlay.classList.add('pointer');
    sect2.classList.add('animated', 'display', 'flipInY', 'delay-2s');
})


btn2.addEventListener('click', function(){
    morphing.reverse();
    morphing.play();
    overlay.classList.remove('pointer');
    sect2.classList.remove('animated', 'display', 'flipInY', 'delay-2s');
})
