var canvas;
var stage;
var container;
var bitmap;
canvas = document.getElementById('demo');
stage = new createjs.Stage(canvas);
container = new createjs.Container();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

stage.addChild(container);

var image = new Image();
image.src = "./750-400.jpg";
image.onload = handlerImageLoad;

function handlerImageLoad(event) {
  var bitmap = new createjs.Bitmap(event.target);
  bitmap.x = canvas.width - bitmap.getBounds().width >> 1;
  bitmap.y = canvas.height - bitmap.getBounds().height >> 1;
  container.addChild(bitmap);
  stage.update();
}

var spriteSheet = new createjs.SpriteSheet({
	/*
	imagesArr
	images: ['./banner1.png', './banner2.png', 'banner3.png'],
	frames: {width: 300, height: 200, regX: 0, regY: 0, count: 3},
	*/

	images: ["./bannerSprite.png"],
	// frames: {width: 400, height: 268, regX: 0, regY: 0, count: 3},
	frames: [
		[0, 0, 400, 268, 0],
		[0, 268, 400, 268, 0],
		[0, 536, 400, 268, 0]
	],
	animations: {
		run: {
			frames: [0, 1, 2, 0, 1, 2],
			next: 'jump'
		},
		jump: {
			frames: [1, 0, 1, 0,]			
		}
	}
});

createjs.Ticker.setFPS(1);
createjs.Ticker.addEventListener("tick", stageBreakHandler);
var animate = new createjs.Sprite(spriteSheet, 'run');
stage.addChild(animate);

function stageBreakHandler(event){
  stage.update();
}