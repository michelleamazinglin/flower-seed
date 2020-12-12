function allowDrop(event) {
  //prevent the default handling of the element
// (data/elements cannot be dropped in other elements)
  event.preventDefault();
}

// what to be drag
function drag(event) {
// sets the data type and the value of the dragged data
  event.dataTransfer.setData("seed", event.target.id);
}

function drop(event) {
// prevent the browser default handling of the data (open a link)
  event.preventDefault();
//   any data that was set to the same type in the setData() method
//   var data = event.dataTransfer.getData("seed");
//   The dragged data is the id of the dragged element
//   Append the dragged element into the drop element
//  event.target.appendChild(document.getElementById(data));
const usa = document.getElementById("USA");
var usaModal = document.getElementById("usaModal");
const china = document.getElementById("CHINA");
var chinaModal = document.getElementById("chinaModal");
const canada = document.getElementById("CANADA");
var canadaModal = document.getElementById("canadaModal");
const mexico = document.getElementById("MEXICO");
var mexicoModal = document.getElementById("mexicoModal");
const brazil = document.getElementById("BRAZIL");
var brazilModal = document.getElementById("brazilModal");

usa.ondrop = function() {
  usaModal.style.display = "block";
}

china.ondrop = function() {
  chinaModal.style.display = "block";
}

canada.ondrop = function() {
  canadaModal.style.display = "block";
}

mexico.ondrop = function() {
  mexicoModal.style.display = "block";
}

brazil.ondrop = function() {
  brazilModal.style.display = "block";
}
}


// Get the modal








// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == usaModal) {
    usaModal.style.display = "none";
  } else if (event.target == chinaModal) {
    chinaModal.style.display = "none";
  } else if (event.target == canadaModal) {
    canadaModal.style.display = "none";
  } else if (event.target == mexicoModal) {
    mexicoModal.style.display = "none";
  } else if (event.target == brazilModal) {
    brazilModal.style.display = "none";
  } 
}



// var places = [
//  "usa",
//  "china"
// ];

// // iterate through the places array
//  for (let i = 0; i < places.length; i++) {
// //    once the place match the div..shows up the modal
//     if (places[i] === "" ) {
// //       show up the right modal
//     }
//  };