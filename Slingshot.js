class Slingshot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        console.log(this.sling);
    }

    fly(){
        this.sling.bodyA = null;
        //null means empty or nothing => false
    }

    display(){
        if(this.sling.bodyA!=null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}