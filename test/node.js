/* eslint-env mocha */
const assert = require('chai').assert
const guldEnv = require('../index.js')

describe('node', function () {
  it('getJS', function () {
    assert.isTrue(guldEnv.getJS().startsWith('node@'))
  })
})
