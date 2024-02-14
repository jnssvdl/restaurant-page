import burger from '../assets/burger.png';
import '../styles/home.css';

function home() {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const banner = document.createElement('div');
    banner.setAttribute('id', 'banner');
    container.appendChild(banner);

    const primary = document.createElement('h1');
    primary.textContent = 'Savor Deliciousness';
    banner.appendChild(primary);

    const secondary = document.createElement('p');
    secondary.textContent = 'Treat yourself to the ultimate satisfaction with Bamhurger! Succulent, juicy, and utterly delicious—each bite is a flavor explosion waiting to happen. Order now and experience burger perfection!';
    banner.appendChild(secondary);

    const button = document.createElement('button');
    button.textContent = 'Order now';
    banner.appendChild(button);

    const image = new Image();
    image.src = burger;
    container.appendChild(image);

    return container;
}

export { home };