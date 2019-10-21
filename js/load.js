/**
 * Use this state to load all of your assets
 */
var loadState = {
   preload: function() {
      loadingLabel = game.add.text(80, 150, 'loading...', {
         font: '30px Courier',
         fill: '#ffffff'
      });

      // load all assets
      // player
      game.load.image("F35", "assets/F35.png");
      game.load.image("bullet", "assets/bullet.png");
      // scenery
      game.load.image("waves", "assets/waves.png");
      // enemies
      game.load.image("mig27", "assets/Mig-27.png")
   },

   create: function() {
      game.state.start('level');
   }

};