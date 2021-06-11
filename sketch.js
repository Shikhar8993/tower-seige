const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,ground1;
var block, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21;
var slingShot;


function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(488,400,230,10);
    ground1 = new Ground(825,200,100,10);
  
      block = new Attacker(200,220,20,20);
  
      
    
  
      block1 = new Tower(400,380,25,25);
      block2 = new Tower(435,380,25,25);
      block3 = new Tower(470,380,25,25);
      block4 = new Tower(505,380,25,25);
      block5 = new Tower(540,380,25,25);
      block6 = new Tower(575,380,25,25);
      block7 = new Tower(418,355,25,25);
      block8 = new Tower(453,355,25,25);
      block9 = new Tower(488,355,25,25);
      block10 = new Tower(523,355,25,25);
      block11 = new Tower(560,355,25,25);
      block12 = new Tower(433,326,25,25);
      block13 = new Tower(468,326,25,25);
      block14 = new Tower(503,326,25,25);
      block15 = new Tower(540,326,25,25);
  
      block16 = new Tower(790,180,25,25);
      block17 = new Tower(825,180,25,25);
      block18 = new Tower(860,180,25,25);
      block19 = new Tower(805,152,25,25);
      block20 = new Tower(840,152,25,25);
      block21 = new Tower(822,125,25,25);

    slingShot=new SlingShot(block.body,{x:200,y:100});

   

}

function draw(){
    background(225);
    Engine.update(engine);

    
  ground.display();
  ground1.display();

  
 block.display();
 block1.display();  
 block2.display();  
 block3.display(); 
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();

    slingShot.display();

   
}
function mouseDragged(){
Matter.Body.setPosition(block.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 slingShot.fly();   
}