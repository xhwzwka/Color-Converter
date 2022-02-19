function rgbtocmyk(r,g,b) {
  r = r/2.55;
  g = g/2.55;
  b = b/2.55;
  var k = 100-Math.max(r,g,b);
  var c = (100-r-k)/(100-k);
  var m = (100-g-k)/(100-k);
  var y = (100-b-k)/(100-k);
  return [c,m,y,k];
}
