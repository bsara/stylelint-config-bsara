# @bsara/stylelint-config [![NPM Package](https://img.shields.io/npm/v/@bsara/stylelint-config.svg?style=flat-square)][npm]


[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)][license]


[Stylelint][stylelint] shareable configs for stylesheet coding standards created by
[bsara][bsara-home].


[Changelog](https://github.com/bsara/stylelint-config-bsara/blob/master/CHANGELOG.md)




# Install

**Project Install**
```bash
$ npm install --save-dev stylelint @bsara/stylelint-config
```

**Global Install**
```bash
$ npm install -g stylelint @bsara/stylelint-config
```




# Usage

Create a [stylelint configuration file][docs-configuration] at the root of your project
called `.stylelintrc` and add the following to file:

```json
{
  "extends": "@bsara/stylelint-config"
}
```

Your local configuration will inherit all of the settings/rules defined by `@bsara/stylelint-config`.
Any settings/rules found in your local configuration file that conflict with a setting/rule
found in `@bsara/stylelint-config` will override whatever is found in `@bsara/stylelint-config`.




# License

ISC License (ISC)

Copyright (c) 2017, Brandon D. Sara (http://bsara.pro/)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.



[bsara-home]: http://bsara.pro/
[license]:    https://github.com/bsara/stylelint-config-bsara/blob/master/LICENSE "License"
[npm]:        https://www.npmjs.com/package/@bsara/stylelint-config               "NPM Package: @bsara/stylelint-config"

[config-file-formats]: https://stylelint.io/user-guide/configuration/ "stylelint Docs: Configuration"
[stylelint]:           https://stylelint.io/                          "stylelint Home"
