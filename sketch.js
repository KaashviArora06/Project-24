const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var hammer;

var iron1,iron2;

var stone1,stone2;

var rubber1,rubber2,rubber3,rubber4;
var rubber5,rubber6,rubber7,rubber8;


function setup(){

    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);

    iron1 = new Iron(200,200,200,50);
    iron2 = new Iron(600,200,200,100);

    stone1 = new Stone(500,100,100,50);
    stone2 = new Stone(800,100,100,50);

    rubber1 = new Rubber(300,100,10);
    rubber2 = new Rubber(350,100,10);
    rubber3 = new Rubber(250,100,10);
    rubber4 = new Rubber(450,100,10);
    rubber5 = new Rubber(445,100,10);
    rubber6 = new Rubber(490,100,10);
    rubber7 = new Rubber(460,100,10);
    rubber8 = new Rubber(475,100,10);
    
}

function draw(){

    background("lightBlue");

    Engine.update(engine);


    plane.display();
    hammer.display();

    iron1.display();
    iron2.display();

    stone1.display();
    stone2.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();

}