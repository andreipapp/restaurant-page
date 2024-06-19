import pageLoad from "./page-load";
import loadMenu from "./menu";
import loadContact from "./contact";
pageLoad();

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

home.addEventListener('click', () => {
    pageLoad();
})

menu.addEventListener('click', () => {
    loadMenu();
})

contact.addEventListener('click', () => {
    loadContact();
})
