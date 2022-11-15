import assert from 'node:assert/strict'
import test from 'node:test'
import {longestStreak} from './index.js'

test('longestStreak(value, character)', function () {
  // @ts-expect-error Incorrect `value`.
  assert.equal(longestStreak(true, 't'), 1, 'should coerce to string')

  assert.throws(
    function () {
      // @ts-expect-error Incorrect `character`.
      longestStreak('', 0)
    },
    /Expected character/,
    'should throw when character is invalid (non-string)'
  )

  assert.throws(
    function () {
      longestStreak('', 'incorrect')
    },
    /Expected character/,
    'should throw when character is invalid (too long string)'
  )

  assert.equal(longestStreak('', 'f'), 0, 'should work (1)')
  assert.equal(longestStreak('foo', 'o'), 2, 'should work (2)')
  assert.equal(longestStreak('fo foo fo', 'o'), 2, 'should work (3)')
  assert.equal(longestStreak('fo foo foo', 'o'), 2, 'should work (4)')
  assert.equal(longestStreak('fo fooo fo', 'o'), 3, 'should work (5)')
  assert.equal(longestStreak('fo fooo foo', 'o'), 3, 'should work (6)')
  assert.equal(longestStreak('ooo', 'o'), 3, 'should work (7)')
  assert.equal(longestStreak('fo fooo fooooo', 'o'), 5, 'should work (8)')
  assert.equal(longestStreak('fo fooooo fooo', 'o'), 5, 'should work (9)')
  assert.equal(longestStreak('fo fooooo fooooo', 'o'), 5, 'should work (10)')

  assert.equal(longestStreak("'`'", '`'), 1, 'should match on one')
})
