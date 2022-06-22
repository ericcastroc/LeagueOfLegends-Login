const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login-button');
const checkboxWallpaper = document.getElementById('checkboxWallpaper');
const wallpaper = document.getElementById('wallpaper');
const walppaperAnimation = 'wallpaper-animation';

function animationWallpaper(){
  wallpaper.classList.toggle(walppaperAnimation)
  console.log(wallpaper);
}


const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value  && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

checkboxWallpaper.addEventListener('click', animationWallpaper);