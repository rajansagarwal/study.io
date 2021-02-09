

var elements = [];
window.onload = function() {
    if (JSON.parse(localStorage.getItem("elements")) != null) elements = JSON.parse(localStorage.getItem("elements"));
    console.log(elements);
    display();
};

function addElement() {
    if (document.querySelector(".addTxt").value.trim() != "") {
        elements.push(document.querySelector(".addTxt").value.trim());
        if (localStorage.getItem("elements") == null) {
            localStorage.setItem("elements", JSON.stringify(elements));
        } else {
            localStorage.setItem("elements", JSON.stringify(elements));
        }
        display();
    }
}

function display() {
    document.querySelector(".list").innerHTML = "";
    for (var i = 0; i < elements.length; i++) document.querySelector(".list").innerHTML += "<center><div class='element'>" + elements[i] + "<img class='tick' src = 'https://i2.wp.com/entman.com/wp-content/uploads/2016/09/checkmark.png?fit=256%2C256&ssl=1' onclick='strike(" + i + ")'><img class='dustbin' src = 'https://img.icons8.com/bubbles/2x/trash.png' onclick='del(" + i + ")'></div></center><br>";
}

function del(index) {
    elements.splice(index, 1);
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}

function strike(index) {
    if (elements[index].includes("<strike>")) {
        elements[index] = elements[index].replace("<strike>", "");
    } else {
        elements[index] = "<strike>" + elements[index] + "</strike>";
    }
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}

function strike(index) {
    if (elements[index].includes("<strike>")) {
        elements[index] = elements[index].replace("<strike>", "");
    } else {
        elements[index] = "<strike>" + elements[index] + "</strike>";
    }
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}

const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");

focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("focusTime", focusTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () => {
  startBtn.style.transform = "scale(1)";
  clearTimeout(initial);
  setProgress(0);
  mindiv.textContent = 0;
  secdiv.textContent = 0;
});

pauseBtn.addEventListener("click", () => {
  if (paused === undefined) {
    return;
  }
  if (paused) {
    paused = false;
    initial = setTimeout("decremenT()", 60);
    pauseBtn.textContent = "Pause";
    pauseBtn.classList.remove("Resume");
  } else {
    clearTimeout(initial);
    pauseBtn.textContent = "Resume";
    pauseBtn.classList.add("Resume");
    paused = true;
  }
}); 

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

const el = document.querySelector(".clock");
const bell = document.querySelector("audio");

const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");

const startBtn = document.querySelector(".start");
localStorage.setItem("btn", "focus");

let initial, totalsecs, perc, paused, mins, seconds;

startBtn.addEventListener("click", () => {
  let btn = localStorage.getItem("btn");

  if (btn === "focus") {
    mins = +localStorage.getItem("focusTime") || 1;
  } else {
    mins = +localStorage.getItem("breakTime") || 1;
  }

  seconds = mins * 60;
  totalsecs = mins * 60;
  setTimeout(decremenT(), 60);
  paused = false;
});

function decremenT() {
  mindiv.textContent = Math.floor(seconds / 60);
  secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if (circle.classList.contains("danger")) {
    circle.classList.remove("danger");
  }

  if (seconds > 0) {
    perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
    setProgress(perc);
    seconds--;
    initial = window.setTimeout("decremenT()", 1000);
    if (seconds < 10) {
      circle.classList.add("danger");
    }
  } else {
    mins = 0;
    seconds = 0;
    bell.play();
    let btn = localStorage.getItem("btn");

    if (btn === "focus") {
      startBtn.textContent = "Start Break";
      startBtn.classList.add("break");
      localStorage.setItem("btn", "break");
    } else {
      startBtn.classList.remove("break");
      startBtn.textContent = "start focus";
      localStorage.setItem("btn", "focus");
    }
    startBtn.style.transform = "scale(1)";
  }
}

var elements = [];
window.onload = function() {
    if (JSON.parse(localStorage.getItem("elements")) != null) elements = JSON.parse(localStorage.getItem("elements"));
    console.log(elements);
    display();
};

function addElement() {
    if (document.querySelector(".addTxt").value.trim() != "") {
        elements.push(document.querySelector(".addTxt").value.trim());
        if (localStorage.getItem("elements") == null) {
            localStorage.setItem("elements", JSON.stringify(elements));
        } else {
            localStorage.setItem("elements", JSON.stringify(elements));
        }
        display();
    }
}

function display() {
    document.querySelector(".list").innerHTML = "";
    for (var i = 0; i < elements.length; i++) document.querySelector(".list").innerHTML += "<center><div class='element'>" + elements[i] + "<img class='tick' src = 'https://i2.wp.com/entman.com/wp-content/uploads/2016/09/checkmark.png?fit=256%2C256&ssl=1' onclick='strike(" + i + ")'><img class='dustbin' src = 'https://img.icons8.com/bubbles/2x/trash.png' onclick='del(" + i + ")'></div></center><br>";
}

