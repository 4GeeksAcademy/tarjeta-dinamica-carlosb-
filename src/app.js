import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


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


  let palos = ['♠', '♥', '♦', '♣']; // Picas, Corazones, Diamantes, Tréboles
  let valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let colores = ['red','black']

  let posicionValorAleatorio = Math.floor(Math.random() * valores.length);
  let posicionPaloAleatorio = Math.floor(Math.random() * palos.length);
  let posicionColorAleatorio = Math.floor(Math.random() * colores.length);
  mostrarCarta(palos[posicionPaloAleatorio],valores[posicionValorAleatorio],colores[posicionColorAleatorio]);

};


