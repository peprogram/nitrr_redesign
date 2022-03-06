window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("fix").style.padding = "0";
    document.getElementById("head").style.position = "fixed";
    document.getElementById("main").style.marginTop = "30vh";
    document.getElementById("head").style.transition = "height 2s";
    // document.getElementById("main").style.transition = "all 0.3s linear";
    if (screen.width<=560) {
      document.getElementById("hb").style.display = "none";
      document.getElementById("fix").style.marginBottom = "-10px";
    }
  } else {
    document.getElementById("head").style.position = "static";
    document.getElementById("fix").style.padding = "10px 0";
    document.getElementById("fix").style.marginBottom = "0px";
    document.getElementById("main").style.marginTop = "0px";
    document.getElementById("head").style.transition = "none";
    // document.getElementById("main").style.transition = "none";
    document.getElementById("hb").style.display = "block";
  }
}

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
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

function drop() {
  var x = document.getElementById("menu");
  if (x.className.indexOf("show") == -1) { 
    x.className += " show";
    x.style.display="block";
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

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("now");
    } else {
      reveals[i].classList.remove("now");
    }
  }
}
window.addEventListener("scroll", reveal);

mybutton = document.getElementById("goUp");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}