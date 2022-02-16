const menuMobile = document.querySelector('[data-nav-list]')
const btnMobile = document.querySelector('[data-button-mobile]')

const openMenuMobileCLick = () => {
    menuMobile.classList.toggle('active-menu-mobile')
}

btnMobile.addEventListener('click', () => openMenuMobileCLick())