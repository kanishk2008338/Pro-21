function collide(p1,p2){

    if (p1.x - p2.x < p2.width/2 + p1.width/2
      && p2.x - p1.x < p2.width/2 + p1.width/2
      ) {
    //movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
    p1.velocityX=0;
    p1.velocityY=0;
    p2.velocityX=0;
    p2.velocityY=0;
  }
  else {
    return false;
    //movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
  }
  
  }