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

describe('Schematic: sta', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  async function run(): Promise<void> {
    tree = await runner.runSchematicAsync('sta', { spec: SPEC }, tree).toPromise();
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
});
