import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'it-IT',
  exception: {
    403: `Spiacenti, non hai accesso a questa pagina`,
    404: `Spiacenti, la pagina che hai visitato non esiste`,
    500: `Spiacenti, il server sta riscontrando un errore`,
    backToHome: 'Torna alla Home'
  },
  noticeIcon: {
    emptyText: 'Nessun dato',
    clearText: 'Cancella memoria locale'
  },
  reuseTab: {
    close: 'Chiudi la scheda',
    closeOther: 'Chiudi le altre schede',
    closeRight: 'Chiudi le schede a destra',
    refresh: 'Aggiorna'
  },
  tagSelect: {
    expand: 'Espandi',
    collapse: 'Comprimi'
  },
  miniProgress: {
    target: 'Obiettivo: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} di {{total}}',
    filterConfirm: 'OK',
    filterReset: 'Reimposta'
  },
  sf: {
    submit: 'Invia',
    reset: 'Reimposta',
    search: 'Cerca',
    edit: 'Salva',
    addText: 'Aggiungi',
    removeText: 'Rimuovi',
    checkAllText: 'Seleziona tutto',
    error: {
      'false schema': `Lo schema booleano è falso`,
      $ref: `Impossibile risolvere il riferimento {ref}`,
      additionalItems: `Non deve avere più di {limit} elementi`,
      additionalProperties: `Non deve avere proprietà aggiuntive`,
      anyOf: `Deve corrispondere a uno schema in "anyOf"`,
      dependencies: `Deve avere una proprietà {deps} quando è presente la proprietà {property}`,
      enum: `Deve essere uguale a uno dei valori predefiniti`,
      format: `Deve corrispondere al formato "{format}"`,
      type: `Deve essere {type}`,
      required: `Obbligatorio`,
      maxLength: `Non deve essere superiore a {limit} caratteri`,
      minLength: `Non deve essere superiore a {limit} caratteri`,
      minimum: `Deve essere {comparison} {limit}`,
      formatMinimum: `Deve essere {comparison} {limit}`,
      maximum: `Deve essere {comparison} {limit}`,
      formatMaximum: `Deve essere {comparison} {limit}`,
      maxItems: `Non deve avere più di {limit} elementi`,
      minItems: `Non deve avere meno di {limit} elementi`,
      maxProperties: `Non deve avere più di {limit} proprietà`,
      minProperties: `Non deve avere meno di {limit} proprietà`,
      multipleOf: `Deve essere un multiplo di {multipleOf}`,
      not: `Non deve essere valido secondo lo schema in "not"`,
      oneOf: `Deve corrispondere esattamente a uno schema in "oneOf"`,
      pattern: `Deve corrispondere al modello "{pattern}"`,
      uniqueItems: `Non deve avere elementi duplicati (gli elementi ## {j} e {i} sono identici)`,
      custom: `Deve corrispondere al formato "{format}"`,
      propertyNames: `Il nome della proprietà "{propertyName}" non è valido`,
      patternRequired: `Deve avere una proprietà corrispondete al modello "{missingPattern}"`,
      switch: `Deve superare la convalida della parola chiave "switch", il caso {caseIndex} non è riuscito`,
      const: `Deve essere uguale alla costante`,
      contains: `Deve contenere un elemento valido`,
      formatExclusiveMaximum: `formatExclusiveMaximum deve essere booleano`,
      formatExclusiveMinimum: `formatExclusiveMaximum deve essere booleano`,
      if: `Deve corrispondere allo schema "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `Salta`,
    prev: `Precedente`,
    next: `Successivo`,
    done: `Fatto`
  }
} as FullLocaleData;
