#!/usr/bin/env node

'use strict'

let fs = require('fs')
let hash = require('crypto').createHash('md5')

const fileName = process.argv[2]
const expectedmd5 = process.argv[3]

if(fileName === undefined) {
  console.log('A file name and md5 hash are required')
  process.exit()
}

fs.createReadStream(`./${fileName}`)
  .on('data', (data) => hash.update(data, 'utf8'))
  .on('end', () => {
    const calculatedhash = hash.digest('hex')
    if(!expectedmd5) {
      console.log(`The hash of ${fileName} is ${calculatedhash}`)
      process.exit(0)
    }
    if(calculatedhash === expectedmd5) {
      console.log('All good!')
      process.exit(0)
    } else {
      console.log('The hash does not match')
      process.exit(1)
    }
  })
