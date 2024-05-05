import data from "./data.js";


function createCard(product) {
    // Create phone_card
    let phoneCard = document.createElement('div');
    phoneCard.classList.add('phone_card');

    // Create phone_card up
    let up = document.createElement('div');
    up.classList.add('up');

    // Add tags to phone_card up
    let img = document.createElement('img');
    img.src = product.thumbnail;
    img.setAttribute('alt', 'photo');

    let i = document.createElement('i');
    i.textContent = product.id;

    let h1 = document.createElement('h1');
    h1.textContent = product.title;

    let p = document.createElement('p');
    p.textContent = product.description;

    let h3 = document.createElement(`h3`);
    h3.textContent = `${product.price}$`;
    up.append(i, img, h1, p, h3);

    // Create phone_card down;
    let down = document.createElement(`div`);
    down.classList.add(`down`);
    let button = document.createElement('button')
    button.textContent = `More`
    button.classList.add(`btn-more`);
    down.append(button);

    phoneCard.append(up, down);
    return phoneCard
}

function createDiv(product) {
    let phoneDescription = document.querySelector('.phone_description')
    let img = document.createElement(`img`);
    img.src = product.thumbnail;
    img.setAttribute(`alt`, `phone`);

    let i = document.createElement(`i`);
    i.textContent = product.id;

    let h1 = document.createElement('h1');
    h1.textContent = product.title;

    let p = document.createElement(`p`);
    p.textContent = product.description;

    let h3 = document.createElement('h3');
    h3.textContent = `${product.price}$`;

    let divStar = document.createElement('div');
    divStar.innerHTML = `
        <span class="star" data-value="1">&#9733;</span>
        <span class="star" data-value="2">&#9733;</span>
        <span class="star" data-value="3">&#9733;</span>
        <span class="star" data-value="4">&#9733;</span>
        <span class="star" data-value="5">&#9733;</span>
    `;
    divStar.setAttribute('class', `star-rating`)

    let a = document.createElement(`a`);
    a.textContent = product.brand;

    phoneDescription.append(img, i, h1, p, h3, divStar, a)
}

export {createCard, createDiv};