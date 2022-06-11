var btnMenu = document.querySelector("#btnMenu")
var menu = document.querySelector("#menu")
var x = 0

btnMenu.addEventListener("click", () => {
    if( x == 0) {
        menu.style = "display:block;"
        x++
        console.log(x)
    } else {
        menu.style = "display:none;"
        x--
        console.log(x)
    }
})