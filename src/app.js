import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let palos = ['♠', '♥', '♦', '♣']; // Picas, Corazones, Diamantes, Tréboles
let valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let colores = ['red','black']


function mostrarCarta(palo,valor,color){

  let carta = ` <div class="card">
                    <div class="superior" style="color:${color};">
                      ${palo}
                    </div>
                    <div class="central">
                      ${valor}
                    </div>
                    <div class="inferior" style="color:${color};">
                      ${palo}
                    </div>
                  </div>`

  document.querySelector('#content-main').innerHTML = carta;
  let info = document.querySelector('#content-main');

  console.log(info);

}


//evento carga de pagina
window.onload = function() {
  let posicionValorAleatorio = Math.floor(Math.random() * valores.length);
  let posicionPaloAleatorio = Math.floor(Math.random() * palos.length);
  let posicionColorAleatorio = Math.floor(Math.random() * colores.length);
  mostrarCarta(palos[posicionPaloAleatorio],valores[posicionValorAleatorio],colores[posicionColorAleatorio]);

};



//evento nuevo js
/*
document.getElementById('btnNuevaCarta').onclick = function(){
  console.log('dio click, evento forma 1');
}
  */


document.getElementById('btnNuevaCarta').addEventListener('click', function() {
  let posicionValorAleatorio = Math.floor(Math.random() * valores.length);
  let posicionPaloAleatorio = Math.floor(Math.random() * palos.length);
  let posicionColorAleatorio = Math.floor(Math.random() * colores.length);
  mostrarCarta(palos[posicionPaloAleatorio],valores[posicionValorAleatorio],colores[posicionColorAleatorio]);
});

document.getElementById('btnTamanio').addEventListener('click', function(){
  let ancho = document.getElementById('valueWidth').value;
  let alto = document.getElementById('valueHeight').value;

  if(ancho != '' && alto != ''){
    const cards = document.querySelectorAll('.card');

    // Itera sobre todos los elementos encontrados
    cards.forEach((card, index) => {
        card.style.width = ancho + 'px';
        card.style.height = alto + 'px';
    });
  }
  


  console.log('ancho ',ancho);
  console.log('alto ',alto);
});