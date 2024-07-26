let lastScrollY = 0
navBar = document.getElementById('navBar')

window.addEventListener('scroll', function(){
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY){
        navBar.classList.add("hidden")
    }
    else{
        navBar.classList.remove("hidden")
    }

    lastScrollY = currentScrollY
})


load9 = document.querySelector(".load-9")
document.body.style.overflow = 'hidden'

window.addEventListener("load",function(){
    load9.style.display = 'none'
    document.body.style.overflow = ''
})


let count = 0
const dropBar = document.querySelector('.dropBar')

function showNavbar(){
    dropBar.style.display = "flex"
    count += 1
    if (count % 2 != 0){
        dropBar.style.display = "flex"
    }
    else{
        dropBar.style.display = "none"
    }
}