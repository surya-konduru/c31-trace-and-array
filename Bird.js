class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png");
    this.trace = [];
  }
 display() {
    
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var position = [this.body.position.x, this.body.position.y];
    this.trace.push(position);
    }
    for(var i = 0; i < this.trace.length; i++){
      image(this.smokeimg, this.trace[i][0], this.trace[i][1]);
    }
  }
}
