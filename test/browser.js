/* eslint-env mocha */
const chai = require('chai')

require('./general.js')

describe('chromium', function () {
  it('JS is string of name@version', function () {
    chai.assert.isTrue(guldEnv.JS.startsWith('chrome@'))
  })
  it('protocol is file', function () {
    chai.assert.equal(guldEnv.protocol, 'file')
  })
})
