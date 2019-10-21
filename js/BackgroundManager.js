/**
 * Manages the background sprites.
 */
const BACKGROUND_SPEED = 75;
const MAX_WAVES = 100;

var waves;

function createBackground() {
   waves = game.add.group();
   waves.enableBody = true;
   for (var i = 0; i < MAX_WAVES; i++) {
      var wave = waves.create(game.world.randomX - 32, game.world.randomY - 32, "waves");
      wave.body.velocity.y = BACKGROUND_SPEED;
   }
}

function updateBackround() {
   waves.forEach(positionCheck, this, this);
}

function positionCheck(item) {
   if (item.y > game.world.height) {
      item.y = -10 - item.height;
      item.x = game.world.randomX - item.width;
   }
}