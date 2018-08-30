const pify = require('pify')
const detectBrowser = require('detect-browser')
const global = require('window-or-global')
var getos
var gotos
var browser
try {
  getos = pify(require('getos'))
} catch (e) {
  getos = async function () {}
}

async function getGotOs () {
  if (gotos === undefined) gotos = await getos()
  return gotos
}

function getBrowser () {
  if (browser === undefined) browser = detectBrowser.detect()
  return browser
}

function setGlobal (key, v) {
  global[key] = v
  return v
}

function getJS () {
  if (global.JS) return global.JS
  browser = getBrowser()
  return setGlobal('JS', `${browser.name}@${browser.version}`)
}

async function getOS () {
  if (global.OS) return global.OS
  browser = getBrowser()
  if (browser && browser.os && browser.os !== '') return setGlobal('OS', browser.os)
  else {
    gotos = await getGotOs()
    if (gotos && gotos.os) return setGlobal('OS', gotos.os)
  }
  return ''
}

async function getDist () {
  if (global.DIST) return global.DIST
  gotos = await getGotOs()
  if (gotos.dist) return setGlobal('DIST', gotos.dist)
  return ''
}

async function getRelease () {
  if (global.OSRELEASE) return global.OSRELEASE
  gotos = await getGotOs()
  if (gotos && gotos.release) return setGlobal('OSRELEASE', `${gotos.release} ${gotos.codename}`)
  return ''
}

module.exports = {
  getJS: getJS,
  getOS: getOS,
  getDist: getDist,
  getRelease: getRelease,
  setGlobal: setGlobal
}
