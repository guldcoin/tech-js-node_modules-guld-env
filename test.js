/* global describe:false it:false */
const assert = require('chai').assert
const { getJS } = require('./index.js')

describe('node', function () {
  it('getJS', function () {
    assert.isTrue(getJS().startsWith('node@'))
  })
})
