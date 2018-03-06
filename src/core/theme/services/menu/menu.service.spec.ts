import { Injector } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { filter } from 'rxjs/operators';

import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN, Menu } from '@delon/theme';
import { AlainI18NServiceFake } from '@delon/theme/services/i18n/i18n';
import { deepCopy } from '@delon/abc/utils/utils';

import { MenuService } from './menu.service';

class MockACLService {
    can(val: string) {
        return val === 'admin';
    }
}

describe('Service: Menu', () => {
    let injector: Injector;
    let srv: MenuService;
    const DATA = [
        {
            text: 'dashboard', link: '/dashboard',
            children: [
                { text: 'v1', link: '/dashboard/v1' },
                { text: 'v2', link: '/dashboard/v2' }
            ]
        },
        { text: 'text', children: [ { text: 'sub text', link: '/text/sub', shortcut: true } ] },
        { text: 'text', link: '/test', badge: 10 },
        { text: 'text', link: '/demo1', badge: 10, badge_dot: true, badge_status: 'success' },
        { text: 'text', externalLink: '//ng-alain.com' },
        { text: 'text', link: '/demo2', i18n: 'text' },
        { text: 'sub', children: [] }
    ];

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            providers: [
                MenuService,
                { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake },
                { provide: ACLService, useClass: MockACLService }
            ]
        });
        srv = injector.get(MenuService);
    });

    afterEach(() => srv.ngOnDestroy());

    it('should create an instance', () => {
        expect(srv).toBeTruthy();
    });

    it('#add', () => {
        srv.add(deepCopy(DATA));
        expect(srv.menus.length).toBe(DATA.length);
    });

    it('#resume', () => {
        srv.add(deepCopy(DATA));
        let tick = 0;
        srv.resume(item => ++tick);
        expect(tick).toBeGreaterThan(0);
    });

    it('#clear', () => {
        srv.add(deepCopy(DATA));
        expect(srv.menus.length).toBe(DATA.length);
        srv.clear();
        expect(srv.menus.length).toBe(0);
    });

    it('should be hidden menu when setting [hide] property', () => {
        const newMenus = [
            { text: 'new menu' },
            { text: 'new menu', hide: true }
        ];
        srv.add(newMenus);
        expect(srv.menus[0]._hidden).toBe(false);
        expect(srv.menus[1]._hidden).toBe(true);
    });

    describe('#openedByUrl', () => {
        it('with url', () => {
            srv.add(deepCopy(DATA));
            srv.openedByUrl(`/dashboard/v1`);
            expect(srv.menus[0]._open).toBe(true);
        });
        it('not found', () => {
            srv.add(deepCopy(DATA));
            srv.openedByUrl(`/notfound`);
            expect(srv.menus.filter(w => w._open === false).length).toBe(srv.menus.length);
        });
        it('invalid url', () => {
            srv.add(deepCopy(DATA));
            srv.openedByUrl(null);
            expect(srv.menus.filter(w => w._open === false).length).toBe(0);
        });
    });

    describe('#getPathByUrl', () => {
        it('with url', () => {
            srv.add(deepCopy(DATA));
            const menus = srv.getPathByUrl(`/dashboard/v1`);
            expect(menus.length).toBe(2);
            expect(menus[0].text).toBe('dashboard');
        });
        it('invalid url', () => {
            srv.add(deepCopy(DATA));
            const menus = srv.getPathByUrl(`/dashboard/v1111`);
            expect(menus.length).toBe(0);
        });
    });

    describe('#shortcuts', () => {
        it('should be under the dashboard', () => {
            srv.add(deepCopy(DATA));
            expect(srv.menus[0].children[1].children.length).toBe(1);
        });
        it('should be use [shortcut_root: true]', () => {
            const newMenus = <Menu[]>[
                {
                    text: 'new menu',
                    children: [
                        { text: 'submenu1', link: '/' },
                        { text: 'submenu2', link: '/' },
                        { text: 'sc', shortcut_root: true }
                    ]
                },
                { text: 'text', children: [ { text: 'sub text', link: '/text/sub', shortcut: true } ] }
            ];
            srv.add(newMenus);
            expect(srv.menus[0].children[2].children.length).toBe(1);
        });
        it('should be under zero node', () => {
            const newMenus = <Menu[]>[
                {
                    text: 'new menu',
                    i18n: 'test'
                },
                { text: 'text', children: [ { text: 'sub text', link: '/text/sub', shortcut: true } ] }
            ];
            srv.add(newMenus);
            expect(srv.menus[0].children[0].children.length).toBe(1);
        });
    });

    it('ACL', () => {
        const newMenus = [
            { text: 'new menu', acl: 'admin' },
            { text: 'new menu', acl: 'user' }
        ];
        srv.add(newMenus);
        expect(srv.menus[0]._hidden).toBe(false);
        expect(srv.menus[1]._hidden).toBe(true);
        srv.ngOnDestroy();
    });

    it('#change', (done: () => void) => {
        const newMenus = [
            { text: 'new menu' }
        ];
        srv.change.pipe(filter(ls => ls.length > 0)).subscribe(res => {
            expect(res.length).toBe(1);
            expect(res[0].text).toBe(newMenus[0].text);
            srv.ngOnDestroy();
            done();
        });
        srv.add(newMenus);
    });

    describe('ISSUES', () => {
        it('ng-alain #107', () => {
            srv.add(deepCopy(DATA));
            expect(srv.menus[0].children.filter(w => w.shortcut_root === true).length).toBe(1);
            expect(srv.menus[0].children[1].children.length).toBe(1);
            srv.resume();
            expect(srv.menus[0].children.filter(w => w.shortcut_root === true).length).toBe(1);
            expect(srv.menus[0].children[1].children.length).toBe(1);
        });
    });
});
