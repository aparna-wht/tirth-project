class Dustbin{
  constructor(x, y,width,height) {
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.thickness = 20;
    this.angle = 0;
  
  this.image=loadImage("dustbingreen.png");

    this.bottom = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
    this.left = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
    Matter.Body.setAngle(this.left,this.angle);
    this.right = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
    

    World.add(world,this.bottom);
    World.add(world,this.right);
    World.add(world,this.left);


   
  }
  display(){
    var posbottom =this.bottom.position;
    var posleft = this.left.position;
    var posright = this.right.position;
push()
    translate(posleft.x, posleft.y);
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    pop()

    push()
    translate(posright.x, posright.y);
    rectMode(CENTER)
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    pop()

    push()
    translate(posbottom.x, posbottom.y);
    rectMode(CENTER)
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    imageMode(CENTER);
    image(this.image,0,-this.height/2,this.width,this.height);
    pop()
  }
};