import { home } from './scripts/home';
import { menu } from './scripts/menu';
import { about } from './scripts/about';

console.log('here');

const content = document.querySelector('#content');
content.appendChild(about());