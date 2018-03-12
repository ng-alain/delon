import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { MenuService } from '@delon/theme';

import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabMatchMode } from './interface';

const TITLE = `标题`;
let reuse: boolean = true;
let reuseClosable: boolean = true;
class MockMenuService {
    getPathByUrl(url: string) {
        return url === '/a/0' ? [] : [ { text: TITLE, reuse, reuseClosable } ];
    }
}

describe('abc: reuse-tab', () => {

    let injector: Injector;
    let srv: ReuseTabService;
    let menuSrv: MenuService;

    afterEach(() => srv.ngOnDestroy());

    function genModule(providers: any[] = [ { provide: MenuService, useClass: MockMenuService } ]) {
        injector = TestBed.configureTestingModule({
            providers: [
                ReuseTabService,
                { provide: ActivatedRoute, useValue: { snapshot: { url: [] } } }
            ].concat(providers)
        });
        srv = injector.get(ReuseTabService);
        menuSrv = injector.get(MenuService, null);
        reuse = true;
        reuseClosable = true;
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
                expect(srv.getTitle('/')).toBe('标题');
                srv.title = 'a';
                expect(srv.getTitle('/')).toBe('a');
            });
            it('should get title from route data', () => {
                const title = 'aa';
                expect(srv.getTitle('/', <any>{ data: { title } })).toBe(title);
            });
            it('should use url as title when can be no found title', () => {
                const url = '/a/0';
                expect(srv.getTitle(url)).toBe(url);
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
                expect(srv.getClosable('/', <any>{ data: { reuseClosable: closable } })).toBe(closable);
            });
            it('should get closable from menu data', () => {
                reuseClosable = false;
                expect(srv.getClosable('/')).toBe(reuseClosable);
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
                const instance = { componentRef: {
                    destroy: jasmine.createSpy('destroy')
                } };
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
                const source = '/a/1', target = '/a/3';
                expect(srv.items[0].url).toBe(source);
                expect(srv.items[2].url).toBe(target);
                srv.move(source, 2);
                expect(srv.items[0].url).toBe('/a/2');
                expect(srv.items[1].url).toBe(target);
                expect(srv.items[2].url).toBe(source);
            });
            it('should be [/a/1] from 0 to -1', () => {
                const source = '/a/1', target = '/a/5';
                expect(srv.items[0].url).toBe(source);
                expect(srv.items[INITCOUNT - 1].url).toBe(target);
                srv.move(source, -1);
                expect(srv.items[0].url).toBe('/a/2');
                expect(srv.items[INITCOUNT - 2].url).toBe(target);
                expect(srv.items[INITCOUNT - 1].url).toBe(source);
            });
            it('should be move a invalid url', () => {
                const source = '/a/1', target = '/a/3', invalidUrl = '/a/a';
                expect(srv.items[0].url).toBe(source);
                expect(srv.items[2].url).toBe(target);
                srv.move(invalidUrl, 2);
                expect(srv.items[0].url).toBe(source);
                expect(srv.items[2].url).toBe(target);
            });
        });
        it('#refresh', () => {
            srv.change.pipe(filter(w => w !== null)).subscribe(
                (res) => expect(res.active).toBe('refresh'),
                () => expect(false).toBe(true)
            );
            srv.refresh(true);
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
                reuse: true
            };
            expect(srv.shouldDetach(snapshotTrue)).toBe(true);
            const snapshotFalse = getSnapshot(0);
            snapshotFalse.data = {
                reuse: false
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
