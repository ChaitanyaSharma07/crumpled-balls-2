class Paper {
    constructor (x, y) {
        var options = {
            isStatic: false,
            restitution: 0.6,
            density: 1.2,
            friction: 0.5
        }
        this.radius = 30;
        this.body = Bodies.circle(x, y, 30, options);
        this.image = loadImage("paperimage.png")
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        
        image(this.image, 0, 0, this.radius * 2, this.radius * 2);
        pop();
    }


}
