import { Observable, of, map } from 'rxjs';

import { deepCopy } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService } from 'ng-zorro-antd/i18n';

import { SF_SEQ } from './const';
import type { SFValue } from './interface';
import type { SFSchema, SFSchemaDefinition, SFSchemaEnum } from './schema';
import type { SFUISchema, SFUISchemaItem, SFUISchemaItemRun, SFVisibleIf } from './schema/ui';

export function isBlank(o: NzSafeAny): boolean {
  return o == null;
}

export function toBool(value: NzSafeAny, defaultValue: boolean): boolean {
  return value == null ? defaultValue : `${value}` !== 'false';
}

export function di(ui: SFUISchema, ...args: NzSafeAny[]): void {
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    if (ui.debug) {
      console.warn(...args);
    }
  }
}

/** 根据 `$ref` 查找 `definitions` */
function findSchemaDefinition($ref: string, definitions: SFSchemaDefinition): NzSafeAny {
  const match = /^#\/definitions\/(.*)$/.exec($ref);
  if (match && match[1]) {
    // parser JSON Pointer
    const parts = match[1].split(SF_SEQ);
    let current: NzSafeAny = definitions;
    for (let part of parts) {
      part = part.replace(/~1/g, SF_SEQ).replace(/~0/g, '~');
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
export function retrieveSchema(schema: SFSchema, definitions: SFSchemaDefinition = {}): SFSchema {
  if (schema.hasOwnProperty('$ref')) {
    const $refSchema = findSchemaDefinition(schema.$ref!, definitions);
    // remove $ref property
    const { $ref, ...localSchema } = schema;
    return retrieveSchema({ ...$refSchema, ...localSchema }, definitions);
  }

  return schema;
}

export function resolveIfSchema(_schema: SFSchema, _ui: SFUISchemaItemRun): void {
  const fn = (schema: SFSchema, ui: SFUISchemaItemRun): void => {
    resolveIf(schema, ui);

    Object.keys(schema.properties!).forEach(key => {
      const property = schema.properties![key];
      const uiKey = `$${key}`;
      if (property.items) {
        fn(property.items, ui[uiKey].$items);
      }
      if (property.properties) {
        fn(property, ui[uiKey]);
      }
    });
  };
  fn(_schema, _ui);
}

function resolveIf(schema: SFSchema, ui: SFUISchemaItemRun): SFSchema | null {
  if (!(schema.hasOwnProperty('if') && schema.hasOwnProperty('then'))) return null;
  if (!schema.if!.properties) throw new Error(`if: does not contain 'properties'`);

  const allKeys = Object.keys(schema.properties!);
  const ifKeys = Object.keys(schema.if!.properties!);
  detectKey(allKeys, ifKeys);
  detectKey(allKeys, schema.then!.required!);
  schema.required = schema.required!.concat(schema.then!.required!);
  const hasElse = schema.hasOwnProperty('else');
  if (hasElse) {
    detectKey(allKeys, schema.else!.required!);
    schema.required = schema.required.concat(schema.else!.required!);
  }

  const visibleIf: SFVisibleIf = {};
  const visibleElse: SFVisibleIf = {};
  ifKeys.forEach(key => {
    const cond = schema.if!.properties![key].enum;
    visibleIf[key] = cond!;
    if (hasElse) visibleElse[key] = (value: SFValue) => !cond!.includes(value);
  });

  schema.then!.required!.forEach(key => (ui[`$${key}`].visibleIf = visibleIf));
  if (hasElse) {
    schema.else!.required!.forEach(key => (ui[`$${key}`].visibleIf = visibleElse));
  }

  return schema;
}

function detectKey(keys: string[], detectKeys: string[]): void {
  detectKeys.forEach(key => {
    if (!keys.includes(key)) {
      throw new Error(`if: properties does not contain '${key}'`);
    }
  });
}

export function orderProperties(properties: string[], order: string[]): string[] {
  if (!Array.isArray(order)) return properties;
  const arrayToHash = (arr: NzSafeAny): NzSafeAny =>
    arr.reduce((prev: NzSafeAny, curr: NzSafeAny) => {
      prev[curr] = true;
      return prev;
    }, {});
  const errorPropList = (arr: NzSafeAny): string => `property [${arr.join(`', '`)}]`;

  const propertyHash = arrayToHash(properties);
  const orderHash = arrayToHash(order);
  const extraneous = order.filter(prop => prop !== '*' && !propertyHash[prop]);
  if (extraneous.length) {
    throw new Error(`ui schema order list contains extraneous ${errorPropList(extraneous)}`);
  }
  const rest = properties.filter(prop => !orderHash[prop]);
  const restIndex = order.indexOf('*');
  if (restIndex === -1) {
    if (rest.length) {
      throw new Error(`ui schema order list does not contain ${errorPropList(rest)}`);
    }
    return order;
  }
  if (restIndex !== order.lastIndexOf('*')) {
    throw new Error('ui schema order list contains more than one wildcard item');
  }
  const complete = [...order];
  complete.splice(restIndex, 1, ...rest);
  return complete;
}

export function getEnum(list: NzSafeAny[], formData: NzSafeAny, readOnly: boolean): SFSchemaEnum[] {
  if (isBlank(list) || !Array.isArray(list) || list.length === 0) return [];
  if (typeof list[0] !== 'object') {
    list = list.map((item: NzSafeAny) => {
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
    list.forEach((item: SFSchemaEnum) => (item.disabled = true));
  }
  return list;
}

export function getCopyEnum(list: NzSafeAny[], formData: NzSafeAny, readOnly: boolean): SFSchemaEnum[] {
  return getEnum(deepCopy(list || []), formData, readOnly);
}

export function getData(
  schema: SFSchema,
  ui: SFUISchemaItem,
  formData: NzSafeAny,
  asyncArgs?: NzSafeAny
): Observable<SFSchemaEnum[]> {
  if (typeof ui.asyncData === 'function') {
    return ui.asyncData(asyncArgs).pipe(map((list: SFSchemaEnum[]) => getEnum(list, formData, schema.readOnly!)));
  }
  return of(getCopyEnum(schema.enum!, formData, schema.readOnly!));
}

/**
 * Whether to using date-fns to format a date
 */
export function isDateFns(srv: NzI18nService): boolean {
  if (!srv) return false;
  const data = srv.getDateLocale();
  // Compatible date-fns v1.x & v2.x
  return data != null && !!data.formatDistance; // (!!data.distanceInWords || !!data.formatDistance);
}
