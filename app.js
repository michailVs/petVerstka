const pages = document.querySelector('.navbar-list')
const pageList = document.querySelectorAll('.navbar-item')
const navbar = document.querySelector('.navbar-list').cloneNode(1)
const view = document.querySelector('.view')
const watch = document.querySelector('.watch')
const popup = document.querySelector('.popup')
const menuBtn = document.querySelector('.menu')
const header = document.querySelector('.header')
const body = document.body

pages.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.classList.contains('navbar-item')) {
        clearClass(e.target.innerText)
        e.target.classList.contains('page-active') ? 0 : e.target.classList.toggle('page-active')
    }
})

function clearClass(text) {
    for (let el of pageList) {
        if (el.innerText !== text && el.classList.contains('page-active')) {
            el.classList.toggle('page-active')
        }
    }
}

view.addEventListener('click', btnAction)
watch.addEventListener('click', btnAction)
function btnAction() {
    const btn = [view, watch]
    btn.forEach(el => el !== this  && el.classList.contains('btn-active')? el.classList.toggle('btn-active') : 0)
    this.classList.contains('btn-active') ? 0 : this.classList.toggle('btn-active')
}


header.addEventListener('click', e => {
    if (e.target.classList.contains('bar') && popup.classList.contains('open')) {
        body.classList.toggle('noscroll')
        menuBtn.classList.toggle('menu__actove')
        popup.classList.toggle('open')
        popup.removeChild(navbar)
        return
    }
    if (e.target.classList.contains('bar') && !popup.classList.contains('open')) {
        body.classList.toggle('noscroll')
        menuBtn.classList.toggle('menu__actove')
        popup.classList.toggle('open')
        popup.appendChild(navbar)
        return
    }
})

