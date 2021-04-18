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
    eventRecord8a();
    eventRecord9a();
    eventRecord10a();
    eventRecord11a();
    eventRecord12p();
    eventRecord1p();
    eventRecord2p();
    eventRecord3p();
    eventRecord4p();
    eventRecord5p();
    eventRecord6p();
}

//set up function to save input text in time block to local storage and display the saved text
function eventRecord8a() {
    var textInput8a = document.querySelector(".text8a");
    var textSaved8a = document.querySelector(".text8a");
    var saveBtn8a = document.querySelector(".saveBtn8a");

    saveBtn8a.addEventListener("click", textRecord8a);
    textSaved8a.textContent = localStorage.getItem(".text8a");
    textInput8a.value = localStorage.getItem(".text8a");

    function textRecord8a() {
        localStorage.setItem(".text8a", textInput8a.value);
        textSaved8a.textContent = textInput8a.value;
    }
}

function eventRecord9a() {
  var textInput9a = document.querySelector(".text9a");
  var textSaved9a = document.querySelector(".text9a");
  var saveBtn9a = document.querySelector(".saveBtn9a");

  saveBtn9a.addEventListener("click", textRecord9a);
  textSaved9a.textContent = localStorage.getItem(".text9a");
  textInput9a.value = localStorage.getItem(".text9a");

  function textRecord9a() {
      localStorage.setItem(".text9a", textInput9a.value);
      textSaved9a.textContent = textInput9a.value;
  }
}

function eventRecord10a() {
  var textInput10a = document.querySelector(".text10a");
  var textSaved10a = document.querySelector(".text10a");
  var saveBtn10a = document.querySelector(".saveBtn10a");

  saveBtn10a.addEventListener("click", textRecord10a);
  textSaved10a.textContent = localStorage.getItem(".text10a");
  textInput10a.value = localStorage.getItem(".text10a");

  function textRecord10a() {
      localStorage.setItem(".text10a", textInput10a.value);
      textSaved10a.textContent = textInput10a.value;
  }
}

function eventRecord11a() {
  var textInput11a = document.querySelector(".text11a");
  var textSaved11a = document.querySelector(".text11a");
  var saveBtn11a = document.querySelector(".saveBtn11a");

  saveBtn11a.addEventListener("click", textRecord11a);
  textSaved11a.textContent = localStorage.getItem(".text11a");
  textInput11a.value = localStorage.getItem(".text11a");

  function textRecord11a() {
      localStorage.setItem(".text11a", textInput11a.value);
      textSaved11a.textContent = textInput11a.value;
  }
}

function eventRecord12p() {
  var textInput12p = document.querySelector(".text12p");
  var textSaved12p = document.querySelector(".text12p");
  var saveBtn12p = document.querySelector(".saveBtn12p");

  saveBtn12p.addEventListener("click", textRecord12p);
  textSaved12p.textContent = localStorage.getItem(".text12p");
  textInput12p.value = localStorage.getItem(".text12p");

  function textRecord12p() {
      localStorage.setItem(".text12p", textInput12p.value);
      textSaved12p.textContent = textInput12p.value;
  }
}

function eventRecord1p() {
  var textInput1p = document.querySelector(".text1p");
  var textSaved1p = document.querySelector(".text1p");
  var saveBtn1p = document.querySelector(".saveBtn1p");

  saveBtn1p.addEventListener("click", textRecord1p);
  textSaved1p.textContent = localStorage.getItem(".text1p");
  textInput1p.value = localStorage.getItem(".text1p");

  function textRecord1p() {
      localStorage.setItem(".text1p", textInput1p.value);
      textSaved1p.textContent = textInput1p.value;
  }
}

function eventRecord2p() {
  var textInput2p = document.querySelector(".text2p");
  var textSaved2p = document.querySelector(".text2p");
  var saveBtn2p = document.querySelector(".saveBtn2p");

  saveBtn2p.addEventListener("click", textRecord2p);
  textSaved2p.textContent = localStorage.getItem(".text2p");
  textInput2p.value = localStorage.getItem(".text2p");

  function textRecord2p() {
      localStorage.setItem(".text2p", textInput2p.value);
      textSaved2p.textContent = textInput2p.value;
  }
}

function eventRecord3p() {
  var textInput3p = document.querySelector(".text3p");
  var textSaved3p = document.querySelector(".text3p");
  var saveBtn3p = document.querySelector(".saveBtn3p");

  saveBtn3p.addEventListener("click", textRecord3p);
  textSaved3p.textContent = localStorage.getItem(".text3p");
  textInput3p.value = localStorage.getItem(".text3p");

  function textRecord3p() {
      localStorage.setItem(".text3p", textInput3p.value);
      textSaved3p.textContent = textInput3p.value;
  }
}

function eventRecord4p() {
  var textInput4p = document.querySelector(".text4p");
  var textSaved4p = document.querySelector(".text4p");
  var saveBtn4p = document.querySelector(".saveBtn4p");

  saveBtn4p.addEventListener("click", textRecord4p);
  textSaved4p.textContent = localStorage.getItem(".text4p");
  textInput4p.value = localStorage.getItem(".text4p");

  function textRecord4p() {
      localStorage.setItem(".text4p", textInput4p.value);
      textSaved4p.textContent = textInput4p.value;
  }
}

function eventRecord5p() {
  var textInput5p = document.querySelector(".text5p");
  var textSaved5p = document.querySelector(".text5p");
  var saveBtn5p = document.querySelector(".saveBtn5p");

  saveBtn5p.addEventListener("click", textRecord5p);
  textSaved5p.textContent = localStorage.getItem(".text5p");
  textInput5p.value = localStorage.getItem(".text5p");

  function textRecord5p() {
      localStorage.setItem(".text5p", textInput5p.value);
      textSaved5p.textContent = textInput5p.value;
  }
}

function eventRecord6p() {
  var textInput6p = document.querySelector(".text6p");
  var textSaved6p = document.querySelector(".text6p");
  var saveBtn6p = document.querySelector(".saveBtn6p");

  saveBtn6p.addEventListener("click", textRecord6p);
  textSaved6p.textContent = localStorage.getItem(".text6p");
  textInput6p.value = localStorage.getItem(".text6p");

  function textRecord6p() {
      localStorage.setItem(".text6p", textInput6p.value);
      textSaved6p.textContent = textInput6p.value;
  }
}
