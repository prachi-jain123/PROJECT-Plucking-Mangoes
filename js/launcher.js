class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.launcherObj = Constraint.create(options);
        World.add(world, this.launcherObj);
    }

    attach(Body){
    this.launcherObj.bodyA = body
    }

    fly(){
        this.launcherObj.bodyA=null
        }

    display(){
        if (this.launcherObj.bodyA){
            var pointA = this.launcherObj.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
}