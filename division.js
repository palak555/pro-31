class Divisions {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.division = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.division);
    }
    display(){
      push();
      var pos =this.division.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }