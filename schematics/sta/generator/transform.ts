import { STAConfig } from '../types';
import { ReferenceObject, SchemaObject } from './swagger-types';
import { Component } from './types';

export function transformSchemaObj(node: SchemaObject, options: STAConfig): Component {
  const res = {} as Component;
  return res;
}

export function transformSchemaObjMap(
  componentType: string,
  obj: Record<string, ReferenceObject | SchemaObject>,
  options: STAConfig
): Component[] {
  const res: Component[] = [];
  for (const k of Object.keys(obj)) {
    const defaultValue: Component = {
      ref: `#/components/${componentType}/${k}`,
      type: 'ref',
      name: k,
      rawName: k,
      deprecated: false,
      properties: []
    };
    if ('$ref' in obj[k]) {
      res.push({
        ...defaultValue,
        type: 'ref'
      });
      continue;
    }

    res.push({
      ...defaultValue,
      type: 'object',
      ...transformSchemaObj(obj[k] as SchemaObject, options)
    });
  }
  return res;
}
