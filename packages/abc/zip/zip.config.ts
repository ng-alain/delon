import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';

/**
 * @deprecated `ZipConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
@Injectable({ providedIn: 'root' })
export class ZipConfig {
  constructor() {
    deprecation10Cog(`ZipConfig`);
  }
  /**
   * Zip library path
   */
  url?: string = '//cdn.bootcss.com/jszip/3.1.5/jszip.min.js';
  /**
   * Defines which zip optional utils should get loaded
   */
  utils?: string[] = [];
}
