class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.x = x;
    this.y = y;
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }

  reset() {
    Matter.Body.setPosition(this.body, {x:this.x, y:this.y});
    Matter.Body.setVelocity(this.body, {x:0, y:0});
  }
}