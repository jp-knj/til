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

## OS 
The OS module prodives a set of operating system-level utility functions that allow you code ti be aware if the environment it's running in and make any necessary allowances for it.

- `os.EOL` - Provides you the end of line character the operating system uses.
- `os.cpus()` - Returns an object array where each object gives you information about the cpu in the system including information like thier model, speed, and times 
- `os.freemem()` - Returs an integer value that is the number of free system memory available in bytes.
- `os.homedir()` - Returns a path to the current home directory of th user runnig the process.
- `os.hostname()` - Returns the machine's host name
- `os.tempdir()` - Return s path to the default system temporary directory
