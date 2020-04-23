import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';

/**
 * @deprecated `XlsxConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
@Injectable({ providedIn: 'root' })
export class XlsxConfig {
  constructor() {
    deprecation10Cog(`XlsxConfig`);
  }
  /**
   * Xlsx library path
   */
  url?: string = '//cdn.bootcss.com/xlsx/0.12.13/xlsx.full.min.js';
  /**
   * Defines which Xlsx optional modules should get loaded, e.g:
   *
   * `[ '//cdn.bootcss.com/xlsx/0.12.13/cpexcel.js' ]`
   */
  modules?: string[] = [];
}
