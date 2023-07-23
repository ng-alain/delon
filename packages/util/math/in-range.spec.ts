import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { inRange } from './in-range';

describe('util.inRange', () => {
  it('should be working', () => {
    const data: Array<{ k: NzSafeAny[]; v: boolean | 'throw' }> = [
      { k: [3, 2, 4], v: true },
      { k: [4, 8], v: true },
      { k: [4, 2], v: false },
      { k: [2, 2], v: false },
      { k: [-3, -2, -6], v: true },
      { k: [null, 2], v: 'throw' }
    ];
    for (const item of data) {
      const value = item.k[0];
      const start = item.k[1];
      const end = item.k.length === 3 ? item.k[2] : undefined;
      if (item.v === 'throw') {
        expect(() => {
          inRange(value, start, end);
        }).toThrow();
      } else {
        expect(inRange(value, start, end))
          .withContext(`${item.k} must be ${item.v}`)
          .toBe(item.v);
      }
    }
  });
});
