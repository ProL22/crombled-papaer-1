var paper,pillar1,pillar2,bottom

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
   
    paper = new Paper(100,375,20,20);
   pillar1 = new Bin(500,620,10,100);
   pillar2 = new Bin(600,620,10,100);
   bottom = new Bin(550,660,100,10);
  ground = new Bin(400,680,800,20)
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display();
 pillar1.display();
 pillar2.display();
 bottom.display();
 ground.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}
   }
   



