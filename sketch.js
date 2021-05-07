const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25;
var polygon;
var chain;
var stand1,stand2;


function preload(){
backimg=loadImage("sprites/text.png")

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,30)

    
    box1 = new Box(480,320,30,40);
    box2 = new Box(511,320,30,40);
    box3 = new Box(542,320,30,40);
    box4 = new Box(572,320,30,40);
    box5 = new Box(602,320,30,40);
    box6 = new Box(662,320,30,40);
    box7 = new Box(632,320,30,40);
  
 box8 = new Box(511,280,30,40);
 box9 = new Box(542,280,30,40);
 box10 = new Box(572,280,30,40);
 box11 = new Box(602,280,30,40);
 box12 = new Box(632,280,30,40);

 box13=new Box(542,240,30,40);
 box14=new Box(572,240,30,40);
box15=new Box(602,240,30,40);
box16=new Box(572,200,30,40);

box17=new Box(880,190,30,40);
box18=new Box(900,190,30,40);
box19=new Box(920,190,30,40);
box20=new Box(940,190,30,40);
box21=new Box(960,190,30,40);
box22=new Box(900,150,30,40);
box23=new Box(920,150,30,40);
box24=new Box(940,150,30,40);
box25=new Box(920,110,30,40);

    polygon= new Polyg(100,100);
    
    slingshot=new Slingshot(polygon.body,{x:200,y:200});

    stand1= new Stand(580,350,300,10);
    stand2= new Stand(920,200,200,10)
    

}



function draw(){
    background(backimg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    
    box3.display();
    box4.display();
    box6.display();   
    box7.display();
    box5.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();





    polygon.display();
    //constraintLog.display();
    slingshot.display();
    stand1.display();
 stand2.display();

}
function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}


function mouseReleased(){

slingshot.fly();


}