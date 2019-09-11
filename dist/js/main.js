//select DOM elements 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');


//TODO: Pages
const contact = document.getElementById('contact');
const home = document.getElementById('home');
const work = document.getElementById('work');





let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        // set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => {
            item.classList.remove('show')
        });
        // set Menu State
        showMenu = false;

    }
}

menu.addEventListener('click', e => {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        // set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => {
            item.classList.remove('show')
        });
        // set Menu State
        showMenu = false;

    }


})



// work.addEventListener('click', e => {
//     if (!showMenu) {
//         menuBtn.classList.add('close');
//         menu.classList.add('show');
//         menuNav.classList.add('show');
//         menuBranding.classList.add('show');
//         navItems.forEach(item => item.classList.add('show'));
//         // set Menu State
//         showMenu = true;
//     } else {
//         menuBtn.classList.remove('close');
//         menu.classList.remove('show');
//         menuNav.classList.remove('show');
//         menuBranding.classList.remove('show');
//         navItems.forEach(item => {
//             item.classList.remove('show')
//         });
//         // set Menu State
//         showMenu = false;

//     }

// })






