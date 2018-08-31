/* eslint-env mocha */
const chai = require('chai')

describe('general', function () {
  it('guldEnv defined', function () {
    chai.assert.exists(guldEnv)
  })
  it('JS is string of name@version', function () {
    chai.assert.exists(guldEnv.JS)
    var result = guldEnv.JS
    chai.assert.exists(result)
    chai.assert.typeOf(result, 'string')
  })
  it('os returns promise of getos format object', async function () {
    chai.assert.isFunction(guldEnv.os)
    var result = await guldEnv.os()
    chai.assert.exists(result)
    chai.assert.isObject(result)
    chai.assert.typeOf(result.os, 'string')
    chai.assert.property(result, 'dist')
    chai.assert.property(result, 'release')
    chai.assert.property(result, 'codename')
  })
  it('protocol is a string', function () {
    chai.assert.typeOf(guldEnv.protocol, 'string')
  })
})
