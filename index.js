const { detect } = require('detect-browser')
// expose all of platform.js to start with
module.exports = require('platform')

// declare and maybe define getos
var getos
if (module.exports.name === 'Node.js') getos = require('getos')
// overwrite browser info with detect-browser
const browser = detect()
if (browser) {
  module.exports.name = browser.name
  module.exports.version = browser.version
}

// getos used only in node to fill in OS details
if (typeof (getos) !== 'undefined' && module.exports.name === 'node') {
  module.exports.os = async () => {
    var info = await new Promise((resolve, reject) => {
      getos((e, r) => {
        if (e) reject(e)
        else resolve(r)
      })
    })
    return {
      os: info.os,
      dist: info.dist.replace(' Linux', ''),
      codename: info.codename,
      release: info.release
    }
  }
} else {
  // otherwise reformat os async function to match pify getos output
  var OS = module.exports.os
  module.exports.os = async () => {
    return {
      os: OS.family || OS,
      dist: undefined,
      codename: undefined,
      release: OS.version || undefined
    }
  }
}

// add legacy syntax
module.exports.JS = `${module.exports.name}@${module.exports.version}`
// add protocol
if (module.exports.name !== 'node' && typeof (window) !== 'undefined') module.exports.protocol = window.location.protocol.replace(':', '')
else module.exports.protocol = 'node'
