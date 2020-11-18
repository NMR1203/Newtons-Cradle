const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var blob1,blob2,blob3,blob4,blob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	var blobDiameter = 40;
	var posX = width/2;
	var posY = height/4 + 200;

	//Create the Bodies Here.
	blob1 = new Blob(posX - blobDiameter * 2, posY, blobDiameter);
	blob2 = new Blob(posX - blobDiameter,posY, blobDiameter);
	blob3 = new Blob(posX,posY,blobDiameter);
	blob4 = new Blob(posX +  blobDiameter, posY, blobDiameter);
	blob5 = new Blob(posX + blobDiameter * 2, posY, blobDiameter);

	roof = new Roof(width/2, height/4, 250, 15);

	rope1 = new Rope(blob1.body,roof.body,-blobDiameter * 2,0);
	rope2 = new Rope(blob2.body,roof.body,-blobDiameter * 1,0);
	rope3 = new Rope(blob3.body,roof.body,0,0); 
 	rope4 = new Rope(blob4.body,roof.body,blobDiameter * 1,0); 
	rope5 = new Rope(blob5.body,roof.body,blobDiameter *  2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(75);
  Engine.update(engine);
 
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
 blob1.display();
 blob2.display();
 blob3.display();
 blob4.display();
 blob5.display();

 roof.display(); 
}

function keyPressed() { 
	if (keyCode === LEFT_ARROW) 
	{ Matter.Body.applyForce(blob1.body,blob1.body.position,{x:-60,y:-55}); } 

if (keyCode === RIGHT_ARROW) 
	{ Matter.Body.applyForce(blob5.body,blob5.body.position,{x:60,y:55}); } 
} 

	function drawLine(constraint) { 
		blobPosition = constraint.bodyA.position 
		roofPosition = constraint.bodyB.position 
		
		roofBodyOffset = constraint.pointB; 
		
		roofBodyX = roofBodyPosition.x + roofBodyOffset.x 
		roofBodyY = roofBodyPosition.y + roofBodyOffset.y 
		
		line(blobBodyPosition.x, blobBodyPosition.y, roofBodyX, roofBodyY); 
	}


