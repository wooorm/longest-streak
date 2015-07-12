'use strict';

/* eslint-env mocha */

/*
 * Dependencies.
 */

var longestStreak = require('./');
var assert = require('assert');

/*
 * Tests.
 */

describe('longestStreak(value, character)', function () {
    it('should coerce to string', function () {
        assert.equal(longestStreak(true, 't'), 1);
    });

    it('should throw when character is invalid', function () {
        assert.throws(function () {
            longestStreak(true, 0);
        }, /Expected character/);

        assert.throws(function () {
            longestStreak(true, 'incorrect');
        }, /Expected character/);
    });

    it('should work', function () {
        assert.equal(longestStreak('', 'f'), '');
        assert.equal(longestStreak('foo', 'o'), 2);
        assert.equal(longestStreak('fo fooo fo', 'o'), 3);
        assert.equal(longestStreak('ooo', 'o'), 3);
    });
});
