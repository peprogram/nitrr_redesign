function hamburger() {
  var x = document.getElementById("smallbar");
  if (x.className === "bar") {
    x.className += " responsive";
  } else {
    x.className = "bar";
  }
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function drop() {
  // var y = document.getElementById("clicky");
  var x = document.getElementById("menu");
  if (x.className.indexOf("show") == -1) { 
    x.className += " show";
    x.style.display="block";
    // y.classList.toggle("active");
    // x.style.after.content="\02796";
  } else {
    x.className = x.className.replace(" show", "");
    x.style.display="none";
  }
}

function openTab(evt,tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " active";
  }