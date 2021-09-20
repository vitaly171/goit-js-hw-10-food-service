import menuCardsTamplates from '../src/templates/menu-cards.hbs'
import './sass/main.scss';
import menu from './menu.json'

const cardsContainer = document.querySelector('.js-menu');
const cardsMarkup = menuCardsTamplates(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyEl = document.body;
const switchEl = document.querySelector('#theme-switch-toggle');

cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);


bodyEl.addEventListener('change', onClassList);
switchEl.addEventListener('change', onClassList);


function onClassList(evt) {
    if(evt.target.checked){
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme',Theme.DARK)
    bodyEl.classList.remove(Theme.LIGHT)
    }
    else {
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme',Theme.LIGHT)
    bodyEl.classList.remove(Theme.DARK);
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