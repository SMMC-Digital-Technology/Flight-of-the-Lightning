/**
 * Helper functions for the game.
 */

/**
 * Checks the input value is between the specified
 * maximum and minimum. If it is not, it is set to
 * max or min.
 */
function constrain(value, min, max) {
   return Math.max(Math.min(value, max), min);
}