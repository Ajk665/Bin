class Bin extends BaseClass{
   constructor(x,y,width,height){ 


   super(x,y,width,height);
   this.image = loadImage("dustbingreen.png");

   }
   display(){
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    super.display();
   }
}