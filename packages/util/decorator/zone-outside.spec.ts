import { NgZone } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ZoneOutside, ZoneRun } from './zone-outside';

describe('util.#ZoneOutside', () => {
  it('should be working with runOutsideAngular', () => {
    class MockClass {
      constructor(public ngZone: NgZone) {}
      @ZoneOutside()
      scroll(): string {
        return 'OK';
      }
    }
    const mockZone = { run: vi.fn(), runOutsideAngular: vi.fn() };
    mockZone.run.mockImplementation((fn: NzSafeAny) => fn());
    mockZone.runOutsideAngular.mockImplementation((fn: NzSafeAny) => fn());
    const cls = new MockClass(mockZone as NzSafeAny);
    const res = cls.scroll();
    expect(res).toBe('OK');
  });

  it('should be working with run', () => {
    class MockClass {
      constructor(public ngZone: NgZone) {}
      @ZoneRun()
      scroll(): void {}
    }
    const mockZone = {
      run: vi.fn()
    };
    const cls = new MockClass(mockZone as NzSafeAny);
    cls.scroll();
    expect(mockZone.run).toHaveBeenCalled();
  });

  it('should be ngZone property is private', () => {
    class MockClass {
      constructor(private zone: NgZone) {
        this.zone.runOutsideAngular(() => {});
      }
      @ZoneOutside({ ngZoneName: 'zone' })
      scroll(): void {}
    }
    const mockZone = {
      runOutsideAngular: vi.fn()
    };
    const cls = new MockClass(mockZone as NzSafeAny);
    cls.scroll();
    expect(mockZone.runOutsideAngular).toHaveBeenCalledTimes(2);
  });

  it('should be custom ngZone name', () => {
    class MockClass {
      constructor(public zone: NgZone) {}
      @ZoneOutside({ ngZoneName: 'zone' })
      scroll(): void {}
    }
    const mockZone = {
      runOutsideAngular: vi.fn()
    };
    const cls = new MockClass(mockZone as NzSafeAny);
    cls.scroll();
    expect(mockZone.runOutsideAngular).toHaveBeenCalled();
  });

  it('should be console warn when not NgZone property', () => {
    class MockClass {
      @ZoneOutside()
      scroll(): void {}
    }
    const cls = new MockClass();
    vi.spyOn(console, 'warn');
    cls.scroll();
    expect(console.warn).toHaveBeenCalled();
  });
});
