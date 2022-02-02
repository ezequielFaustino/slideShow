'use strict';

const images = [
    
    {'id': '1', 'url': './img/chrono.jpg'},
    {'id': '2', 'url': './img/inuyasha.jpg'},
    {'id': '3', 'url': './img/tenchi.jpg'},
    {'id': '4', 'url': './img/tenjhotenge.jpg'},
    {'id': '5', 'url': './img/yuyuhakusho.jpg'}, 
];

const containerItems = document.querySelector('#container-items');

const loadImage = (images, container) =>{
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'> 
        </div>`
    }) //varrer as imgs
}

loadImage(images, containerItems);


let items = document.querySelectorAll('.item');
const previous = () =>{
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () =>{
    
} 

document.querySelector('#prev').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);