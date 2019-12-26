import { Injectable } from '@angular/core';
import { LoadingType, LoadingIcon, LoadingCustom } from './loading.interfaces';

@Injectable({ providedIn: 'root' })
export class LoadingConfig {
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
