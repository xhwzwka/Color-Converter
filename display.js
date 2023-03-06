var model;
function checkmodels() {
  var source = document.getElementById("sourcecol").value.replace(/\x20/g,"");
  var dest = document.getElementById("destcol").value.replace(/\x20/g,"");
  
  if (source == dest) {
    document.getElementById("none").style.display = "inline-block";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("xyz").style.display = "none";
    document.getElementById("yxy").style.display = "none";
    document.getElementById("cielab").style.display = "none";
    document.getElementById("hunterlab").style.display = "none";
    document.getElementById("convert").style.display = "none";
    
  } else if (source=="Hex") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "inline-block";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("xyz").style.display = "none";
    document.getElementById("yxy").style.display = "none";
    document.getElementById("cielab").style.display = "none";
    document.getElementById("hunterlab").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
    
  } else if (source=="RGB") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "inline-block";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("xyz").style.display = "none";
    document.getElementById("yxy").style.display = "none";
    document.getElementById("cielab").style.display = "none";
    document.getElementById("hunterlab").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
    
  } else if (source=="CMYK") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "inline-block";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("xyz").style.display = "none";
    document.getElementById("yxy").style.display = "none";
    document.getElementById("cielab").style.display = "none";
    document.getElementById("hunterlab").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
    
  } else if (source=="HSV") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "inline-block";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("xyz").style.display = "none";
    document.getElementById("yxy").style.display = "none";
    document.getElementById("cielab").style.display = "none";
    document.getElementById("hunterlab").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
    
  } else if (source=="HSL") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "inline-block";
    document.getElementById("xyz").style.display = "none";
    document.getElementById("yxy").style.display = "none";
    document.getElementById("cielab").style.display = "none";
    document.getElementById("hunterlab").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
  
    
  } else if (source=="XYZ") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("xyz").style.display = "inline-block";
    document.getElementById("yxy").style.display = "none";
    document.getElementById("cielab").style.display = "none";
    document.getElementById("hunterlab").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
  
  } else if (source=="Yxy") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("xyz").style.display = "none";
    document.getElementById("yxy").style.display = "inline-block";
    document.getElementById("cielab").style.display = "none";
    document.getElementById("hunterlab").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
  
  } else if (source=="CIELab") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("xyz").style.display = "none";
    document.getElementById("yxy").style.display = "none";
    document.getElementById("cielab").style.display = "inline-block";
    document.getElementById("hunterlab").style.display = "none";
    document.getElementById("convert").style.display = "inline-block";
  
  } else if (source=="HunterLab") {
    document.getElementById("none").style.display = "none";
    document.getElementById("hex").style.display = "none";
    document.getElementById("rgb").style.display = "none";
    document.getElementById("cmyk").style.display = "none";
    document.getElementById("hsv").style.display = "none";
    document.getElementById("hsl").style.display = "none";
    document.getElementById("xyz").style.display = "none";
    document.getElementById("yxy").style.display = "none";
    document.getElementById("cielab").style.display = "none";
    document.getElementById("hunterlab").style.display = "inline-block";
    document.getElementById("convert").style.display = "inline-block";
  
  }

}

