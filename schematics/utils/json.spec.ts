import { HostTree } from '@angular-devkit/schematics';

import { modifyJSON } from './json';

describe('cli:json', () => {
  it('json', () => {
    const tree = new HostTree();
    tree.create(
      'tsconfig.json',
      `
  /* commit */
  { "compilerOptions": {} }
  `
    );

    modifyJSON(tree, 'tsconfig.json', [{ path: ['compilerOptions', 'allowSyntheticDefaultImports'], value: true }]);
    const content = tree.readText('tsconfig.json');
    expect(content).toContain(`"allowSyntheticDefaultImports": true`);
  });
});
