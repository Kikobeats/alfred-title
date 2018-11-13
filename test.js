import test from 'ava'
import alfyTest from 'alfy-test'

test(async t => {
  const alfy = alfyTest()

  t.deepEqual(await alfy('rainbow'), [
    {
      title: 'Rainbow',
      subtitle: 'Copy to clipboard',
      arg: 'Rainbow'
    }
  ])
})
