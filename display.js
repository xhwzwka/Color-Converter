var model;
function checkmodels() {
  var source = document.getElementById("sourcecol").value;
  var dest = document.getElementById("destcol").value;
  
  if (source == dest) {
    document.getElementById("none").style.display = "inline-block";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    
  } else if (source=="RGB") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "inline-block";
    document.getElementById("rgb").style.display = "inline-block";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    
  } else if (source=="CMYK") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "inline-block";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "inline-block";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    
  } else if (source=="HSV") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "inline-block";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "inline-block";
    document.getElementById("hsl").style.display = "none";
    
  } else if (source=="HSL") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "inline-block";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "inline-block";
  
  }
}

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
  document.getElementById("output1").style.display = "inline-block";
  document.getElementById("output2").style.display = "inline-block";
  document.getElementById("output1").innerHTML = "C "+c+", M "+m+", Y "+y+", K "+k;
  document.getElementById("output2").innerHTML = "Output is given as integers from 0 to 100.";
}

setInterval(checkmodels);
