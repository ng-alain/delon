import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ReuseItem } from './reuse-tab.interfaces';
import { ReuseTabLocalStorageState } from './reuse-tab.state';

describe('abc: reuse-tab(state)', () => {
  const store = new ReuseTabLocalStorageState();
  const KEY = 'state';
  const VALUES = [
    {
      title: 'tit'
    } as ReuseItem
  ];

  beforeEach(() => {
    let data: { [key: string]: NzSafeAny } = {};

    spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
      return data[key] || null;
    });
    spyOn(localStorage, 'removeItem').and.callFake((key: string): void => {
      delete data[key];
    });
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): string => {
      return (data[key] = value as string);
    });
    spyOn(localStorage, 'clear').and.callFake(() => {
      data = {};
    });
  });

  it('should be working', () => {
    store.get(KEY);
    expect(store.get(KEY)).not.toBeNull();
    store.update(KEY, VALUES);
    const ret = store.get(KEY);
    expect(ret).not.toBeNull();
    expect(ret.length).toBe(VALUES.length);
    store.remove(KEY);
    expect(store.get(KEY).length).toBe(0);
    // when set null
    store.update(KEY, null as NzSafeAny);
    expect(store.get(KEY).length).toBe(0);
  });
});
