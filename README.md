# md5is

[![Build Status](https://travis-ci.org/makenova/md5is.svg?branch=master)](https://travis-ci.org/makenova/md5is)

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

Type `md5is <filename> <[expected_md5]>` on the command line, the hash will
either be confirmed as correct or flagged as incorrect.

If the expected_md5 is omitted, then it will report the hash. For example,

```
md5is gimp-2.8.14.dmg 3392eb2cfe67258e7a3f8fc8807f00c0
All good!

md5is gimp-2.8.14.dmg
The hash of gimp-2.8.14.dmg is 3392eb2cfe67258e7a3f8fc8807f00c0
```

## Bugs

Please report any bugs to: <https://github.com/makenova/md5is/issues>

## License

Licensed under the MIT License: <https://opensource.org/licenses/MIT>
