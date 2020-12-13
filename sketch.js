let hr = hour();
let mn = minute();
let sc = second();
var scAngle = map(sc,0,60,0,360);


function setup() {
  createCanvas(800,400);
  

}

function draw() {
  background(255,255,255);  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  drawSprites();
}