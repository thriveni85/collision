var mRect,fRect,obj1,obj2,obj3;
function setup() {
  createCanvas(1200,800);
  fRect=createSprite(600, 400, 50, 80);
  mRect=createSprite(800, 400, 80, 30);

  obj1=createSprite(100, 100, 50, 50);
  obj2=createSprite(200, 100, 50, 50);
  obj3=createSprite(300, 100, 50, 50);
  
}

function draw() {
  background(255,255,255);  
  mRect.x=World.mouseX;
  mRect.y=World.mouseY;
 if(isTouching(mRect,fRect)){
 mRect.shapeColor="red"
 fRect.shapeColor="red"
 }else{
  mRect.shapeColor="blue"
  fRect.shapeColor="blue"
 }
  drawSprites();
}

function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj2.height/2+obj1.height/2 &&
    obj2.x-obj1.x<obj2.height/2+obj1.height/2 &&
    obj1.y-obj2.y<obj2.height/2+obj1.height/2 &&
    obj2.y-obj1.y<obj2.height/2+obj1.height/2 
    ){
     return true;
 }else{
   return false;
     }
}