function rgbtohex(r,g,b) {

r = +r;
g = +g;
b = +b;

if (r<16) {
  var rh = "0"+r.toString(16);
} else {
  var rh = r.toString(16);
}

if (g<16) {
  var gh = "0"+g.toString(16);
} else {
  var gh = g.toString(16);
}

if (b<16) {
  var bh = "0"+b.toString(16);
} else {
  var bh = b.toString(16);
}

var hex = "#"+rh+gh+bh;
return [hex];
}

function hextorgb(hex) {

var r = hex.substr(1,2);
var g = hex.substr(3,2);
var b = hex.substr(5,2);

r = parseInt(r,16);
g = parseInt(g,16);
b = parseInt(b,16);
return [r,g,b];
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

function cmyktorgb(c,m,y,k) {

c = c/100;
m = m/100;
y = y/100;
k = k/100;

var r = 255*(1-c)*(1-k);
var g = 255*(1-m)*(1-k);
var b = 255*(1-y)*(1-k);

r = Math.max(0,Math.floor(r));
g = Math.max(0,Math.floor(g));
b = Math.max(0,Math.floor(b));
return [r,g,b];
}

function rgbtohsv(r,g,b) {
r = r/255;
g = g/255;
b = b/255;

var max = Math.max(r,g,b);
var min = Math.min(r,g,b);
var diff = max-min;

if (diff==0) {
  var h = 0;
} else if (max==r) {
  var h = 60*((g-b)/diff % 6);
} else if (max==g) {
  var h = 60*((b-r)/diff + 2);
} else if (max==b) {
  var h = 60*((r-g)/diff + 4);
}
if (max==0) {
  var s = 0;
} else {
  var s = diff/max;
}
var v = max;

h = Math.max(0,Math.floor((h+720)%360));
s = Math.max(0,Math.floor(s*100));
v = Math.max(0,Math.floor(v*100));
return [h,s,v];
}

function hsvtorgb(h,s,v) {
s = s/100;
v = v/100;

var val = v*s;
var val2 = val*(1-Math.abs((h/60)%2 - 1));
var diff = v-val;

if ((0<=h && h<60) || h==360) {
  var r = val;
  var g = val2;
  var b = 0;
} else if (60<=h && h<120) {
  var r = val2;
  var g = val;
  var b = 0;
} else if (120<=h && h<180) {
  var r = 0;
  var g = val;
  var b = val2;
} else if (180<=h && h<240) {
  var r = 0;
  var g = val2;
  var b = val;
} else if (240<=h && h<300) {
  var r = val2;
  var g = 0;
  var b = val;
} else if (300<=h && h<360) {
  var r = val;
  var g = 0;
  var b = val2;
}

r = (r+diff)*255;
g = (g+diff)*255;
b = (b+diff)*255;

r = Math.max(0,Math.floor(r));
g = Math.max(0,Math.floor(g));
b = Math.max(0,Math.floor(b));
return [r,g,b];
}

function rgbtohsl(r,g,b) {
r = r/255;
g = g/255;
b = b/255;

var max = Math.max(r,g,b);
var min = Math.min(r,g,b);
var diff = max-min;

if (diff==0) {
  var h = 0;
} else if (max==r) {
  var h = 60*((g-b)/diff % 6);
} else if (max==g) {
  var h = 60*((b-r)/diff + 2);
} else if (max==b) {
  var h = 60*((r-g)/diff + 4);
}

var l = (max+min)/2;

if (diff==0) {
  var s = 0;
} else {
  var s = diff/(1-Math.abs(2*l - 1));
}

h = Math.max(0,Math.floor((h+720)%360));
s = Math.max(0,Math.floor(s*100));
l = Math.max(0,Math.floor(l*100));
return [h,s,l];
}

function hsltorgb(h,s,l) {
s = s/100;
l = l/100;

var val = (1-Math.abs(2*l-1))*s;
var val2 = val*(1-Math.abs((h/60)%2 - 1));
var diff = l - val/2;

if ((0<=h && h<60) || h==360) {
  var r = val;
  var g = val2;
  var b = 0;
} else if (60<=h && h<120) {
  var r = val2;
  var g = val;
  var b = 0;
} else if (120<=h && h<180) {
  var r = 0;
  var g = val;
  var b = val2;
} else if (180<=h && h<240) {
  var r = 0;
  var g = val2;
  var b = val;
} else if (240<=h && h<300) {
  var r = val2;
  var g = 0;
  var b = val;
} else if (300<=h && h<360) {
  var r = val;
  var g = 0;
  var b = val2;
}

r = (r+diff)*255;
g = (g+diff)*255;
b = (b+diff)*255;

r = Math.max(0,Math.floor(r));
g = Math.max(0,Math.floor(g));
b = Math.max(0,Math.floor(b));
return [r,g,b];
}

function rgbtoxyz(r,g,b) {

r = r/255;
g = g/255;
b = b/255;

r = r<=0.04045 ? r/12.92 : ((r+0.055)/1.055)**2.4;
g = g<=0.04045 ? g/12.92 : ((g+0.055)/1.055)**2.4;
b = b<=0.04045 ? b/12.92 : ((b+0.055)/1.055)**2.4;

var x = 0.4124564*r + 0.3575761*g + 0.1804375*b;
var y = 0.2126729*r + 0.7151522*g + 0.072175*b;
var z = 0.0193339*r + 0.119192*g + 0.9503041*b;

x *= 100;
y *= 100;
z *= 100;

x = Math.floor(x*1000)/1000;
y = Math.floor(y*1000)/1000;
z = Math.floor(z*1000)/1000;
return [x,y,z];
}

function xyztorgb(x,y,z) {

x = x/100;
y = y/100;
z = z/100;

var r = 3.2404542*x + -1.5371385*y + -0.4985314*z;
var g = -0.969266*x + 1.8760108*y + 0.041556*z;
var b = 0.0556434*x + -0.2040259*y + 1.0572252*z;

r = r<=0.0031308 ? r*12.92 : 1.055*r**(1/2.4)-0.055;
g = g<=0.0031308 ? g*12.92 : 1.055*g**(1/2.4)-0.055;
b = b<=0.0031308 ? b*12.92 : 1.055*b**(1/2.4)-0.055;

r *= 255;
g *= 255;
b *= 255;

r = Math.min(255,Math.max(0,Math.floor(r)));
g = Math.min(255,Math.max(0,Math.floor(g)));
b = Math.min(255,Math.max(0,Math.floor(b)));
return [r,g,b];
}

function xyztoyxy(x,y,z) {

var x2 = (x+y+z)==0 ? 0 : x/(x+y+z);
var y2 = (x+y+z)==0 ? 0 : y/(x+y+z);

y = Math.floor(y*1000)/1000;
x2 = Math.floor(x2*1000)/1000;
y2 = Math.floor(y2*1000)/1000;
return [y,x2,y2];
}

function yxytoxyz(y,x2,y2) {

var div = y2==0 ? 0 : y/y2;

var x = x2*div;
var z = (1-x2-y2)*div;

x = Math.floor(x*1000)/1000;
y = Math.floor(y*1000)/1000;
z = Math.floor(z*1000)/1000;
return [x,y,z];
}

function xyztocielab(x,y,z) {
x = x/95.047;
y = y/100;
z = z/108.883;

x = x>0.008856 ? x**(1/3) : 7.787*x + 16/116;
y = y>0.008856 ? x**(1/3) : 7.787*y + 16/116;
z = z>0.008856 ? x**(1/3) : 7.787*z + 16/116;

var l = 116*y-16;
var a = 500*(x-y);
var b = 200*(y-z);

l = Math.floor(l*1000)/1000;
a = Math.floor(a*1000)/1000;
b = Math.floor(b*1000)/1000;
return [l,a,b];
}

function cielabtoxyz(l,a,b) {
var y = (l+16)/116;
var x = a/500+y;
var z = y-b/200;

x = x**3>0.008856 ? x**3 : (x-16/116)/7.787;
y = y**3>0.008856 ? y**3 : (y-16/116)/7.787;
z = z**3>0.008856 ? z**3 : (z-16/116)/7.787;

x *= 95.047;
y *= 100;
z *= 108.883;

x = Math.floor(x*1000)/1000;
y = Math.floor(y*1000)/1000;
z = Math.floor(z*1000)/1000;
return [x,y,z];
}

function xyztohunterlab(x,y,z) {
x = x/95.047;
y = y/100;
z = z/108.883;

var ka = 175/198.04*195.047;
var kb = 70/218.11*208.883;

var l = 100*Math.sqrt(y);
var a = (x-y)/Math.sqrt(y)*ka;
var b = (y-z)/Math.sqrt(y)*kb;

l = Math.floor(l*1000)/1000;
a = Math.floor(a*1000)/1000;
b = Math.floor(b*1000)/1000;
return [l,a,b];
}

function hunterlabtoxyz(l,a,b) {
var ka = 175/198.04*195.047;
var kb = 70/218.11*208.883;

var y = (l/100)**2;
var x = (a/ka*Math.sqrt(y)+y);
var z = (b/kb*Math.sqrt(y)+y);

x *= 95.047;
y *= 100;
z *= 108.883;

x = Math.floor(x*1000)/1000;
y = Math.floor(y*1000)/1000;
z = Math.floor(z*1000)/1000;
return [x,y,z];
}

function rgbtorgb(r,g,b) {
return [r,g,b];
}

function xyztoxyz(x,y,z) {
return [x,y,z];
}
