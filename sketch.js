const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5,b6;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);

  roof = new Roof(400,25,800,50)
  b1 = new Bob(200,350,40)
  chain1 = new Rope(b1.body,roof.body)
  b2 = new Bob(250,350,40)
  chain2 = new Rope(b2.body,roof.body)
  b3 = new Bob(300,350,40)
  chain3 = new Rope(b3.body,roof.body)
  b4 = new Bob(350,350,40)
  chain4 = new Rope(b4.body,roof.body)
  b5 = new Bob(400,350,40)
  chain5 = new Rope(b5.body,roof.body) 

  
}

function draw() {
  background(255,255,255);  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
 // b6.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  //chain6.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(b5.body, b5.body.position,{x:-85,y:-85})
  }
  
}