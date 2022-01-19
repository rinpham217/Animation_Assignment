class Superman {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./ninja_sprite.png"), 0, -275, 113, 385, 6, 0.5);
       // this.animator = new Animator(ASSET_MANAGER.getAsset("./girl-walk.png"), 0, 0, 140, 218, 9, 0.3);
      // this.animator = new Animator(ASSET_MANAGER.getAsset("./ninja10.png"), 0, -275, 153, 385, 10, 0.5);
        this.x = 0;
        this.y = 0;
        this.speed = 3;
    
    };

    update() {
        this.x += this.speed + this.game.clockTick;
        if (this.x > 370) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}