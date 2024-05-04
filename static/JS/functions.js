
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

    let h1 = document.createElement('h1');
    h1.textContent = product.title;

    let p = document.createElement('p');
    p.textContent = product.description;

    let h3 = document.createElement(`h3`);
    h3.textContent = `${product.price}$`;
    up.append(img, h1, p, h3);

    // Create phone_card down;
    let down = document.createElement(`div`);
    down.classList.add(`down`);
    let button = document.createElement('button')
    button.textContent = `More`
    button.classList.add(`btn-more`);
    button.setAttribute('onclick', btnListener(button));
    down.append(button);

    phoneCard.append(up, down);
    return phoneCard
}

function btnListener(button) {
    return button.parentNode;
}

export {createCard}