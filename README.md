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
npm i -g guld-env
```

### Usage

```
// syncronous
console.log(getEnv())

// async
getDist().then(console.log)
getOS().then(console.log)
getRelease().then(console.log)
```

##### Node

```
const { getEnv, getDist, getOS, getRelease } = require('./index.js')
```

##### CLI

```
  Usage: cli [options] [command]

  Options:

    -V, --version  output the version number
    -h, --help     output usage information

  Commands:

    env            Get the execution environment (always node from CLI)
    os             Get the operating system.
    dist           Get the distro, if linux OS.
    release        Get the distro release, if linux OS.
    all            Get the os, distro, release, and environment. In that order.
```

