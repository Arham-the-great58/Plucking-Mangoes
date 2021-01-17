const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6;
var tree, boy,stone,ground,slingshot;

function preload(){	
}
function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine); 	
	
	
	//Create the Bodies Here.
	slingshot = new SlingShot(boy.bqody,{x:200,Y:100});

	ground = new Ground(600,500,900,25);
	
	stone = new Stone(200,400,30,30);
	World.add(world,this.stone);

	boy = new Boy(200,538,200,200);
	World.add(world,this.boy);
	
	tree = new Tree(800,300,400,400);
	World.add(world,this.tree);

	mango1 = new Mango(1000,380,50);
	World.add(world,this.mango1);
	
	mango2 = new Mango(1090,380,30);
	World.add(world,this.mango1);
	
	mango3 = new Mango(920,420,30);
	World.add(world,this.mango1);
	
	mango4 = new Mango(1170,460,30);
	World.add(world,this.mango1);

	mango5 = new Mango(840,450,30);
	World.add(world,this.mango1);

	mango6 = new Mango(1000,440,30);
	World.add(world,this.mango1);

	//var options = {
	//bodyA:boy.body,
	//bodyB:stone.body,
	//tiffness:0.04,
	//length:10
	//}
	//var chain = Constraint.create(options);
	///World.add(world, chain);
}
function draw() {
  rectMode(CENTER);
  background(80);
  boy.display();
  tree.display();
  stone.display(30,30);
  ground.display(1300,25);

	
  mango1.display(50,50);
  mango2.display(50,50);
  mango3.display(50,50);
  mango4.display(50,50);
  mango5.display(50,50);
  mango6.display(50,50);

  slingshot.display();
  
  drawSprites();
 }

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

slingshot.fly();

}
