var thickness,wall
var speed,weight,bullet,damage









function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83);
  speed=random(223,321)
  weight=random(30,52);
  bullet =createSprite(50,200,40,20)
  wall=createSprite(1200,200,thickness,height/2);
  console.log(thickness)
  console.log(speed)
  console.log(weight)
  bullet.velocityX=speed
  damage=0
}

function draw() {
  background(255,255,255);  
  damage=0.5 * weight * speed * speed / (thickness * thickness * thickness);

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  bullet.collide(wall)
  
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  console.log(damage)
  if(damage>10){
    wall.shapeColor=color(255,0,0);
   }

   else if(damage<10){
     wall.shapeColor=color(0,255,0)
   }
}
  drawSprites();

  
}


function hasCollided(bullet,wall){
bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
  {
return true
  }
  return false
}













