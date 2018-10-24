// Configuration for vscode-debug only.
import * as glob from 'glob';
import 'jasmine';
import { join, relative } from 'path';

const projectBaseDir = join(__dirname, '../..');
require('source-map-support').install({
  hookRequire: true,
});

const Jasmine = require('jasmine');
const runner = new Jasmine({ projectBaseDir: projectBaseDir });

// const files = `packages/schematics/**/*.spec.ts`;
const files = `packages/schematics/plugin/plugin.icon.spec.ts`;
// const files = `packages/schematics/ng-update/test-cases/v2-test-cases.spec.ts`;
// const files = `packages/schematics/ng-update/test-cases/misc/deprecated-property-checks.spec.ts`;

const tests = glob.sync(files).map(p => relative(projectBaseDir, p));

runner.execute(tests);
