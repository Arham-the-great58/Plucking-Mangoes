class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)

    }
    display(width,height){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y,);
        rectMode(CENTER);
        rotate();
        pop();
        rect(600,700,1300,25);
    }

}