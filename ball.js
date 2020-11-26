class Ball{
    constructor(x,y,r){
        var options={
            restitution:1,
            friction:0,
            frictionAir:0,
            slop:1,
            inertia:Infinity      }
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("black");
        strokeWeight(3);
        stroke("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }
}