// This file is required for Angular compilation.
// Vitest doesn't need a test entry file like Karma,
// but Angular CLI requires at least one .ts file in the compilation.

// Vitest setup
import '@analogjs/vitest-angular/setup-zone';

// Register locale data for tests
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import zhHans from '@angular/common/locales/zh-Hans';
import zhHant from '@angular/common/locales/zh-Hant';
registerLocaleData(zh);
registerLocaleData(zhHans);
registerLocaleData(zhHant);

// Global test configuration
beforeEach(() => {
  // Add any global setup here
});

afterEach(() => {
  // Add any global teardown here
});
