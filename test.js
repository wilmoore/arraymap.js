'use strict'

/*!
 * imports.
 */

var decode = require('punycode').ucs2.decode
var test = require('tape-catch')

/*!
 * imports (local).
 */

var map = require('./')

/*!
 * fixtures.
 */

var ucs2decode = (letter) => decode(letter)[0]
var characters = ['a', 'b', 'c']
var codepoints = [ 97, 98, 99 ]
var collection = [ { char: 'a' }, { char: 'b' }, { char: 'c' } ]

/*!
 * tests.
 */

test('map()', function (t) {
  t.deepEqual(map(ucs2decode, characters), codepoints, 'full application')
  t.deepEqual(map(ucs2decode)(characters), codepoints, 'partial application')
  t.deepEqual(map('char', collection), characters, 'dot-notation accessor is auto-created')
  t.end()
})
