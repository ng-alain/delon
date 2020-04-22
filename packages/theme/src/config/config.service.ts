import { Inject, Injectable, Optional } from '@angular/core';
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

  attach<R, T extends AlainConfigKey>(componentThis: NzSafeAny, componentName: T, defaultValues: R) {
    Object.assign(componentThis, { ...defaultValues, ...this.get(componentName) });
  }

  attachKey<T extends AlainConfigKey>(componentThis: NzSafeAny, componentName: T, key: string) {
    Object.assign(componentThis, this.get(componentName, key));
  }

  set<T extends AlainConfigKey>(componentName: T, value: AlainConfig[T]): void {
    this.config[componentName] = { ...this.config[componentName], ...value };
  }
}

// export function WithConfig(componentName: ConfigKey, configOptions?: { [key: string]: any }) {}
