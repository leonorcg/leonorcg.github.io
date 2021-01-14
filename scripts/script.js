console.log("helloworlds");
$("#splash").delay(1400).slideUp("slow", function() {
});

let loadStorage;
let storage;



var circuloos = JSON.parse(localStorage.getItem('circles'));
console.log(circuloos);

$( document ).ready(function() {
  console.log( "document ready!" );
  $( "#rstentry" ).hide();

  if( circuloos =! null){
      historyFunction();
  } else {
    $( "#rstentry" ).hide();
  }

});


//retrieve all the saved messages
function historyFunction() {
  var x = localStorage.getItem("circles");
  console.log(x);
  $( "#rstentry" ).show();
  console.log("#rstentry", rstentry);
}


$("#gravar").on("click", function () {

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

function myPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function goBack() {
  window.history.back();
}

// $("#rstentry").on("click", function () {
//   console.log("showresults");
//   $("#rstentry").load("results_2.html");

// });
