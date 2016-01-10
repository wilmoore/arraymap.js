'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var map = require('./')

/*!
 * fixtures.
 */

function decode (letter) {
  return letter.charCodeAt()
}

var letters = [ 'a', 'b', 'c' ]
var decoded = [ 97, 98, 99 ]
var objects = [ { letter: 'a' }, { letter: 'b' }, { letter: 'c' } ]

/*!
 * tests.
 */

test('map()', function (t) {
  t.deepEqual(map(decode, letters), decoded, 'full application')
  t.deepEqual(map(decode)(letters), decoded, 'partial application')
  t.deepEqual(map('letter', objects), letters, 'dot-notation accessor is auto-created')
  t.end()
})
