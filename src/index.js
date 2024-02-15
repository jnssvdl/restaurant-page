import { home } from './scripts/home';
import { menu } from './scripts/menu';
import { about } from './scripts/about';

const content = document.querySelector('#content');
const buttons = document.querySelectorAll('button');

const deactivate = () => {
    buttons.forEach(button => button.classList.remove('active'));
    content.querySelector('div').remove(); 
}

const activate = (button) => {
    deactivate();
    const index = +button.dataset.index;
    if (index === 0) {
        content.appendChild(home());
        button.classList.add('active');
    } 
    if (index === 1) {
        content.appendChild(menu());
        button.classList.add('active');
    } 
    if (index === 2) {
        content.appendChild(about());
        button.classList.add('active');
    }
}

const initialize = () => {
    content.appendChild(home());
    buttons.forEach(button => button.addEventListener('click', () => activate(button)));
}

initialize();
