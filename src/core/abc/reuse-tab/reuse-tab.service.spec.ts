import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';

import { MenuService } from '@delon/theme';

import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabMatchMode } from './interface';

const TITLE = `标题`;
let reuse: boolean = true;
class MockMenuService {
    getPathByUrl(url: string) {
        return url === '/a/0' ? null : [ { text: TITLE, reuse: reuse } ];
    }
}

describe('abc: reuse-tab', () => {

    let injector: Injector;
    let srv: ReuseTabService;
    let menuSrv: MenuService;

    afterEach(() => srv.ngOnDestroy());

    function genModule(providers: any[] = [ { provide: MenuService, useClass: MockMenuService } ]) {
        injector = TestBed.configureTestingModule({
            providers: [ ReuseTabService ].concat(providers)
        });
        srv = injector.get(ReuseTabService);
        menuSrv = injector.get(MenuService, null);
        reuse = true;
    }

    function genCached(count: number, urlTpl: string = `a/{index}`) {
        srv.clear();
        Array(count).fill({}).forEach((item: any, index: number) => {
            srv.store(getSnapshot(index + 1, urlTpl), { a: 1 });
        });
    }

    function getSnapshot(index: number, urlTpl: string = `a/{index}`) {
        return <any>{
            routeConfig: { },
            url: [ urlTpl.replace(`{index}`, index + '') ]
        };
    }

    describe('[property]', () => {
        beforeEach(() => genModule());
        it('#max', () => {
            genCached(10);
            expect(srv.count).toBe(10);
            srv.max = 5;
            expect(srv.count).toBe(5);
        });
        describe('#mode', () => {
            describe('when ReuseTabMatchMode.Menu', () => {
                beforeEach(() => srv.mode = ReuseTabMatchMode.Menu);
                it('can hit because menu data not allow', () => {
                    const snapshot = getSnapshot(1);
                    expect(srv.can(snapshot)).toBe(true);
                });
                it(`can't hit because not found in menu`, () => {
                    const snapshot = getSnapshot(0);
                    expect(srv.can(snapshot)).toBe(false);
                });
                it(`can't hit because not allowed reuse in menu`, () => {
                    reuse = false;
                    const snapshot = getSnapshot(1);
                    expect(srv.can(snapshot)).toBe(false);
                });
            });
            describe('when ReuseTabMatchMode.MenuForce', () => {
                beforeEach(() => srv.mode = ReuseTabMatchMode.MenuForce);
                it('can hit because menu data muse allow', () => {
                    // url: /a/1
                    const snapshot = getSnapshot(1);
                    expect(srv.can(snapshot)).toBe(true);
                });
                it(`can't hit because not found in menu`, () => {
                    const snapshot = getSnapshot(0);
                    expect(srv.can(snapshot)).toBe(false);
                });
                it(`can't hit because not allowed reuse in menu`, () => {
                    reuse = false;
                    const snapshot = getSnapshot(1);
                    expect(srv.can(snapshot)).toBe(false);
                });
            });
            describe('when ReuseTabMatchMode.URL', () => {
                beforeEach(() => srv.mode = ReuseTabMatchMode.URL);
                it('can hit because not exclude', () => {
                    const snapshot = getSnapshot(1);
                    expect(srv.can(snapshot)).toBe(true);
                });
                it(`can't hit because exclude`, () => {
                    srv.excludes = [ /\/a\/0/i ];
                    const snapshot = getSnapshot(0);
                    expect(srv.can(snapshot)).toBe(false);
                });
            });
        });
        describe('#debug', () => {
            beforeEach(() => spyOn(console, 'warn'));
            it('with true', () => {
                srv.debug = true;
                srv.remove('');
                expect(console.warn).toHaveBeenCalled();
            });
            it('with false', () => {
                srv.debug = false;
                srv.remove('');
                expect(console.warn).not.toHaveBeenCalled();
            });
        });
        describe('#excludes', () => {
            beforeEach(() => srv.mode = ReuseTabMatchMode.URL);
            it('can hit because not exclude', () => {
                srv.excludes = null;
                const snapshot = getSnapshot(1);
                expect(srv.can(snapshot)).toBe(true);
            });
            it(`can't hit because exclude`, () => {
                srv.excludes = [ /\/a\/0/i ];
                const snapshot = getSnapshot(0);
                expect(srv.can(snapshot)).toBe(false);
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
            srv._remove('/a/1');
            --count;
            expect(srv.count).toBe(count, `'remove' muse be return ${count} when has removed`);
            srv._remove('/a/b');
            expect(srv.count).toBe(count, `'remove' muse be return ${count} when invalid url`);
            // items
            expect(srv.items.length).toBe(count, `'items' muse be return ${count} length`);
            // count
            expect(srv.count).toBe(count, `'count' muse be return ${count}`);
            // clear
            srv.clear();
            expect(srv.count).toBe(0, `'clear' muse be return 0`);
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
                        _onReuseDestroy: jasmine.createSpy('_onReuseDestroy')
                    }
                }
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
                        _onReuseInit: jasmine.createSpy('_onReuseInit')
                    }
                }
            };
            const snapshot = getSnapshot(3);
            // handle
            srv.store(snapshot, handle);
            srv.retrieve(snapshot);
            expect(handle.componentRef.instance._onReuseInit).toHaveBeenCalled();
        });
    });
});
