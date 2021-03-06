import test from 'tape'
import {longestStreak} from './index.js'

test('longestStreak(value, character)', function (t) {
  // @ts-ignore runtime
  t.equal(longestStreak(true, 't'), 1, 'should coerce to string')

  t.throws(
    function () {
      // @ts-ignore runtime
      longestStreak('', 0)
    },
    /Expected character/,
    'should throw when character is invalid (non-string)'
  )

  t.throws(
    function () {
      longestStreak('', 'incorrect')
    },
    /Expected character/,
    'should throw when character is invalid (too long string)'
  )

  t.equal(longestStreak('', 'f'), 0, 'should work (1)')
  t.equal(longestStreak('foo', 'o'), 2, 'should work (2)')
  t.equal(longestStreak('fo foo fo', 'o'), 2, 'should work (3)')
  t.equal(longestStreak('fo foo foo', 'o'), 2, 'should work (4)')
  t.equal(longestStreak('fo fooo fo', 'o'), 3, 'should work (5)')
  t.equal(longestStreak('fo fooo foo', 'o'), 3, 'should work (6)')
  t.equal(longestStreak('ooo', 'o'), 3, 'should work (7)')
  t.equal(longestStreak('fo fooo fooooo', 'o'), 5, 'should work (8)')
  t.equal(longestStreak('fo fooooo fooo', 'o'), 5, 'should work (9)')
  t.equal(longestStreak('fo fooooo fooooo', 'o'), 5, 'should work (10)')

  t.equal(longestStreak("'`'", '`'), 1, 'should match on one')

  t.end()
})
