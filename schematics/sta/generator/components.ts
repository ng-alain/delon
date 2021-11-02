import { STAConfig } from '../types';
import { OpenAPI } from './swagger-types';
import { transformSchemaObjMap } from './transform';
import { Component } from './types';

export function createComponents(openApi: OpenAPI, options: STAConfig): Component[] {
  const components: Component[] = [];
  if (!openApi.components) return components;

  // openApi.components.schemas
  components.push(...transformSchemaObjMap(`schemas`, openApi.components.schemas, options));

  return components;
}
