const pages = document.querySelector('.navbar-list')
const pageList = document.querySelectorAll('.navbar-item')
const navbar = document.querySelector('.navbar-list').cloneNode(1)
const view = document.querySelector('.view')
const watch = document.querySelector('.watch')
const popup = document.querySelector('.popup')
const menuBtn = document.querySelector('.menu')
const body = document.body

// Navbar
pages.addEventListener('click', e => nav(e, pageList))
function nav(e, pageList) {
    e.preventDefault()
    if (e.target.classList.contains('navbar-item')) {
        clearClass(e.target.innerText, pageList)
        e.target.classList.contains('page-active') ? 0 : e.target.classList.toggle('page-active')
    }
}
function clearClass(text, pageList) {
    for (let el of pageList) {
        if (el.innerText !== text && el.classList.contains('page-active')) {
            el.classList.toggle('page-active')
        }
    }
}


// Buttons on main page
view.addEventListener('click', btnAction)
watch.addEventListener('click', btnAction)
function btnAction() {
    const btn = [view, watch]
    btn.forEach(el => el !== this  && el.classList.contains('btn-active')? el.classList.toggle('btn-active') : 0)
    this.classList.contains('btn-active') ? 0 : this.classList.toggle('btn-active')
}

// Hamburger menu
menuBtn.addEventListener('click', () => {
    if (popup.classList.contains('open')) {
        body.classList.toggle('noscroll')
        menuBtn.classList.toggle('menu__actove')
        popup.classList.toggle('open')
        popup.removeChild(navbar)
        return
    } else {
        body.classList.toggle('noscroll')
        menuBtn.classList.toggle('menu__actove')
        popup.classList.toggle('open')
        popup.appendChild(navbar)
        const navItems = navbar.querySelectorAll('li')
        navbar.addEventListener('click', e => nav(e, navItems))
        return
    }
})

