## [v1.2.1](https://github.com/bsara/stylelint-config-bsara/tree/v1.2.1) - 2017-10-12

#### Added

- [`number-max-precision`][rule-number-max-precision]: Max precision for pixel values (`px`) is
  now constrained to `0` _(because fractions of pixels are usually rounded to a whole number)_.
- [`order/properties-order`][rule-order-properties-order]: `composes` property is required to be
  the first property defined _(if present)_ in a block, with all other properties following it.

#### Updated

- [`declaration-block-no-duplicate-properties`][rule-declaration-block-no-duplicate-properties]:
  Added ignored property `composes`.
- [`rule-empty-line-before`][rule-rule-empty-line-before]: Updated from `'always'` to
  `'always-multi-line'`.
- [`order/order`][rule-order-order]: Changed severity to `'warning'`. Also removed `less-mixins`
  and `at-rule`. Added `at-rule` for `@extend` and `@apply` rules _(they are required to be at
  the top of a block)_.

#### Disabled

- [`block-opening-brace-newline-before`][rule-block-opening-brace-newline-before]: Creating
  problems in situations like the example below, disabling until I can figure out how to make it
  work the way I want.
  *Example:*
  ```css
  .text-size-500 { font-size: 16px; }
  .text-size-100 { font-size: 0.5em; }
  .text-size-200 { font-size: 0.6em; }
  ```

#### Removed

- [`block-closing-brace-space-after`][rule-block-closing-brace-space-after]: Running into conflicts
  with this rule and not needed because `block-opening-brace-newline-after` is setup to prevent
  ending and starting a new block on the same line.

#### Misc

- Updated dependecies to latest versions:
  - stylelint@^8.2.0
  - stylelint-order@^0.7.0
  - stylelint-scss@^2.1.0
  - npm-scripts-versioning@^1.0.0-beta.8



## [v1.1.0](https://github.com/bsara/stylelint-config-bsara/tree/v1.1.0) - 2017-07-21

#### Updated

- [`color-hex-length`][rule-color-hex-length]: Changed from `'long'` to `'short'`.



## [v1.0.1](https://github.com/bsara/stylelint-config-bsara/tree/v1.0.1) - 2017-07-21

#### Updated

- Polished/refined rule set.


#### Fixed

- Fixed some typos in rule configurations.



## [v1.0.0](https://github.com/bsara/stylelint-config-bsara/tree/v1.0.0) - 2017-07-20

- Initial Release



[rule-block-opening-brace-newline-before]:        https://stylelint.io/user-guide/rules/block-opening-brace-newline-before/        "Stylelint Rule: block-opening-brace-newline-before"
[rule-color-hex-length]:                          https://stylelint.io/user-guide/rules/color-hex-length/                          "Stylelint Rule: color-hex-length"
[rule-declaration-block-no-duplicate-properties]: https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/ "Stylelint Rule: declaration-block-no-duplicate-properties"
[rule-number-max-precision]:                      https://stylelint.io/user-guide/rules/number-max-precision/                      "Stylelint Rule: number-max-precision"
[rule-rule-empty-line-before]:                    https://stylelint.io/user-guide/rules/rule-empty-line-before/                    "Stylelint Rule: rule-empty-line-before"

[rule-order-order]:            https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md#readme            "Stylelint Order Rule: order"
[rule-order-properties-order]: https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md#readme "Stylelint Order Rule: properties-order"
