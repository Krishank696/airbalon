var balloon;








function setup() {
  var canvas = createCanvas(500,500);
  database = firebase.database();
  balloon = createSprite(250, 250, 50, 50);
  
}


function draw() {
 background("Blue");
 

 
 
  if(keyDown(UP_ARROW)){
    balloon.y = ballon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
  }
  else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10;
  }
  else if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }


   
  drawSprites();
}