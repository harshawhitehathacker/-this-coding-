function setup() {
  createCanvas(800,400);
 a =  createSprite(400, 200, 50, 50);
  b = createSprite(200,200,20,20);
   a.shapeColor="red";
   b.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  b.x= World.mouseX;
 b.y = World.mouseY;
 if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.height/2+b.height/2 && a.height/2+b.height/2) {
a.shapeColor="green";
b.shapeColor="green";
}
else{
  a.shapeColor="red";
  b.shapeColor="red";
}
drawSprites();
}