import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainAndModuleApp } from '../utils/testing';

export const SPEC = {
  openapi: '3.0.1',
  info: {
    title: 'Title',
    version: '1.0.0'
  },
  tags: [
    {
      name: 'user'
    }
  ],
  paths: {
    '/user': {
      get: {
        summary: 'Info',
        tags: ['user'],
        responses: {
          '200': {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {}
                }
              }
            }
          }
        }
      }
    }
  }
};

/**
 * Covers the swagger-typescript-api v13 migration: union enums, `$ref` unwrapping through
 * `allOf`, colliding model names, `responseDataField` and binary responses.
 */
export const RICH_SPEC = {
  openapi: '3.0.1',
  info: {
    title: 'Rich',
    version: '1.0.0'
  },
  tags: [{ name: 'user' }, { name: 'file' }],
  components: {
    schemas: {
      StringEnum: {
        type: 'string',
        enum: ['active', 'in-active']
      },
      Foo_Bar: {
        type: 'object',
        properties: {
          a: { type: 'string' }
        }
      },
      FooBar: {
        type: 'object',
        properties: {
          b: { type: 'string' }
        }
      },
      BaseEntity: {
        type: 'object',
        properties: {
          id: { type: 'integer' }
        }
      },
      User: {
        allOf: [
          { $ref: '#/components/schemas/BaseEntity' },
          {
            type: 'object',
            properties: {
              name: { type: 'string' },
              status: { $ref: '#/components/schemas/StringEnum' }
            }
          }
        ]
      },
      ApiResultUser: {
        type: 'object',
        properties: {
          status: { type: 'integer' },
          error: { type: 'string' },
          result: { $ref: '#/components/schemas/User' }
        }
      },
      ApiResultUserList: {
        type: 'object',
        properties: {
          status: { type: 'integer' },
          error: { type: 'string' },
          result: { type: 'array', items: { $ref: '#/components/schemas/User' } }
        }
      }
    }
  },
  paths: {
    '/user': {
      get: {
        operationId: 'getUserList',
        tags: ['user'],
        responses: {
          '200': {
            description: 'Success',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/ApiResultUserList' } }
            }
          }
        }
      }
    },
    '/user/{id}': {
      get: {
        operationId: 'getUser',
        tags: ['user'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: {
          '200': {
            description: 'Success',
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/ApiResultUser' } }
            }
          }
        }
      }
    },
    '/file/{id}': {
      get: {
        operationId: 'downloadFile',
        tags: ['file'],
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: {
          '200': {
            description: 'Binary',
            content: {
              'application/octet-stream': { schema: { type: 'string', format: 'binary' } }
            }
          }
        }
      }
    }
  }
};

const MODELS = `/projects/foo/src/app/_sta/models.ts`;
const USER_SERVICE = `/projects/foo/src/app/_sta/user/service.ts`;
const FILE_SERVICE = `/projects/foo/src/app/_sta/file/service.ts`;

describe('Schematic: sta', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  async function run(options: Record<string, unknown> = { spec: SPEC }): Promise<void> {
    tree = await runner.runSchematic('sta', options, tree);
  }

  beforeEach(async () => ({ runner, tree } = await createAlainAndModuleApp()));

  it('should be working', async () => {
    await run();
    [`_base.service.ts`, `models.ts`, `index.ts`].forEach(name => {
      expect(tree.exists(`/projects/foo/src/app/_sta/${name}`)).toBe(true);
    });
    const tsConfig = tree.readContent(`tsconfig.json`);
    expect(tsConfig).toContain(`@sta`);
  });

  it('#tagsMapping', async () => {
    tree = await runner.runSchematic('sta', { spec: SPEC, tagsMapping: { user: 'AA' } }, tree);
    const newModulePath = '/projects/foo/src/app/_sta/AA/service.ts';
    expect(tree.exists(newModulePath)).toBe(true);
    expect(tree.readContent(newModulePath)).toContain(`export class AaService`);
  });

  it('should keep the eslint plumbing around the generated files', async () => {
    await run();
    const content = tree.readContent(MODELS);
    expect(content).toContain(`/* eslint-disable */`);
    // Lets the project's own `eslint --fix` (lint-staged) reformat generated files.
    expect(content).toContain(`/* eslint-enable prettier/prettier */`);
  });

  it('should generate union enums', async () => {
    await run({ spec: RICH_SPEC });
    expect(tree.readContent(MODELS)).toMatch(/export type StringEnum = ["']active["'] \| ["']in-active["'];/);
  });

  it('should dedupe colliding model type names', async () => {
    await run({ spec: RICH_SPEC });
    const content = tree.readContent(MODELS);
    expect(content).toContain(`export interface FooBar {`);
    expect(content).toContain(`export interface FooBar1 {`);
  });

  it('should return Blob for binary responses', async () => {
    await run({ spec: RICH_SPEC });
    expect(tree.readContent(FILE_SERVICE)).toContain(`Observable<Blob>`);
  });

  it('#responseDataField', async () => {
    await run({ spec: RICH_SPEC, responseDataField: 'result' });
    const userService = tree.readContent(USER_SERVICE);
    expect(userService).toContain(`Observable<User[]>`);
    expect(userService).toContain(`Observable<User>`);
    // A binary response has no `$ref` to unwrap and must be skipped silently.
    expect(tree.readContent(FILE_SERVICE)).toContain(`Observable<Blob>`);
  });
});
