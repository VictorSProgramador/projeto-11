var homem, chao;
var homemImage, chaoImage
var borda1, borda2

function preload(){
  //imagens pré-carregadas
  chaoImage = loadImage("path.png")
  homemImage = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  chao = createSprite(200, 200);
  chao.addImage(chaoImage);
  chao.velocityY = -10;

  
  borda2 = createSprite(50, 200, 20, 400);

  homem = createSprite(200, 350);
  homem.addAnimation("correndo", homemImage);
  homem.scale = 0.1;

  borda1 =createSprite(350, 200, 20, 400);
}

function draw() {
  background(0);

  homem.x = mouseX

if(homem.isTouching(borda1)||homem.isTouching(borda2)){
  homem.collide(borda1)
  homem.bounceOff(borda2)
}

  

  if(chao.y < 0){
    chao.y = chao.height/2
  }

  drawSprites();
}
