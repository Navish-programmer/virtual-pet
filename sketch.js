//Create variables here
var Dog,happydog;
var database;
var foodS,foodStock;

function preload()
{
Dogimg=loadImage("images/dogImg.png")
happydogimg=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  Dog=createSprite(250,250)
  Dog.addImage(Dogimg)
  database=firebase.database();
  foodStock=database.ref("FOOD")
  foodStock.on("value",readStock)
  
}


function draw() {  
background(46,139,87)
if(keyWentDown("UP_ARROW")){
  writeStock(foodS);
  Dog.addImage(happydogimg)

}
  drawSprites();
  fill(255,255,254); 
  stroke("black"); 
  text("Food remaining : "+foodS,170,200); 
  textSize(13); 
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if (x<=0){
    x=0;
  }  else{
    x=x-1;
    database.ref('/').update({
      FOOD:x
    })

    }
  
}


