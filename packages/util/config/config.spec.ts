import { TestBed } from '@angular/core/testing';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import type { AlainChartConfig } from './chart/chart.type';
import { AlainConfigService } from './config.service';

describe('util: config', () => {
  let srv: AlainConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlainConfigService]
    });
    srv = TestBed.inject(AlainConfigService);
  });

  it('#set', () => {
    expect(srv.get('chart')?.theme).toBeUndefined();
    srv.set('chart', { theme: 'dark' } as AlainChartConfig);
    expect(srv.get('chart')?.theme).toBe('dark');
  });

  it('#attachKey', () => {
    const res: NzSafeAny = {};
    srv.set('chart', { theme: 'a' });
    srv.attachKey(res, 'chart', 'theme');
    expect(res.theme).toBe('a');
  });
});
