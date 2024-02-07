const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menuBtn')
const menuLink = document.querySelectorAll('#menu > a')
const main = document.getElementById('main')

const showHideMenu = () => {
  menu.classList.toggle('scale-x-0')
  menu.classList.toggle('fixed')
  menu.classList.toggle('absolute')
  main.classList.toggle('hidden')

  if (!menuBtn.classList.contains('fixed')) {
    menu.classList.add('fixed')
  } else {
    menu.classList.remove('fixed')
  }
  menuBtn.firstElementChild.classList.toggle('bx-x')
  menuBtn.firstElementChild.classList.toggle('mt-10')
}

const linkClick = (e) => {
  showHideMenu()
}

menuBtn.addEventListener('click', showHideMenu)
menuLink.forEach((item) => {
  item.addEventListener('click', linkClick)
})
