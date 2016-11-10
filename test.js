'use strict';

var test = require('tape');
var longestStreak = require('./');

test('longestStreak(value, character)', function (t) {
  t.equal(longestStreak(true, 't'), 1, 'should coerce to string');

  t.throws(
    function () {
      longestStreak(true, 0);
    },
    /Expected character/,
    'should throw when character is invalid (non-string)'
  );

  t.throws(
    function () {
      longestStreak(true, 'incorrect');
    },
    /Expected character/,
    'should throw when character is invalid (too long string)'
  );

  t.equal(longestStreak('', 'f'), 0, 'should work (1)');
  t.equal(longestStreak('foo', 'o'), 2, 'should work (2)');
  t.equal(longestStreak('fo fooo fo', 'o'), 3, 'should work (3)');
  t.equal(longestStreak('ooo', 'o'), 3, 'should work (4)');

  t.end();
});
