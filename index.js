// @flow
'use strict'
const findClasses = require('find-css-classes')

module.exports = (input /*: string */) /*: string */ => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`)
  }

  const types = Array.from(findClasses(input))
    .map(key => `  +'${key}': string,`)
    .join('\n')
  const result = `
// @flow
declare export default {|
${types}
|}
  `

  return result
}
