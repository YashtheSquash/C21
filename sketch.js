var movingrect, fixedrect


function setup() {
  createCanvas(800,400);

  movingrect = createSprite(600,200,80,60);
  movingrect.shapeColor = rgb(19,39,175);
  movingrect.debug = true;
  movingrect.velocityX = -3;


  fixedrect = createSprite(200,200,50,90);
  fixedrect.shapeColor = rgb(19,39,175);
  fixedrect.debug = true;
  fixedrect.velocityX = 3;
}

function draw() {
  background(0,0,0); 

  console.log(movingrect.x - fixedrect.x);

  if(isTouching(movingrect,fixedrect)){
    movingrect.shapeColor = rgb(30,40,50);
    fixedrect.shapeColor = rgb(30,40,50);
  }
  else {
  movingrect.shapeColor = rgb(19,39,175);
  fixedrect.shapeColor = rgb(19,39,175);
  }

  bounceOff(movingrect,fixedrect);
  
  drawSprites();
}

function isTouching(obj1,obj2) {
  if(obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2){

      return true;

  } 
  else {

  return false;

  }
}

function bounceOff(obj1,obj2) {

  if(obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.x - obj2.x < obj2.width/2 + obj1.width/2) {

      obj1.velocityX = obj1.velocityX * -1;
      obj2.velocityX = obj2.velocityX * -1;

  }

  if(obj2.y - obj1.y < obj2.height/2 + obj1.height/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2) {

      obj1.velocityY = obj1.velocityY * -1;
      obj2.velocityY = obj2.velocityY * -1;

  }

}