//funciones
/* let Parallax = Parallax() ;*/
function TamPant(){
    let tamPantalla = window.innerWidth;

    console.log(tamPantalla)
    return tamPantalla;
}

let SizeScreen = TamPant();

document.onreadystatechange =  function Cargando(){


     if(document.readyState == "complete" && SizeScreen > 800){

        
       let links = document.querySelectorAll(".menu a");
        links.forEach((element,index) => {
            //Efecto Menú
            element.animate([{top:"-200px"},{top: 0}],2000 + (index * 500));
         
        });
        //Efecto imagen
        let imageE = document.querySelector(".Introduccion img");
        imageE.animate([{opacity:0,marginTop:0},{opacity:1,marginTop:0 +"px"}],1500, "ease-in");
    }
//Scroll al enlace seleccionado
     let links = document.querySelectorAll("li a");
//forEach
     links.forEach( (link)=> {
         link.addEventListener("click",(e)=>{
                e.preventDefault();
                const nombre = document.querySelector(link.getAttribute("href"));
                console.log(nombre)
                nombre.scrollIntoView({
                    block: "start",
                    behavior:"smooth"
                })
               
         }); 
     })

     
}
efectoMenu();

function  efectoMenu(){
    window.addEventListener("resize",TamPant);
    
    if(SizeScreen > 800){
//Cambio  de color de la barra de menu
     let nav =document.getElementsByClassName("nav-menu");
     let menu = document.getElementsByClassName("menu");

     window.addEventListener("scroll",() => {

         window.scrollY > 400 ? (menu[0].classList.add("color"),
         nav[0].classList.add("color")):(menu[0].classList.remove("color"),nav[0].classList.remove("color"))
     });
   }
}
