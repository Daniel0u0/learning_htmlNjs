class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop() {
        const step = () => {
            
            //clean previous frame
            //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            //draw Lower layer
            this.map.drawLowerImage(this.ctx);

            //draw Game Objects, the below has error, cannot generate game objext
            Object.values(this.map.gameObjects).forEach(object => {
                //oject.x += 0.02;
                //object.sprite.draw(this.ctx);
            })

            //draw Upper layer
            this.map.drawUpperImage(this.ctx);

            //dont put step() here, will crash due to inf. loop

            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }


    init() {
        this.map = new OverworldMap (window.OverworldMaps.DemoRoom);
        this.startGameLoop();







        

    }

}