#!/usr/bin/env node

const positive = process.argv[2] === '-p'
const _ = require('lodash')
const tap = _.curryRight(_.tap)
const pick = e => tap(arr => console.log('-' + _.sample(arr[e])))

module.exports = _.flow(pick('q'), positive ? pick('p') : pick('n'))({
    q: ['Can we do it?', 'May we develop it?', 'Can we spend time on it?'],
    p: ['Hopefully client will buy it', 'I\'ll try to sell this idea to a client'],
    n: ['To specific', 'Not stable enough', 'Requires a lot of thinking first', 'To much traffic',
        'Not specific enough', 'This is not what we do', 'Do not fully understand the benefit',
        'I want all team focus on that subject', 'We don\'t have expertise in that area',
        'Not stable enough']
})
