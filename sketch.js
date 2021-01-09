var fixed, moving;

function setup() {
  createCanvas(800,400);
 fixed = createSprite(400, 200, 50, 50);
fixed.shapeColor = "red";

 moving = createSprite(400, 200, 50, 50);
 moving.shapeColor = "red";

}

function draw() {
  background(0);
  moving.x = mouseX;
  moving.y = mouseY;
  if (moving.x - fixed.x < fixed.width/2 + moving.width/2
    && fixed.x-moving.x<fixed.width/2 + moving.width/2
    && moving.y - fixed.y < fixed.height/2 + moving.height/2
    && fixed.y-moving.y<fixed.height/2 + moving.height/2){

    moving.shapeColor = "green";
     fixed.shapeColor = "green";
     }
      else { moving.shapeColor = "red";
      fixed.shapeColor = "red";
   }
  drawSprites();
}