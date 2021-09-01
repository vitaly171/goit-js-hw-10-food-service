import menuCardsTamplates from '../src/templates/menu-cards.hbs'
import './sass/main.scss';
import menu from './menu.json'


const cardsContainer = document.querySelector('.js-menu');
const cardsMarkup = menuCardsTamplates(menu);

cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

const bodyEl = document.querySelector('body');
const switchEl = document.querySelector('#theme-switch-toggle');

//console.log(switchEl)

bodyEl.addEventListener('change', onClassList);
switchEl.addEventListener('change', onLocalStorage);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onClassList(evt) {
    
    const checkStatus = switchEl.checked;
    
    if (checkStatus) {
      bodyEl.classList.add(Theme.DARK);
      bodyEl.classList.remove(Theme.LIGHT)
    } else {
      bodyEl.classList.add(Theme.LIGHT);
      bodyEl.classList.remove(Theme.DARK);
    }
    
}

function onLocalStorage(evt) {
    const checkStatus = switchEl.checked;

    if (checkStatus) {
        localStorage.setItem('theme',Theme.DARK)
    }
    else {
        localStorage.removeItem('theme',Theme.DARK);
        localStorage.setItem('theme',Theme.LIGHT)
    }
}

const themeInTime = localStorage.getItem('theme');

//console.log(themeInTime)

    if (themeInTime === Theme.DARK) {
        bodyEl.classList.add(Theme.DARK);
        switchEl.checked = true;
    } else {
        bodyEl.classList.add(Theme.LIGHT);
    }