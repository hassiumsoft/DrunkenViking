var BasicGame = {};
BasicGame.Preload = function (game) {
    this.preloadBar = null;
};

BasicGame.Preload.prototype = {
    preload: function () {
        this.preloadBar = this.add.sprite((SCREEN_WIDTH - TILE_SIZE) / 2,
                                          (SCREEN_HEIGHT - TILE_SIZE) / 2,
                                          'platino');
        this.preloadBar.width = TILE_SIZE;
        this.preloadBar.height = TILE_SIZE;
        this.preloadBar.animations.add('bob', [0, 1], 4, true);
        this.preloadBar.animations.play('bob');
        this.load.setPreloadSprite(this.preloadBar);
        
        this.game.load.tilemap('level1', 'scripts/levels/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'images/Objects/tiles_dark.png');
        this.game.load.image('objects', 'images/Objects/Decor0.png');
        this.game.load.spritesheet('viking', 'images/viking.png', 16, 16);

        this.game.load.audio('step', 'sounds/step.wav');
        this.game.load.audio('bump', 'sounds/bump.wav');
    },

    create: function () {
        //this.preloadBar.cropEnabled = false;

        this.state.start('game');
    }
};
