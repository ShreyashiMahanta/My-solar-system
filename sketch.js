var sun;
World.frameRate=10;

var mercury,venus,earth,mars;
var jupiter,saturn,uranus,neptune;

var space;

function preload(){
    spaceImg = loadImage('space.jpg');
    sunImg = loadImage('sun.png');
    mercuryImg = loadImage('mercury.png');
    venusImg = loadImage('venus.png');
    earthImg = loadImage('earth.png');
    marsImg = loadImage('mars.jpg');
    jupiterImg = loadImage('jupiter.png');
    saturnImg = loadImage('saturn.png');
    uranusImg = loadImage('uranus.png');
    neptuneImg = loadImage('neptune.png');
}

function setup(){
    createCanvas(950,900);
     
    space = createSprite(850,500,10,10);
    space.addImage(spaceImg);

    mars = createSprite(320,270,20,20);
    mars.addImage(marsImg);
    mars.scale = 0.16;
    mars.debug = true;
    mars.setCollider("circle",0,0,10);

    sun = createSprite(450,450,80,80);
    sun.addImage(sunImg);
    sun.scale = 0.75;
    sun.debug = true;
    sun.setCollider("circle",0,0,10);

    
   mercury = createSprite(550,420,20,20);
   mercury.addImage(mercuryImg);
   mercury.scale = 0.1;
   mercury.debug = true;
   mercury.setCollider("circle",0,0,10);

   venus = createSprite(300,400,30,30);
   venus.addImage(venusImg);
   venus.scale = 0.2;
   venus.debug = true;
   venus.setCollider("circle",0,0,10);

   earth = createSprite(640,520,40,40);
   earth.addImage(earthImg);
   earth.scale = 0.28;
   earth.debug = true;
   earth.setCollider("circle",0,0,10);

  

   jupiter = createSprite(390,730,50,50);
   jupiter.addImage(jupiterImg);
   jupiter.scale = 0.25;
   jupiter.debug = true;
   jupiter.setCollider("circle",0,0,10);

   saturn = createSprite(170,670,50,50);
   saturn.addImage(saturnImg);
   saturn.scale =  0.44;
   saturn.debug = true;
   saturn.setCollider("circle",0,0,10);

   uranus = createSprite(890,730,50,50);
   uranus.addImage(uranusImg);
   uranus.scale = 0.17;
   uranus.debug = true;
   uranus.setCollider("circle",0,0,10);

   neptune = createSprite(230,77,50,50);
   neptune.addImage(neptuneImg);
   neptune.scale = 0.18;
   neptune.debug = true;
   neptune.setCollider("circle",0,0,10);
}

function draw(){

    if(sun.collide(jupiter)){
        jupiter.destroy();
    }
    if(sun.collide(mercury)){
        mercury.destroy();
    }
    if(sun.collide(mars)){
        mars.destroy();
    }
    if(sun.collide(venus)){
        venus.destroy();
    }
    if(sun.collide(earth)){
        mercury.destroy();
    }
    if(sun.collide(saturn)){
        saturn.destroy();
    }
    if(sun.collide(neptune)){
        neptune.destroy();
    }
    if(sun.collide(uranus)){
        uranus.destroy();
    }

    if (sun >= 40) {
        World.frameRate=World.frameRate*2;
        sun = 0;
      }
    

    drawSprites();
}