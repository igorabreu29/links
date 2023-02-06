const linkContainer = document.querySelector(".link-container") 
const links = document.querySelectorAll(".link-box a")
const disappear = document.getElementById("disappear")

function appearLinks() {
    linkContainer.style.opacity = 1
    disappear.style.pointerEvents = 'initial'

    for(let pass of links ) {
        pass.style.pointerEvents = 'initial'
        pass.style.cursor = 'pointer'
    }
}

function disappearLinks() {
    linkContainer.style.opacity = 0
    disappear.style.pointerEvents = 'none'

    for(let pass of links ) {
        pass.style.pointerEvents = 'none'
        pass.style.cursor = 'none'
    }
}