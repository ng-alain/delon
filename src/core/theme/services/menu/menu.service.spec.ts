import { Injector } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { MenuService } from './menu.service';

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
        { text: 'text', link: '/', shortcut: true },
        { text: 'text', link: '/', badge: 10 },
        { text: 'text', link: '/', badge: 10, badge_dot: true, badge_status: 'success' },
        { text: 'text', externalLink: '//ng-alain.com' },
        { text: 'text', i18n: 'text' },
        { text: 'sub', children: [] }
    ];

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            providers: [MenuService]
        });
        srv = injector.get(MenuService);
    });

    it('should create an instance', () => {
        expect(srv).toBeTruthy();
    });

    it('#add', () => {
        srv.add([...DATA]);
        expect(srv.menus.length).toBe(DATA.length);
    });

    it('#clear', () => {
        srv.add([...DATA]);
        expect(srv.menus.length).toBe(DATA.length);
        srv.clear();
        expect(srv.menus.length).toBe(0);
    });

    it('#openedByUrl', () => {
        srv.add([...DATA]);
        srv.openedByUrl(`/dashboard/v1`);
        expect(srv.menus[0]._open).toBe(true);
    });

    it('#getPathByUrl', () => {
        srv.add([...DATA]);
        const menus = srv.getPathByUrl(`/dashboard/v1`);
        expect(menus.length).toBe(2);
        expect(menus[0].text).toBe('dashboard');
    });

    it('#shortcuts', () => {
        srv.add([...DATA]);
        let ls = srv.menus[0].children || [];
        let pos = ls.findIndex(w => w.shortcut_root === true);
        expect(pos).not.toBe(-1);
        expect(ls[pos].children.length).toBe(1);
        srv.resume();
        ls = srv.menus[0].children || [];
        pos = ls.findIndex(w => w.shortcut_root === true);
        expect(pos).not.toBe(-1);
        expect(ls[pos].children.length).toBe(1);
    });
});
