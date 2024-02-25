const pages = document.querySelector('.navbar-list')
const pageList = document.querySelectorAll('.navbar-item')

pages.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.classList.contains('navbar-item')) {
        clearClass(e.target.innerText)
        e.target.classList.toggle('page-active')
    }
})

function clearClass(text) {
    for (let el of pageList) {
        if (el.innerText !== text && el.classList.contains('page-active')) {
            el.classList.toggle('page-active')
        }
    }
}

const view = document.querySelector('.view')
const watch = document.querySelector('.watch')
view.addEventListener('click', btnAction)
watch.addEventListener('click', btnAction)
function btnAction() {
    const btn = [view, watch]
    btn.forEach(el => el !== this  && el.classList.contains('btn-active')? el.classList.toggle('btn-active') : 0)
    this.classList.toggle('btn-active')
}
