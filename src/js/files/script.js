// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

"use strict"

window.onload = function () {










const homeParallax = document.querySelector('.home');
if (homeParallax) {

    const content = document.querySelector('.home__container');
    const clouds = document.querySelector('.home-images__clouds');
    const earth = document.querySelector('.home-images__earth');
    const leaves = document.querySelector('.home-images__leaves');
    const tree = document.querySelector('.home-images__tree');

    // коэффициенты
    const forClouds = 40;
    const forEarth = 20;
    const forLeaves = 10;
    const forTree = 10

    // Скорость анимации
    const speed = 0.05;

    // Переменные
    let positionX = 0, positionY = 0; // текущее положение объекта. отправляются в scss стили
    let coordXprocent = 0, coordYprocent = 0; // координаты в процентах


    function setMouseParallaxStyle () {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed);

        // Передача стилей
        // @ts-ignore
        clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%)`;
        // @ts-ignore
        earth.style.cssText = `transform: translate(${positionX / forEarth}%, ${positionY / forEarth}%)`;
        // @ts-ignore
        leaves.style.cssText = `transform: translate(${positionX / forLeaves}%, ${positionY / forLeaves}%)`;
        // @ts-ignore
        tree.style.cssText = `transform: translate(${positionX / forTree}%, ${positionY / forTree}%)`;

        requestAnimationFrame(setMouseParallaxStyle)
    }

    setMouseParallaxStyle()

    homeParallax.addEventListener("mousemove", function (e) {
        
        // Получение Ширины и высоты блока
        // @ts-ignore
        const homeParallaxWidth = homeParallax.offsetWidth;
        // @ts-ignore
        const homeParallaxHeight = homeParallax.offsetHeight;

        // coordX coordY будут равны нулю если курсор будет по центру экрана
        // @ts-ignore
        const coordX = e.pageX - homeParallaxWidth / 2;
        // @ts-ignore
        const coordY = e.pageY - homeParallaxHeight / 2;

        // преобразование в проценты
        coordXprocent = coordX / homeParallaxWidth * 100;
        coordYprocent = coordY / homeParallaxHeight * 100;
    });


    // Parallax при скролле

    let thresholdSets = [];

    for (let i = 0; i < 1.0; i += 0.005) {
        thresholdSets.push(i)
        console.log(thresholdSets)
    }

    const callback = function (entries, observer) {
        // @ts-ignore
        const scrollTopProcent = window.pageYOffset / homeParallax.offsetHeight * 100; // процент прокрученной области начиная с верхней точки сайта
        setParallaxItemsStyle(scrollTopProcent)
    }

    const observer = new IntersectionObserver(callback, {
        threshold: thresholdSets
        
    });
    
    observer.observe(document.querySelector('.destinations'))

    function setParallaxItemsStyle(scrollTopProcent) {
        // @ts-ignore
        content.style.cssText = `transform: translate(0%, -${scrollTopProcent / 9}%)`;
        earth.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 7}%)`;
        tree.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%)`;
        leaves.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%)`;
    }


}




































}






