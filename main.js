function rcparse() {
  var hex = document.getElementById("rc4").value;
  if (hex == "") {
    var r = document.getElementById("rc1").value;
    var g = document.getElementById("rc2").value;
    var b = document.getElementById("rc3").value;
  } else {
    var r = parseInt(hex.substr(1,2),16);
    var g = parseInt(hex.substr(3,2),16);
    var b = parseInt(hex.substr(5,2),16);
  }
  
  var c = rgbtocmyk(r,g,b)[0];
  var m = rgbtocmyk(r,g,b)[1];
  var y = rgbtocmyk(r,g,b)[2];
  var k = rgbtocmyk(r,g,b)[3];
  document.getElementById("rc5").innerHTML = c;
  document.getElementById("rc6").innerHTML = m;
  document.getElementById("rc7").innerHTML = y;
  document.getElementById("rc8").innerHTML = k;
  document.getElementById("output1").style.display = "inline-block";
  document.getElementById("output2").style.display = "inline-block";
}

function rgbtocmyk(r,g,b) {

r = r/255;
g = g/255;
b = b/255;

var k = 1-Math.max(r,g,b);

if (k==1) {
var c = 0;
var m = 0;
var y = 0;
} else {
var c = (1-r-k)/(1-k);
var m = (1-g-k)/(1-k);
var y = (1-b-k)/(1-k);
}

c = Math.max(0,Math.floor(c*100));
m = Math.max(0,Math.floor(m*100));
y = Math.max(0,Math.floor(y*100));
k = Math.max(0,Math.floor(k*100));
return [c,m,y,k];
}
