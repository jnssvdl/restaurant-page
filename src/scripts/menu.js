import classic from '../assets/classic.png';
import chicken from '../assets/chicken.png';
import bacon from '../assets/bacon.png';
import fries from '../assets/french-fries.png';
import onion from '../assets/onion-rings.png';
import tea from '../assets/iced-tea.png';
import '../styles/menu.css';

const products = [
    {
        image: bacon,
        description: 'Beef patty, crispy bacon, cheddar cheese, barbecue sauce, toasted bun.',
        name: 'Bacon Burger',
        price: 85
    },
    {
        image: chicken,
        description: 'Grilled chicken breast, lettuce, tomato, avocado, aioli sauce, toasted bun.',
        name: 'Chicken Burger',
        price: 80
    },
    {
        image: classic,
        description: 'Juicy beef patty, fresh lettuce, tomato, pickles, onions, mayo, soft toasted bun.',
        name: 'Classic Burger',
        price: 70
    },
    {
        image: onion,
        description: 'Crisp-coated onion rings, fried to a golden brown for a satisfying crunch.',
        name: 'Onion Rings',
        price: 50
    },
    {
        image: fries,
        description: 'Golden, crispy French fries seasoned to perfection for a satisfying crunch in every bite.',
        name: 'French Fries',
        price: 40
    },
    {
        image: tea,
        description: 'Refreshing iced tea brewed to perfection, served chilled for a burst of coolness with every sip.',
        name: 'Iced Tea',
        price: 35
    }
];

function item(image, description, name, price) {
    const container = document.createElement('div');
    container.classList.add('item-container');

    const topContainer = document.createElement('div');
    container.appendChild(topContainer);

    const itemImage = new Image();
    itemImage.src = image;
    topContainer.appendChild(itemImage);

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    topContainer.appendChild(itemDescription);

    const botContainer = document.createElement('div');
    container.appendChild(botContainer);

    const itemName = document.createElement('h2');
    itemName.textContent = name;
    botContainer.appendChild(itemName);

    const itemPrice = document.createElement('h3');
    itemPrice.textContent = `₱${price}`;
    botContainer.appendChild(itemPrice);

    return container;
}

function menu() {
    const container = document.createElement('div');
    container.setAttribute('id', 'menu-container');
    products.map(product => {
        container.appendChild(
            item(product.image, product.description, product.name, product.price));
    });
    return container;
}

export { menu };