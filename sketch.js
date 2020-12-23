const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1;
var log1;
var pig1;
var box3;
var box4;
var pig3;
var log2;
var  box6;
var slingshot;
var box5;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(810,350);
    log1=new Log(810,260,300,PI/2);
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    pig2=new Pig(810,220);
    log2=new Log(810,180,300,PI/2);
    box5 = new Box(810,160,70,70);
    box6 = new Box(200,50,70,70);
    slingshot = new SlingShot(box6.body,{x:200,y:50});


   

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    box4.display();
    pig2.display();
    log2.display();
    box3.display();
    log1.display();
    box5.display();
    box6.display();
    slingshot.display();
}
function mouseDragged(){  
        Matter.Body.setPosition(box6.body, {x: mouseX , y: mouseY});   
}


function mouseReleased(){
    slingshot.fly();
}


   








