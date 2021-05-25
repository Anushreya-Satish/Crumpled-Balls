class Ball {
    constructor (x,y,radius){
    var options={
        restitution:0.5,
        density:1,
        friction:1
        
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius= radius;
    World . add(world,this.body);
    this.Image=loadImage("paper.png");
  
  
    }
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate (pos.x,pos.y);
      rotate (angle);
      imageMode (CENTER);
      image(this.Image,0,0,this.radius*2,this.radius*3);
      pop ();
    }
  }