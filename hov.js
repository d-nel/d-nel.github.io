var win = window;
var stillMe;
var dynamic;

win.onload = function() {
  stillMe = document.getElementById('static');
  dynamic = document.getElementById('dynamic');
  hov = document.getElementById('hov');

  hov.onmouseover = function() {
    stillMe.style.display = "none";
    dynamic.style.display = "block";
  };

  hov.onmouseout = function() {
    stillMe.style.display = "block";
    dynamic.style.display = "none";
  };
}
