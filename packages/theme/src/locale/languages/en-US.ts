import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'en-US',
  exception: {
    403: `Sorry, you don't have access to this page`,
    404: `Sorry, the page you visited does not exist`,
    500: `Sorry, the server is reporting an error`,
    backToHome: 'Back To Home'
  },
  noticeIcon: {
    emptyText: 'No data',
    clearText: 'Clear'
  },
  reuseTab: {
    close: 'Close tab',
    closeOther: 'Close other tabs',
    closeRight: 'Close tabs to right',
    refresh: 'Refresh'
  },
  tagSelect: {
    expand: 'Expand',
    collapse: 'Collapse'
  },
  miniProgress: {
    target: 'Target: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} of {{total}}',
    filterConfirm: 'OK',
    filterReset: 'Reset'
  },
  sf: {
    submit: 'Submit',
    reset: 'Reset',
    search: 'Search',
    edit: 'Save',
    addText: 'Add',
    removeText: 'Remove',
    checkAllText: 'Check all',
    error: {
      'false schema': `Boolean schema is false`,
      $ref: `Can't resolve reference {ref}`,
      additionalItems: `Should not have more than {limit} item`,
      additionalProperties: `Should not have additional properties`,
      anyOf: `Should match some schema in "anyOf"`,
      dependencies: `should have property {deps} when property {property} is present`,
      enum: `Should be equal to one of predefined values`,
      format: `Should match format "{format}"`,
      type: `Should be {type}`,
      required: `Required`,
      maxLength: `Should not be longer than {limit} character`,
      minLength: `Should not be shorter than {limit} character`,
      minimum: `Should be {comparison} {limit}`,
      formatMinimum: `Should be {comparison} {limit}`,
      maximum: `Should be {comparison} {limit}`,
      formatMaximum: `Should be {comparison} {limit}`,
      maxItems: `Should not have more than {limit} item`,
      minItems: `Should not have less than {limit} item`,
      maxProperties: `Should not have more than {limit} property`,
      minProperties: `Should not have less than {limit} property`,
      multipleOf: `Should be a multiple of {multipleOf}`,
      not: `Should not be valid according to schema in "not"`,
      oneOf: `Should match exactly one schema in "oneOf"`,
      pattern: `Should match pattern "{pattern}"`,
      uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
      custom: `Should match format`,
      propertyNames: `Property name "{propertyName}" is invalid`,
      patternRequired: `Should have property matching pattern "{missingPattern}"`,
      switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
      const: `Should be equal to constant`,
      contains: `Should contain a valid item`,
      formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
      if: `Should match "{failingKeyword}" schema`
    }
  },
  onboarding: {
    skip: `Skip`,
    prev: `Prev`,
    next: `Next`,
    done: `Done`
  }
} as FullLocaleData;
