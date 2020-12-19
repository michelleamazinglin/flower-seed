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
const argentina = document.getElementById("ARGENTINA");
var argentinaModal = document.getElementById("argentinaModal");
const greenland = document.getElementById("GREENLAND");
var greenlandModal = document.getElementById("greenlandModal");
const korea = document.getElementById("KOREA");
var koreaModal = document.getElementById("koreaModal");
const japan = document.getElementById("JAPAN");
var japanModal = document.getElementById("japanModal");
const russia = document.getElementById("RUSSIA");
var russiaModal = document.getElementById("russiaModal");
const indonesia = document.getElementById("INDONESIA");
var indonesiaModal = document.getElementById("indonesiaModal");
const australia = document.getElementById("AUSTRALIA");
var australiaModal = document.getElementById("australiaModal");
const uk = document.getElementById("UK");
var ukModal = document.getElementById("ukModal");
const germany = document.getElementById("GERMANY");
var germanyModal = document.getElementById("germanyModal");
const france = document.getElementById("FRANCE");
var franceModal = document.getElementById("franceModal");
const italy = document.getElementById("ITALY");
var italyModal = document.getElementById("italyModal");
const egypt = document.getElementById("EGYPT");
var egyptModal = document.getElementById("egyptModal");
const iran = document.getElementById("IRAN");
var iranModal = document.getElementById("iranModal");
const southafrica = document.getElementById("SOUTHAFRICA");
var southafricaModal = document.getElementById("southafricaModal");
const india = document.getElementById("INDIA");
var indiaModal = document.getElementById("indiaModal");
const antarctica = document.getElementById("ANTARCTICA");
var antarcticaModal = document.getElementById("antarcticaModal");
  

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

argentina.ondrop = function() {
  argentinaModal.style.display = "block";
}

greenland.ondrop = function() {
  greenlandModal.style.display = "block";
}

korea.ondrop = function() {
  koreaModal.style.display = "block";
}

japan.ondrop = function() {
  japanModal.style.display = "block";
}

russia.ondrop = function() {
  russiaModal.style.display = "block";
}

indonesia.ondrop = function() {
  indonesiaModal.style.display = "block";
}

australia.ondrop = function() {
  australiaModal.style.display = "block";
}

uk.ondrop = function() {
  ukModal.style.display = "block";
}

germany.ondrop = function() {
  germanyModal.style.display = "block";
}

france.ondrop = function() {
  franceModal.style.display = "block";
}

italy.ondrop = function() {
  italyModal.style.display = "block";
}

egypt.ondrop = function() {
  egyptModal.style.display = "block";
}

iran.ondrop = function() {
  iranModal.style.display = "block";
}

southafrica.ondrop = function() {
  southafricaModal.style.display = "block";
}

india.ondrop = function() {
  indiaModal.style.display = "block";
}

antarctica.ondrop = function() {
  antarcticaModal.style.display = "block";
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
  } else if (event.target == argentinaModal) {
    argentinaModal.style.display = "none";
  } else if (event.target == greenlandModal) {
    greenlandModal.style.display = "none";
  } else if (event.target == koreaModal) {
    koreaModal.style.display = "none";
  } else if (event.target == japanModal) {
    japanModal.style.display = "none";
  } else if (event.target == russiaModal) {
    russiaModal.style.display = "none";
  } else if (event.target == indonesiaModal) {
    indonesiaModal.style.display = "none";
  } else if (event.target == australiaModal) {
    australiaModal.style.display = "none";
  } else if (event.target == ukModal) {
    ukModal.style.display = "none";
  } else if (event.target == germanyModal) {
    germanyModal.style.display = "none";
  } else if (event.target == franceModal) {
    franceModal.style.display = "none";
  } else if (event.target == italyModal) {
    italyModal.style.display = "none";
  } else if (event.target == egyptModal) {
    egyptModal.style.display = "none";
  } else if (event.target == iranModal) {
    iranModal.style.display = "none";
  } else if (event.target == southafricaModal) {
    southafricaModal.style.display = "none";
  } else if (event.target == indiaModal) {
    indiaModal.style.display = "none";
  } else {
    antarcticaModal.style.display = "none";
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

// quiz

window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answer   = document.getElementsByClassName('answers')[0],
      rightWrong   = document.getElementsByClassName('right-wrong')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
       allQuestions = {
        'Which area\'s plants look like plants but are not plants?' : ['Australia', 'Antarctica', 'Germany', 1],
        
        'Two countries have the same national flowers. Which two countries are they?' : ['Canada & Russia', 'Egypt & Mexico' , 'USA & UK', 2],
        
        'Which country\'s flower used to grow as a weed in cornfileds? ' : ['Germany', 'Italy', 'Iran', 0],
        
      };
      
  function loadQuestion(curr) {
  // This function loads all the question into the question
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answer.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answer.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answer and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addrightWrong(true);             
      } else {
        addrightWrong(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Well Done';
        answer.innerHTML = '';
      }
                              
    };
  }
  
  function addrightWrong(input) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  
    var createDiv = document.createElement('div'),
        txt = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (input) {
      
      createDiv.className += 'correct';
      rightWrong.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      rightWrong.appendChild(createDiv);
    }
  }
  
  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);
  
};