//Create variables here
var database;
var dog, Dog, happyDog, database, foodS, foodStock
function preload()
{
	//load images here
  Dog = loadImage("images/Dog.png");
  happydog = loadImage("images/happydog.png");
}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);
  
  dog = createSprite(200,200,50,50);
  dog.addImage(Dog);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foods);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here
  textSize(10);
  fill("white");
  stroke(10);
  text("Note: Press Up_ARROW Key To Feed Drago Milk!",250, 5);
  text("Food remaining :"+foodStock,200, 200);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{
  if(x<=0)
  {
    x=0;
  }
  else
  {
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}

