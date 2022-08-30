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
var xd = 350;
var yd = 20;

function juego(){

    refresFrame(ctx,pantalla);
    circulo(ctx,xd,yd)
 //console.log(yd)
 
}

document.addEventListener('keydown', e => {

    let iterador = 10;
    if(e.key == 'ArrowUp'){
        yd -= iterador;
    } 
    
    if(e.key == 'ArrowDown'){
        yd += iterador;
    }
    if(e.key == 'ArrowRight'){
        xd += iterador;
    }
    if(e.key == 'ArrowLeft'){
        xd -= iterador;
    }
})

function circulo(constex,x,y){
    let ancho = 20;
    constex.fillStyle = 'red'
    constex.beginPath()
    constex.arc(x,y,ancho,0, 13);
    constex.fill()
    constex.closePath()

}
function refresFrame(contex,pa){

    contex.clearRect(0,0,pa.width,pa.height)
}
setInterval(juego,10);