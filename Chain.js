class Rope{
    constructor(body1,body2){
        var options = {
            bodyA: body1,
            bodyB:body2,
            length: 250,
            stiffness: 0.5
        }
        this.sling = Constraint.create(options);
        this.body2 = body2
        World.add(world,this.sling);
    }
    display(){
            var pointA = this.sling.bodyA.position
            var pointB = this.sling.bodyB.position

            strokeWeight(5)
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }

}