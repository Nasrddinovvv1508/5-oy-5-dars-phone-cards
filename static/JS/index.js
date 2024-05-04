import data from "./data.js";
import { createCard } from "./functions.js";

let phoneCards = document.querySelector('.phone_cards')

data.forEach((product) => {
    phoneCards.append(createCard(product));
})

let button = document.querySelectorAll('.btn-more');