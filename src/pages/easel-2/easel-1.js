// var spriteSheet = new createjs.SpriteSheet({
// 	images: ["./bannerSprite.png"], 
// 	frames: {width: 300, height: 200, regX: 0, regY: 0, count: 3},
// 	animations: {
// 		run: [0, 1, 'jump'],
// 		jump: [0, 2]
// 	}
// });

var spriteSheet = new createjs.SpriteSheet({
	/*
	imagesArr
	images: ['./banner1.png', './banner2.png', 'banner3.png'],
	frames: {width: 300, height: 200, regX: 0, regY: 0, count: 3},
	*/


	images: ["./bannerSprite.png"],
	frames: {width: 300, height: 200, regX: 0, regY: 0, count: 3},
	// frames: [
	// 	[0, 0, 300, 200, 0],
	// 	[0, 200, 300, 200, 0],
	// 	[0, 400, 300, 200, 0]
	// ]
	animations: {
		run: {
			frames: [0, 2, 0, 1],
			next: 'jump'
		},
		jump: {
			frames: [2, 0, 2, 0,]			
		}
	}
});

var canvas;
var stage;
canvas = document.getElementById("demo");

stage = new createjs.Stage(canvas);
createjs.Ticker.setFPS(1);
createjs.Ticker.addEventListener("tick", stageBreakHandler);
var animate = new createjs.Sprite(spriteSheet, 'run');
stage.addChild(animate);

function stageBreakHandler(event){
  stage.update();
}
