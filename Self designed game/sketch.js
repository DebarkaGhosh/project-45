var bg1, bg1img;
var howtoplay , howtoplayimg;
var instructions,instructionsimg;
var Continue , Continueimg;
var mainbg , mainbgimg;
var gameState = "START";

function preload(){
 bg1img = loadImage("images/background1.png");
 howtoplayimg = loadImage("images/how to play.png");
 instructionsimg = loadImage("images/instructions.jpg");
 Continueimg = loadImage("images/continue.png");
 mainbgimg = loadImage("images/mainbg.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  howtoplay = createSprite(679,400,200,100)
  howtoplay.addImage(howtoplayimg);
  howtoplay.scale = 0.35;

  Continue = createSprite(879,550,200,100)
  Continue.addImage(Continueimg);
  Continue.scale = 0.35;



  
}

function draw() {
  

  if(gameState === "START"){

    background(bg1img);  
    Continue.visible = false;

    push();
    fill("red")
    textFont("chiller")
    textSize(90);
    textStyle(BOLD)
    text("Story",windowWidth/2-20,windowHeight/2 - 170);
  pop();
  
  
  fill("red")
  textFont("chiller")
  textSize(35);
  textStyle(BOLD);
  text("Welcome to the game 'The Evil'. You are Alex trapped in a  " ,400,200)
  text(" haunted house. Try to escape from  the house💀." ,400,250);
  text("Press the 'how to play' button for instructions.", 420,300);
  
    
  if(mousePressedOver(howtoplay)){
   gameState = "PLAY";
  }
  if(gameState==="PLAY"){
    background(instructionsimg);
  howtoplay.visible = false;
  Continue.visible = true;


  push();
  fill("Red");
  textFont("chiller");
  textSize(90)
  textStyle(BOLDITALIC);
  text(" -: INSTRUCTIONS :- ", 250,windowHeight/2 - 170)
  pop();

  textStyle(BOLD);
  text("1.Press the 'UP ARROW' key to jump. (⬆)", 250, 280);
  text("2.Press the 'RIGHT ARROW' key to run. (➡)",250,350);

  if(mousePressedOver(Continue)){
    gameState = "GAME";
   }

} 

 if(gameState === "GAME"){
background(mainbgimg);
}
}


drawSprites();
}