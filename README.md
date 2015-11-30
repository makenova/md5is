# nodeginx

A command line tool to check if a calculated md5 hash matches an expected value.
Only tested on OSX.

## Why?
This was simpler than wrestling with my limited bash "knowledge".

## Installation

This is an [NPM](https://www.npmjs.com) package, [Node.js](https://nodejs.org/en/) is a prerequisite.

```
$ npm install --g md5is
```

## Use

Type `md5is <filename> <expected_md5>` on the command line, the hash will
either be confirmed as correct or flagged as incorrect. For example,

```
md5is gimp-2.8.14.dmg 3392eb2cfe67258e7a3f8fc8807f00c0
All good!
```

## Bugs

Please report any bugs to: <https://github.com/makenova/md5is/issues>

## License

Licensed under the MIT License: https://opensource.org/licenses/MIT
