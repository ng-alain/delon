import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'tr-TR',
  exception: {
    403: `Üzgünüz, bu sayfaya erişiminiz yok`,
    404: `Maalesef bu sayfa mevcut değil`,
    500: `Üzgünüz, sunucu hatası`,
    backToHome: `Ana Sayfa'ya geri dön`
  },
  noticeIcon: {
    emptyText: 'Veri yok',
    clearText: 'Temiz'
  },
  reuseTab: {
    close: 'Sekmeyi Kapat',
    closeOther: 'Diğer sekmeleri kapat',
    closeRight: 'Sağdaki sekmeleri kapat',
    refresh: 'täzele'
  },
  tagSelect: {
    expand: 'Genişlet',
    collapse: 'Daralt'
  },
  miniProgress: {
    target: 'Hedef: '
  },
  st: {
    total: '{{range[0]}} ile {{range[1]}} arasında {{total}}',
    filterConfirm: 'Tamam',
    filterReset: 'Sıfırla'
  },
  sf: {
    submit: 'Gönder',
    reset: 'Sıfırla',
    search: 'Ara',
    edit: 'Kaydet',
    addText: 'Ekle',
    removeText: 'Kaldır',
    checkAllText: 'Tümünü kontrol et',
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
    skip: `Atla`,
    prev: `Önceki`,
    next: `Sonraki`,
    done: `Bitti`
  }
} as FullLocaleData;
