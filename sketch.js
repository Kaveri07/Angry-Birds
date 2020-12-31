const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score = 0;
var number = 0;
var gameState = "onSling";
var bg;

function preload() {
    getbg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    box1 = new Box(700,355,70,70);
    box2 = new Box(920,355,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    pig1 = new Pig(810, 365);
    pig3 = new Pig(810, 274);
    log1 = new Log(810,260,300, PI/2);
    log3 =  new Log(810,180,300, PI/2);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    Engine.update(engine);

    if(backgroundImg){
        background(backgroundImg);
    } else {
        background("lightblue");
    }

    if(number===2) {
        reset();
        number = 0;
    }

    if(bg === "sprites/bg.png"){
        fill("black");
    }
    else{
        fill("white");
    }
    textSize(20);
    textFont("Courier New");
    text("Score: " + score, width-130, 20);
    text("Press space to get another chance. You only get two chances!", 10, 20);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();
    box5.display();
    log4.display();
    log5.display();
    bird.display();
    slingshot.display();
    platform.display();
}

async function getbg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if (hour > 6 && hour <= 18) {
        bg="sprites/bg.png"
    }
    else{
        bg="sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg);
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode===32) {
        Matter.Body.setPosition(bird.body, {x:200, y:50});
        slingshot.attach(bird.body);
        bird.trajectory = [];
        gameState = "onSling";
        number++;
    }
}

function reset() {
    score = 0;
    bird.reset();
    box1.reset();
    box2.reset();
    box3.reset();
    box4.reset();
    box5.reset();
    log1.reset();
    log3.reset();
    log4.reset();
    log5.reset();
    pig1.reset();
    pig3.reset();
    Matter.Body.setAngle(log1.body,PI/2);
    Matter.Body.setAngle(log3.body,PI/2);
    Matter.Body.setAngle(log4.body,PI/7);
    Matter.Body.setAngle(log5.body,-PI/7);
}