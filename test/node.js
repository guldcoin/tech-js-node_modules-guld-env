/* eslint-env mocha */
const chai = require('chai')
global.guldEnv = require('../index.js')

require('./general.js')

describe('node', function () {
  it('JS', function () {
    chai.assert.isTrue(guldEnv.JS.startsWith('node@'))
  })
  it('protocol is node', function () {
    chai.assert.equal(guldEnv.protocol, 'node')
  })
})
