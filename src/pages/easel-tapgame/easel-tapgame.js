var canvas = document.getElementById('elephant');
var stage = new createjs.Stage(canvas);

var spriteSheet = new createjs.SpriteSheet({
  images: ['./elephant.png'],
  frames: {width: 80, height: 80, regX: 0, regY: 0, count: 16, margin: 0, spacing: 0},
  animations: {
    stand: 0,
    left: [4, 7],
    right: [8, 11],
    front: [0, 3],
    back: [12, 15]
  }
});

var animate = new createjs.Sprite(spriteSheet, 'stand');

createjs.Ticker.setFPS(16);
createjs.Ticker.addEventListener('tick', handleFn);
  stage.addChild(animate);

function handleFn() {
  stage.update();
}

$('.j_ToLeft').on('click', function() {
  animate.gotoAndPlay('left');
});

$('.j_ToRight').on('click', function() {
  animate.gotoAndPlay('right');
});

$('.j_ToFront').on('click', function() {
  animate.gotoAndPlay('front');
});

$('.j_ToBack').on('click', function() {
  animate.gotoAndPlay('back');
});
