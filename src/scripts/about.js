import Icon from '../assets/github.png';
import '../styles/about.css';

function about() {
    const container = document.createElement('div');
    container.setAttribute('id', 'about-container');

    const description = document.createElement('p');
    description.innerHTML = 'This webpage serves as a project assignment submission for the <a href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page">Restaurant Page of The Odin Project\'s JavaScript course</a>. The purpose of the creation this webpage is to exercise writing organized code utilizing ES6 modules and Webpack. Please note that this website is not real and was created solely for educational purposes. All images used on the webpage are not mine and are credited to their respective owners.';
    container.appendChild(description);

    const link = document.createElement('a');
    link.setAttribute('id', 'source-code');
    link.text = 'jnssvdl';
    link.href = 'https://github.com/jnssvdl/restaurant-page';
    container.appendChild(link);

    const icon = new Image();
    icon.src = Icon;
    link.appendChild(icon);

    return container;
}

export { about };