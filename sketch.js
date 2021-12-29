
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var c1, c2, c3;
var paper;
var o1, o2, o3, o4;
var w1, w2, w3;
var d;

function preload()
{
	dustbinI = loadImage("dustbinImage.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//creating ground
	ground = new Ground(600, 650, 1200, 10);

	c1 = new Dustbin(1000, 635, 200, 20);


	w1 = new Ground(30, 350, 40, 700);
	w2 = new Ground(1170, 350, 40, 700);
	w3 = new Ground(600, 30, 1400, 40)

	paper = new Paper(60, 450);
	
	Engine.run(engine);
  
}


function draw() {
  background(rgb(150, 150, 150));
  
  ground.display();

  c1.display();

  paper.display();


  w1.display();
  w2.display();
  w3.display();
 



  

  keyPressed();
  drawSprites();
 
}


function keyPressed() {
	if (keyDown("Up")) {
		Body.applyForce(paper.body, paper.body.position, {x: 50, y: -50})
	}
}
