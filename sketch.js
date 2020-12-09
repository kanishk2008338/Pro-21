var bullet,wall;
var speed,weight;
var deformation;

function setup() {
  bullet = createSprite(50, 200, 25, 25);
  wall = createSprite(380, 200, 50, height/2);
speed=Math.round(random(55,90))
weight=Math.round(random(400,1500))


}

function draw() {
  wall.debug = true;
  bullet.debug = true;
  
  if (collide(bullet,wall)){
bullet.velocityX=0;
 deformation=0.5*weight*speed*speed/22500;
 if (deformation>180){
   wall.shapeColor="red"
 }
 else if(deformation<60){
  wall.shapeColor="green"
 }
 else{
  wall.shapeColor="yellow"
 }
}
  
  bullet.velocityX = speed;
  background(255,255,255);  
  drawSprites()}

  
