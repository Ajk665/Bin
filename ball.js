class Ball extends BaseClass{
    constructor(x,y){
       
    super(x,y,20,20);
    this.image = loadImage("paper.png");
        }
        display(){
           imageMode(CENTER);
           image(this.image,0,0,this.width,this.height);
           super.display();        
        }
}