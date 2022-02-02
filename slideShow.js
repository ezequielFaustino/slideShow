'use strict';

const images = [
    
    {'id': '1', 'url': './img/chrono.jpg'},
    {'id': '2', 'url': './img/inuyasha.jpg'},
    {'id': '3', 'url': './img/tenchi.jpg'},
    {'id': '4', 'url': './img/tenjhotenge.jpg'},
    {'id': '5', 'url': './img/yuyuhakusho.jpg'}, 
];

const container = document.querySelector('#container-items');

const loadImage = (images, container) =>{
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'> 
        </div>`
    }) //varrer as imgs
}

loadImage(images, container);
