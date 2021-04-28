class  Iron {
    constructor(x,y,width,height){
        var options ={

            'density':12,
            'friction':3,
            'restitution':1

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        var angle = this.body.angle;
        World .add(world,this.body);
    }
    display(){

        var stonepos = this.body.position;
        push ()
        translate (stonepos.x,stonepos.y);
        //rotate (angle);
        rectMode(CENTER);
        //strokeWeight(2);
        //stroke("grey")
        fill ("grey")
        rect(0,0,this.width,this.height);
        pop ();

    }
}