class Pirates {

    constructor(x,y,width,height,boatPos){

        var options={
            restitution:0.8,
            friction:1,
            density:1
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
        this.w=width;
        this.h=height;
        this.boatPosition=boatPos;
        this.image=loadImage("assets/boat.png")
    }
    remove(index){
        
        setTimeout(()=>{
          Matter.World.remove(world,boats[index].body);
          delete boats[index]
        },500)
    }
    
    display() {
        var pos=this.body.position;
        push ()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image (this.image,0,this.boatPosition,this.w,this.h)
        pop ()

    }

}