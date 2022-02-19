function rgbtocmyk(r,g,b) {
  r = r/255;
  g = g/255;
  b = b/255;
  var k = 1-Math.max(r,g,b);
  var c = (1-r-k)/(1-k)*100;
  var m = (1-g-k)/(1-k)*100;
  var y = (1-b-k)/(1-k)*100;
  
  return [c,m,y,k];
}
