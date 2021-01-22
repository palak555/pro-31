class Line {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.line = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.line);
    }
    display(){
      push();
      var pos =this.line.position;
      rectMode(CENTER);
      fill("aqua");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }