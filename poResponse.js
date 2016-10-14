#!/usr/bin/env node

const _ = require('lodash')
const tap = _.curryRight(_.tap)
const ask = tap(_.flow(_.first, console.log))

module.exports = _.flow(ask,  _.sample, console.log)([
    '- Can we do it?',
    'to specific', 'not stable enough', 'requires a lot of thinking first', 'to much traffic',
    'not specific enough', 'this is not what we do', 'i\'ll try to sell this idea to a client',
    'hopefully client will buy it', 'do not fully understand the benefit',
    'i want all team focus on that subject', 'we don\'t have expertise in that area'
])
