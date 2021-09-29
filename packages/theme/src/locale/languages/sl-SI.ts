import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'sl-SI',
  exception: {
    403: `Žal nimate dostopa do te strani`,
    404: `Žal stran, ki ste jo obiskali, ne obstaja`,
    500: `Žal strežnik poroča o napaki`,
    backToHome: 'Nazaj domov'
  },
  noticeIcon: {
    emptyText: 'Ni podatkov',
    clearText: 'Počisti'
  },
  reuseTab: {
    close: 'Zapri zavihek',
    closeOther: 'Zaprite druge zavihke',
    closeRight: 'Zaprite zavihke na desni'
  },
  tagSelect: {
    expand: 'Razširi',
    collapse: 'Strni'
  },
  miniProgress: {
    target: 'Cilj: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} of {{total}}',
    filterConfirm: 'OK',
    filterReset: 'Reset'
  },
  sf: {
    submit: 'Pošlji',
    reset: 'Reset',
    search: 'Išči',
    edit: 'Shrani',
    addText: 'Dodaj',
    removeText: 'Odstrani',
    checkAllText: 'Preveri vse',
    error: {
      'false schema': `Boolova shema je napačna`,
      $ref: `Referenc ni mogoče razrešiti {ref}`,
      additionalItems: `Ne sme imeti več kot {limit} artiklov`,
      additionalProperties: `Ne bi smel imeti dodatnih lastnosti`,
      anyOf: `Se mora ujemati s shemo v "anyOf"`,
      dependencies: `mora imeti lastnosti {deps} ko je artikel {property} prisoten`,
      enum: `Mora biti enaka eni od vnaprej določenih vrednosti`,
      format: `Naj ustreza formatu "{format}"`,
      type: `Naj bo {type}`,
      required: `Zahtevano`,
      maxLength: `Ne sme biti daljši od {limit} znakov`,
      minLength: `Ne sme biti krajši od {limit} znakov`,
      minimum: `Naj bo {comparison} {limit}`,
      formatMinimum: `Naj bo {comparison} {limit}`,
      maximum: `Naj bo {comparison} {limit}`,
      formatMaximum: `Naj bo {comparison} {limit}`,
      maxItems: `Ne sme imeti več kot {limit} artiklov`,
      minItems: `Ne sme imeti manj kot {limit} artiklov`,
      maxProperties: `Ne sme imeti več kot {limit} lastnosti`,
      minProperties: `Ne sme imeti manj kot {limit} lastnosti`,
      multipleOf: `Mora biti večkratnik od {multipleOf}`,
      not: `Ne sme biti veljaven po shemi v "not"`,
      oneOf: `Naj ustreza natančno eni shemi v "oneOf"`,
      pattern: `Naj se ujema z vzorcem "{pattern}"`,
      uniqueItems: `Ne bi smel imeti dvojnikov (items ## {j} in {i} so identični)`,
      custom: `Naj ustreza formatu`,
      propertyNames: `Ime artikla "{propertyName}" je neveljavno`,
      patternRequired: `Mora imeti vzorec ujemanja lastnosti "{missingPattern}"`,
      switch: `Mora prestati "switch" validacijo ključne besede, primer {caseIndex} ne uspe`,
      const: `Naj bo enako konstanti`,
      contains: `Naj vsebuje veljaven artikel`,
      formatExclusiveMaximum: `formatExclusiveMaximum naj bo boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum naj bo boolean`,
      if: `Naj se ujema s shemo "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `Preskoči`,
    prev: `Prejšnje`,
    next: `Naslednji`,
    done: `Končano`
  }
} as FullLocaleData;
