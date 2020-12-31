class Bird extends BaseClass {
  constructor(x,y){
    var options = {
      density: 1.2
    }
    super(x,y,50,50, options);
    this.x = x;
    this.y = y;
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
    if(gameState === "launched") {
      for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      }
    }
  }
  reset() {
    Matter.Body.setPosition(this.body, {x:this.x, y:this.y});
    Matter.Body.setAngle(this.body, 0);
  }
}