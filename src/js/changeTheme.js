import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const theme = localStorage.getItem('theme');

if (theme === 'dark-theme') {
  refs.body.classList.add('dark-theme');
  refs.input.checked = true;
}

refs.input.addEventListener('change', onInputChangeTheme);

function onInputChangeTheme() {
  if (refs.input.checked) {
    changeClass();
    // refs.body.classList.add("dark-theme");
    // refs.body.classList.remove("light-theme");
    changeLockalStorage(Theme.DARK);
  } else {
    // refs.body.classList.add("light-theme");
    // refs.body.classList.remove("dark-theme");
    changeClass();
    changeLockalStorage(Theme.LIGHT);
  }
}

function changeLockalStorage(theme) {
  localStorage.setItem('theme', theme);
}

function changeClass() {
  refs.body.classList.toggle('dark-theme');
  refs.body.classList.toggle('light-theme');
}
