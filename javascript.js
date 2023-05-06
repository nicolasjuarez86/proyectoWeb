



//const galeria  = document.querySelector('.galeria')
//const punto    = document.querySelectorAll('.punto') 

//El método forEach() ejecuta la función indicada una vez por cada elemento del array.

//punto.forEach( (cadaPunto , i ) => {
  //  punto[i].addEventListener ('click',()=>{

          //  let  posicion = i
           // let operacion = posicion * -50


           // galeria.querySelector(galeria)= "translateX($ { operacion } %)" 
         //   punto.forEach(( cadaPunto , i)  => {
          //      punto[i].classList.remove('activo')
         //   })
         //   punto[i].classList.add('activo')
   // })
//})


var contador =  1
    setInterval(function() {
        document.getElementById("radio" + contador).checked = true;
        contador++;
        if(contador > 3){
            contador = 1;
        }
    }, 5000);


const burgerBtn = document.querySelector('.burger-btn')
const burgerBtnIcon = document.querySelector('.burger-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

burgerBtn.onclick = function() {
    dropDownMenu.classList.burger('open')
    const isOpen = dropDownMenu.classList.contains('open')

    burgerBtnIcon.classList =isOpen
    ? 'fa fa-bars'
    : 'fa fa-bars'
}
