var xpos
var ypos
var deltaX = 10

function setup(){
  createCanvas(windowWidth,windowHeight)
  xpos = windowWidth/2
  ypos = windowHeight/2
}

function draw(){
  background(0)
  ellipse(xpos, ypos, 50, 50)
  moveEllipse()
}

function moveEllipse(){

  ypos = ypos + deltaX
  if(ypos > windowWidth || ypos < 0){
    deltaX = -deltaX
  }
  // if(xpos < 0){
  //   deltaX = -deltaX
  // }
}

