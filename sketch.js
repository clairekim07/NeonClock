var hr,mn,sc,ms;
var scAngle;
var mnAngle;
var hrAngle;
var msAngle;

var sand,sandIMG;
function preload(){
  sand = loadImage("sand.gif");
}
function setup() {

  createCanvas(displayWidth,displayHeight);
  angleMode(DEGREES);
  
}

function draw() {
  background("black");  

  hr = hour();
  mn = minute();
  sc = second();
  ms = millis();
  fill("#FF0000");
  textSize(50);
  text(hr % 12, 400, 600);
  text(': ' + mn, 470, 600);
  text(' : ' + sc, 550, 600);

  translate(300,300);
  rotate(-90);
 
  scAngle = map(sc,0,60,0,360);
  msAngle = map(ms,0,1000,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,60,0,360);

  

  push();
  rotate(msAngle);
  image(sand,120,100,120,0);
  pop();

  push();
  rotate(scAngle);
  stroke("#00FFFF");
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  push();
  rotate(msAngle);
  stroke("black");
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("#CC00FF");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  noFill()
  stroke("#00FFFF")
  strokeWeight(7)
  arc(0, 0, 340, 340, 2, scAngle);

  noFill()
  stroke("yellow")
  strokeWeight(7)
  arc(0, 0, 310, 310, 2, mnAngle);

  noFill()
  stroke("#CC00FF")
  strokeWeight(7)
  arc(0, 0, 280, 280, 2, hrAngle);

  fill("#FF0099")
  stroke("#FF0099")
  circle(0, 0, 10);

  drawSprites();
}