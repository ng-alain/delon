import { NzSafeAny } from 'ng-zorro-antd/core/types';

import * as ROUND from './round';

describe('util.round', () => {
  function run(methodName: keyof typeof ROUND, data: Array<{ k: NzSafeAny[]; v: number }>): void {
    for (const item of data) {
      const value = item.k[0];
      const precision = item.k.length === 2 ? item.k[1] : undefined;
      expect(ROUND[methodName](value, precision)).withContext(`${item.k} must be ${item.v}`).toBe(item.v);
    }
  }

  it('#ceil', () => {
    const data: Array<{ k: unknown[]; v: number }> = [
      { k: [4.006], v: 5 },
      { k: [6.004, 2], v: 6.01 },
      { k: [6040, -2], v: 6100 }
    ];
    run('ceil', data);
  });

  it('#floor', () => {
    const data: Array<{ k: unknown[]; v: number }> = [
      { k: [4.006], v: 4 },
      { k: [0.046, 2], v: 0.04 },
      { k: [4060, -2], v: 4000 }
    ];
    run('floor', data);
  });

  it('#round', () => {
    const data: Array<{ k: unknown[]; v: number }> = [
      { k: [4.006], v: 4 },
      { k: [4.006, 2], v: 4.01 },
      { k: [4060, -2], v: 4100 }
    ];
    run('round', data);
  });
});
