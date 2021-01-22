class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.7,
            friction:0,
            
        }

        this.plinko=Bodies.circle(x,y,10,options);
        World.add(world,this.plinko)
    }

    display(){
        push()
        ellipseMode(RADIUS)
        fill("white")
        ellipse(this.plinko.position.x,this.plinko.position.y,10,10)
        pop()
    }    
}