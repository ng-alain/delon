import * as glob from 'glob';
import 'jasmine';
import { join, relative } from 'path';

const projectBaseDir = join(__dirname, '../..');
require('source-map-support').install({
  hookRequire: true,
});

const Jasmine = require('jasmine');
const runner = new Jasmine({ projectBaseDir: projectBaseDir });

const files = `packages/schematics/**/*_spec.ts`;

const tests = glob.sync(files).map(p => relative(projectBaseDir, p));

runner.execute(tests);
