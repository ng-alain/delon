import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

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

  describe('#attach', () => {
    it('support signal', () => {
      class MockSignal {
        guard_url = signal<string>('a');

        constructor() {
          srv.attach(this, 'acl', { guard_url: 'override' });
        }
      }
      const obj = new MockSignal();
      expect(obj.guard_url()).toBe('override');
    });
  });
});
