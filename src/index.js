import './sass/main.scss';

import foodCardsTemplates from './templates/cards.hbs';
// console.log(foodCardsTemplates);

import menu from './menu.json';
console.log(menu);

// ======= Список тем =======
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// ======= Создаем разметку по шаблону =======
const menuListRef = document.querySelector('.js-menu');
//console.log(menuListRef);

const cardsMenuMarkup = createMenuList(menu);
// console.log(cardsMenuMarkup);

menuListRef.insertAdjacentHTML('afterbegin', cardsMenuMarkup);

function createMenuList(menu) {
    return foodCardsTemplates(menu);
};

// ======= По умолчанию тема светлая. =======
const bodyRef = document.querySelector('body');
// console.log(bodyRef);
bodyRef.classList.add(Theme.LIGHT);

// ======= Добавляем функционал изменения темы при нажатии на чекбокс =======
const selectCheckbox = document.querySelector('#theme-switch-toggle');
// console.log(selectCheckbox);

// ======= При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme =======
selectCheckbox.addEventListener('change', onSelectThemes);

// ======= Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage. =======
function onSelectThemes(event) {
    if (selectCheckbox.checked) {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);   
    }
    else {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
    }

    localStorage.theme = bodyRef.getAttribute('class');
    console.log(localStorage.theme);
}

// ======= Если при загрузке страницы тема тёмная, ставим свойство checked в true, чтобы ползунок сдвинулся в правильное положение. =======
if (localStorage.theme === Theme.DARK) {
    selectCheckbox.checked = true;

    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
}