var back,backimg;
var cat,catimg,cat1,catrunning;
var mouse,mouseimg;

function preload() {
    backimg = loadImage('images/garden.png');
    catimg = loadAnimation('images/cat4.png');
    mouse1 = loadImage('images/mouse1.png');
    mouse2 = loadAnimation('images/mouse1.png');
    mouse4 = loadAnimation('images/mouse1.png');
    catrunning = loadAnimation('images/cat2.png','images/cat3.png');
    cat1 = loadAnimation('images/cat1.png');
}

function setup(){
    createCanvas(1000,800);
    back = createSprite(300,300);
    back.scale = 1.25;
    back.addImage(backimg);
    cat = createSprite(750,500);
    cat.addAnimation('catimage',cat1);
    cat.scale = 0.2;
    cat.debug = true;
    cat.setCollider('rectangle',0,0,cat.width,cat.height);
    mouse = createSprite(200,500);
    mouse.addImage(mouse1);
    mouse.scale = 0.15;
    mouse.debug = true;

}

function draw() {

    background(255);
    console.log(cat.width)
    if((cat.x - mouse.x) < (cat.width/2 - mouse.width/2)){
        cat.velocityX = 0;
        cat.addAnimation('catlastimage',catimg);
        cat.changeAnimation('catlastimage');
        cat.scale = 0.2;
     }
    
     
     

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown('LEFT_ARROW')){
    cat.velocityX = -9;
    cat.addAnimation('tomrunning',catrunning);
    cat.changeAnimation('tomrunning');
    // cat.scale = 4;
    
}

    

}
