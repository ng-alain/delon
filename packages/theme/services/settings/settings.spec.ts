import { TestBed, async, inject } from '@angular/core/testing';

import { SettingsService } from '../settings/settings.service';
import { App, User } from './interface';

describe('Service: Settings', () => {
  let srv: SettingsService;
  beforeEach(() => {
    let data = {};

    spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
      return data[key] || null;
    });
    spyOn(localStorage, 'removeItem').and.callFake((key: string): void => {
      delete data[key];
    });
    spyOn(localStorage, 'setItem').and.callFake(
      (key: string, value: string): string => {
        return (data[key] = <string>value);
      },
    );
    spyOn(localStorage, 'clear').and.callFake(() => {
      data = {};
    });

    const a = TestBed.configureTestingModule({
      imports: [],
      providers: [SettingsService],
    });
    srv = a.get(SettingsService);
  });

  describe('#layout', () => {
    it('should be setting lang', () => {
      srv.setLayout('lang', 'zh-cn');
      expect(srv.layout.lang).toBe('zh-cn');
    });

    it('should be setting no exists key lang1', () => {
      expect(srv.setLayout('lang1', 'zh-cn')).toBeFalsy();
    });
  });

  describe('#app', () => {
    it(`can set`, () => {
      srv.setApp({ name: 'a' });
      expect(srv.app.name).toBe('a');
    });
    it(`can get`, () => {
      expect(srv.app).not.toBeNull();
    });
  });

  describe('#user', () => {
    it(`can set`, () => {
      srv.setUser({ name: 'a' });
      expect(srv.user.name).toBe('a');
    });
    it(`can get`, () => {
      expect(srv.user).not.toBeNull();
    });
  });

});
