let arrow = document.getElementById('arrow')
innerArrow = document.getElementById('inner-arrow')
const navbarDropdown = document.getElementById('navbarDropdown')
var x = navbarDropdown.getAttribute("aria-expanded"); 
let home = document.getElementById('up')
const btn = document.getElementById('toggle')
let navbar = document.getElementById('navbar')
let body = document.body
let theme ;



navbarDropdown.addEventListener('click', () => {
  if (x == "true") 
  {
      x = "false"
      arrow.style.transform = 'rotate(90deg)'
  } else {
      x = "true"
      arrow.style.transform = 'rotate(0deg)'
  }
  navbarDropdown.setAttribute("aria-expanded", x);
})

window.addEventListener('scroll', () => {
  if (scrollY <= 756) {
    home.style.opacity = 0
    home.style.visibility='hidden'
  } else {
    home.style.opacity = 1
    home.style.visibility='visible'
  }
})



btn.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.add('Dark')
    body.classList.remove('light')
    navbar.classList.add('navbar-dark')
    navbar.classList.remove('navbar-light')
    arrow.style.color = 'white'
    innerArrow.setAttribute('fill', 'white')
    theme = 'light'
  } else if (body.classList.contains('Dark')) {
    body.classList.add('light')
    body.classList.remove('Dark')
     navbar.classList.add('navbar-light')
    navbar.classList.remove('navbar-dark')
    arrow.style.color = 'black'
    innerArrow.setAttribute('fill', 'black')
    theme = 'Dark'
  }
  

  localStorage.setItem('page-theme' , JSON.stringify(theme))
})

var gettheme = JSON.parse(localStorage.getItem("page-theme"));

if (gettheme == 'Dark') {
  body.classList.add('light')
    body.classList.remove('Dark')
     navbar.classList.add('navbar-light')
    navbar.classList.remove('navbar-dark')
    arrow.style.color = 'black'
    innerArrow.setAttribute('fill', 'black')
} else {
  body.classList.add('Dark')
    body.classList.remove('light')
    navbar.classList.add('navbar-dark')
    navbar.classList.remove('navbar-light')
    arrow.style.color = 'white'
    innerArrow.setAttribute('fill', 'white')
}



AOS.init();