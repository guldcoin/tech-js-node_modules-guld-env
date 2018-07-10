# guld-env

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
// syncronous
console.log(getJS()) // node@10.5.0

// async
getDist().then(console.log) // Ubuntu Linux
getOS().then(console.log) // linux
getRelease().then(console.log) // 18.04 bionic
```

##### Node

```
const { getEnv, getDist, getOS, getRelease } = require('guld-env')
```

##### CLI

The cli for this module is named `guld-env-cli` and is available from guld git hosts and npm.

```
npm i -g guld-env-cli
```

