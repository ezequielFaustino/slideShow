'use strict';

//todas as imgs do slideshow
const images = [
    {'id': '1', 'url': './img/chrono.jpg'},
    {'id': '2', 'url': './img/inuyasha.jpg'},
    {'id': '3', 'url': './img/tenchi.jpg'},
    {'id': '4', 'url': './img/tenjhotenge.jpg'},
    {'id': '5', 'url': './img/yuyuhakusho.jpg'},
];

//seleciona a div onde estarao as igms
const containerItems = document.querySelector('#container-items');

//funcao para carregar cada img dentro do slide
const loadImages = (images, container) =>{
    images.forEach(image =>{
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `
    })
}
loadImages(images, containerItems);

let item = document.querySelectorAll('.item');
//funcao para o botao previous
const previous = () =>{
    containerItems.appendChild(item[0]);
    item = document.querySelectorAll('.item');
}

//funcao para o botao next
const next = () =>{
    const lastItem = item[item.length -1];
    containerItems.insertBefore(lastItem, item[0]);
    item = document.querySelectorAll('.item');
}

//evento de click para os botoes previous e next
document.querySelector('#prev').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

