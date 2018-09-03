# guld-env

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-env) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-env/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/lib/guld-env.html)

[![node package manager](https://img.shields.io/npm/v/guld-env.svg)](https://www.npmjs.com/package/guld-env) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-env.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-env?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-guld-env.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-guld-env/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-env/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-env) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-env/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-env?type=dev)

Guld environment detection module.

### Install

##### Node

```sh
npm i guld-env
```
##### Browser

```sh
curl https///bitbucket.org/guld/tech-js-node_modules-guld-env/raw/guld/guld-env.min.js -o guld-env.min.js
```
##### Browser

```sh
curl https///bitbucket.org/guld/tech-js-node_modules-guld-env/raw/guld/guld-env.min.js -o guld-env.min.js
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

