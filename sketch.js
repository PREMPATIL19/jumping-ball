var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 surface1=createSprite(100,560,200,10)
 surface1.shapeColor="blue"
 surface2=createSprite(300,560,200,10)
 surface2.shapeColor="red"
 surface3=createSprite(500,560,200,10)
 surface3.shapeColor="black"
surface4=createSprite(700,560,200,10)
 surface4.shapeColor="yellow"
 ball=createSprite(random(20,750),100,40,40)
 ball.shapeColor="white"
 ball.velocityX=4
 ball.velocityY=9
edges=createEdgeSprites()

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
ball.bounceOff(edges)
if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
    ball.shapeColor="blue"
    music.play()
    ball.velocityX=0
 ball.velocityY=0
    
}
if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
    ball.shapeColor="red"
    music.play()
    ball.velocityX=0
 ball.velocityY=0
}
if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
    ball.shapeColor="black"
    music.play()
    ball.velocityX=0
    ball.velocityY=0
}
if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
    ball.shapeColor="yellow"
    music.play()
    ball.velocityX=0
 ball.velocityY=0
}

drawSprites()
    //add condition to check if box touching surface and make it box
}
