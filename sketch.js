var dog, happyDog, dogImg, happyDogImg;
var foodS, foodStock
var database

function preload()
{
  dogImg.loadImage("images/dogImg.png");
  happyDogImg.loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog.addImage(dogImg);
  happyDog.addImage(happyDogImg);
  firebase = database.firebase();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock());
}


function draw() {  
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  text(database.ref(foodStock), 100 ,100);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if (x <= 0){
    x = 0;
  } else{
    x = x -1;
  }


  database.ref('/').update({
    Food: x
  })
}
