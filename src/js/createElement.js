import menu from '../menu.json';
import menuItems from '../templates/menuItems';
import refs from './refs';

const markup = menuItems(menu);

refs.menuRef.insertAdjacentHTML('beforeend', markup);
