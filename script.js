function updateTime() {
    var Time = new Date().toLocaleString();
    var timeText = 
document.querySelector("#timeelement")
    timeText.innerHTML = Time;
}

setInterval(updateTime, 1000);

// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var welcomeScreen = document.querySelector("#welcome")

function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element) {
    element.style.display = "block"
}

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});







var crapScreen = document.querySelector("#crap")

var retep = document.querySelector("#crapselected")

var shortcutcrap = document.querySelector("#crapopen")

var crapScreenClose = document.querySelector("#crapclose")


shortcutcrap.addEventListener("click", function() {
  openWindow(crapScreen);
});

crapScreenClose.addEventListener("click", function() {
  closeWindow(crapScreen);
});









var recipesScreen = document.querySelector("#recipes")

var shortcutrecipes = document.querySelector("#recipesopen")

var recipesScreenClose = document.querySelector("#recipesclose")


shortcutrecipes.addEventListener("click", function() {
  openWindow(recipesScreen);
});

recipesScreenClose.addEventListener("click", function() {
  closeWindow(recipesScreen);
});








var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected")
  selectedIcon = element
  element.classList.add("shown")
}

shortcutcrap.addEventListener("mouseover", function() {
  handleIconTap(shortcutcrap);
});
shortcutcrap.addEventListener("mouseout", function() {
  deselectIcon(shortcutcrap);
});

shortcutrecipes.addEventListener("mouseover", function() {
  handleIconTap(shortcutrecipes);
});
shortcutrecipes.addEventListener("mouseout", function() {
  deselectIcon(shortcutrecipes);
});


function deselectIcon(element) {
  element.classList.remove("selected")
  selectedIcon = undefined
}


function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element);
  } else {
    selectIcon(element);
  }
}

dragElement(document.getElementById("crap"));

dragElement(document.getElementById("recipes"));

var bar = document.querySelector("#bar")

var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
  handleWindowTap(welcomeScreen)
)
}

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
  handleWindowTap(crapScreen)
)
}

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
  handleWindowTap(recipeScreen)
)
}

function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex++;
}

function openWindow(element) {
  element.style.display = "block"
  biggestIndex++;
  element.style.zIndex = biggestIndex;
}

function initializeWindow(elementName) {
  var screen = document.querySelector("#" +elementName)
  addWindowTapHandling(screen)
  makeCloseable(screen)
  dragElement(screen)
}

var wave = document.querySelector("#catwave")
var hi = document.querySelector("#hi")
const sound = new Audio("hi.mp3");

sound.volume = 1.0

function playsound() {
  sound.play()
}

catwave.addEventListener("click", function() {
  openWindow(hi);
  sound.play()
});






