var bgImg;
var cat,catImg1,catWalking,catStop;
var mouse,mouseImg1,mouseTeasing,mouseStop;
var keyCode
function preload() {
    //load the images here
   bgImg = loadImage("garden.png")
   catImg1 = loadImage("cat1.png");
   catWalking = 
   loadAnimation("cat2.png","cat3.png");
   catStop = loadAnimation("cat4.png");

   mouseImg1 = loadImage("mouse1.png");
   mouseTeasing = 
   loadAnimation("mouse2.png","mouse3.png");
   mouseStop = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    cat=createSprite(850,700,10,10);
    cat.addImage(catImg1);
    cat.scale = 0.125;
    cat.velocityX = 0;
    mouse=createSprite(150,700,10,10);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.125;
    mouse.velocityX = 0;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)/2) 
        { 
          cat.velocityX = 0;
          cat.changeAnimation("stopCat", catStop )
          mouse.changeAnimation("stopMouse", mouseStop )
        }
    
  drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW)
  mouse.addAnimation("Teasing", mouseTeasing )
  mouse.addAnimation("stopMouse", mouseStop )
  mouse.changeAnimation("Teasing");
  mouse.frameDelay = 25;
  if (keyCode === LEFT_ARROW)
  cat.addAnimation("Walking", catWalking );
  cat.addAnimation("stopCat", catStop )
  cat.changeAnimation("Walking");
  cat.velocityX = -2;
}