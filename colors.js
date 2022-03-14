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

function hsvtorgb(h,s,v) _
s = s/100;
v = v/100;

var val = v*s;
var val2 = val*(1-Math.abs((h/60)%2 - 1));
var diff = v-val;

if (0<=h<60) {
  var r = val;
  var g = val2;
  var b = 0;
} else if (60<=h<120) {
  var r = val2;
  var g = val;
  var b = 0;
} else if (120<=h<180) {
  var r = 0;
  var g = val;
  var b = val2;
} else if (180<=h<240) {
  var r = 0;
  var g = val2;
  var b = val;
} else if (240<=h<300) {
  var r = val2;
  var g = 0;
  var b = val;
} else if (300<=h<361) {
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
