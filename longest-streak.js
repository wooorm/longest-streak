(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.longestStreak = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Get the count of the longest repeating streak of
 * `character` in `value`.
 *
 * @example
 *   longestStreak('` foo `` bar `', '`') // 2
 *
 * @param {string} value - Content, coerced to string.
 * @param {string} character - Single character to look
 *   for.
 * @return {number} - Number of characters at the place
 *   where `character` occurs in its longest streak in
 *   `value`.
 * @throws {Error} - when `character` is not a single
 *   character.
 */
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

/*
 * Expose.
 */

module.exports = longestStreak;

},{}]},{},[1])(1)
});