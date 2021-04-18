// Use Momnet.js to format and display the current date and assign to the selected variable
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").append(currentDay);

var current = new Date().getHours();

//set up functions to reflect color code comparing to actual time as past (gray), present(green), or future(orange)
function eventStatus() {
  if (current > 8) {
    $("#hr8a").addClass("past");
  } else if (current >= 8 && current < 9) {
    $("#hr8a").addClass("present");
  } else if (current < 8) {
    $("#hr8a").addClass("future");
  }
    
  if (current > 9) {
    $("#hr9a").addClass("past");
  } else if (current >= 9 && current < 10) {
    $("#hr9a").addClass("present");
  } else if (current < 9) {
    $("#hr9a").addClass("future");
  }

  if (current > 10) {
    $("#hr10a").addClass("past");
  } else if (current >= 10 && current < 11) {
    $("#hr10a").addClass("present");
  } else if (current < 10) {
    $("#hr10a").addClass("future");
  }

  if (current > 11) {
    $("#hr11a").addClass("past");
  } else if (current >= 11 && current < 12) {
    $("#hr11a").addClass("present");
  } else if (current < 11) {
    $("#hr11a").addClass("future");
  }

  if (current > 12) {
    $("#hr12p").addClass("past");
  } else if (current >= 12 && current < 13) {
    $("#hr12p").addClass("present");
  } else if (current < 12) {
    $("#hr12p").addClass("future");
  }

  if (current > 13) {
    $("#hr1p").addClass("past");
  } else if (current >= 13 && current < 14) {
    $("#hr1p").addClass("present");
  } else if (current < 13) {
    $("#hr1p").addClass("future");
  }

  if (current > 14) {
    $("#hr2p").addClass("past");
  } else if (current >= 14 && current < 15) {
    $("#hr2p").addClass("present");
  } else if (current < 14) {
    $("#hr2p").addClass("future");
  }

  if (current > 15) {
    $("#hr3p").addClass("past");
  } else if (current >= 15 && current < 16) {
    $("#hr3p").addClass("present");
  } else if (current < 15) {
    $("#hr3p").addClass("future");
  }

  if (current > 16) {
    $("#hr4p").addClass("past");
  } else if (current >= 16 && current < 17) {
    $("#hr4p").addClass("present");
  } else if (current < 16) {
    $("#hr4p").addClass("future");
  }

  if (current > 17) {
    $("#hr5p").addClass("past");
  } else if (current >= 17 && current < 18) {
    $("#hr5p").addClass("present");
  } else if (current < 17) {
    $("#hr5p").addClass("future");
  }

  if (current > 18) {
    $("#hr6p").addClass("past");
  } else if (current >= 18 && current < 19) {
    $("#hr6p").addClass("present");
  } else if (current < 18) {
    $("#hr6p").addClass("future");
  }
}

window.onload = function() {
    eventStatus();
    eventRecord();
}

//set up function to save input text in time block to local storage and display the saved text
function eventRecord() {
    var textInput = document.querySelector(".text");
    var textSaved = document.querySelector(".text");
    var saveBtn = document.querySelector(".saveBtn");

    saveBtn.addEventListener("click", textRecord);
    textSaved.textContent = localStorage.getItem(".text");
    textInput.value = localStorage.getItem(".text");

    function textRecord() {
        localStorage.setItem(".text", textInput.value);
        textSaved.textContent = textInput.value;
    }
}