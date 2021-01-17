class Stone{

    constructor(x,y,r){
        
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        //this.width = width;
        //this.height = height;
        this.image = loadImage("../IMG/stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(width,height){        
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y,pos.width,pos.height);
        rotate();
        imageMode(CENTER);
        image(this.image,0,0,width,height);
        //ellipseMode(CENTER);
        pop();
        
    }
}