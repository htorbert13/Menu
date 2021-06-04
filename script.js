var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");

var pages = [
  {
    name: "Home",
    content: "HOME"
  },
  {
    name: "About",
    content: "About Hope"
  },
  {
    name: "Interact",
    content: "none"
  }
];

for (var i = 0; i < pages.length; i++) {
  var button = document.createElement("button");
  button.innerHTML = pages[i].name;
  nav.appendChild(button);
  createPage(pages[i]);
}

function createPage(pg) {
  var button = document.createElement("button");
  button.addEventListener("click", function () {
    contentWrite(pg.content, pg.name);
  });
  button.innerHTML = pg.name;
  nav.appendChild(button);
}

function contentWrite(wd, pg) {
  if (pg !== "Interact") {
    display.innerHTML = wd;
  } else {
    display.innerHTML = "Increase Counter";
  }
}

function interactPage() {
  var header = document.createElement("h3");
  header.innerHTML = "Increase Counter";
  display.appendChild(header);
}
contentWrite(pages[0].content, "Home");