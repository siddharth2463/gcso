var car;
var wall; 
var speed;
var weight;
function setup() {

  createCanvas(1000,400);
 
  weight = random(400, 1000);
  speed = random(55,90);
  
  
  car = createSprite(50, 200, 70, 70);
  car.velocityX =speed ;
 

 wall = createSprite(900, 200, 60, height/2)
 wall.shapeColor = color(100,100,100);

  
}

function draw() {
  background(0);  
  
  if( (wall.x - car.x) < ((car.width + wall.width) /2))
  {
        car.velocityX = 0;
        var deformation = (0.5* weight* speed* speed)/22500;
        console.log(deformation);
        if(deformation>180)
          {
             car.shapeColor=color(255, 0, 0);
         }
         else  if(deformation<180 && deformation>100)
          {
                car.shapeColor = color(230, 230, 0);
          }
           else  if(deformation<100)
          {
                car.shapeColor = color(0, 255, 0);
          }
  }
 

  drawSprites();
}
