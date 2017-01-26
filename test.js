const tap = require('tap')
const lib = require('./poResponse')

tap.test('test positive', t => {
    const test = lib({ isPositive: true })

    t.ok(test.q)
    t.ok(test.p)
    t.ok(test.n)

    t.end('returns valid shape')
})

tap.test('test negative', t => {
    const test = lib({ isPositive: false })

    t.ok(test.q)
    t.ok(test.p)
    t.ok(test.n)

    t.end('returns valid shape')
})
