class Box{
  constructor(x,y,width,height){
  var options={
   isSatic:true,   
  restitution:0.4,
  friction:1.0,
  
  }
  
  this.body=Bodies.rectangle(x,y,width,height,options)
  this.width=width;
  this.height=height;
  this.visibilty=255;
  World.add(world,this.body);

  }
  display(){
  
  var angle =this.body.angle;
  var pos=this.body.position;
  
  fill (103,255,63);
  
  translate (pos.x, pos.y);
  rotate (angle);
  rectMode(CENTER);
  rect(0,0,this.width , this.height)
 

  console.log(this.body.speed);

  if(this.body.speed<3){
this.body.display();
  }
  
  
  else{
  World .remove(world,this.body)
  push ()
  this.visibilty=this.visibilty-5;
  tint (255,this.visibilty)
  pop ()
  
  }
  
  
  
  
  
    }
  
  
  
  
  
  }
  
  
  
  
  
  