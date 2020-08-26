var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimage,cloudgroup;
var obstaclegroup,obs1,obs2,obs3,obs4,obs5,obs6;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimage = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  obs1 = loadImage("obstacle1.png");
  obs2 = loadImage ("obstacle2.png");
  obs3 = loadImage ("obstacle3.png");
  obs4 = loadImage("obstacle4.png");
  obs5 = loadImage("obstacle5.png");
  obs6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudgroup = new Group();
  
}

function draw() {
  background(0);
  spawnclouds();
  spawnObstacles();
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
}
function spawnclouds(){
if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudimage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
     cloudgroup.add(cloud) ;
  
}}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
    switch(rand){
      case 1:obstacle.addImage(obs1);
    break; 
    case 2 : obstaclle.addImage(obs2);
    break;
     case 3:obstacle.addImage(obs3);
    break;
     case 4:obstacle.addImage(obs4);
    break;
    case 5:obstacle.addImage(obs5);
    break;
     case 6:obstacle.addImage(obs6);
    break;    
    }
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
  }
}