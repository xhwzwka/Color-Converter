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