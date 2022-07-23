var imagemDaTorre, torre;
var imagemFantasma, fantasma;
var imagemFantasminhas, fatasminhas ,grupodeFantasminhas;
var imagemFogo, fogo,Fogo, grupodeFogo
var imagemEstrela, grupodeEstrelas, estrela;
var imagemFaca , grupodeFacas , faca;
var solo,imagemSolo;
var JOGAR= 1;
var ENCERRAR= 0;
var estadoJogo= 1;

var pontuacao= 0 

 

function preload(){
  imagemDaTorre = loadImage("tower.png");
  imagemFantasma = loadImage("ghost-standing.png");
  imagemFantasminhas = loadImage("fantasma2.png")
  imagemFogo = loadImage("fogo.png")
  imagemEstrela = loadImage("estrela .png");
  imagemFaca = loadImage("faca.png");
 
}

function setup(){
  createCanvas(600,600);
  torre = createSprite(300,300);
  torre.addImage("tower",imagemDaTorre);
  torre.y= torre.height/2;
  // torre.velocityY = 1;
  
  fantasma = createSprite(200,200,50,50)
  fantasma.addImage(imagemFantasma)
  fantasma.scale= 0.3
  
 
  //fantasminhas= createSprite(200,200,50,50)
  //fantasminhas.addImage(imagemFantasminhas)
  //fantasminhas.scale= 0.3 
  
  //fogo = createSprite(200,100,50,50)
  //fogo.addImage(imagemFogo)
  //fogo.scale= 0.1
  
  
  grupodeFacas = new Group ()
  grupodeFantasminhas = new Group ()
  grupodeFogo = new Group()
  grupodeEstrelas = new Group()
  
  
  }


function draw(){

 // if(torre.y > 0){
    //torre.y= torre.height/2;
  //}
  if(estadoJogo===JOGAR){
  background (0)
  //if (solo.x < 0){
   // solo.x = solo.width/2;}
  if (torre.y > 100){
    torre.y = torre.width/2;
  }
  
  
  if (keyDown ("left")){
    fantasma.x= fantasma.x-3
    
  }
   if (keyDown ("right")){
    fantasma.x= fantasma.x+3
    
  }
  if (keyDown ("space")){
   fantasma.velocityY = -10
   camera.position.y = fantasma.y
  }
   fantasma.velocityY = fantasma.velocityY+0.8
    
  }

  
  gerarFogo()
  gerarFantasminhas()
  gerarEstrelas()
  gerarFacas()
  
  
   if(grupodeFantasminhas.isTouching(fantasma)){
    grupodeFantasminhas.destroyEach()
     pontuacao=pontuacao+3
    
   }
  if(grupodeFogo.isTouching(fantasma)){
    estadoJogo=ENCERRAR    
    grupodeFogo.destroyEach()
    fantasma.velocity= 0
    
   }
else if(grupodeFacas.isTouching(fantasma)){
    estadoJogo= ENCERRAR    
    //grupodeFacas.destroyEach()
    fantasma.velocity= 0
   
     }
else if(grupodeEstrelas.isTouching(fantasma)){
     grupodeEstrelas.destroyEach()
     pontuacao=pontuacao+5
   }
  if (fantasma.y > 600){
    estadoJogo= ENCERRAR
  }
   
  drawSprites()
  textSize(20);
  fill(255);
  text("pontuacao: "+ pontuacao,150,30);
  
  if(estadoJogo===ENCERRAR){
    //fantasma.setVelocityXEach(0)
    grupodeFogo.setVelocityXEach(0)
    grupodeEstrelas.setVelocityXEach(0)
    grupodeFantasminhas.setVelocityXEach(0)
    grupodeFacas.setVelocityXEach(0)
    background ("blue")
    text("Game Over, fantasma morreu :( ",170,250)
    fill("yellow")
    textSize(40)
  }
}

 

function gerarFantasminhas(){
  if (frameCount % 350 === 0){
    var fantasminhas = createSprite(200,-50)
    fantasminhas.x = Math.round(random(120,400))
    fantasminhas.addImage(imagemFantasminhas)
    fantasminhas.velocityY = 2
    fantasminhas.lifeTime = 680
    fantasminhas.scale= 0.2
    grupodeFantasminhas.add(fantasminhas)
  }
}
 function gerarFogo(){  
   if (frameCount % 200 === 0){
  var Fogo = createSprite(200,-40)
    //Fogo = Math.round(random(120,500)) 
    Fogo.addImage(imagemFogo );
    Fogo.velocityY = 2
    Fogo.lifeTime = 680
    Fogo.scale= 0.1
    grupodeFogo.add(Fogo) 
   }
}
function gerarEstrelas(){  
  if (frameCount % 450 === 0){
  var estrela = createSprite(200,-5)
  estrela.x = Math.round(random(120,500))
  estrela.addImage(imagemEstrela )
  estrela.velocityY = 3
  estrela.lifeTime =680
  estrela.scale = 0.1
    grupodeEstrelas.add(estrela)
  }
}
function gerarFacas(){  
  if (frameCount % 450 === 0){
  var faca = createSprite(200,-5)
  faca.x = Math.round(random(120,500))
  faca.addImage(imagemFaca )
  faca.velocityY = 2
  faca.lifeTime =680
  faca.scale = 0.2
    grupodeFacas.add(faca)
    
  }
}
