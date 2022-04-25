const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball;
var button1;
var button2;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var ball_options = {
  restitution: 0.95
  }
  button1 = createImg("up.png");
  button1.position (20,30);
  button1.size(50,50)
  button1.mouseClicked(vForce)

  button2 = createImg("right.png");
  button2.position (230,30);
  button2.size(50,50)
  button2.mouseClicked(hForce)

  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
}
function hForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}); }

function vForce() {
   Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.05}); }
