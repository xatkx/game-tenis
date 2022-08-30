let pantalla = {
    width: 750,
    height: 500
}

const form = document.querySelector('.form');
form.classList.add('shadow')
form.style.display = 'none'


const canvas = document.querySelector('#juego');
canvas.width = pantalla.width;
canvas.height = pantalla.height;
canvas.classList.add('shadow')

const ctx = canvas.getContext('2d');
var xd = pantalla.width / 2;
var yd = 40;
var moviminetox = 5, moviminetoy = 5;
var pelota = 20;

// barra 
let barra = {
    width: 90,
    height: 10,
    position: pantalla.width / 2
}

var barraX = barra.position - (90 / 2);

var arrowLeft = false;
var arrowRight = false;

function juego() {
    let barraSpeed = 7;
    refresFrame(ctx, pantalla);

    circulo(ctx, pelota, xd, yd);

    barraFrame(barra);

    if (yd < pelota ) {
        moviminetoy = -moviminetoy;
    }

    if( yd > 460 - pelota && xd > barraX && xd <= barraX + barra.width){

        moviminetoy = -moviminetoy
    }
    else if( yd > pantalla.height - pelota){

        
        textFrame('game over',120, 250)
        document.location.reload()
        moviminetoy = -moviminetoy
    
    }

    if (xd < pelota || xd > pantalla.width - pelota) {
        moviminetox = -moviminetox
    }

    //---------------

    if(arrowRight && barraX < pantalla.width - barra.width){
        barraX += barraSpeed;
    }
    if(arrowLeft && barraX > 0){
       barraX -= barraSpeed;
    }

    //console.log(yd)
    xd += moviminetox
    yd += moviminetoy
}

document.addEventListener('keyup', e => {
    if(e.key == 'ArrowRight'){
        arrowRight = false
    }
    if(e.key == 'ArrowLeft'){
       arrowLeft = false
    }
})
document.addEventListener('keydown', e => {
    if(e.key == 'ArrowRight' && xd < pantalla.width - pelota){
        arrowRight = true
    }
    if(e.key == 'ArrowLeft' && xd > pelota){
       arrowLeft = true
    }
})

function textFrame(msj,x,y){
    ctx.font = '100px arial'
    ctx.beginPath()
    ctx.fillText(msj,x,y)
    ctx.closePath()

    console.log(x,y)
}


function barraFrame(json) {
    const altura = 460;
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.rect(barraX, altura, json.width, json.height)
    ctx.fill();
    ctx.closePath();

}

function circulo(constex, ancho, x, y) {

    constex.fillStyle = 'red'
    constex.beginPath()
    constex.arc(x, y, ancho, 0, Math.PI * 2);
    constex.fill()
    constex.closePath()

}
function refresFrame(contex, pa) {

    contex.clearRect(0, 0, pa.width, pa.height)
}
setInterval(juego, 15);