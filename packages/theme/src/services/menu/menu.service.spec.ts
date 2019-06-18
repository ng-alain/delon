import { TestBed, TestBedStatic } from '@angular/core/testing';
import { filter } from 'rxjs/operators';

import { ACLService } from '@delon/acl';
import { deepCopy } from '@delon/util';
import { AlainI18NServiceFake, ALAIN_I18N_TOKEN } from '../i18n/i18n';

import { Menu } from './interface';
import { MenuService } from './menu.service';

class MockACLService {
  can(val: string) {
    return val === 'admin';
  }
}

describe('Service: Menu', () => {
  let injector: TestBedStatic;
  let srv: MenuService;
  const DATA = [
    {
      text: 'dashboard',
      link: '/dashboard',
      children: [{ text: 'v1', link: '/dashboard/v1' }, { text: 'v2', link: '/dashboard/v2' }],
    },
    {
      text: 'text',
      children: [{ text: 'sub text', link: '/text/sub', shortcut: true }],
    },
    { text: 'text', link: '/test', badge: 10 },
    {
      text: 'text',
      link: '/demo1',
      badge: 10,
      badgeDot: true,
      badgeStatus: 'success',
    },
    { text: 'text', externalLink: '//ng-alain.com' },
    { text: 'text', link: '/demo2', i18n: 'text' },
    { text: 'sub', children: [] },
  ];

  afterEach(() => srv.ngOnDestroy());

  describe('[default]', () => {
    beforeEach(() => {
      injector = TestBed.configureTestingModule({
        providers: [
          MenuService,
          { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake },
          { provide: ACLService, useClass: MockACLService },
        ],
      });
      srv = injector.get<MenuService>(MenuService);
    });

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
      srv.resume(() => ++tick);
      expect(tick).toBeGreaterThan(0);
    });

    it('#clear', () => {
      srv.add(deepCopy(DATA));
      expect(srv.menus.length).toBe(DATA.length);
      srv.clear();
      expect(srv.menus.length).toBe(0);
    });

    it('should be hidden item when setting [hide] property', () => {
      const newMenus = [{ text: 'new menu' }, { text: 'new menu', hide: true }];
      srv.add(newMenus);
      expect(srv.menus[0]._hidden).toBe(false);
      expect(srv.menus[1]._hidden).toBe(true);
    });

    it('should be hidden group name when setting [group] property', () => {
      const newMenus = [{ text: 'new menu' }, { text: 'new menu', group: false }];
      srv.add(newMenus);
      expect(srv.menus[0].group).toBe(true);
      expect(srv.menus[1].group).toBe(false);
    });

    it('should be disabed item when setting [disabled] property', () => {
      const newMenus = [{ text: 'new menu' }, { text: 'new menu', disabled: true }];
      srv.add(newMenus);
      expect(srv.menus[0].disabled).toBe(false);
      expect(srv.menus[1].disabled).toBe(true);
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
      it('recursive up find', () => {
        srv.add(deepCopy(DATA));
        srv.openedByUrl(`/dashboard/v1/1`, true);
        expect(srv.menus[0]._open).toBe(true);
      });
    });

    describe('#getHit', () => {
      it('when recursive is false', () => {
        const item = srv.getHit(DATA, '/dashboard/invalid');
        expect(item == null).toBe(true);
      });
      it('when recursive is true', () => {
        const item = srv.getHit(DATA, '/dashboard/invalid', true);
        expect(item == null).toBe(false);
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
      it('recursive up find', () => {
        srv.add(deepCopy(DATA));
        expect(srv.getPathByUrl(`/dashboard/1`).length).toBe(0);
        expect(srv.getPathByUrl(`/dashboard/1`, true).length).toBe(1);
      });
    });

    describe('#shortcuts', () => {
      it('should be under the dashboard', () => {
        srv.add(deepCopy(DATA));
        expect(srv.menus[0].children![1].children!.length).toBe(1);
      });
      it('should be use [shortcutRoot: true]', () => {
        const newMenus = [
          {
            text: 'new menu',
            children: [
              { text: 'submenu1', link: '/' },
              { text: 'submenu2', link: '/' },
              { text: 'sc', shortcutRoot: true },
            ],
          },
          {
            text: 'text',
            children: [{ text: 'sub text', link: '/text/sub', shortcut: true }],
          },
        ] as Menu[];
        srv.add(newMenus);
        expect(srv.menus[0].children![2].children!.length).toBe(1);
      });
      it('should be under zero node', () => {
        const newMenus = [
          {
            text: 'new menu',
            i18n: 'test',
          },
          {
            text: 'text',
            children: [{ text: 'sub text', link: '/text/sub', shortcut: true }],
          },
        ] as Menu[];
        srv.add(newMenus);
        expect(srv.menus[0].children![0].children!.length).toBe(1);
      });
      it('should be clean children', () => {
        const newMenus = [
          {
            text: 'new menu',
            children: [
              { text: 'submenu1', link: '/' },
              { text: 'submenu2', link: '/' },
              { text: 'sc', shortcutRoot: true },
            ],
          },
          {
            text: 'text',
            children: [{ text: 'sub text', link: '/text/sub', shortcut: true }],
          },
        ] as Menu[];
        srv.add(newMenus);
        const shortcutList = srv.menus[0].children![2].children;
        expect(shortcutList!.length).toBe(1);
        expect(shortcutList![0].__parent).toBe(srv.menus[0].children![2]);
      });
    });

    it('ACL', () => {
      const newMenus = [{ text: 'new menu', acl: 'admin' }, { text: 'new menu', acl: 'user' }];
      srv.add(newMenus);
      expect(srv.menus[0]._aclResult).toBe(true);
      expect(srv.menus[1]._aclResult).toBe(false);
    });

    it('#change', (done: () => void) => {
      const newMenus = [{ text: 'new menu' }];
      srv.change.pipe(filter(ls => ls.length > 0)).subscribe(res => {
        expect(res.length).toBe(1);
        expect(res[0].text).toBe(newMenus[0].text);
        done();
      });
      srv.add(newMenus);
    });

    describe('ISSUES', () => {
      it('ng-alain #107', () => {
        srv.add(deepCopy(DATA));
        expect(srv.menus[0].children!.filter(w => w.shortcutRoot === true).length).toBe(1);
        expect(srv.menus[0].children![1].children!.length).toBe(1);
        srv.resume();
        expect(srv.menus[0].children!.filter(w => w.shortcutRoot === true).length).toBe(1);
        expect(srv.menus[0].children![1].children!.length).toBe(1);
      });
    });

    describe('icon', () => {
      it('should be null', () => {
        srv.add([
          {
            text: 'dashboard',
            link: '/dashboard',
            icon: null,
          },
        ]);
        const icon: any = srv.menus[0].icon;
        expect(icon).toBeNull();
      });
      it('should be undefined', () => {
        srv.add([
          {
            text: 'dashboard',
            link: '/dashboard',
            icon: undefined,
          },
        ]);
        const icon: any = srv.menus[0].icon;
        expect(icon).toBeUndefined();
      });
      it('should be type is string', () => {
        srv.add([
          {
            text: 'dashboard',
            link: '/dashboard',
            icon: 'aa',
          },
        ]);
        const icon: any = srv.menus[0].icon;
        expect(typeof icon).toBe('object');
        expect(icon.type).toBe('class');
      });
      it('should be type is object', () => {
        srv.add([
          {
            text: 'dashboard',
            link: '/dashboard',
            icon: { type: 'icon', value: 'user' },
          },
        ]);
        const icon: any = srv.menus[0].icon;
        expect(typeof icon).toBe('object');
        expect(icon.type).toBe('icon');
      });
      it('should be anticon anticon-user', () => {
        srv.add([
          {
            text: 'dashboard',
            link: '/dashboard',
            icon: `anticon anticon-user`,
          },
        ]);
        const icon: any = srv.menus[0].icon;
        expect(typeof icon).toBe('object');
        expect(icon.type).toBe('icon');
        expect(icon.value).toBe('user');
      });
      it('should be image', () => {
        srv.add([
          {
            text: 'dashboard',
            link: '/dashboard',
            icon: `http://ng-alain.com/1.jpg`,
          },
        ]);
        const icon: any = srv.menus[0].icon;
        expect(typeof icon).toBe('object');
        expect(icon.type).toBe('img');
      });
    });
  });

  describe('[i18n changed]', () => {
    it('with ALAIN_I18N_TOKEN', () => {
      injector = TestBed.configureTestingModule({
        providers: [
          MenuService,
          { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake },
          { provide: ACLService, useClass: MockACLService },
        ],
      });
      srv = injector.get<MenuService>(MenuService);
      spyOn(srv, 'resume');
      expect(srv.resume).not.toHaveBeenCalled();
      injector.get(ALAIN_I18N_TOKEN).use('en');
      expect(srv.resume).toHaveBeenCalled();
    });

    it('without ALAIN_I18N_TOKEN', () => {
      injector = TestBed.configureTestingModule({
        providers: [MenuService, { provide: ACLService, useClass: MockACLService }],
      });
      srv = injector.get<MenuService>(MenuService);
      expect(true).toBe(true);
    });
  });
});
