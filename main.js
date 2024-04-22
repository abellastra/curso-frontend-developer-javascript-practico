const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHam = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHam.addEventListener('click',toggleHamMenu);


 function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive')
 }

 function toggleHamMenu(){
    mobileMenu.classList.toggle('inactive')
 }