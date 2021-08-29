import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const theme = localStorage.getItem('theme');
console.log(theme); // "dark"

if (theme === 'dark-theme') {
  refs.body.classList.add('dark-theme');
  refs.input.checked = true;
}

refs.input.addEventListener('change', () => {
  console.log(refs.input.checked);
  if (refs.input.checked) {
    changeClass();
    // refs.body.classList.add("dark-theme");
    // refs.body.classList.remove("light-theme");
    changeLockalStorage(Theme.DARK);
  } else {
    // refs.body.classList.add("light-theme");
    // refs.body.classList.remove("dark-theme");
    changeClass();
    changeLockalStorage(Theme.DARK);
  }
});

const changeLockalStorage = theme => {
  localStorage.setItem('theme', theme);
};

const changeClass = () => {
  refs.body.classList.toggle('dark-theme');
  refs.body.classList.toggle('light-theme');
};
