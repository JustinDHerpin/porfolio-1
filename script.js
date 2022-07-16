//  JS For Switching Themes

let themeDots = document.getElementsByClassName("theme-dot");

//  Maybe try to write a forEach loop here instead?
for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("theme-dot clicked: ", mode);
    setTheme(mode);
  });
}

// First attempt at forEach loop to add event listeners
// themeDots.foreach(
//   addEventListener("click", function () {
//     let mode = this.dataset.mode;
//     console.log("theme-dot clicked: ", mode);
//     setTheme(mode);
//   })
// );

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "dark.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }
}

function setMode(mode) {
  document.get;
}
