const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  //PI means 180 
  angle = -PI/4

  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(600,height-1,width,10)
  canon = new Canon(180,110,110,50,angle);
  ball = new Ball(canon.x,canon.y)
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  tower.display();
  canon.display();
  ball.display();
 
}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
    ball.shoot()
  }
}











