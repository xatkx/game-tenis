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
var ball_X = pantalla.width / 2;
var ball_Y = 400;
var moviminetox = 5, moviminetoy = -5;
var pelota = 20;

// barra 
let barra = {
    width: 90,
    height: 5,
    position: pantalla.width / 2
}
var barraX = barra.position - (90 / 2);
var arrowLeft = false;
var arrowRight = false;

function juego() {
    let barraSpeed = 7;
    refresFrame(ctx, pantalla);

    circulo(ctx, pelota, ball_X, ball_Y);

    barraFrame(barra);

    if (ball_Y < pelota ) {
        moviminetoy = -moviminetoy;
    }

    if( ball_Y >= 459 - pelota && !(ball_Y + pelota > 460) && ball_X > barraX && ball_X <= barraX + barra.width){

        moviminetoy = -moviminetoy

        moviminetox = aleat(-6,6);
    }
    else if( ball_Y > pantalla.height - pelota){

        
        textFrame('game over',120, 250)

        document.location.reload()
        moviminetoy = -moviminetoy
    
    }

    if (ball_X < pelota || ball_X > pantalla.width - pelota) {
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
    ball_X += moviminetox
    ball_Y += moviminetoy
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
    if(e.key == 'ArrowRight' && ball_X < pantalla.width - pelota){
        arrowRight = true
    }
    if(e.key == 'ArrowLeft' && ball_X > pelota){
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

function aleat (max,min){
    return Math.floor(Math.random() * (max - min + 1)) + min
}


//setInterval(juego, 10);