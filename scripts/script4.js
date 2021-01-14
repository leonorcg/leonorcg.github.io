console.log("helloworlds");

function myPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

let storage;
let loadStorage;

let sliderValues = {
  ling: localStorage.getItem("sliderum"),
  cult: localStorage.getItem("sliderdois"),
  arq: localStorage.getItem("slidertres"),
  mat: localStorage.getItem("sliderquatro"),
  tol: localStorage.getItem("slidercinco"),
  pop: localStorage.getItem("sliderseis"),
  ter: localStorage.getItem("slidersete"),
  nar: localStorage.getItem("slideroito"),
  nos: localStorage.getItem("slidernove"),
  sto: localStorage.getItem("sliderdez"),
};

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
console.log(sliderValues);

// JavaScript source code
var circles = [];

class Circle {
  constructor(x, y, valor, color) {
    let minWidth = 3;
    let maxWidth = 50;

    this.r = map(valor, 0, 5, minWidth, maxWidth);
    this.x = map(x, 0, 1, 0 + this.r, width - this.r);
    this.y = map(y, 0, 1, 0 + this.r, height - this.r);
    console.log(color);
    this.color = color;
  }

  draw() {
    console.log(this.color);
    fill(this.color[0], this.color[1], this.color[2]);
    circle(this.x, this.y, this.r * 2);
  }
}

function generateCircle(valor, index) {
  let newX = random();
  let newY = random();
  let valido = false;
  let circle = new Circle(newX, newY, valor[1], sliderColors[index]);
  
  if (circles.length === 0) {
    circles.push(circle);
    return;
  }

  while (!valido) {
    let intersected = circles.find(
      (e) => dist(e.x, e.y, circle.x, circle.y) < e.r + circle.r
    );

    if (typeof intersected !== "undefined") {
      valido = false;
      newX = random();
      newY = random();
      circle = new Circle(newX, newY, valor[1], sliderColors[index]);

    } else {
      valido = true;
      circles.push(circle);
    }
  }
}

//save data
$("#gravar").on("click", function () {
  // calendar + text

  //if there's nothing on storage, upload a new message
  if (loadStorage == null) {
    loadStorage = [];
    //else get messages and add a new message
  } else {
    loadStorage = localStorage.getItem("circles");
    loadStorage = JSON.parse(loadStorage);
  }

  //define elements, calendar + text
  storage = {
    circulooos: circles,
  };

  //load message on storage
  loadStorage.push(storage);

  //save message as string
  let saveStorage = JSON.stringify(loadStorage);

  //save string as text JSON
  localStorage.setItem("circles", saveStorage);
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255, 0, 0);

  Object.entries(sliderValues).forEach((e, i) => {
    generateCircle(e, i);
  });
}

function draw() {
  background(248, 237, 237);
  circles.forEach((e) => e.draw());
}
