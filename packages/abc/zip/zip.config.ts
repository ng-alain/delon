import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ZipConfig {
  /**
   * Zip library path
   */
  url ?= '//cdn.bootcss.com/jszip/3.1.5/jszip.min.js';
  /**
   * Defines which zip optional utils should get loaded
   */
  utils?: string[] = [];
}