function del(index) {
    elements.splice(index, 1);
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}

function strike(index) {
    if (elements[index].includes("<strike>")) {
        elements[index] = elements[index].replace("<strike>", "");
    } else {
        elements[index] = "<strike>" + elements[index] + "</strike>";
    }
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}

function strike(index) {
    if (elements[index].includes("<strike>")) {
        elements[index] = elements[index].replace("<strike>", "");
    } else {
        elements[index] = "<strike>" + elements[index] + "</strike>";
    }
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}
var sounds = new Array();
            sounds[0]="/music/jazz/jazz1.mp3";
            sounds[1]="/music/jazz/jazz2.mp3";
            sounds[2]="/music/jazz/jazz3.mp3";
            sounds[3]="/music/jazz/jazz4.mp3";
            sounds[4]="/music/jazz/jazz5.mp3";
        function getRandomSounds() {
            var randomNum = Math.floor(Math.random() * sounds.length);
            document.getElementById("chill").src = sounds[randomNum];
        }
        document.getElementById("chill").addEventListener("ended", getRandomSounds);
        getRandomSounds();

	var sounds = new Array();
            sounds[0]="/music/relaxation/relaxation1.mp3";
            sounds[1]="/music/relaxation/relaxation2.mp3";
            sounds[2]="/music/relaxation/relaxation3.mp3";
            sounds[3]="/music/relaxation/relaxation4.mp3";
            sounds[4]="/music/relaxation/relaxation5.mp3";
        function getRandomSounds() {
            var randomNum = Math.floor(Math.random() * sounds.length);
            document.getElementById("rock").src = sounds[randomNum];
        }
        document.getElementById("rock").addEventListener("ended", getRandomSounds);
        getRandomSounds();

	var sounds = new Array();
            sounds[0]="/music/jazz/jazz1.mp3";
            sounds[1]="/music/jazz/jazz2.mp3";
            sounds[2]="/music/jazz/jazz3.mp3";
            sounds[3]="/music/jazz/jazz4.mp3";
            sounds[4]="/music/jazz/jazz5.mp3";
        function getRandomSounds() {
            var randomNum = Math.floor(Math.random() * sounds.length);
            document.getElementById("jazz").src = sounds[randomNum];
        }
        document.getElementById("jazz").addEventListener("ended", getRandomSounds);
        getRandomSounds();


	var sounds = new Array();
            sounds[0]="/music/jazz/jazz1.mp3";
            sounds[1]="/music/jazz/jazz2.mp3";
            sounds[2]="/music/jazz/jazz3.mp3";
            sounds[3]="/music/jazz/jazz4.mp3";
            sounds[4]="/music/jazz/jazz5.mp3";
        function getRandomSounds() {
            var randomNum = Math.floor(Math.random() * sounds.length);
            document.getElementById("jazz").src = sounds[randomNum];
        }
        document.getElementById("jazz").addEventListener("ended", getRandomSounds);
        getRandomSounds();


	var sounds = new Array();
            sounds[0]="/music/jazz/jazz1.mp3";
            sounds[1]="/music/jazz/jazz2.mp3";
            sounds[2]="/music/jazz/jazz3.mp3";
            sounds[3]="/music/jazz/jazz4.mp3";
            sounds[4]="/music/jazz/jazz5.mp3";
        function getRandomSounds() {
            var randomNum = Math.floor(Math.random() * sounds.length);
            document.getElementById("jazz").src = sounds[randomNum];
        }
        document.getElementById("jazz").addEventListener("ended", getRandomSounds);
        getRandomSounds();


	var sounds = new Array();
            sounds[0]="/music/jazz/jazz1.mp3";
            sounds[1]="/music/jazz/jazz2.mp3";
            sounds[2]="/music/jazz/jazz3.mp3";
            sounds[3]="/music/jazz/jazz4.mp3";
            sounds[4]="/music/jazz/jazz5.mp3";
        function getRandomSounds() {
            var randomNum = Math.floor(Math.random() * sounds.length);
            document.getElementById("jazz").src = sounds[randomNum];
        }
        document.getElementById("jazz").addEventListener("ended", getRandomSounds);
        getRandomSounds();


const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");

focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("focusTime", focusTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () => {
  startBtn.style.transform = "scale(1)";
  clearTimeout(initial);
  setProgress(0);
  mindiv.textContent = 0;
  secdiv.textContent = 0;
});


// if you are reading this... greetings...
// this is my attempt to break the github algorithm
