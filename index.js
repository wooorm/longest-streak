'use strict';

/* Expose. */
module.exports = longestStreak;

/* Get the count of the longest repeating streak of
 * `character` in `value`. */
function longestStreak(value, character) {
  var count = 0;
  var maximum = 0;
  var index = -1;
  var length;

  value = String(value);
  length = value.length;

  if (typeof character !== 'string' || character.length !== 1) {
    throw new Error('Expected character');
  }

  while (++index < length) {
    if (value.charAt(index) === character) {
      count++;

      if (count > maximum) {
        maximum = count;
      }
    } else {
      count = 0;
    }
  }

  return maximum;
}
