class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.x = x;
    this.y = y;
    this.image = loadImage("sprites/wood1.png");
  }

  reset() {
    Matter.Body.setPosition(this.body, {x:this.x, y:this.y});
    Matter.Body.setVelocity(this.body, {x:0, y:0});
    Matter.Body.setAngle(this.body, 0);
  }

};
