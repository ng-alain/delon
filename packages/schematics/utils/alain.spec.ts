import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainAndModuleApp } from '../utils/testing';
import { addValueToVariable } from './alain';

describe('Schematic: alain', () => {
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ tree } = await createAlainAndModuleApp());
  });

  it('#addValueToVariable', () => {
    const fileName = '1.ts';
    const newComponentName = 'AComponent';
    tree.create(
      fileName,
      `
const COMPONENTS = [Components...];
const COMPONENTS_NOROUNT = [Noroute Components...];
    `,
    );
    addValueToVariable(tree, fileName, 'COMPONENTS', newComponentName, false);
    addValueToVariable(tree, fileName, 'COMPONENTS_NOROUNT', newComponentName, false);
    const content = tree.readContent(fileName);
    expect(content.includes(`Components...,AComponent`)).toBe(true);
    expect(content.includes(`Noroute Components...,AComponent`)).toBe(true);
  });
});
