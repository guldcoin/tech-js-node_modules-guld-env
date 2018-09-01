# guld-env

[![npm](https://img.shields.io/npm/v/guld-env.svg)](https://www.npmjs.com/package/guld-env) [![Build Status](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-env.svg?branch=guld)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-env) [![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-env) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-env/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/lib/guld-env.html)

Guld environment detection module.

### Install

##### Node

```sh
npm i  guld-env
```
##### Browser

```sh
curl https://bitbucket.org/guld/tech-js-node_modules-guld-env.git/raw/guld/guld-env.min.js -o guld-env.min.js
```
##### Browser

```sh
curl https://bitbucket.org/guld/tech-js-node_modules-guld-env.git/raw/guld/guld-env.min.js -o guld-env.min.js
```

### Usage

```
// properties
console.log(guldEnv.name) // chrome
console.log(guldEnv.version) // 70.x.x
console.log(guldEnv.JS) // chrome@70.x.x
console.log(guldEnv.protocol) // file

// async
guldEnv.os().then(console.log)
/*
{ os: 'linux',
  dist: 'Ubuntu',
  codename: 'bionic',
  release: '18.04' }
*/
```

##### Node

```
const guldEnv = require('guld-env')
```

##### Browser

```
<script src="guld-env.min.js"></script>
```

##### CLI

The cli for this module is named `guld-env-cli` and is available from guld git hosts and npm.

```
npm i -g guld-env-cli
```

### License

MIT Copyright isysd

