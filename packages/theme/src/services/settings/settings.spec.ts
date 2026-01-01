import { TestBed } from '@angular/core/testing';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SettingsService } from './settings.service';
import { App, User, Layout } from './types';
import { AlainThemeModule } from '../../theme.module';

describe('Service: Settings', () => {
  let srv: SettingsService;
  beforeEach(() => {
    let data: Record<string, NzSafeAny> = {};

    spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
      return data[key] ?? null;
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

    TestBed.configureTestingModule({
      imports: [AlainThemeModule],
      providers: [SettingsService]
    });
    srv = TestBed.inject(SettingsService);
  });

  describe('#layout', () => {
    interface TestLayout extends Layout {
      test: boolean;
    }
    it(`should be get`, () => {
      srv.setLayout<TestLayout>({ test: false } as NzSafeAny);
      expect(srv.getLayout<TestLayout>().test).toBe(false);
    });
    it('should be reset all', () => {
      srv.setLayout({ a: 1 } as NzSafeAny);
      expect(srv.layout.a).toBe(1);
    });

    it('should be setting lang', () => {
      srv.setLayout('lang', 'zh-cn');
      expect(srv.layout.lang).toBe('zh-cn');
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

    it('#layoutSignal', () => {
      const v = srv.layoutSignal;
      expect(v().collapsed).toBe(false);
      srv.setLayout('collapsed', true);
      expect(v().collapsed).toBe(true);
    });
  });

  describe('#app', () => {
    interface TestApp extends App {
      year: number;
    }
    it(`can set`, () => {
      srv.setApp({ name: 'a' });
      expect(srv.app.name).toBe('a');
      srv.setApp<TestApp>({ year: 100 });
      expect(srv.getApp<TestApp>().year).toBe(100);
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

    it('#appSignal', () => {
      const v = srv.appSignal;
      expect(v().name).toBeUndefined();
      srv.setApp({ name: 'a' });
      expect(v().name).toBe('a');
    });
  });

  describe('#user', () => {
    interface TestUser extends User {
      id: number;
    }
    it(`can set`, () => {
      srv.setUser({ name: 'a' });
      expect(srv.user.name).toBe('a');
      srv.setUser<TestUser>({ id: 1 });
      expect(srv.getUser<TestUser>().id).toBe(1);
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

    it('#userSignal', () => {
      const v = srv.userSignal;
      expect(v().name).toBeUndefined();
      srv.setUser({ name: 'a' });
      expect(v().name).toBe('a');
    });
  });
});
