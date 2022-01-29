var items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]

var title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

var text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let slides = "";
let titles = "";
let subText ="";


for (let i=0; i < items.length; i++) {
    
    slides += `<div class="thumb-big-card">
                   <img class="cover" src="${items[i]}">
               </div>`;

    titles += `<div class="title-box">
               <h3>${title[i]}</h3>
               </div>`;

    subText += `<div class="text-box">
                <p>${text[i]}</p>
                </div>`;   
}

let picturesContainer = document.querySelector(".pictures-container");
picturesContainer.innerHTML = slides + titles + subText; 


/*Inizializzo una variabile che mi tenga traccia della slide che 
voglio attiva, al momento di apertura della pagina*/

let firstSlide = 0;

var items = document.getElementsByClassName("thumb-big-card");
items[firstSlide].classList.add("active");

var title = document.getElementsByClassName("title-box");
title[firstSlide].classList.add("active");

var text = document.getElementsByClassName("text-box");
text[firstSlide].classList.add("active");


