import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Injector, StaticProvider } from '@angular/core';

import { CookieService } from './cookie.service';

describe('Util: CookieService', () => {
  let srv: CookieService;
  let injector: Injector;
  const KEY = 'a';
  const VALUE = 'b';

  function genModule(isBrowser: boolean): void {
    const providers = [
      { provide: CookieService, useClass: CookieService, deps: [DOCUMENT, Platform] },
      { provide: Platform, useValue: { isBrowser } },
      { provide: DOCUMENT, useValue: Document }
    ] as StaticProvider[];
    injector = Injector.create({ providers });
    srv = injector.get(CookieService);
    srv.put(KEY, VALUE);
  }

  describe('', () => {
    beforeEach(() => genModule(true));

    it('should be working', () => {
      expect(srv.get(KEY)).toBe(VALUE);
    });

    it('should be return undefined when key is not exists', () => {
      expect(srv.get('INVALID')).toBeUndefined();
    });

    describe('[expires]', () => {
      it('when is number', () => {
        srv.put(KEY, VALUE, { expires: 10 });
        expect(srv.cookie).toContain(`expires=`);
      });
      it('when is date', () => {
        srv.put(KEY, VALUE, { expires: new Date(0) });
        expect(srv.cookie).toContain(`expires=Thu, 01 Jan 1970 00:00:00 GMT`);
      });
      it('when is string', () => {
        srv.put(KEY, VALUE, { expires: 'Thu, 01 Jan 1970 00:00:00 GMT' });
        expect(srv.cookie).toContain(`expires=Thu, 01 Jan 1970 00:00:00 GMT`);
      });
    });

    it('remove', () => {
      srv.remove(KEY);
      expect(srv.get(KEY)).toBe(``);
    });

    it('removeAll', () => {
      srv.removeAll();
      expect(srv.cookie).toBe('');
    });
  });

  describe('When isBrowser is false', () => {
    beforeEach(() => genModule(false));

    it('#get', () => {
      expect(srv.get(KEY)).toBeUndefined();
    });

    it('#set', () => {
      srv.put(KEY, VALUE);
      expect(srv.cookie).toBe('');
    });
  });
});
