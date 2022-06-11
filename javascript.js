const target = document.querySelectorAll('[data-animate]')
const target1 = document.querySelectorAll('[data-animate1]')
const animateClass = "animate"
const stopClass = "stop"


function animeScroll(elements, distancia) {
    
    var windowTop = window.pageYOffset
    elements.forEach( element => {
        if (windowTop < 200) {
            element.classList.remove(animateClass)
            element.classList.add(stopClass)
        }
        if( (windowTop + distancia) > element.offsetTop)  {
            element.classList.remove(stopClass)
            element.classList.add(animateClass)
        } 
        
        else {
            element.classList.remove(animateClass)
            element.classList.remove(stopClass)
        }

    })
}

window.addEventListener("scroll", () => {
    var windowTop = window.pageYOffset  
    console.log(windowTop)
     animeScroll(target, 400)
     animeScroll(target1, 400)
})




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


let el1 = document.querySelector("#texto1")
let el2= document.querySelector("#texto2")
let el3 = document.querySelector("#texto3")
let el4 = document.querySelector("#texto4")
var text = "◉ Gestão de Redes Sociais"
var text2 = "◉ Estrategias digitais" 
var text3 = "◉ Sites institucionais, Landing Pages e mais"
var text4 = "◉ Consultoria Especializada para o seu Negocio"
var interval = 100;

 function showtext(el, text, interval, callback) {
    
    var char = text.split("").reverse();
    
    var typer = setInterval(function() {
    
      if (!char.length) {
          return clearInterval(typer)
      }
      
      var next = char.pop();
      
      el.innerHTML += next;
      
    }, interval);
    callback()

}



  

 showtext(el1,text, interval,() => {

    showtext(el2,text2, interval, () => {

        showtext(el3,text3, interval,() => { 

            showtext(  el4,text4, interval, console.log)
        })
    })
 })




 

 
  