import {resolveBazelDataFile, runTestCases} from '../index.spec';

describe('v2 deprecated property checks', () => {

  it('should report deprecated properties', async () => {
    const {logOutput} = await runTestCases('migration-v2', {
      'import-checks': resolveBazelDataFile(`misc/deprecated-property-checks_input.ts`)
    });

    expect(logOutput).toContain(`(checkboxChange)`);
    expect(logOutput).toContain(`STColumn.sort.reName`);
  });
});


