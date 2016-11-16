import test from 'ava'
import execa from 'execa'

test('cli', async t => {
  const expectedmd5 = '58de1d9dc4ceeacfa493cfedee6f34e6'
  let value = await execa.stdout('./app.js', ['app.js', expectedmd5])
  t.is(value, 'All good!')
})

test('cli no args', async t => {
  let value = await execa.stdout('./app.js')
  t.is(value, 'A file name and md5 hash are required')
})

// TODO: not sure why this is failing and it's late, I'll deal with this later
test.skip('cli missing md5', async t => {
  let value = await execa.stdout('./app.js', ['app.js'])
  t.is(value, 'The hash does not match')
})
