/* boceto
1. asignar variables mediante dom
2. asignar que va a hacer cuando le de click con add.eventlistener
3. con ifs asignar que va suceder en el caso que aprieten el boton o agregar una funcion que contenga el que va a hacer
4. vincular los botones con onclick en html*/

const pantalla = document.querySelector("input")
const botones = document.querySelectorAll("button")

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", escribir)
}

function escribir() {
    let pv = pantalla.value
    let simbolos = (this.value === "=" || this.value === "-" || this.value === "+" || this.value === "*" || this.value === "/")
    let simbolos2 = (pv.slice (-1) === "=" || pv.slice (-1) === "-" || pv.slice (-1) === "+" || pv.slice (-1) === "*" || pv.slice (-1) === "/" )
    if(this.value === "X"){
       
        pantalla.value = pv.slice(0, pv.length -1)
        return;

    }
    if(simbolos && simbolos2){
        pantalla.value = pv.slice(0, pv.length -1) + this.value;
        return;
    }
    if(this.value === "AC"){
        pantalla.value = ""
        return;
        
    }
   

    
    if(this.value === "="){
        pantalla.value = eval(pantalla.value)
        return;
    }
    //intente en algunas maneras con if y else para que si solo ponen el igual al principio salga algunas otras cosa o mensaje personalizado pero no me salio, me salio con los otros signos pero con igual no
    
    pantalla.value += this.value
}



