/**
 * @bsara/stylelint-config v1.1.1
 *
 * ISC License (ISC)
 *
 * Copyright (c) 2017, Brandon D. Sara (http://bsara.pro/)
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS' AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */
module.exports = {

  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-suitcss'
  ],


  rules: {

    // General
    // ----------------------------------------------------------

    // Errors

    'comment-no-empty':                 true,
    'comment-whitespace-inside':        'always',
    'comment-word-blacklist':           [ 'temp:', 'TEMP:' ],
    'indentation':                      2,
    'max-line-length':                  [ 90, { ignore: [ 'non-comments' ] } ],
    'max-nesting-depth':                [ 3, { ignore: [ 'blockless-at-rules' ] } ],
    'no-duplicate-selectors':           true,
    'no-eol-whitespace':                true,
    'no-extra-semicolons':              true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations':            true,

    // Warnings

    'no-descending-specificity':        [ true, { severity: 'warning' } ],


    // Values
    // ----------------------------------------------------------

    // Errors

    'color-hex-case':                  'lower',
    'color-hex-length':                'long',
    'color-named':                     'never',
    'color-no-invalid-hex':            true,
    'font-family-name-quotes':         'always-where-recommended',
    'font-family-no-duplicate-names':  true,
    'font-weight-notation':            [ 'numeric', { ignore: [ 'relative' ] } ],
    'length-zero-no-unit':             true,
    'number-leading-zero':             'always',
    'string-no-newline':               true,
    'string-quotes':                   'single',
    'unit-blacklist':                  [ 'pt', { ignoreProperties: { pt: [ 'font-size' ] } } ],
    'unit-case':                       'lower',
    'unit-no-unknown':                 true,
    'value-keyword-case':              [ 'lower', { ignoreKeywords: [ '/^[\\$@][a-zA-Z0-0\\-_]+$' ] } ],
    'value-list-comma-newline-after':  'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after':    'always-single-line',
    'value-list-comma-space-before':   'never',
    'value-list-max-empty-lines':      0,


    // Functions
    // ----------------------------------------------------------

    // Errors

    'function-calc-no-unspaced-operator':                true,
    'function-comma-newline-after':                      'always-multi-line',
    'function-comma-newline-before':                     'never-multi-line',
    'function-comma-space-after':                        'always-single-line',
    'function-comma-space-before':                       'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines':                          1,
    'function-parentheses-newline-inside':               'always-multi-line',
    'function-parentheses-space-inside':                 'never-single-line',
    'function-url-quotes':                               'always',
    'function-whitespace-after':                         'always',


    // Properties
    // ----------------------------------------------------------

    // Errors

    'property-case':                          'lower',
    'property-no-unknown':                    true,
    'shorthand-property-no-redundant-values': true,


    // Declarations
    // ----------------------------------------------------------

    // Errors

    'declaration-bang-space-after':                      'never',
    'declaration-bang-space-before':                     'always',
    'declaration-colon-space-before':                    'never',
    'declaration-property-unit-whitelist':               { 'font-size': [ 'pt', 'px', 'em', 'rem' ] },
    'declaration-block-no-duplicate-properties':         true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after':         'always',
    'declaration-block-semicolon-newline-before':        'never-multi-line',
    'declaration-block-semicolon-space-after':           'always-single-line',
    'declaration-block-semicolon-space-before':          'never',
    'declaration-block-trailing-semicolon':              'always',


    // Blocks
    // ----------------------------------------------------------

    // Errors

    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after':     'always',
    'block-closing-brace-newline-before':    'always-multi-line',
    'block-closing-brace-space-after':       'always-single-line',
    'block-closing-brace-space-before':      'always-single-line',
    'block-no-empty':                        true,
    'block-opening-brace-newline-after':     'always-multi-line',
    'block-opening-brace-newline-before':    [ 'never-single-line', 'never-multi-line' ],
    'block-opening-brace-space-after':       'always-single-line',
    'block-opening-brace-space-before':      'always',


    // Selectors
    // ----------------------------------------------------------

    // Errors

    'selector-attribute-brackets-space-inside':       'never',
    'selector-attribute-operator-space-after':        'never',
    'selector-attribute-operator-space-before':       'never',
    'selector-attribute-quotes':                      'always',
    'selector-class-pattern':                         [ '^((_+[a-z0-9]+)|[a-z]+)(-{0,1}[a-z0-9]+)*_*$', { resolveNestedSelectors: true } ],
    'selector-combinator-space-after':                'always',
    'selector-combinator-space-before':               'always',
    'selector-descendant-combinator-no-non-space':    true,
    'selector-id-pattern':                            '^[a-z]+[a-zA-Z0-9]*$',
    'selector-max-empty-lines':                       0,
    'selector-max-universal':                         1,
    'selector-pseudo-class-case':                     'lower',
    'selector-pseudo-class-no-unknown':               true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case':                   'lower',
    'selector-pseudo-element-colon-notation':         'double',
    'selector-pseudo-element-no-unknown':             true,
    'selector-type-case':                             'lower',
    'selector-type-no-unknown':                       [ true, { ignore: [ 'custom-elements' ] } ],
    'selector-list-comma-newline-after':              'always-multi-line',
    'selector-list-comma-newline-before':             'never-multi-line',
    'selector-list-comma-space-after':                'always-single-line',
    'selector-list-comma-space-before':               'never',


    // Rules
    // ----------------------------------------------------------

    // Errors

    'rule-empty-line-before': [ 'always', { except: [ 'after-single-line-comment', 'first-nested' ], ignore: [ 'after-comment' ] } ],


    // Media Queries
    // ----------------------------------------------------------

    // Errors

    'media-feature-colon-space-after':           'always',
    'media-feature-colon-space-before':          'never',
    'media-feature-name-case':                   'lower',
    'media-feature-name-no-unknown':             true,
    'media-feature-parentheses-space-inside':    'never',
    'media-feature-range-operator-space-after':  'always',
    'media-feature-range-operator-space-before': 'always',
    'custom-media-pattern':                      '[a-z]+(-[a-z]+)*',
    'media-query-list-comma-newline-after':      'always-multi-line',
    'media-query-list-comma-newline-before':     'never-multi-line',
    'media-query-list-comma-space-after':        'always-single-line',
    'media-query-list-comma-space-before':       'never',


    // At-Rules
    // ----------------------------------------------------------

    // Errors

    'at-rule-empty-line-before':       [ 'always', { except: [ 'first-nested' ], ignore: [ 'after-comment', 'blockless-after-same-name-blockless' ] } ],
    'at-rule-name-case':               'lower',
    // 'at-rule-name-newline-after':      'never',
    'at-rule-name-space-after':        'always-single-line',
    'at-rule-no-unknown':              true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before':  'never',



    // Plugin: stylelint-order
    // ----------------------------------------------------------

    // Errors

    'order/order': [
      [
        'at-variables',
        'dollar-variables',
        'custom-properties',
        'less-mixins',
        'declarations',
        'rules',
        'at-rules'
      ],
      { disableFix: true }
    ],


    // Plugin: stylelint-scss
    // ----------------------------------------------------------

    // Errors

    // TODO: Add SCSS Rules


    // Plugin: stylelint-suitcss
    // ----------------------------------------------------------

    // Errors

    'suitcss/root-no-standard-properties':  true,
    'suitcss/selector-root-no-composition': true
  }
};
