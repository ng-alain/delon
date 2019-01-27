import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { filter } from 'rxjs/operators';

import { MenuService } from '@delon/theme';

import { ReuseTabMatchMode, ReuseTitle } from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabStrategy } from './reuse-tab.strategy';

class MockMenuService {
  getPathByUrl(url: string) {
    return url === '/a/0' ? [] : [{ text: `标题` }];
  }
}
class MockRouter {
  navigateByUrl = jasmine.createSpy();
  get events() {
    return {
      subscribe: () => {
        return { unsubscribe: () => {} };
      },
    };
  }
}

describe('abc: reuse-tab(service)', () => {
  let injector: Injector;
  let srv: ReuseTabService;
  let menuSrv: MenuService;
  let router: MockRouter;

  afterEach(() => srv.ngOnDestroy());

  function genModule(providers: any[] = [{ provide: MenuService, useClass: MockMenuService }]) {
    injector = TestBed.configureTestingModule({
      providers: [
        ReuseTabService,
        {
          provide: RouteReuseStrategy,
          useClass: ReuseTabStrategy,
          deps: [ReuseTabService],
        },
        { provide: ActivatedRoute, useValue: { snapshot: { url: [] } } },
        { provide: Router, useFactory: () => new MockRouter() },
      ].concat(providers),
    });
    srv = injector.get(ReuseTabService);
    menuSrv = injector.get(MenuService, null);
    router = injector.get(Router) as any;
  }

  function genCached(count: number, urlTpl: string = `a/{index}`) {
    srv.clear();
    Array(count)
      .fill({})
      .forEach((item: any, index: number) => {
        srv.store(getSnapshot(index + 1, urlTpl), { a: 1 });
      });
  }

  /**
   * 模拟 Snapshot
   * - 1 => a/1
   */
  function getSnapshot(index: number, urlTpl: string = `a/{index}`) {
    return {
      routeConfig: {},
      url: [urlTpl.replace(`{index}`, index + '')],
    } as any;
  }

  describe('[property]', () => {
    beforeEach(() => genModule());
    describe('#max', () => {
      it('should working', () => {
        genCached(10);
        expect(srv.count).toBe(10);
        srv.max = 5;
        expect(srv.count).toBe(5);
      });
      it('should be close oldest page', () => {
        srv.max = 2;
        srv.store(getSnapshot(1), {});
        srv.store(getSnapshot(2), {});
        srv.store(getSnapshot(3), {});
        expect(srv.count).toBe(2);
        srv.store(getSnapshot(4), {});
        expect(srv.count).toBe(2);
      });
      it('should be ingore close when all is not closable', () => {
        srv.max = 2;
        srv.store(getSnapshot(1), {});
        srv.store(getSnapshot(2), {});
        srv.items.forEach(i => (i.closable = false));
        srv.store(getSnapshot(3), {});
        expect(srv.count).toBe(3);
        srv.store(getSnapshot(4), {});
        expect(srv.count).toBe(3);
      });
    });
    describe('#mode', () => {
      describe('when ReuseTabMatchMode.Menu', () => {
        beforeEach(() => (srv.mode = ReuseTabMatchMode.Menu));
        it('can hit because menu data not allow', () => {
          const snapshot = getSnapshot(1);
          expect(srv.can(snapshot)).toBe(true);
        });
        it(`can't hit because not found in menu`, () => {
          const snapshot = getSnapshot(0);
          expect(srv.can(snapshot)).toBe(false);
        });
        it(`can't hit because not allowed reuse in menu`, () => {
          const spy = spyOn(menuSrv, 'getPathByUrl');
          spy.and.returnValue([{ text: '1', link: '/a/1', reuse: false }]);
          expect(srv.can(getSnapshot(1))).toBe(false);
          spy.and.returnValue([{ text: '2', link: '/a/2', reuse: true }]);
          expect(srv.can(getSnapshot(2))).toBe(true);
        });
      });
      describe('when ReuseTabMatchMode.MenuForce', () => {
        beforeEach(() => (srv.mode = ReuseTabMatchMode.MenuForce));
        it('can hit because menu data muse allow', () => {
          const spy = spyOn(menuSrv, 'getPathByUrl');
          spy.and.returnValue([{ text: '1', link: '/a/1', reuse: true }]);
          expect(srv.can(getSnapshot(1))).toBe(true);
        });
        it(`can't hit because not found in menu`, () => {
          const snapshot = getSnapshot(0);
          expect(srv.can(snapshot)).toBe(false);
        });
        it(`can't hit because not allowed reuse in menu`, () => {
          const spy = spyOn(menuSrv, 'getPathByUrl');
          spy.and.returnValue([{ text: '1', link: '/a/1', reuse: false }]);
          expect(srv.can(getSnapshot(1))).toBe(false);
          spy.and.returnValue([{ text: '2', link: '/a/2', reuse: true }]);
          expect(srv.can(getSnapshot(2))).toBe(true);
        });
      });
      describe('when ReuseTabMatchMode.URL', () => {
        beforeEach(() => (srv.mode = ReuseTabMatchMode.URL));
        it('can hit because not exclude', () => {
          const snapshot = getSnapshot(1);
          expect(srv.can(snapshot)).toBe(true);
        });
        it(`can't hit because exclude`, () => {
          srv.excludes = [/\/a\/0/i];
          const snapshot = getSnapshot(0);
          expect(srv.can(snapshot)).toBe(false);
        });
      });
    });
    describe('#debug', () => {
      beforeEach(() => {
        spyOn(console, 'warn');
        genCached(1);
      });
      it('with true', () => {
        srv.debug = true;
        srv.close('/a/1');
        expect(console.warn).toHaveBeenCalled();
      });
      it('with false', () => {
        srv.debug = false;
        srv.close('/a/1');
        expect(console.warn).not.toHaveBeenCalled();
      });
    });
    describe('#excludes', () => {
      beforeEach(() => (srv.mode = ReuseTabMatchMode.URL));
      it('can hit because not exclude', () => {
        srv.excludes = null;
        const snapshot = getSnapshot(1);
        expect(srv.can(snapshot)).toBe(true);
      });
      it(`can't hit because exclude`, () => {
        srv.excludes = [/\/a\/0/i];
        const snapshot = getSnapshot(0);
        expect(srv.can(snapshot)).toBe(false);
        expect(srv.excludes.length).toBe(1);
      });
    });
    it('basic methods', () => {
      let count = 5;
      genCached(count);
      // index
      expect(srv.index('/a/1')).toBe(0, `'index' muse be contain '/a/1'`);
      expect(srv.index('/a/b')).toBe(-1, `'index' muse be not contain '/a/b'`);
      // exists
      expect(srv.exists('/a/1')).toBe(true, `'exists' muse be contain '/a/1'`);
      expect(srv.exists('/a/b')).toBe(false, `'exists' muse be not contain '/a/b'`);
      // get
      expect(srv.get('/a/1')).not.toBeNull(`'get' muse be return cache data`);
      expect(srv.get('/a/b')).toBeNull(`'get' muse be return null`);
      expect(srv.get(null)).toBeNull(`'get' muse be return null if null`);
      // remove
      srv.close('/a/1');
      --count;
      expect(srv.count).toBe(count, `'remove' muse be return ${count} when has removed`);
      srv.close('/a/b');
      expect(srv.count).toBe(count, `'remove' muse be return ${count} when invalid url`);
      // items
      expect(srv.items.length).toBe(count, `'items' muse be return ${count} length`);
      // count
      expect(srv.count).toBe(count, `'count' muse be return ${count}`);
      // clear
      srv.clear();
      expect(srv.count).toBe(0, `'clear' muse be return 0`);
    });
    describe('#title', () => {
      it('should reset title via service', () => {
        genCached(1, '/');
        expect(srv.getTitle('/').text).toBe('标题');
        srv.title = 'a';
        expect(srv.getTitle('/').text).toBe('a');
      });
      it('should get title from route data', () => {
        const title = 'aa';
        expect(srv.getTitle('/', { data: { title } } as any).text).toBe(title);
      });
      it('should used ReuseTitle set title via service', () => {
        genCached(1, '/');
        expect(srv.getTitle('/').text).toBe('标题');
        srv.title = { text: 'a' } as ReuseTitle;
        expect(srv.getTitle('/').text).toBe('a');
      });
      it('should use url as title when can be no found title', () => {
        const url = '/a/0';
        expect(srv.getTitle(url).text).toBe(url);
      });
      it('#clearTitleCached', () => {
        srv.clearTitleCached();
        expect(true).toBe(true);
      });
    });
    describe('#closable', () => {
      it('should reset closable via service', () => {
        genCached(1, '/');
        expect(srv.getClosable('/')).toBe(true);
        srv.closable = false;
        expect(srv.getClosable('/')).toBe(false);
      });
      it('should get closable from route data', () => {
        const closable = false;
        expect(srv.getClosable('/', { data: { reuseClosable: closable } } as any)).toBe(closable);
      });
      it('should get closable from menu data', () => {
        const spy = spyOn(menuSrv, 'getPathByUrl');
        spy.and.returnValue([{ text: '1', link: '/1', reuseClosable: false }]);
        expect(srv.getClosable('/1')).toBe(false);
        spy.and.returnValue([{ text: '2', link: '/2', reuseClosable: true }]);
        expect(srv.getClosable('/2')).toBe(true);
      });
      it('should use url as title when can be no found title', () => {
        const url = '/a/0';
        expect(srv.getClosable(url)).toBe(true);
      });
      it('should be keep closable: false when cleared', () => {
        genCached(5);
        srv.items[0].closable = false;
        expect(srv.count).toBe(5);
        srv.clear();
        expect(srv.count).toBe(1);
      });
      it('#clearClosableCached', () => {
        srv.clearClosableCached();
        expect(true).toBe(true);
      });
      it('should be forced clear even though closable: false', () => {
        genCached(5);
        srv.items[0].closable = false;
        expect(srv.count).toBe(5);
        srv.clear(true);
        expect(srv.count).toBe(0);
      });
    });
    describe('#remove', () => {
      const INITCOUNT = 2;
      beforeEach(() => genCached(INITCOUNT));
      it('should be remove a route', () => {
        expect(srv.count).toBe(INITCOUNT);
        srv.close('/a/1');
        expect(srv.count).toBe(INITCOUNT - 1);
      });
      it('should be forced remove even though closable: false', () => {
        expect(srv.count).toBe(INITCOUNT);
        srv.items[0].closable = false;
        srv.close('/a/1', true);
        expect(srv.count).toBe(INITCOUNT - 1);
      });
      it('should be remove a non-exists page', () => {
        expect(srv.count).toBe(INITCOUNT);
        srv.close('/a/10');
        expect(srv.count).toBe(INITCOUNT);
      });
      it('should be destroy component instance when remove a page', () => {
        const instance = {
          componentRef: {
            destroy: jasmine.createSpy('destroy'),
          },
        };
        srv.store(getSnapshot(3), instance);
        srv.close('/a/3');
        expect(instance.componentRef.destroy).toHaveBeenCalled();
      });
      it('should be close right', () => {
        genCached(10);
        srv.closeRight('/a/5');
        expect(srv.count).toBe(5);
        expect(srv.items[srv.count - 1].url).toBe('/a/5');
      });
      it('should forced close right even though closable: false', () => {
        genCached(10);
        srv.items[7].closable = false;
        srv.items[8].closable = false;
        srv.closeRight('/a/5', true);
        expect(srv.count).toBe(5);
        expect(srv.items[srv.count - 1].url).toBe('/a/5');
      });
    });
    describe('#move', () => {
      const INITCOUNT = 5;
      beforeEach(() => genCached(INITCOUNT));
      it('should be [/a/1] from 0 to 2', () => {
        const source = '/a/1';
        const target = '/a/3';
        expect(srv.items[0].url).toBe(source);
        expect(srv.items[2].url).toBe(target);
        srv.move(source, 2);
        expect(srv.items[0].url).toBe('/a/2');
        expect(srv.items[1].url).toBe(target);
        expect(srv.items[2].url).toBe(source);
      });
      it('should be [/a/1] from 0 to -1', () => {
        const source = '/a/1';
        const target = '/a/5';
        expect(srv.items[0].url).toBe(source);
        expect(srv.items[INITCOUNT - 1].url).toBe(target);
        srv.move(source, -1);
        expect(srv.items[0].url).toBe('/a/2');
        expect(srv.items[INITCOUNT - 2].url).toBe(target);
        expect(srv.items[INITCOUNT - 1].url).toBe(source);
      });
      it('should be move a invalid url', () => {
        const source = '/a/1';
        const target = '/a/3';
        const invalidUrl = '/a/a';
        expect(srv.items[0].url).toBe(source);
        expect(srv.items[2].url).toBe(target);
        srv.move(invalidUrl, 2);
        expect(srv.items[0].url).toBe(source);
        expect(srv.items[2].url).toBe(target);
      });
    });
    it('#refresh', () => {
      const _$ = srv.change.pipe(filter(w => w !== null)).subscribe(
        res => {
          expect(res.active).toBe('refresh');
          _$.unsubscribe();
        },
        () => expect(false).toBe(true),
      );
      srv.refresh(true);
    });
    describe('#replace', () => {
      it('should be navigate to new url', () => {
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        srv.replace('/a/1');
        expect(router.navigateByUrl).toHaveBeenCalled();
      });
      it('should be closed current router after navigate to new url', () => {
        genCached(1, '');
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        srv.replace('/b');
        expect(router.navigateByUrl).toHaveBeenCalled();
      });
    });
    describe('#keepingScroll', () => {
      it('should get keepingScroll from service', () => {
        srv.keepingScroll = true;
        expect(srv.getKeepingScroll('')).toBe(true);
        srv.keepingScroll = false;
        expect(srv.getKeepingScroll('')).toBe(false);
      });
      it('should get keepingScroll from route data', () => {
        expect(srv.getKeepingScroll('/', { data: { keepingScroll: false } } as any)).toBe(false);
        expect(srv.getKeepingScroll('/', { data: { keepingScroll: true } } as any)).toBe(true);
      });
      it('should get keepingScroll from menu data', () => {
        const spy = spyOn(menuSrv, 'getPathByUrl');
        spy.and.returnValue([{ text: '1', link: '/1', keepingScroll: false }]);
        expect(srv.getKeepingScroll('/1')).toBe(false);
        spy.and.returnValue([{ text: '2', link: '/2', keepingScroll: true }]);
        expect(srv.getKeepingScroll('/2')).toBe(true);
      });
    });
  });

  describe('##boundary##', () => {
    it(`can't neve hit without MenuService in ReuseTabMatchMode.Menu mode`, () => {
      genModule([]);
      srv.mode = ReuseTabMatchMode.Menu;
      expect(srv.can(getSnapshot(1))).toBe(false);
    });
  });

  describe('#shouldDetach', () => {
    beforeEach(() => {
      genModule();
      srv.mode = ReuseTabMatchMode.URL;
    });
    it(`can hit when target route`, () => {
      expect(srv.shouldDetach(getSnapshot(0))).toBe(true);
    });
    it(`can't hit when is child route`, () => {
      const snapshot = getSnapshot(0);
      snapshot.routeConfig.children = [];
      expect(srv.shouldDetach(snapshot)).toBe(false);
    });
    it(`can't hit when is lazy loading route`, () => {
      const snapshot = getSnapshot(0);
      snapshot.routeConfig.loadChildren = {};
      expect(srv.shouldDetach(snapshot)).toBe(false);
    });
    it(`should route data first`, () => {
      const snapshotTrue = getSnapshot(0);
      snapshotTrue.data = {
        reuse: true,
      };
      expect(srv.shouldDetach(snapshotTrue)).toBe(true);
      const snapshotFalse = getSnapshot(0);
      snapshotFalse.data = {
        reuse: false,
      };
      expect(srv.shouldDetach(snapshotFalse)).toBe(false);
    });
    it(`can't hit when remove current page`, () => {
      const snapshot = getSnapshot(1);
      expect(srv.shouldDetach(snapshot)).toBe(true);
      srv.store(snapshot, {});
      srv.close(srv.getUrl(snapshot));
      expect(srv.shouldDetach(snapshot)).toBe(false);
    });
  });

  describe('#store', () => {
    beforeEach(() => {
      genModule();
      srv.mode = ReuseTabMatchMode.URL;
      genCached(2);
    });
    it(`should be store a new route`, () => {
      expect(srv.count).toBe(2);
      srv.store(getSnapshot(3), {});
      expect(srv.count).toBe(3);
    });
    it(`should be store a exists route`, () => {
      expect(srv.count).toBe(2);
      srv.store(getSnapshot(1), {});
      expect(srv.count).toBe(2);
    });
    it(`should be store a route when out of cache count`, () => {
      srv.max = 2;
      expect(srv.count).toBe(2);
      srv.store(getSnapshot(3), { componentRef: {} });
      expect(srv.count).toBe(2);
    });
    it(`should be run _onReuseDestroy event hook`, () => {
      const handle = {
        componentRef: {
          instance: {
            _onReuseDestroy: jasmine.createSpy('_onReuseDestroy'),
          },
        },
      };
      srv.store(getSnapshot(3), handle);
      expect(handle.componentRef.instance._onReuseDestroy).toHaveBeenCalled();
    });
  });

  describe('#shouldAttach', () => {
    beforeEach(() => {
      genModule();
      srv.mode = ReuseTabMatchMode.URL;
    });
    it('should be attached when is cached', () => {
      genCached(1);
      expect(srv.shouldAttach(getSnapshot(1))).toBe(true);
      expect(srv.shouldAttach(getSnapshot(2))).toBe(false);
    });
    it('should be not attach when not cached', () => {
      expect(srv.shouldAttach(getSnapshot(1))).toBe(false);
      expect(srv.shouldAttach(getSnapshot(2))).toBe(false);
    });
  });

  describe('#retrieve', () => {
    beforeEach(() => {
      genModule();
      srv.mode = ReuseTabMatchMode.URL;
    });
    it('should be retrieve when is cached', () => {
      genCached(1);
      const handle: any = srv.retrieve(getSnapshot(1));
      expect(handle).not.toBeNull();
      expect(handle.a).toBe(1);
    });
    it('should be not retrieve when not cached', () => {
      expect(srv.retrieve(getSnapshot(2))).toBeNull();
    });
    it(`can't retrieve when is lazy loading route`, () => {
      const snapshot = getSnapshot(0);
      snapshot.routeConfig.loadChildren = {};
      expect(srv.retrieve(getSnapshot(2))).toBeNull();
    });
    it(`should be run _onReuseInit event hook`, () => {
      const handle = {
        componentRef: {
          instance: {
            _onReuseInit: jasmine.createSpy('_onReuseInit'),
          },
        },
      };
      const snapshot = getSnapshot(3);
      // handle
      srv.store(snapshot, handle);
      srv.shouldAttach(snapshot);
      expect(handle.componentRef.instance._onReuseInit).toHaveBeenCalled();
    });
  });
});
