console.log("helloworlds");


function myPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

var circuloos = JSON.parse(localStorage.getItem('circles'));
let loadStorage;
let storage;

let sliderColors = [
  [255, 54, 54],
  [255, 126, 54],
  [205, 48, 86],
  [216, 158, 200],
  [195, 25, 148],
  [110, 54, 130],
  [19, 50, 130],
  [37, 148, 164],
  [42, 196, 229],
  [96, 232, 207],
];

  // PAmado Collision Scatter Plot, 2020-12-18 (v2)
// (V1: 2020-12-17 sample mariana et al: https://editor.p5js.org/pedamado/sketches/7BfYw3PEg)
// Using a simple recursive "brute-force" callback method (while loop) to plot new positions

// construtor de bolhas
class Bolha {

  // esta função inicializa cada cópia do objeto ("this")
  constructor(x, y, r, cor) { // <-- acrescentei um "id" para saber "quem é quem"
    this.x = x;
    this.y = y;
    this.r = r;
    this.f = color(cor[0], cor[1], cor[2]);
  }

  draw() {
    circle(this.x, this.y, this.r * 2);
  }
  // método (função interna da classe) para atualizar dados
  update() {
    // more update functions… add movement?
  }

  // método de desenho geral do objeto
  display() {
    fill(this.f);
    
    circle(this.x, this.y, this.r + this.r);
  }
}

// ——————————————————————————————————————————————————————
// declarar variáveis globais
let bolhas; // <-- array de objetos (instâncias da classe Bolha)
let n;
let tdimensions;
let r;
let x;
let y;

function setup() {
  createCanvas(innerWidth, innerHeight); // <-- podem tirar partido dos métodos gerais de JS
  bolhas = [];
  var circuloos = JSON.parse(localStorage.getItem('circles'));
  n = circuloos[0].circulooos.length;
  console.log("circulooo.length");

    // carrega as dimensões do localStorage
  var circuloos = JSON.parse(localStorage.getItem('circles'));
  console.log(circuloos);

  for (let i = 0; i < n; i++) {

    let r = circuloos[0].circulooos[i].r;
    let x = circuloos[0].circulooos[i].x;
    let y = circuloos[0].circulooos[i].y;
    // a criação de uma bolha foi colocada numa função para poder ser chamada várias vezes
    //bolhas[i] = setBolha(i);

    // experimentem este método para ir buscar as bolhas a partir do localStorage
     bolhas[i] = getBolha(i, sliderColors[i]);

    // se existir mais do que uma bolha, verifica colisões

  }

  noStroke();
  fill(0);
  textSize(16);
}


// ——————————————————————————————————————————————————————
// função que cria bolhas a partir dos elementos que estão guardados em localStorage
function getBolha(i, cor) {

  //let tBolha = new Bolha( floor(tdimensions[i].ter), floor(tdimensions[i].fer), floor(tdimensions[i].pop), tdimensions[i].lin, i );
  var circuloos = JSON.parse(localStorage.getItem('circles'));
  let tBolha = new Bolha( circuloos[0].circulooos[i].x, circuloos[0].circulooos[i].y, circuloos[0].circulooos[i].r,  cor);

  return tBolha;
}

// ——————————————————————————————————————————————————————
// função que verifica a colisão de "cada" bolha com as restantes
//function checkCollision(i) { // <-- recebe o "nº" da bolha corrente
  //let collision = false;

  // compara com todas as outras bolhas restantes
//  for (let k = 0; k < i; k++) {

    // calcula a distância entre a bolha corrente e todas as bolhas que a precederam
  //  let d = dist(bolhas[i].x, bolhas[i].y, bolhas[k].x, bolhas[k].y);

    // se a distância for menor que o raio de ambas (tocam-se)
  //  if (d < bolhas[i].w / 2 + bolhas[k].w / 2) {
  //    collision = true;
//      print("collision", bolhas[i].id, bolhas[k].id);
  //    return collision; // <-- este return aqui permite sair do loop/função "mais cedo" e tornar a coisa ligeiramente mais rápida
//    }
//  }
//}

// ——————————————————————————————————————————————————————
// desenhar no ecra o sketch
function draw() {
  background(248, 237, 237);
  // bolhas.forEach(e => e.draw())

  // dois tipos de loops diferentes

  // update
  bolhas.forEach(function(bolha) {
    bolha.update();
  });

  // display
  for (let bolha of bolhas) {
    bolha.display();
  }

}

$("home").on("click",function(){

});

$("delete").on("click",function(){

});
