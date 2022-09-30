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
        
    });
}

window.addEventListener("scroll", () => {
    var windowTop = window.pageYOffset  
    
     animeScroll(target, 600)
     animeScroll(target1, 600)
})




var btnMenu = document.querySelector("#btnMenu")
var menu = document.querySelector("#menu")
var x = 0

btnMenu.addEventListener("click", () => {
    
    if( x == 0) {
        menu.style = "display:block;"
        btnMenu.style = "transform: rotate(90deg);";
        x++
        
    } else {
        menu.style = "display:none;"
        btnMenu.style = "transform: rotate(0deg);";
        x--
        
    }
})


let el1 = document.querySelector("#texto1")
let el2= document.querySelector("#texto2")
let el3 = document.querySelector("#texto3")
let el4 = document.querySelector("#texto4")
var text2 = "Gestão de Redes Sociais"
var text3 = "Tecnologias de Ponta e Profissionais qualificados" 
var text = "Sites institucionais, Landing Pages, Blogs, Sistemas e mais"
var text4 = "Consultoria Especializada para o seu Negocio"
var interval = 70;

 async function showtext(el, text, interval) {
    
    var char = text.split("").reverse();
    
    var typer = setInterval(function() {
    
      if (!char.length) {
          return clearInterval(typer)
      }
      
      var next = char.pop();
      
      el.innerHTML += next;
      
    }, interval);
    
    return true;
}


showtext(el1,text, interval)
showtext(el2,text2, interval)
showtext(el3,text3, interval)
showtext(el4,text4, interval)

 

 
  