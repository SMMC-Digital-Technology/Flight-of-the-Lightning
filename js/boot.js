/**
 * The very first stage of opening the game.
 * Use this to set game wide settting (eg physics.)
 */
var bootState = {
   create: function() {
      game.physics.startSystem(Phaser.Physics.ARCADE);

      game.canvas.oncontextmenu = function(e) {
         e.preventDefault();
      }

      game.state.start('load');
   }
};