import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Injector, StaticProvider } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { SettingsService } from '../settings/settings.service';
import { LTR, RTL, RTLService } from './rtl.service';

describe('Service: RTL', () => {
  let injector: Injector;
  let srv: RTLService;

  function getHtmlDir(): string | null {
    return (document.querySelector('html') as HTMLElement).getAttribute('dir');
  }

  beforeEach(() => {
    const providers = [
      SettingsService,
      NzConfigService,
      AlainConfigService,
      { provide: RTLService, useClass: RTLService, deps: [SettingsService, NzConfigService, AlainConfigService, Platform, DOCUMENT] },
      { provide: Platform, useValue: { isBrowser: true } },
      { provide: DOCUMENT, useValue: document },
    ] as StaticProvider[];
    injector = Injector.create({ providers });
    srv = injector.get(RTLService);
    srv.dir = LTR;
  });

  afterEach(() => (srv.dir = LTR));

  describe('#dir', () => {
    it('should be get', () => {
      expect(srv.dir).toBe(LTR);
    });
    it('should be set', () => {
      expect(srv.dir).toBe(LTR);
      srv.dir = RTL;
      expect(srv.dir).toBe(RTL);
    });
    it('should be nextDir', () => {
      expect(srv.dir).toBe(LTR);
      expect(srv.nextDir).toBe(RTL);
    });
    it('should be update dir attribute of html element', () => {
      expect(srv.dir).toBe(LTR);
      srv.dir = RTL;
      expect(srv.dir).toBe(RTL);
      expect(getHtmlDir()).toBe(RTL);
    });
  });
});
