let pantalla = {
    width:750, 
    height:500
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
var yd = 20;
var moviminetox = 5,moviminetoy = 5;


var pelota = 20;
function juego(){
    refresFrame(ctx,pantalla);

    circulo(ctx,pelota,xd,yd);

    if(yd < pelota  || yd > pantalla.height - pelota){
        moviminetoy = -moviminetoy;
    }
    if(xd < pelota || xd > pantalla.width - pelota){
        moviminetox = -moviminetox
    }
    
 //console.log(yd)

 xd += moviminetox
 yd += moviminetoy
}

// document.addEventListener('keydown', e => {

    
//     let iterador = 20,pelota = 20;
//     if(e.key == 'ArrowUp' && yd > pelota){
//         yd -= iterador;
//     } 
    
//     if(e.key == 'ArrowDown' && yd < pantalla.height - pelota){
//         yd += iterador;
//     }
//     if(e.key == 'ArrowRight' && xd < pantalla.width - pelota){
//         xd += iterador;
//     }
//     if(e.key == 'ArrowLeft' && xd > pelota){
//         xd -= iterador;
//     }
// })

function circulo(constex,ancho,x,y){
    
    constex.fillStyle = 'red'
    constex.beginPath()
    constex.arc(x,y,ancho,0, Math.PI *2);
    constex.fill()
    constex.closePath()

}
function refresFrame(contex,pa){

    contex.clearRect(0,0,pa.width,pa.height)
}
setInterval(juego,10);