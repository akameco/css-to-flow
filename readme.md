# css-to-flow

[![Build Status](https://travis-ci.org/akameco/css-to-flow.svg?branch=master)](https://travis-ci.org/akameco/css-to-flow)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> create flow from css

## Install

```
$ npm install css-to-flow
```

## Usage

```js
const cssToFlow = require('css-to-flow')

const css = `
.a { color: red; }
.b:hover, .c::before {
  color: white;
}
.testClass, #id {color: black;}
`

cssToFlow(css)
/*
@flow
declare export default {|
  +'a': string,
  +'b': string,
  +'c': string,
  +'testClass': string,
|}
*/
```

## API

### `cssToFlow(css)`

#### css

Type: `string`

css source.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/css-to-flow/commits?author=akameco "Code") [📖](https://github.com/akameco/css-to-flow/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/css-to-flow/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
