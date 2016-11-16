#!/usr/bin/env node

'use strict'

var fs = require('fs')
var hash = require('crypto').createHash('md5')

var fileName = process.argv[2]
var expectedmd5 = process.argv[3]

if(fileName === undefined) {
  console.log('A file name and md5 hash are required')
  process.exit()
}

fs.createReadStream(`./${fileName}`)
  .on('data', (data) => hash.update(data, 'utf8'))
  .on('end', () => {
    var calculatedhash = hash.digest('hex')
    if(calculatedhash === expectedmd5) {
      console.log('All good!')
      process.exit(0)
    } else {
      console.log('The hash does not match')
      process.exit(1)
    }
  })
