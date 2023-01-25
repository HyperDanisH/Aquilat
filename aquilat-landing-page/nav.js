const open_icon = document.getElementById("hamburger-menu-open")
const close_icon = document.getElementById("nav-close-btn")
const mobile_nav = document.getElementById("mobile-nav")


open_icon.onclick = () => {
    mobile_nav.style.display = 'flex'
}

close_icon.addEventListener("click", () => { mobile_nav.style.display = 'none' })