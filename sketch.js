

var dio;



function setup() {
  createCanvas(400,400);
  dio = createSprite(200, 200, 20, 20);
}

function draw() 
{
  
  background("blue");
  if(keyIsDown(RIGHT_ARROW)){
    dio.position.x = dio.position.x +3;
  }
  if(keyIsDown(LEFT_ARROW)){
    dio.position.x = dio.position.x -3;
  }
 
  if(keyIsDown(UP_ARROW)){
    dio.position.y = dio.position.y -3;
  }
 
  if(keyIsDown(DOWN_ARROW)){
    dio.position.y = dio.position.y +3;
  }
 
 
 
  drawSprites();

}




