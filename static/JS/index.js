import data from "./data.js";
import { createCard, createDiv } from "./functions.js";

let phoneCards = document.querySelector('.phone_cards')

data.forEach((product) => {
    phoneCards.append(createCard(product));
})

let phoneDesc = document.querySelector(`.phone_description`);

let button = document.querySelectorAll('.btn-more');

let id;
let phoneDescL = 0;
button.forEach((v) => {
    v.addEventListener('click', function () {
        phoneDesc.style.display = `block`;
        id = this.parentNode.parentNode.firstChild.firstChild.textContent;

        data.forEach((product) => {
            if (product.id == id) {
                createDiv(product);
            }
        })
        phoneDescL = phoneDesc.children.length;
        console.log(phoneDescL);
    });
})
console.log(phoneDescL);

// if (!phoneDesc.children) {
//     console.log(true);
// } else {
//     console.log(false);
// }
