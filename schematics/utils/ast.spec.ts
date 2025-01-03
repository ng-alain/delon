import { HostTree } from '@angular-devkit/schematics';

import { importInStandalone } from './ast';

describe('cli: ast', () => {
  let tree: HostTree;
  beforeEach(() => {
    tree = new HostTree();
    tree.create(
      '1.ts',
      `@Component({
        imports: [ RouterOutlet ]
      })
      export class Comp {}
      `
    );
  });

  it('should be working', async () => {
    importInStandalone(tree, '1.ts', 'Home', './home.component');
    const cont = tree.readText(`1.ts`);
    expect(cont).toContain(`import { Home } from './home.component';`);
    expect(cont).toContain(`imports: [ RouterOutlet, Home ]`);
  });
});
