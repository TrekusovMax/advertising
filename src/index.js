const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menuBtn')

const showHideMenu = () => {
  menu.classList.toggle('scale-x-0')
  menu.classList.toggle('fixed')
  menu.classList.toggle('absolute')

  if (!menuBtn.classList.contains('fixed')) {
    //menuBtn.removeEventListener('click', showHideMenu)
    setTimeout(() => {
      menu.classList.add('fixed')
    }, 200)
  } else {
    menu.classList.remove('fixed')
  }
  menuBtn.firstElementChild.classList.toggle('bx-menu')
  menuBtn.firstElementChild.classList.toggle('bx-x')
}
menuBtn.addEventListener('click', showHideMenu)
