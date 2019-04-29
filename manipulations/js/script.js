'use strict';

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemLi = document.createElement("li"),
    adv = document.getElementsByClassName('adv')[0],
    title = document.getElementById('title'),
    promptForApple = document.getElementById('prompt');


    menu.insertBefore(menuItem[2], menuItem[1]);
    
    menuItemLi.classList.add("menu-item");  
    menuItemLi.textContent = 'Пятый пункт';
    menu.appendChild(menuItemLi);   

document.body.style.backgroundImage = "url('img/apple_true.jpg')";   

adv.remove();

title.textContent = 'Мы продаем только фирменную технику Apple';

let answer = prompt('Как вы относитесь к технике Apple?', '');

promptForApple.textContent = answer;