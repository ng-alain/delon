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

    it('should be notify', done => {
      srv.notify.subscribe(res => {
        expect(res.type).toBe('layout');
        expect(res.name).toBe('collapsed');
        expect(res.value).toBe(1);
        done();
      });
      srv.setLayout('collapsed', 1);
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
    it('should be notify', done => {
      srv.notify.subscribe(res => {
        expect(res.type).toBe('app');
        expect(res.value.name).toBe('a');
        done();
      });
      srv.setApp({ name: 'a' });
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
    it('should be notify', done => {
      srv.notify.subscribe(res => {
        expect(res.type).toBe('user');
        expect(res.value.name).toBe('a');
        done();
      });
      srv.setUser({ name: 'a' });
    });
  });

});
