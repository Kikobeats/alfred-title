'use strict'

const alfy = require('alfy')
const title = require('title')

const titleized = title(alfy.input)

alfy.output([
  {
    title: titleized,
    subtitle: 'Copy to clipboard',
    arg: titleized
  }
])
