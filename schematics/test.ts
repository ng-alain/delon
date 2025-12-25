/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/no-unassigned-import */
// Configuration for vscode-debug only.
import * as glob from 'glob';
import 'jasmine';
import { join, relative } from 'path';

const projectBaseDir = join(__dirname, '../..');
require('source-map-support').install({
  hookRequire: true,
});

const Jasmine = require('jasmine');
const runner = new Jasmine({ projectBaseDir });

const files = `schematics/**/*.spec.ts`;
// const files = `schematics/ng-update/upgrade-rules/V21/index.spec.ts`;

const tests = glob.sync(files).map((p: string) => relative(projectBaseDir, p));

runner.execute(tests);
