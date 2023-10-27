const { propertyGroups } = require('stylelint-config-clean-order');

const propertiesOrder = propertyGroups.map(properties => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never',
  properties
}));

module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-less',
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'function-name-case': ['lower', { ignoreFunctions: ['/colorPalette/'] }],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          'fade',
          'tint',
          'darken',
          'ceil',
          'fadein',
          'floor',
          'unit',
          'shade',
          'lighten',
          'percentage',
          '-',
          '~`colorPalette',
          'snaplist',
          'fade-out'
        ]
      }
    ],
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'declaration-empty-line-before': null,
    'keyframes-name-pattern': null,
    'custom-property-pattern': null,
    'number-max-precision': 8,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'selector-type-no-unknown': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep']
      }
    ],
    'no-invalid-double-slash-comments': null,
    'import-notation': 'string',
    'media-feature-range-notation': 'prefix',
    'media-query-no-invalid': null,
    'order/order': [
      [
        'dollar-variables',
        'at-variables',
        "custom-properties",
        { type: 'at-rule', name: 'custom-media' },
        { type: 'at-rule', name: 'function' },
        { type: 'at-rule', name: 'mixin' },
        { type: 'at-rule', name: 'extend' },
        { type: 'at-rule', name: 'include' },
        'declarations',
        'less-mixins',
        {
          type: 'rule',
          selector: /^&::[\w-]+/,
          hasBlock: true
        },
        'rules',
        { type: 'at-rule', name: 'media', hasBlock: true }
      ],
      { severity: 'warning' }
    ],
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical'
      }
    ]
  }
};
