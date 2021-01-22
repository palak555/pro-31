const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];


var divisionHeight=300;
var ground1,ground2,ground3;
var line1,line2,line3,line4,line5,line6;


function setup() {
  createCanvas(715,800);
  engine = Engine.create();
  world = engine.world;
  

  for(var k = 0; k <=width; k=k +90){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));

 }

for (var p = 20; p <=width; p=p+50){
  plinkos.push(new Plinko(p,375));
}

for (var p = 20; p <=width-10; p=p+50){
  plinkos.push(new Plinko(p,175));
}

for (var p = 45; p <=width-20; p=p+50){
  plinkos.push(new Plinko(p,275));
}

for (var p = 45; p <=width-30; p=p+50){
  plinkos.push(new Plinko(p,75))
}

for (var p = 80; p <=width-10; p=p+50){
  plinkos.push(new Plinko(p,375));
}



  ground1=new Ground(300,795,900,10);
  ground2=new Ground(5,400,10,900);
  ground3=new Ground(710,400,10,900);


  line1=new Line(369,435,90,5)
  line2 = new Line(470,230,90,5)
  line3 = new Line(370,130,90,5)
  line4 = new Line(290,230,90,5)
  line5 = new Line(180,435,90,5)
  line6 = new Line(530,435,90,5)









  Engine.run(engine);
}

function draw() {
  background(0);  


  for (var k = 0; k< divisions.length; k ++){
    divisions[k].display();
  }

  for (p = 30; p< plinkos.length; p++){
    plinkos[p].display();
  }

  for (p = 15; p< plinkos.length; p++){
    plinkos[p].display();
  }


  for (p = 40; p< plinkos.length; p++){
    plinkos[p].display();
  }


  for (p = 15; p< plinkos.length; p++){
    plinkos[p].display();
  }

  if(frameCount%30===0){
    particles.push(new Particle(random(width/2-40,width/2+60),10,10));
  }
  


  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }


  ground1.display();
  ground2.display();
  ground3.display();

  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  line6.display();
 
  



























  drawSprites();
}