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

        if (phoneDesc.children.length != 0) {
            phoneDesc.innerHTML = ``;
        }

        data.forEach((product) => {
            if (product.id == id) {
                createDiv(product);
            }
        })
        console.log(phoneDescL);
    });
})

// if (!phoneDesc.children) {
//     console.log(true);
// } else {
//     console.log(false);
// }
