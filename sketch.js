
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var wall1,wall2,wall3;
var world;
var engine;

function setup() {
	createCanvas(1200, 600);
	
	engine = Engine.create();
	world = engine.world;
	
	
	
	var ball_options = 
	{
		isStatic : false,
		restitution : 0.3,	
		friction : 0,
		density :1.2

	}

	//Create the Bodies Here.
	ball = Bodies.circle(100,300,20,ball_options);
	World.add(world,ball)
	wall1 = new Wall0(200,390,1500,20);
	wall2 = new Wall0(315,330,15,90);
	wall3 = new Wall0(400,330,15,90);
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //ellipseMode(RADIUS);

  background(255);
  wall1.show();
  wall2.show();
  wall3.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
  //rect(wall1.position.x,wall1.position.y,400,20);
 
 }

 function keyPressed()
{
	if(keyCode === UP_ARROW){

		Body.applyForce(ball,{x:0,y:0},{x:35,y:-50})	
	}


 }




