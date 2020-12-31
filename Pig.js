class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.x = x;
    this.y = y;
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }

 score(){
    if(this.Visiblity <0  && this.Visiblity >-700){
      score++;
    }
  }

  reset() {
    Matter.Body.setPosition(this.body, {x:this.x, y:this.y});
    Matter.Body.setVelocity(this.body, {x:0, y:0});
    Matter.Body.setAngle(this.body, 0);
    World.add(world, this.body);
    this.Visiblity = 255;
  }
}