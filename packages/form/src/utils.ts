// tslint:disable:no-any
import { deepCopy } from '@delon/util';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SFSchema, SFSchemaDefinition, SFSchemaEnum } from './schema';
import { SFUISchemaItem, SFUISchemaItemRun } from './schema/ui';

export const FORMATMAPS = {
  'date-time': {
    widget: 'date',
    showTime: true,
    format: 'YYYY-MM-DDTHH:mm:ssZ',
  },
  'date': { widget: 'date', format: 'YYYY-MM-DD' },
  'full-date': { widget: 'date', format: 'YYYY-MM-DD' },
  'time': { widget: 'time' },
  'full-time': { widget: 'time' },
  'week': { widget: 'date', mode: 'week', format: 'YYYY-WW' },
  'month': { widget: 'date', mode: 'month', format: 'YYYY-MM' },
  'uri': { widget: 'upload' },
  'email': { widget: 'autocomplete', type: 'email' },
  'color': { widget: 'string', type: 'color' },
  '': { widget: 'string' },
};

export function isBlank(o: any) {
  return o == null;
}

export function toBool(value: any, defaultValue: boolean) {
  return value == null ? defaultValue : `${value}` !== 'false';
}

export function di(...args) {
  // tslint:disable-next-line:no-console
  console.warn(...args);
}

/** 根据 `$ref` 查找 `definitions` */
function findSchemaDefinition($ref: string, definitions: SFSchemaDefinition) {
  const match = /^#\/definitions\/(.*)$/.exec($ref);
  if (match && match[1]) {
    // parser JSON Pointer
    const parts = match[1].split('/');
    let current: any = definitions;
    for (let part of parts) {
      part = part.replace(/~1/g, '/').replace(/~0/g, '~');
      if (current.hasOwnProperty(part)) {
        current = current[part];
      } else {
        throw new Error(`Could not find a definition for ${$ref}.`);
      }
    }
    return current;
  }
  throw new Error(`Could not find a definition for ${$ref}.`);
}

/**
 * 取回Schema，并处理 `$ref` 的关系
 */
export function retrieveSchema(
  schema: SFSchema,
  definitions: SFSchemaDefinition = {},
): SFSchema {
  if (schema.hasOwnProperty('$ref')) {
    const $refSchema = findSchemaDefinition(schema.$ref, definitions);
    // remove $ref property
    const { $ref, ...localSchema } = schema;
    return retrieveSchema({ ...$refSchema, ...localSchema }, definitions);
  }

  return schema;
}

export function resolveIf(schema: SFSchema, ui: SFUISchemaItemRun): SFSchema {
  if (!(schema.hasOwnProperty('if') && schema.hasOwnProperty('then'))) return;

  if (!schema.if.properties)
    throw new Error(`if: does not contain 'properties'`);

  const allKeys = Object.keys(schema.properties);
  const ifKeys = Object.keys(schema.if.properties);
  detectKey(allKeys, ifKeys);
  detectKey(allKeys, schema.then.required);
  schema.required = schema.required.concat(schema.then.required);
  const hasElse = schema.hasOwnProperty('else');
  if (hasElse) {
    detectKey(allKeys, schema.else.required);
    schema.required = schema.required.concat(schema.else.required);
  }

  const visibleIf: any = {};
  const visibleElse: any = {};
  ifKeys.forEach(key => {
    const cond = schema.if.properties[key].enum;
    visibleIf[key] = cond;
    if (hasElse) visibleElse[key] = (value: any) => !cond.includes(value);
  });

  schema.then.required.forEach(key => (ui[`$${key}`].visibleIf = visibleIf));
  if (hasElse)
    schema.else.required.forEach(
      key => (ui[`$${key}`].visibleIf = visibleElse),
    );

  return schema;
}

function detectKey(keys: string[], detectKeys: string[]) {
  detectKeys.forEach(key => {
    if (!keys.includes(key)) {
      throw new Error(`if: properties does not contain '${key}'`);
    }
  });
}

export function orderProperties(properties: string[], order: string[]) {
  if (!Array.isArray(order)) return properties;
  const arrayToHash = arr =>
    arr.reduce((prev, curr) => {
      prev[curr] = true;
      return prev;
    }, {});
  const errorPropList = arr => `property [${arr.join(`', '`)}]`;

  const propertyHash = arrayToHash(properties);
  const orderHash = arrayToHash(order);
  const extraneous = order.filter(prop => prop !== '*' && !propertyHash[prop]);
  if (extraneous.length) {
    throw new Error(
      `ui schema order list contains extraneous ${errorPropList(extraneous)}`,
    );
  }
  const rest = properties.filter(prop => !orderHash[prop]);
  const restIndex = order.indexOf('*');
  if (restIndex === -1) {
    if (rest.length) {
      throw new Error(
        `ui schema order list does not contain ${errorPropList(rest)}`,
      );
    }
    return order;
  }
  if (restIndex !== order.lastIndexOf('*')) {
    throw new Error(
      'ui schema order list contains more than one wildcard item',
    );
  }
  const complete = [...order];
  complete.splice(restIndex, 1, ...rest);
  return complete;
}

export function getEnum(list: any[], formData: any, readOnly: boolean): SFSchemaEnum[] {
  if (isBlank(list) || !Array.isArray(list) || list.length === 0) return [];
  if (typeof list[0] !== 'object') {
    list = list.map((item: any) => {
      return { label: item, value: item } as SFSchemaEnum;
    });
  }
  if (formData) {
    if (!Array.isArray(formData)) formData = [formData];
    list.forEach((item: SFSchemaEnum) => {
      if (~formData.indexOf(item.value)) item.checked = true;
    });
  }
  // fix disabled status
  if (readOnly) {
    list.forEach((item: SFSchemaEnum) => item.disabled = true);
  }
  return list;
}

export function getCopyEnum(list: any[], formData: any, readOnly: boolean) {
  return getEnum(deepCopy(list || []), formData, readOnly);
}

export function getData(
  schema: SFSchema,
  ui: SFUISchemaItem,
  formData: any,
  asyncArgs?: any,
): Observable<SFSchemaEnum[]> {
  if (typeof ui.asyncData === 'function') {
    return ui
      .asyncData(asyncArgs)
      .pipe(map(list => getEnum(list, formData, schema.readOnly)));
  }
  return of(getCopyEnum(schema.enum, formData, schema.readOnly));
}
