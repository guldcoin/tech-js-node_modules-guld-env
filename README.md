# guld-env

[![npm](https://img.shields.io/npm/v/guld-env.svg)](https://www.npmjs.com/package/guld-env) [![Build Status](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-env.svg?branch=guld)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-env)

Guld environment detection and configuration module.

### Example Output

```
linux
Ubuntu Linux
18.04 bionic
node@10.5.0
```

### Install

```
npm i guld-env
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

