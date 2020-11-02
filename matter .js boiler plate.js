
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper = createsprite(100,50,80,PI/2);
var glass = createsprite(100,50,80,PI/2);

function preload()



{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  display();
	paper.display();
	glass.display();

  }

	  

  
  drawSprites();
