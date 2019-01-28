// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// tslint:disable:ordered-imports
// tslint:disable:no-import-side-effect
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// const context = require.context('./', true, /\/chart\/(.*)\.spec\.ts$/);
// And load the modules.
context
  .keys()
  .filter(path => path.indexOf('/schematics/') === -1)
  .map(context);
