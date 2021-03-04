import { NgZone } from '@angular/core';
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
    const zone = jasmine.createSpyObj('mockNgZone', ['run', 'runOutsideAngular']);
    zone.run.and.callFake((fn: any) => fn());
    zone.runOutsideAngular.and.callFake((fn: any) => fn());
    const cls = new MockClass(zone as any);
    const res = cls.scroll();
    expect(res).toBe('OK');
  });

  it('should be working with run', () => {
    class MockClass {
      constructor(public ngZone: NgZone) {}
      @ZoneRun()
      scroll(): void {}
    }
    const zone = {
      run: jasmine.createSpy(),
    };
    const cls = new MockClass(zone as any);
    cls.scroll();
    expect(zone.run).toHaveBeenCalled();
  });

  it('should be ngZone property is private', () => {
    class MockClass {
      constructor(private zone: NgZone) {
        this.zone.runOutsideAngular(() => {});
      }
      @ZoneOutside({ ngZoneName: 'zone' })
      scroll(): void {}
    }
    const zone = {
      runOutsideAngular: jasmine.createSpy(),
    };
    const cls = new MockClass(zone as any);
    cls.scroll();
    expect(zone.runOutsideAngular).toHaveBeenCalledTimes(2);
  });

  it('should be custom ngZone name', () => {
    class MockClass {
      constructor(public zone: NgZone) {}
      @ZoneOutside({ ngZoneName: 'zone' })
      scroll(): void {}
    }
    const zone = {
      runOutsideAngular: jasmine.createSpy(),
    };
    const cls = new MockClass(zone as any);
    cls.scroll();
    expect(zone.runOutsideAngular).toHaveBeenCalled();
  });

  it('should be console warn when not NgZone property', () => {
    class MockClass {
      @ZoneOutside()
      scroll(): void {}
    }
    const cls = new MockClass();
    spyOn(console, 'warn');
    cls.scroll();
    expect(console.warn).toHaveBeenCalled();
  });
});
