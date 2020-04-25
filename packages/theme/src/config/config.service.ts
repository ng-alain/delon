import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { AlainConfig, AlainConfigKey, ALAIN_CONFIG } from './config.types';

@Injectable({ providedIn: 'root' })
export class AlainConfigService {
  private config: AlainConfig;

  constructor(@Optional() @Inject(ALAIN_CONFIG) defaultConfig?: AlainConfig) {
    this.config = defaultConfig || {};
  }

  get<T extends AlainConfigKey>(componentName: T, key?: string): AlainConfig[T] {
    const res = (this.config[componentName] as { [key: string]: NzSafeAny }) || {};
    return key ? { [key]: res[key] } : res;
  }

  merge<R, T extends AlainConfigKey>(componentName: T, defaultValues: R): R {
    return deepMergeKey({}, true, defaultValues, this.get(componentName));
  }

  attach<R, T extends AlainConfigKey>(componentThis: NzSafeAny, componentName: T, defaultValues: R) {
    Object.assign(componentThis, this.merge(componentName, defaultValues));
  }

  attachKey<T extends AlainConfigKey>(componentThis: NzSafeAny, componentName: T, key: string) {
    Object.assign(componentThis, this.get(componentName, key));
  }

  set<T extends AlainConfigKey>(componentName: T, value: AlainConfig[T]): void {
    this.config[componentName] = { ...this.config[componentName], ...value };
  }
}
