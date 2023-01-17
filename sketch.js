var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg;


function preload(){
  bgImg = loadImage("assets/bg.jpeg")
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
 bg.addImage(bgImg)
 bg.scale=1.1

 player = createSprite(displayWidth-1150,displayHeight-300,50,50)
 player.addImage(shooterImg)
 player.scale=0.5

}

function draw() {
  background(0); 


if(keyWentDown("space")){
  player.addImage(shooter_shooting)
}
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if (keyDown("UP_ARROW")){
  player.y=player.y-30
}

if(keyDown("DOWN_ARROW")){
  player.y=player.y+30
}

if(keyDown("LEFT_ARROW")){
  player.x=player.x-20
}

if(keyDown("RIGHT_ARROW")){
  player.x=player.x+20
}
  //moving the player up and down and making the game mobile compatible using touches


drawSprites();

}
