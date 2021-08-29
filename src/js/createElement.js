import menu from '../menu.json';
import menuItems from '../templates/menuItems';
import refs from './refs';
const murckup = menuItems(menu);

refs.menuRef.insertAdjacentHTML('beforeend', murckup);
