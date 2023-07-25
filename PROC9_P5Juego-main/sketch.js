var box;
// setup= aqui se colocan los sprites
function setup() {
  createCanvas(1000,1000);
  box= createSprite (250,150,20,20);
  box.shapeColor=("white");
}

function draw() 
{
  background(30);
if (keyDown(RIGHT_ARROW)){
  box.position.x=box.position.x +5;
}

if (keyDown(LEFT_ARROW)){
  box.position.x=box.position.x -5;
}

if (keyDown(UP_ARROW)){
  box.position.y=box.position.y -5;
}

if (keyDown(DOWN_ARROW)){
  box.position.y=box.position.y +5;
}

drawSprites();

}




