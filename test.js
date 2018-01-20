// @flow
const m = require('.')

test('return flow definition', () => {
  const css = `
  .a {color: red;}
  .b:hover, .c::before {
  color: white;
  }
  .testClass, #id {color: black;}
  `

  expect(m(css)).toBe(`
// @flow
declare export default {|
  +'a': string,
  +'b': string,
  +'c': string,
  +'testClass': string,
|}
  `)
})
