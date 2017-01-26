#!/usr/bin/env node
const isPositive = process.argv[2] === '-p'

require('./poResponse')({ isPositive })
