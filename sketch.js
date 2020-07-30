var mRect,fRect;
function setup() {
  createCanvas(1200,800);
  fRect=createSprite(600, 400, 50, 80);
  mRect=createSprite(800, 400, 80, 30);
  
}

function draw() {
  background(255,150,100);  
  mRect.x=World.mouseX;
  mRect.y=World.mouseY;
 
  drawSprites();
}

function isTouching(){
    if(mRect.x-fRect.x<fRect.width/2+mRect.width/2 &&
        fRect.x-mRect.x<fRect.width/2+mRect.width/2 &&
        mRect.y-fRect.y<fRect.height/2+mRect.height/2 &&
        fRect.y-mRect.y<fRect.height/2+mRect.height/2    
        
        ){
         mRect.shapeColor="red";
         fRect.shapeColor="red";
     }else{
       mRect.shapeColor="green";
         fRect.shapeColor="green";
         }

}