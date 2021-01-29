import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '@delon/util/other';
import { AlainConfig, AlainConfigKey, ALAIN_CONFIG } from './config.types';

@Injectable({ providedIn: 'root' })
export class AlainConfigService {
  private config: AlainConfig;

  constructor(@Optional() @Inject(ALAIN_CONFIG) defaultConfig?: AlainConfig) {
    this.config = { ...defaultConfig };
  }

  get<T extends AlainConfigKey>(componentName: T, key?: string): AlainConfig[T] {
    const res = ((this.config[componentName] as { [key: string]: any }) || {}) as any;
    return key ? { [key]: res[key] } : res;
  }

  merge<T extends AlainConfigKey>(componentName: T, ...defaultValues: AlainConfig[T][]): AlainConfig[T] {
    return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
  }

  attach<T extends AlainConfigKey>(componentThis: any, componentName: T, defaultValues: AlainConfig[T]): void {
    Object.assign(componentThis, this.merge(componentName, defaultValues));
  }

  attachKey<T extends AlainConfigKey>(componentThis: any, componentName: T, key: string): void {
    Object.assign(componentThis, this.get(componentName, key));
  }

  set<T extends AlainConfigKey>(componentName: T, value: AlainConfig[T]): void {
    this.config[componentName] = { ...this.config[componentName], ...value };
  }
}
