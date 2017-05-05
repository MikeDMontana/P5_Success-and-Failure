function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  noFill();
}

function setupMyShape(size){
  rect(0,0,size,size);
  ellipse(0,0,size/2);
}

function draw() {
  var size = 50;
  translate((width/2),(height/2));
  for(var i = 1; i < 10; i++){
    setupMyShape(i * size);
  }
}

//rect(x,y,w,h)
//ellipse(x,y,w,[h])
//triangle(x1,y1,x2,y2,x3,y3)