var base = {"hex":"rgb","rgb":"rgb","cmyk":"rgb","hsv":"rgb","hsl":"rgb","xyz":"xyz","yxy":"xyz","cielab":"xyz","hunterlab":"xyz"};

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
  var x_xyz = document.getElementById("rc15").value;
  var y_xyz = document.getElementById("rc16").value;
  var z_xyz = document.getElementById("rc17").value;
  var y_yxy = document.getElementById("rc18").value;
  var x2_yxy = document.getElementById("rc19").value;
  var y2_yxy = document.getElementById("rc20").value;
  var l_cielab = document.getElementById("rc21").value;
  var a_cielab = document.getElementById("rc22").value;
  var b_cielab = document.getElementById("rc23").value;
  var l_hunterlab = document.getElementById("rc24").value;
  var a_hunterlab = document.getElementById("rc25").value;
  var b_hunterlab = document.getElementById("rc26").value;
  
  if (source=="rgb") {
    var out2 = rgbtorgb(r_rgb,g_rgb,b_rgb);
    var out = window["rgbto"+base[dest]](out2[0],out2[1],out2[2]);
    if (dest != base[dest]) {var output = window[base[dest]+"to"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="hex") {
    var out2 = hextorgb(hex);
    var out = window["rgbto"+base[dest]](out2[0],out2[1],out2[2]);
    if (dest != base[dest]) {var output = window[base[dest]+"to"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="cmyk") {
    var out2 = cmyktorgb(c_cmyk,m_cmyk,y_cmyk,k_cmyk);
    var out = window["rgbto"+base[dest]](out2[0],out2[1],out2[2]);
    if (dest != base[dest]) {var output = window[base[dest]+"to"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="hsv") {
    var out2 = hsvtorgb(h_hsv,s_hsv,v_hsv);
    var out = window["rgbto"+base[dest]](out2[0],out2[1],out2[2]);
    if (dest != base[dest]) {var output = window[base[dest]+"to"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="hsl") {
    var out2 = hsltorgb(h_hsl,s_hsl,l_hsl);
    var out = window["rgbto"+base[dest]](out2[0],out2[1],out2[2]);
    if (dest != base[dest]) {var output = window[base[dest]+"to"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="xyz") {
    var out2 = xyztoxyz(x_xyz,y_xyz,z_xyz);
    var out = window["xyzto"+base[dest]](out2[0],out2[1],out2[2]);
    if (dest != base[dest]) {var output = window[base[dest]+"to"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="yxy") {
    var out2 = yxytoxyz(y_yxy,x2_yxy,y2_yxy);
    var out = window["xyzto"+base[dest]](out2[0],out2[1],out2[2]);
    if (dest != base[dest]) {var output = window[base[dest]+"to"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="cielab") {
    var out2 = cielabtoxyz(l_cielab,a_cielab,b_cielab);
    var out = window["xyzto"+base[dest]](out2[0],out2[1],out2[2]);
    if (dest != base[dest]) {var output = window[base[dest]+"to"+dest](out[0],out[1],out[2]);} else {var output = out;}
  } else if (source=="hunterlab") {
    var out2 = hunterlabtoxyz(l_hunterlab,a_hunterlab,b_hunterlab);
    var out = window["xyzto"+base[dest]](out2[0],out2[1],out2[2]);
    if (dest != base[dest]) {var output = window[base[dest]+"to"+dest](out[0],out[1],out[2]);} else {var output = out;}
  }

  
  document.getElementById("output1").style.display = "inline-block";
  document.getElementById("output2").style.display = "inline-block";
  
  if (dest=="rgb") {
    document.getElementById("output1").innerHTML = "R "+output[0]+", G "+output[1]+", B "+output[2];
    document.getElementById("output2").innerHTML = "Output is given as integers from 0 to 255.";
  } else if (dest=="hex") {
    document.getElementById("output1").innerHTML = "Hex "+output[0];
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
  } else if (dest=="xyz") {
    document.getElementById("output1").innerHTML = "X "+output[0]+", Y "+output[1]+", Z "+output[2];
    document.getElementById("output2").innerHTML = "Output is given as real numbers rounded to 3 decimal places.";
  } else if (dest=="yxy") {
    document.getElementById("output1").innerHTML = "Y "+output[0]+", x "+output[1]+", y "+output[2];
    document.getElementById("output2").innerHTML = "Output is given as real numbers rounded to 3 decimal places.";
  } else if (dest=="cielab") {
    document.getElementById("output1").innerHTML = "L "+output[0]+", a "+output[1]+", b "+output[2];
    document.getElementById("output2").innerHTML = "Output is given as real numbers rounded to 3 decimal places.";
  } else if (dest=="hunterlab") {
    document.getElementById("output1").innerHTML = "L "+output[0]+", a "+output[1]+", b "+output[2];
    document.getElementById("output2").innerHTML = "Output is given as real numbers rounded to 3 decimal places.";
  }
}

setInterval(checkmodels,50);
