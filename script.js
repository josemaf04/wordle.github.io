let intentos = 6;
let diccionario = ["APPLE", "TABLE", "CHAIR", "BREAD", "WATER", "FRUIT", "GREEN", "BLACK", "WHITE", "BROWN"];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const input = document.getElementById("guess-input");
const valor = input.value;

window.addEventListener('load', init);
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

for (let i in palabra){
	console.log(palabra[i]);
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
function intentar() {
const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    const INTENTO = leerIntento()
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
            console.log("hola")
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    intentos--
    if (intentos==0){
    terminar("<h1>PERDISTE!😖</h1>")
    }
}
