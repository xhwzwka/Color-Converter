function rgbtocmyk(r,g,b) {
  r = r/255;
  g = g/255;
  b = b/255;
  var k = Math.floor((1-Math.max(r,g,b))*100);
  if (k==100) {
    return [0,0,0,100];
  } else {
    var c = Math.floor((1-r-k)/(1-k)*100);
    var m = Math.floor((1-g-k)/(1-k)*100);
    var y = Math.floor((1-b-k)/(1-k)*100);
  }
  
  for (i in [c,m,y,k]) {
    if (i<0) {
      i = 0;
    }
  }
  return [c,m,y,k];
}
