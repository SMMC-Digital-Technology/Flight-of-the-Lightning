var playerConfigs = {
   level: 1,
   max_health: 10,
   fireRate: 180
}

const HORIZONTAL_SPEED_MAX = 200;
const SPEED_DELTA = 1;
const VERTICAL_SPEED_MIN = -200;
const VERTICAL_SPEED_MAX = 60;

const BULLET_SPEED = 350;

var player = null;

/**
 * Creates or moves the player on the screen
 * Sets default values
 */
function createPlayer(x, y) {
   // the player
   player = game.add.sprite(x, y, "F35");
   player.anchor.setTo(0.5, 0.5);
   player.scale.setTo(0.15, 0.15);
   game.physics.arcade.enable(player);

   player.health = playerConfigs.max_health;

   // weapon - bullets
   player.gun = game.add.weapon(100, 'bullet');
   player.gun.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
   player.gun.bulletSpeed = BULLET_SPEED;
   player.gun.fireRate = playerConfigs.fireRate;
   player.gun.trackSprite(player, 0, -player.height / 2);
}

/**
 * Moves the player towards the target x and y
 * coordinates
 */
function updatePlayer(tx, ty) {
   player.body.velocity.x = constrain((tx - player.x) * SPEED_DELTA, -HORIZONTAL_SPEED_MAX, HORIZONTAL_SPEED_MAX);
   player.body.velocity.y = constrain((ty - player.y) * SPEED_DELTA, VERTICAL_SPEED_MIN, VERTICAL_SPEED_MAX);


   if (game.input.activePointer.leftButton.isDown) {
      player.gun.fire();
   }
}