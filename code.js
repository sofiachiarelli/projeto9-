var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6bca16c8-c11c-436c-9f4a-8f7e34ec7bca","ac3ec85a-3cc3-4a2f-9555-dca1bb03e689","9c60a00f-23ed-435b-997b-248f1e9f56cc","65988008-3f2d-41e8-aba5-9a3597849ec4","934f3969-8a48-493c-ac49-b0e616a5eac5","8d11adbf-05d5-42ee-bff6-43dd734ef232"],"propsByKey":{"6bca16c8-c11c-436c-9f4a-8f7e34ec7bca":{"name":"playerShip2_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW/category_vehicles/playerShip2_blue.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW/category_vehicles/playerShip2_blue.png"},"ac3ec85a-3cc3-4a2f-9555-dca1bb03e689":{"name":"sticker_33_1","sourceUrl":"assets/api/v1/animation-library/gamelab/X7u_1j9fkZFy46sxjbTO4VA9Tgl650Zz/category_stickers/sticker_33.png","frameSize":{"x":332,"y":282},"frameCount":1,"looping":true,"frameDelay":2,"version":"X7u_1j9fkZFy46sxjbTO4VA9Tgl650Zz","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":282},"rootRelativePath":"assets/api/v1/animation-library/gamelab/X7u_1j9fkZFy46sxjbTO4VA9Tgl650Zz/category_stickers/sticker_33.png"},"9c60a00f-23ed-435b-997b-248f1e9f56cc":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"65988008-3f2d-41e8-aba5-9a3597849ec4":{"name":"creature_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RMcvClF8NB61yNH3LToUCxjWgeIK3tF9/category_animals/creature_07.png","frameSize":{"x":385,"y":225},"frameCount":1,"looping":true,"frameDelay":2,"version":"RMcvClF8NB61yNH3LToUCxjWgeIK3tF9","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":225},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RMcvClF8NB61yNH3LToUCxjWgeIK3tF9/category_animals/creature_07.png"},"934f3969-8a48-493c-ac49-b0e616a5eac5":{"name":"gameplay_purplediamond_1","sourceUrl":null,"frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":12,"version":"yZHjZU9me9dFCfIY6e74.V.rasuMmKKU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/934f3969-8a48-493c-ac49-b0e616a5eac5.png"},"8d11adbf-05d5-42ee-bff6-43dd734ef232":{"name":"background_underwater_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"Vg6bYwboQcGip.4oRoqXobcX2rE5QGop","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png"}}};
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

//o diamante chamdo jack esta no fundo do mar e precisa ser levado ao seu dono, para isso ele precisa ser levado ate o portal, e para chegar ate o portal precisa passar pelos meteoros.

var life = 7;
var b = createSprite(200,200,200,200);
var jack = createSprite(172,387,5,5);
var linha1 = createSprite(64,395,3,800);
var linha2 = createSprite(296,388,3,549);
var linha3 = createSprite(210,9,300,3);
var linha4 = createSprite(448,115,300,3);
var portal1 = createSprite(358,59,90,90);
var portal2 = createSprite(358,59,50,50);
var portal3 = createSprite(358,59,30,30);
var meteoro1 = createSprite(172,324,15,15);
var meteoro2 = createSprite(280,240,15,15);
var meteoro3 = createSprite(78,185,15,15);
var meteoro4 = createSprite(280,131,15,15);

b.setAnimation("background_underwater_17_1");

jack.shapeColor="black";
jack.setAnimation("gameplay_purplediamond_1");
jack.scale=0.1;

portal1.shapeColor="yellow";
portal2.shapeColor="orange";
portal3.shapeColor="red";

meteoro1.shapeColor="brown";
meteoro2.shapeColor="brown";
meteoro3.shapeColor="brown";
meteoro4.shapeColor="brown";
meteoro1.velocityX=8;
meteoro2.velocityX=-8;
meteoro3.velocityX=8;
meteoro4.velocityX=-8;

function draw() {
  background("white");
  
  meteoro1.bounceOff(linha1);
  meteoro1.bounceOff(linha2);
  meteoro1.bounceOff(linha3);
  meteoro1.bounceOff(linha4);

  meteoro2.bounceOff(linha1);
  meteoro2.bounceOff(linha2);
  meteoro2.bounceOff(linha3);
  meteoro2.bounceOff(linha4);
  
  meteoro3.bounceOff(linha1);
  meteoro3.bounceOff(linha2);
  meteoro3.bounceOff(linha3);
  meteoro3.bounceOff(linha4);
  
  meteoro4.bounceOff(linha1);
  meteoro4.bounceOff(linha2);
  meteoro4.bounceOff(linha3);
  meteoro4.bounceOff(linha4);

  if (keyDown(UP_ARROW)) {
  jack.y=jack.y-3;
}
  if (keyDown(DOWN_ARROW)) {
  jack.y=jack.y+3;
}
  if (keyDown(LEFT_ARROW)) {
  jack.x=jack.x-3;
}
  if (keyDown(RIGHT_ARROW)) {
  jack.x=jack.x+3;
}

if (jack.isTouching(meteoro1)|| jack.isTouching(meteoro2)|| jack.isTouching(meteoro3)|| jack.isTouching(meteoro4))  {
  jack.x=172;
  jack.y=387;
  life=life-1;
  }

 drawSprites(); 
strokeWeight(0);
textSize(22);
fill("white");
text("Vidas: " + life,307,363);

  
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
