const indicators = document.querySelectorAll('.carousel-item')
const captions = document.querySelectorAll('.caption')

let status = false
for (let i = 0; i < indicators.length; i++) {
    checkSlide(i)
}

function checkSlide(i) {
    const element = document.getElementById(i);


    if (element.classList.contains('active')) {

        captions[i].style.display = 'block'
        status = true
        console.log(element)
    }

    if (status == false) {
        captions[i].style.display = 'none'

    }
}

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








