console.log("helloworlds");

var slider1 = document.getElementById("myRange1");
console.log("myRange", "slider1.value", slider1.value);
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var slider4 = document.getElementById("myRange4");
var slider5 = document.getElementById("myRange5");
var slider6 = document.getElementById("myRange6");
var slider7 = document.getElementById("myRange7");
var slider8 = document.getElementById("myRange8");
var slider9 = document.getElementById("myRange9");
var slider10 = document.getElementById("myRange10");




$("#add").on("click", function () {
    localStorage.setItem("sliderum", slider1.value);
    localStorage.setItem("sliderdois", slider2.value);
    localStorage.setItem("slidertres", slider3.value);
    localStorage.setItem("sliderquatro", slider4.value);
    localStorage.setItem("slidercinco", slider5.value);
    localStorage.setItem("sliderseis", slider6.value);
    localStorage.setItem("slidersete", slider7.value);
    localStorage.setItem("slideroito", slider8.value);
    localStorage.setItem("slidernove", slider9.value);
    localStorage.setItem("sliderdez", slider10.value);
});


//LOCAL STORAGE 
let storage;

//loading object, data will be stored here
let loadStorage;

function myPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


