import { inject, Injectable } from '@angular/core';
import { SIGNAL, SignalNode } from '@angular/core/primitives/signals';

import { deepMergeKey } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { AlainConfig, AlainConfigKey, ALAIN_CONFIG } from './config.types';

@Injectable({ providedIn: 'root' })
export class AlainConfigService {
  private readonly config = { ...inject(ALAIN_CONFIG, { optional: true }) };

  get<T extends AlainConfigKey>(componentName: T, key?: string): AlainConfig[T] {
    const res = ((this.config[componentName] as Record<string, unknown>) || {}) as NzSafeAny;
    return key ? { [key]: res[key] } : res;
  }

  merge<T extends AlainConfigKey>(componentName: T, ...defaultValues: Array<AlainConfig[T]>): AlainConfig[T] {
    return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
  }

  /**
   * 将配置附加到当前实例中，支持 Signal 信号
   */
  attach<T extends AlainConfigKey>(componentThis: unknown, componentName: T, defaultValues: AlainConfig[T]): void {
    const data = this.merge<T>(componentName, defaultValues);
    Object.entries(data as object).forEach(([key, value]) => {
      const t = componentThis as any;
      const s = t[key]?.[SIGNAL] as SignalNode<any>;
      if (s != null) {
        s.value = value;
      } else {
        t[key] = value;
      }
    });
  }

  set<T extends AlainConfigKey>(componentName: T, value: AlainConfig[T]): void {
    this.config[componentName] = { ...this.config[componentName], ...value };
  }
}
