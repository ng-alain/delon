/* eslint-disable @typescript-eslint/no-explicit-any */
export type OpenAPI = OpenAPI3;

export interface OpenAPI2 {
  swagger: string; // required
  info?: OpenAPIInfo;
  paths?: Record<string, PathItemObject>;
  definitions?: Record<string, SchemaObject>;
  parameters?: ParameterObject[];
  responses?: Record<string, ResponseObject>; // required
}

export interface OpenAPI3 {
  /** Swagger 版本号 */
  version: 2 | 3;
  openapi: string; // required
  paths?: Record<string, PathItemObject>; // required
  info?: OpenAPIInfo;
  components?: {
    schemas?: Record<string, ReferenceObject | SchemaObject>;
    responses?: Record<string, ReferenceObject | ResponseObject>;
    parameters?: Record<string, ReferenceObject | ParameterObject>;
    requestBodies?: Record<string, ReferenceObject | RequestBody>;
    headers?: Record<string, ReferenceObject | HeaderObject>;
    links?: Record<string, ReferenceObject | LinkObject>;
  };
}

export interface OpenAPIInfo {
  title: string;
  description: string;
  version: string;
}

export interface PathItemObject {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: OperationObject;
  put?: OperationObject;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  patch?: OperationObject;
  trace?: OperationObject; // V3 ONLY
  parameters?: Array<ReferenceObject | ParameterObject>;
}

export interface OperationObject {
  description?: string;
  tags?: string[]; // unused
  summary?: string; // unused
  operationId?: string;
  parameters?: Array<ReferenceObject | ParameterObject>;
  requestBody?: ReferenceObject | RequestBody;
  responses?: Record<string, ReferenceObject | ResponseObject>; // required
}

export interface ParameterObject {
  name?: string; // required
  in?: 'query' | 'header' | 'path' | /* V3 */ 'cookie' | /* V2 */ 'formData' | /* V2 */ 'body'; // required
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  schema?: ReferenceObject | SchemaObject; // required
  type?: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'file'; // V2 ONLY
  items?: ReferenceObject | SchemaObject; // V2 ONLY
  enum?: string[]; // V2 ONLY
}
export interface ReferenceObject {
  $ref: string;
}

export interface ResponseObject {
  description?: string;
  headers?: Record<string, ReferenceObject | HeaderObject>;
  schema?: ReferenceObject | SchemaObject; // V2 ONLY
  links?: Record<string, ReferenceObject | LinkObject>; // V3 ONLY
  content?: {
    // V3 ONLY
    [contentType: string]: { schema: ReferenceObject | SchemaObject };
  };
}

export interface RequestBody {
  description?: string;
  content?: {
    [contentType: string]: { schema: ReferenceObject | SchemaObject };
  };
}

export interface SchemaObject {
  title?: string; // ignored
  description?: string;
  required?: string[];
  enum?: string[];
  type?: string; // assumed "object" if missing
  items?: ReferenceObject | SchemaObject;
  allOf?: SchemaObject;
  properties?: Record<string, ReferenceObject | SchemaObject>;
  default?: any;
  additionalProperties?: boolean | ReferenceObject | SchemaObject;
  nullable?: boolean; // V3 ONLY
  oneOf?: Array<ReferenceObject | SchemaObject>; // V3 ONLY
  anyOf?: Array<ReferenceObject | SchemaObject>; // V3 ONLY
  format?: string; // V3 ONLY
}

export interface HeaderObject {
  // note: this extends ParameterObject, minus "name" & "in"
  type?: string; // required
  description?: string;
  required?: boolean;
  schema: ReferenceObject | SchemaObject;
}

export interface LinkObject {
  operationRef?: string;
  operationId?: string;
  parameters?: Array<ReferenceObject | ParameterObject>;
  requestBody?: RequestBody;
  description?: string;
}
