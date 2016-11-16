import test from 'ava'
import execa from 'execa'

const expectedmd5 = '2983476ddcb6b388315fe8a5ad525a29'

test('cli', async t => {
  const value = await execa.stdout('./app.js', ['app.js', expectedmd5])
  t.is(value, 'All good!')
})

test('cli no args', async t => {
  const value = await execa.stdout('./app.js')
  t.is(value, 'A file name and md5 hash are required')
})

test('cli missing md5', async t => {
  const fileName = 'app.js'
  const value = await execa.stdout('./app.js', [fileName])
  t.is(value, `The hash of ${fileName} is ${expectedmd5}`)
})
