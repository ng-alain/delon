import { Injectable } from '@angular/core';
import { LoadingCustom, LoadingIcon, LoadingType } from './loading.types';
import { deprecation10Cog } from '@delon/util';

/**
 * @deprecated `LoadingConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
@Injectable({ providedIn: 'root' })
export class LoadingConfig {
  constructor() {
    deprecation10Cog(`LoadingConfig`);
  }
  type?: LoadingType = 'spin';
  text?: string = '加载中...';
  icon?: LoadingIcon = {
    type: 'loading',
    theme: 'outline',
    spin: true,
  };
  custom?: LoadingCustom;
  delay?: number = 0;
}
