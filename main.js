const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHam = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const carritoDeCompras = document.querySelector('.navbar-shopping-cart')
const productos =document.querySelector('.product-detail')

menuEmail.addEventListener('click',toggleDesktopMenu);

menuHam.addEventListener('click',toggleHamMenu);                                

carritoDeCompras.addEventListener('click',toggleProductos)


 function toggleDesktopMenu(){
   mobileMenu.classList.add('inactive')
   productos.classList.add('inactive')

  desktopMenu.classList.toggle('inactive')
 }

 function toggleHamMenu(){
   productos.classList.add('inactive')

    mobileMenu.classList.toggle('inactive')
 }

 function toggleProductos(){
   
   desktopMenu.classList.add('inactive')
   mobileMenu.classList.add('inactive')

   productos.classList.toggle('inactive')

 }