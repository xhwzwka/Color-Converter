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
    document.getElementById("convert").style.display = "none";
    
  } else if (source=="Hex") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "inline-block";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
    
  } else if (source=="RGB") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "inline-block";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
    
  } else if (source=="CMYK") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "inline-block";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
    
  } else if (source=="HSV") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "inline-block";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
    
  } else if (source=="HSL") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "inline-block";
    document.getElementById("convert").style.display = "inline-block";
  
  }
}

function rcparse() {
  var source = document.getElementById("sourcecol").value.toLowerCase();
  var dest = document.getElementById("destcol").value.toLowerCase();

  var r_rgb = document.getElementById("rc1").value;
  var g_rgb = document.getElementById("rc2").value;
  var b_rgb = document.getElementById("rc3").value;
  var hex = document.getElementById("rc4").value;
  var c_cmyk = document.getElementById("rc5").value;
  var m_cmyk = document.getElementById("rc6").value;
  var y_cmyk = document.getElementById("rc7").value;
  var k_cmyk = document.getElementById("rc8").value;
  var h_hsv = document.getElementById("rc9").value;
  var s_hsv = document.getElementById("rc10").value;
  var v_hsv = document.getElementById("rc11").value;
  var h_hsl = document.getElementById("rc12").value;
  var s_hsl = document.getElementById("rc13").value;
  var l_hsl = document.getElementById("rc14").value;

  if (source=="rgb") {
    var output = window["rgbto"+dest](r_rgb,g_rgb,b_rgb);
  } else if (source=="hex") {
    var out = hextorgb(hex);
    if (dest != "rgb") {var output = window["rgbto"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="cmyk") {
    var out = cmyktorgb(c_cmyk,m_cmyk,y_cmyk,k_cmyk);
    if (dest != "rgb") {var output = window["rgbto"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="hsv") {
    var out = hsvtorgb(h_hsv,s_hsv,v_hsv);
    if (dest != "rgb") {var output = window["rgbto"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="hsl") {
    var out = hsltorgb(h_hsl,s_hsl,l_hsl);
    if (dest != "rgb") {var output = window["rgbto"+dest](out[0],out[1],out[2]);} else {var output = out;}
  }
  
  document.getElementById("output1").style.display = "inline-block";
  document.getElementById("output2").style.display = "inline-block";
  
  if (dest=="rgb") {
    document.getElementById("output1").innerHTML = "R "+output[0]+", G "+output[1]+", B "+output[2];
    document.getElementById("output2").innerHTML = "Output is given as integers from 0 to 255.";
  } else if (dest=="hex") {
    document.getElementById("output1").innerHTML = "Hex "+output;
    document.getElementById("output2").innerHTML = "Output is given as a hex code from #000000 to #ffffff.";
  } else if (dest=="cmyk") {
    document.getElementById("output1").innerHTML = "C "+output[0]+", M "+output[1]+", Y "+output[2]+", K "+output[3];
    document.getElementById("output2").innerHTML = "Output is given as integers from 0 to 100.";
  } else if (dest=="hsv") {
    document.getElementById("output1").innerHTML = "H "+output[0]+", S "+output[1]+", V "+output[2];
    document.getElementById("output2").innerHTML = "Output is given as integers from 0 to 360 for H, and 0 to 100 for S and L.";
  } else if (dest=="hsl") {
    document.getElementById("output1").innerHTML = "H "+output[0]+", S "+output[1]+", L "+output[2];
    document.getElementById("output2").innerHTML = "Output is given as integers from 0 to 360 for H, and 0 to 100 for S and L.";
  }
}

setInterval(checkmodels);
