var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["26b80e63-bc0f-408d-b288-be2282aebd4e","2987501e-7c85-42fe-ba05-592e69331ea6","36732a1d-fd65-492a-973a-84f29970dc94"],"propsByKey":{"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"1jpsSGMF0o7t6yrXhdBjgn1DNQIgKdPN","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"2987501e-7c85-42fe-ba05-592e69331ea6":{"name":"hero","sourceUrl":null,"frameSize":{"x":201,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"HAsYuftcqy.xwJTJ36_3DByZFCxwgnN4","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":201,"y":400},"rootRelativePath":"assets/2987501e-7c85-42fe-ba05-592e69331ea6.png"},"36732a1d-fd65-492a-973a-84f29970dc94":{"name":"net","sourceUrl":"assets/api/v1/animation-library/gamelab/x87aZdlNymsbPI337XVFa5ZyXMo9RQ_H/category_buildings/commercial_01.png","frameSize":{"x":278,"y":204},"frameCount":1,"looping":true,"frameDelay":2,"version":"x87aZdlNymsbPI337XVFa5ZyXMo9RQ_H","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":204},"rootRelativePath":"assets/api/v1/animation-library/gamelab/x87aZdlNymsbPI337XVFa5ZyXMo9RQ_H/category_buildings/commercial_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 
var gameState = "serve";

var hero = createSprite(20,370,200,345);
hero.shapeColor="red";

var enemy1 = createSprite(20,300,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(370,200,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var enemy4 = createSprite(100,350,10,10);
enemy4.shapeColor="red";

var enemy5 = createSprite(300,350,10,10);
enemy5.shapeColor="red";

var net = createSprite(370,30,110,20);
net.shapeColor="red";
net.setAnimation("net");
net.scale=0.2;

var suministros =0;
var death = 0;

hero.setAnimation("hero");
hero.scale=0.1;
enemy1.setAnimation("enemy");
enemy1.scale=1;
enemy2.setAnimation("enemy");
enemy2.scale=1;
enemy3.setAnimation("enemy");
enemy3.scale=1;
enemy4.setAnimation("enemy");
enemy4.scale=1;
enemy5.setAnimation("enemy");
enemy5.scale=1;

function draw() {
  
background("green");
createEdgeSprites();



hero.bounceOff(edges);
enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);
enemy4.bounceOff(edges);
enemy5.bounceOff(edges);

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)||hero.isTouching(enemy4)||hero.isTouching(enemy5)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  hero.x=20;
  hero.y=370;
  death = death+1;
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.x=20;
  hero.y=370;
  suministros=suministros+1;
}
textSize(20);
  fill("black");
  text("suministros:"+suministros,20,50);
  

textSize(20);
  fill("blue");
  text("death:"+death,20,100);
  
if (gameState == "serve") {
    noStroke();
    fill("yellow");
    textSize(17),
    text("¡Bienvenido! Presiona Enter para comenzar", 50, 150);
    
    if(keyDown("enter")){
      noStroke();
    enemy1.velocityX=8;
    enemy2.velocityX=-8;
    enemy3.velocityY=8;
    enemy4.velocityY=-8;
    enemy5.velocityY=-8;

      gameState = "play";
    }
   }
  if (gameState== "play" ){
  if(keyDown("w")){
  hero.y=hero.y-4;
}

if(keyDown("s")){
  hero.y=hero.y+4;
}

if(keyDown("a")){
  hero.x=hero.x-4;
}

if(keyDown("d")){
  hero.x=hero.x+4;
}  
if (suministros==5||death==3) {
gameState="end";
}
  }
  if (gameState == "end") {
    enemy1.velocityX=0;
    enemy2.velocityX=0;
    enemy3.velocityY=0;
    enemy4.velocityY=0;
    enemy5.velocityY=0;
    textSize(25);
    fill("red");
    text("fin del juego. tus suministros son "+ suministros,5,170);
  }
drawSprites();


}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
