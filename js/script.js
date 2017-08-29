function navToggle() {
  var toggleBtn = document.getElementById('hamburger__toggle');
  var navView = document.getElementById('hamburger__list');
  var toggleBtnClass = toggleBtn.getAttribute('class');

  if(toggleBtnClass == 'hamburger__button close') {
    toggleBtn.classList.remove('close');
    navView.classList.remove('close');
    toggleBtn.classList.add('open');
    navView.classList.add('open');
  }

  else {
    toggleBtn.classList.remove('open');
    navView.classList.remove('open');
    toggleBtn.classList.add('close');
    navView.classList.add('close');
  }
}
document.getElementById('hamburger__toggle').onclick = navToggle;
