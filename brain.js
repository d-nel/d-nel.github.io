var win = window;
var nav;
var navbutton;
var show = false

var stillMe;
var dynamic;

win.onload = function() {
  nav = document.getElementById('nav');
  navbutton = document.getElementById('navbutton');

  stillMe = document.getElementById('static');
  dynamic = document.getElementById('dynamic');
  
  checkNavDisplay()

  navbutton.onclick = function() {
    // toggle nav display
    if (nav.style.display == "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }

    show = !show
  };

  win.onresize = function() {
    checkNavDisplay()
  };

  win.onscroll = function() {
    stillMe.style.display = "none";
    dynamic.style.display = "block";
  };

  setInterval(function() {
    stillMe.style.display = "block";
    dynamic.style.display = "none";
  }, 500);
}

function checkNavDisplay() {
  var w = win.innerWidth;
  if (w <= 800) {
    if (show) {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }

  } else {
    nav.style.display = "block";
    show = false
  }
}
