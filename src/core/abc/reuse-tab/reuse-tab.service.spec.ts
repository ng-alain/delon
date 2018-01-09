import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
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
    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            providers: [
                ReuseTabService,
                { provide: MenuService, useClass: MockMenuService }
            ]
        });
        srv = injector.get(ReuseTabService);
    });

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

    it('#max', () => {
        genCached(10);
        expect(srv.count).toBe(10);
        srv.max = 5;
        expect(srv.count).toBe(5);
    });

    it('methods', () => {
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

    describe('#can', () => {
        beforeEach(() => genCached(2));

        it('via menu, #ReuseTabMatchMode.Menu', () => {
            srv.mode = ReuseTabMatchMode.Menu;
            expect(srv.can(getSnapshot(0))).toBe(false);
            expect(srv.can(getSnapshot(1))).toBe(true);
            reuse = false;
            expect(srv.can(getSnapshot(1))).toBe(false);
        });

        it('via menu, #ReuseTabMatchMode.MenuForce', () => {
            srv.mode = ReuseTabMatchMode.MenuForce;
            reuse = true;
            expect(srv.can(getSnapshot(1))).toBe(true);
            reuse = false;
            expect(srv.can(getSnapshot(1))).toBe(false);
            reuse = undefined;
            expect(srv.can(getSnapshot(1))).toBe(false);
        });

        it('via url', () => {
            srv.mode = ReuseTabMatchMode.URL;
            expect(srv.can(getSnapshot(1))).toBe(true);
        });

        it('via url, using excludes', () => {
            srv.mode = ReuseTabMatchMode.URL;
            srv.excludes = null;
            srv.excludes = [ /\/a\/1/ ];
            expect(srv.can(getSnapshot(1))).toBe(false);
            expect(srv.can(getSnapshot(2))).toBe(true);
        });
    });

    it('#shouldDetach', () => {
        genCached(2);
        srv.mode = ReuseTabMatchMode.Menu;
        expect(srv.can(getSnapshot(0))).toBe(false);
        expect(srv.can(getSnapshot(1))).toBe(true);
    });

    describe('#store', () => {
        beforeEach(() => genCached(2));
        it('new', () => {
            expect(srv.count).toBe(2);
            srv.store(getSnapshot(3), {});
            expect(srv.count).toBe(3);
        });
        it('exists', () => {
            expect(srv.count).toBe(2);
            srv.store(getSnapshot(1), {});
            expect(srv.count).toBe(2);
        });
    });

    it('#shouldAttach', () => {
        genCached(1);
        expect(srv.shouldAttach(getSnapshot(1))).toBe(true);
        expect(srv.shouldAttach(getSnapshot(2))).toBe(false);
    });

    it('#retrieve', () => {
        genCached(1);
        const handle: any = srv.retrieve(getSnapshot(1));
        expect(handle).not.toBeNull();
        expect(handle.a).toBe(1);
        expect(srv.retrieve(getSnapshot(2))).toBeNull();
    });
});
