
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survivalTime = 0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png")
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,390,900,10)
  ground.velocityX =-4;
  ground.x=ground.width/2;
  
  obstaclesGroup = new Group();
  bananaGroup = new Group();
}


function draw() {
  background("green")
  
  if(ground.x<0)
    ground.x=ground.width/2;
  
if(keyDown("space")){
  
  monkey.velocityY=-12;
  
}
  monkey.velocityY = monkey.velocityY + 0.6;
  
  monkey.collide (ground);
  
stroke("black");
textSize(20);
fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
text("SurvivalTime"+ survivalTime,100,50);
  
  
 obstacles(); 
banana();
  
  
  drawSprites();
}



function banana() {
  
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,20,10,10);
    banana.y = Math.round(random(300,120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    

    banana.lifetime = 200;
    
   banana.scale = 0.1;
    
    

    bananaGroup.add(banana);
  }
  
}

function obstacles()  {
   if (frameCount % 100 === 0){
  var obstacles = createSprite(400,370,20,20)  
  obstacles.addImage(obstacleImage);
  obstacles.velocityX = -3;
  obstacles.lifetime = 150;
 obstacles.scale = 0.1;
   }
}
