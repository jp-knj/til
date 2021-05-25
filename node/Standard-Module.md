## File System
the file system module is one of the more often-used module avaiable. It provide you an API for working with the local file system in a pattern that closely matches that of the standard POSIX functions.

To use this modules

```
const fs = require("fs");
```

- `fs.copyFile()`
- `fs.copyFileSync()`
- `fs.readFile()`
- `fs.unlink()`
- `fs.mkdir()`
- `fs.mkdir()`
- `fs.rmdir()`
- `fs.stat()`
- `fs.readdir()`

## HTTP and HTTPS

```
const fs = require("fs");
const server = require("https").createServer(
    {
        key : fs.readFileSync("my_key.pem),
        cert : fs.readFileSync("my_cert.pem)
    }
)
```
