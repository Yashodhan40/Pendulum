class Rope{
    constructor(bodyA,anchor){
        var options={
            bodyA:bodyA,
            pointB:anchor,
            
            stiffness:1,
            angularStiffness:1,
            length:200
        }
        this.bodyA=bodyA;
        this.pointB=anchor;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        
    }
    attach(body){
        this.rope.bodyA=body
    }

    display(){
        if (this.rope.bodyA){

        var pointA=this.bodyA.position;
        var pointB=this.pointB;
       // push();
        //translate(pointA.x,pointA.y,pointB.x,pointB.y);
        strokeWeight(3);
        stroke("white");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
       // pop();
        }
    }
}