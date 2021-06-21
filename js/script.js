const menu = document.querySelector('.menu-container')
const menuBtn = document.querySelector('.menu-button')
const entirePage = document.querySelector('#page')
const menuLinks = document.querySelectorAll('.menu-link')

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex'
    entirePage.style.display = 'none'

})


menuLinks.forEach(element => {

    element.addEventListener('click', checkLink)

    console.log(element.getAttribute('href'))
});
function checkLink(href) {
    entirePage.style.display = 'block'
    menu.style.display = 'none'
    // window.location.hash = `${href}`
    document.getElementById(href).scrollIntoView({ behavior: 'smooth' })

}



