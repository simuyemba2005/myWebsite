const dropdownBtn = document.querySelector('.dropdown_btn')
const navMenu = document.querySelector('.nav_menu')
const body = document.body;
dropdownBtn.addEventListener('click', () => {
  navMenu.classList.toggle('menu_down')
  
})

