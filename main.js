const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

let pictures = "";

for (i=0; i < images.length; i++); {
    
    pictures += `<div class="thumb-big-card active">
    <img class="cover" src="${images[i]}">
    </div>`;

}

let picturesContainer = document.querySelector(".pictures-container");
picturesContainer.innerHTML = (pictures); 







