/* eslint-env mocha */
const assert = require('chai').assert

describe('chromium', function () {
  it('getJS', function () {
    assert.isTrue(guldEnv.getJS().startsWith('chrome@'))
  })
})
