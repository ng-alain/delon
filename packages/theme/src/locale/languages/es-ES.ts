import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'es-ES',
  exception: {
    403: `Lo sentimos, no tiene acceso a esta página`,
    404: `Lo sentimos, la página que ha visitado no existe`,
    500: `Lo siento, error interno del servidor `,
    backToHome: 'Volver a la página de inicio'
  },
  noticeIcon: {
    emptyText: 'No hay datos',
    clearText: 'Limpiar'
  },
  reuseTab: {
    close: 'Cerrar pestaña',
    closeOther: 'Cerrar otras pestañas',
    closeRight: 'Cerrar pestañas a la derecha',
    refresh: 'Actualizar'
  },
  tagSelect: {
    expand: 'Expandir',
    collapse: 'Ocultar'
  },
  miniProgress: {
    target: 'Target: '
  },
  st: {
    total: '{{rango[0]}} - {{rango[1]}} de {{total}}',
    filterConfirm: 'Aceptar',
    filterReset: 'Reiniciar'
  },
  sf: {
    submit: 'Submit',
    reset: 'Reiniciar',
    search: 'Buscar',
    edit: 'Guardar',
    addText: 'Añadir',
    removeText: 'Eliminar',
    checkAllText: 'Comprobar todo',
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
    skip: `Omitir`,
    prev: `Previo`,
    next: `Siguiente`,
    done: `Terminado`
  }
} as FullLocaleData;
