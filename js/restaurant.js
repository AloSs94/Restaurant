let boton = document.querySelector('#Responsive');
let target = boton.getAttribute("data-target");


let Menu=document.querySelector('.nav-menu');
let Attr = Menu.getAttribute("aria-hidden");



boton.addEventListener("click",() => {
    boton.classList.toggle("active");
    Altura();
    Atributo();
});

function Altura(){
    if(Menu.style.maxHeight){
        Menu.style.maxHeight = null;
    }else{
        Menu.style.maxHeight = 100 + "vh";
    }
}
function Atributo(){

    if(boton.classList.contains("active")){
        Menu.setAttribute("aria-hidden","false");
        
    }else{
        Menu.setAttribute("aria-hidden","true");
    }
}
