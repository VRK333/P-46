var bg;
var Sol,Solimg;
var TERimg1,TERimg2,TERimg3
var TERgroup;

function preload(){
bg = loadImage("soldier game bg.jpg");
Solimg = loadImage("Apna soldier.png");
TERimg1 = loadImage("TER 1 (sol game).png");
TERimg2 = loadImage("TER 2 (sol game).png");
TERimg3 = loadImage("TER 3 (sol game).png");
}




function setup() {
  createCanvas(800,400);
  Sol = createSprite(50, 200, 50, 50);
  Sol.addImage(Solimg);
  Sol.scale = 0.5;
  TERgroup = createGroup();
}

function draw() {
  background(bg); 
  Sol.y = World.mouseY;
  TERspawn();
  drawSprites();
}

function TERspawn() {
  if(frameCount % 60 === 0){
  var TER = createSprite(750, 200, 50, 50);
  TER.y = Math.round(random(50, 600));
  TER.velocityX = -3;
  var R = Math.round(random(1,3));
  switch(R){
    case 1:TER.addImage(TERimg1);
    break;
    case 2:TER.addImage(TERimg2);
    break;
    case 3:TER.addImage(TERimg3);
    break;
    default:break;
  }

  TER.lifetime = 300

TERgroup.add(TER);
}
}