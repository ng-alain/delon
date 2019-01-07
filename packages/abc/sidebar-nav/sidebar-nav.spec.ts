import { DOCUMENT } from '@angular/common';
import { Component, DebugElement, Injector, ViewChild } from '@angular/core';
import {
  fakeAsync,
  tick,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ACLService } from '@delon/acl';
import { configureTestSuite } from '@delon/testing';
import {
  AlainThemeModule,
  MenuIcon,
  MenuService,
  SettingsService,
  WINDOW,
} from '@delon/theme';
import { deepCopy } from '@delon/util';

import { SidebarNavComponent } from './sidebar-nav.component';
import { SidebarNavModule } from './sidebar-nav.module';
import { Nav } from './sidebar-nav.types';

const floatingShowCls = '.sidebar-nav__floating-show';
const MOCKMENUS = [
  {
    text: '主导航',
    group: true,
    children: [
      {
        text: '仪表盘',
        children: [
          { text: 'v1', link: '/v1' },
          { text: 'v2', link: '#/v2', i18n: 'v2-i18n' },
          { text: 'v3' },
          {
            text: 'externalLink-blank',
            externalLink: '//ng-alain.com/blank',
            target: '_blank',
          },
          {
            text: 'externalLink-top',
            externalLink: '//ng-alain.com/top',
            target: '_top',
          },
        ],
      },
    ],
  },
] as Nav[];

class MockACLService {
  can(val: string) {
    return val === 'admin';
  }
}

class MockWindow {
  open() {}
  location = new MockLocation();
}
class MockLocation {
  private url: string;
  get href(): string {
    return this.url;
  }
  set href(url: string) {
    this.url = url;
  }
}

describe('abc: sidebar-nav', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let router: Router;
  let setSrv: SettingsService;
  let menuSrv: MenuService;
  let page: PageObject;
  let doc: Document;

  function createModule() {
    injector = TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        AlainThemeModule,
        SidebarNavModule,
      ],
      declarations: [TestComponent],
      providers: [
        { provide: ACLService, useClass: MockACLService },
        { provide: WINDOW, useFactory: () => new MockWindow() },
      ],
    });
  }

  function createComp(needMockNavigateByUrl = true, callback?: () => void) {
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
    router = injector.get(Router);
    setSrv = injector.get(SettingsService);
    menuSrv = injector.get(MenuService);
    doc = injector.get(DOCUMENT);
    menuSrv.add(deepCopy(MOCKMENUS));
    page = new PageObject();
    if (needMockNavigateByUrl) spyOn(router, 'navigateByUrl');
    if (callback) callback();
  }

  afterEach(() => context.comp.ngOnDestroy());

  describe('', () => {
    configureTestSuite(createModule);

    describe('[default]', () => {
      it('should be navigate url', () => {
        createComp();
        spyOn(context, 'select');
        const data = deepCopy(MOCKMENUS);
        menuSrv.add(data);
        expect(context.select).not.toHaveBeenCalled();
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        const itemEl = page.getEl<HTMLElement>('.sidebar-nav__depth1 a');
        itemEl.click();
        fixture.detectChanges();
        expect(context.select).toHaveBeenCalled();
        expect(router.navigateByUrl).toHaveBeenCalled();
      });

      describe('should be navigate external link', () => {
        it('with target is _blank', () => {
          createComp();
          const win = injector.get(WINDOW) as MockWindow;
          spyOn(win, 'open');
          const itemEl = page.getEl<HTMLElement>('.sidebar-nav__item [data-id="6"]');
          itemEl.click();
          expect(win.open).toHaveBeenCalled();
        });
        it('with target is _top', () => {
          createComp();
          const win = injector.get(WINDOW) as MockWindow;
          const itemEl = page.getEl<HTMLElement>('.sidebar-nav__item [data-id="7"]');
          itemEl.click();
          expect(win.location.href).toBe(`//ng-alain.com/top`);
        });
      });

      it('should be hide group name', () => {
        createComp();
        page.checkCount('.sidebar-nav__group-title');
        const data = deepCopy(MOCKMENUS) as Nav[];
        data[0].group = false;
        menuSrv.add(data);
        fixture.detectChanges();
        page.checkCount('.sidebar-nav__group-title', 0);
      });

      it('should be toggle open', () => {
        createComp();
        const data = deepCopy(MOCKMENUS);
        menuSrv.add(data);
        expect(data[0].children[0]._open).toBeUndefined();
        const subTitleEl = page.getEl<HTMLElement>('.sidebar-nav__item-link');
        subTitleEl.click();
        fixture.detectChanges();
        expect(data[0].children[0]._open).toBe(true);
      });

      it('should be reset menu when service is changed', () => {
        createComp();
        page.checkText('.sidebar-nav__group-title', MOCKMENUS[0].text);
        const newMenu = deepCopy(MOCKMENUS);
        newMenu[0].text = 'new主导航';
        menuSrv.add(newMenu);
        fixture.detectChanges();
        page.checkText('.sidebar-nav__group-title', newMenu[0].text);
      });

      it('should be block click menu when is disabled', () => {
        createComp();
        spyOn(context, 'select');
        const newMenus = [
          {
            text: '',
            children: [
              { text: 'new menu', disabled: true },
            ],
          },
        ];
        menuSrv.add(newMenus);
        expect(context.select).not.toHaveBeenCalled();
        const itemEl = page.getEl<HTMLElement>('.sidebar-nav__item-disabled');
        itemEl.click();
        fixture.detectChanges();
        expect(context.select).toHaveBeenCalled();
      });
    });

    describe('#icon', () => {
      function updateIcon(icon: string | MenuIcon) {
        createComp();

        menuSrv.add([
          {
            text: '',
            group: true,
            children: [
              {
                text: '',
                icon,
              },
            ],
          },
        ] as Nav[]);

        fixture.detectChanges();
      }
      describe('with icon', () => {
        it('when is string and includes [anticon-]', () => {
          updateIcon('anticon-edit');
          const el = page.getEl('.sidebar-nav__item-icon') as HTMLElement;
          expect(el.classList).toContain('anticon-edit');
        });
        it('when is string and http prefix', () => {
          updateIcon('http://ng-alain/1.jpg');
          page.checkCount('.sidebar-nav__item-img', 1);
        });
        it('when is class string', () => {
          updateIcon('demo-class');
          page.checkCount('.demo-class', 1);
        });
      });
      it('with className', () => {
        updateIcon({ type: 'class', value: 'demo-class' });
        page.checkCount('.demo-class', 1);
      });
      it('with img', () => {
        updateIcon({ type: 'img', value: '1.jpg' });
        page.checkCount('.sidebar-nav__item-img', 1);
      });
    });

    describe('[collapsed]', () => {
      describe('#default', () => {
        beforeEach(() => {
          createComp();
          setSrv.layout.collapsed = true;
          fixture.detectChanges();
        });
        it(`should be won't show sub-menu when not collapse`, () => {
          setSrv.layout.collapsed = false;
          fixture.detectChanges();
          page.showSubMenu(false);
        });
        it('should be show sub-menu', () => {
          page.showSubMenu();
        });
        it('should be displayed full submenu', () => {
          const clientHeight = spyOnProperty(
            doc.documentElement,
            'clientHeight',
          ).and.returnValue(0);
          spyOnProperty(
            doc.querySelector('body'),
            'clientHeight',
          ).and.returnValue(0);
          expect(clientHeight).not.toHaveBeenCalled();
          page.showSubMenu();
          expect(clientHeight).toHaveBeenCalled();
        });
      });
      describe('should be hide sub-menu in floating container', () => {
        it('muse be hide via click menu link', () => {
          createComp();
          setSrv.layout.collapsed = true;
          fixture.detectChanges();
          page.showSubMenu();
          page.hideSubMenu();
          expect(router.navigateByUrl).toHaveBeenCalled();
        });
        it('muse be hide via mouse leave area', () => {
          createComp();
          setSrv.layout.collapsed = true;
          fixture.detectChanges();
          page.showSubMenu();
          page
            .getEl<HTMLElement>(floatingShowCls, true)
            .dispatchEvent(new Event('mouseleave'));
          fixture.detectChanges();
          expect(page.getEl<HTMLElement>(floatingShowCls, true)).toBeNull();
        });
        it('muse be not hide via click except menu link area', () => {
          createComp();
          setSrv.layout.collapsed = true;
          fixture.detectChanges();
          page.showSubMenu();
          const containerEl = page.getEl<HTMLElement>(floatingShowCls, true);
          containerEl.querySelectorAll('li')[1].click();
          fixture.detectChanges();
          expect(router.navigateByUrl).not.toHaveBeenCalled();
        });
      });
      it('#52', () => {
        createComp();
        setSrv.layout.collapsed = true;
        fixture.detectChanges();
        page.showSubMenu();
        spyOn(context.comp.floatingEl, 'remove');
        page.hideSubMenu();
        expect(page.getEl<HTMLElement>(floatingShowCls, true)).toBeNull();
      });
    });

    describe('#disabledAcl', () => {
      const newMenus = [
        {
          text: '',
          children: [
            { text: 'new menu', acl: 'admin' },
            { text: 'new menu', acl: 'user' },
          ],
        },
      ];
      beforeEach(() => createComp());
      it('should be disabled item when with true', () => {
        context.disabledAcl = true;
        fixture.detectChanges();
        menuSrv.add(newMenus);
        const itemEl = page.getEl<HTMLElement>('.sidebar-nav__item [data-id="3"]');
        expect(itemEl.classList).toContain('sidebar-nav__item-disabled');
      });
      it('should be hidden item when with false', () => {
        context.disabledAcl = false;
        fixture.detectChanges();
        menuSrv.add(newMenus);
        const itemEl = page.getEl<HTMLElement>('.sidebar-nav__item [data-id="3"]');
        expect(itemEl == null).toBe(true);
      });
    });
  });

  describe('[underPad]', () => {
    beforeEach(createModule);

    it('should be auto collapsed when less than pad', fakeAsync(() => {
      // create test component
      TestBed.overrideTemplate(
        TestComponent,
        `<sidebar-nav #comp [autoCloseUnderPad]="true"></sidebar-nav>`,
      );
      const defaultCollapsed = false;
      createComp(false, () => {
        spyOnProperty(window, 'innerWidth').and.returnValue(767);
        setSrv.layout.collapsed = defaultCollapsed;
        fixture.detectChanges();
      });
      router.navigateByUrl('/');
      fixture.detectChanges();
      tick(20);
      expect(setSrv.layout.collapsed).toBe(!defaultCollapsed);
    }));
    it(`should be won't collapsed when more than pad`, fakeAsync(() => {
      // create test component
      TestBed.overrideTemplate(
        TestComponent,
        `<sidebar-nav #comp [autoCloseUnderPad]="true"></sidebar-nav>`,
      );
      const defaultCollapsed = false;
      createComp(false, () => {
        spyOnProperty(window, 'innerWidth').and.returnValue(769);
        setSrv.layout.collapsed = defaultCollapsed;
        fixture.detectChanges();
      });
      router.navigateByUrl('/');
      fixture.detectChanges();
      tick(20);
      expect(setSrv.layout.collapsed).toBe(defaultCollapsed);
    }));
    it('should be auto expaned when less than pad trigger click', fakeAsync(() => {
      // create test component
      TestBed.overrideTemplate(
        TestComponent,
        `<sidebar-nav #comp [autoCloseUnderPad]="true"></sidebar-nav>`,
      );
      createComp();
      setSrv.layout.collapsed = true;
      fixture.detectChanges();
      spyOnProperty(window, 'innerWidth').and.returnValue(767);
      expect(setSrv.layout.collapsed).toBe(true);
      page.getEl<HTMLElement>('.sidebar-nav').click();
      fixture.detectChanges();
      tick(20);
      expect(setSrv.layout.collapsed).toBe(false);
    }));
  });

  describe('should be recursive path', () => {
    configureTestSuite(() => {
      injector = TestBed.configureTestingModule({
        imports: [
          RouterModule.forRoot([]),
          AlainThemeModule,
          SidebarNavModule,
          RouterTestingModule.withRoutes([
            { path: 'user', component: TestRouteComponent },
            { path: 'user2', component: TestRouteComponent },
            { path: 'user/type', component: TestRouteComponent },
          ]),
        ],
        declarations: [TestComponent, TestRouteComponent],
      });
    });
    beforeEach(fakeAsync(() => {
      fixture = TestBed.createComponent(TestComponent);
      dl = fixture.debugElement;
      context = fixture.componentInstance;
      menuSrv = injector.get(MenuService);
      fixture.detectChanges();
      createComp(false);
      menuSrv.add([
        {
          text: '主导航',
          group: true,
          children: [
            { text: 'user', link: '/user' },
          ],
        },
      ]);
    }));
    it('with true', fakeAsync(() => {
      context.recursivePath = true;
      fixture.detectChanges();
      router.navigateByUrl('/user2');
      tick();
      fixture.detectChanges();
      page.checkCount('.sidebar-nav__selected', 0);
      router.navigateByUrl('/user/type');
      tick();
      fixture.detectChanges();
      page.checkCount('.sidebar-nav__selected', 1);
    }));
    it('with false', fakeAsync(() => {
      context.recursivePath = false;
      fixture.detectChanges();
      router.navigateByUrl('/user2');
      tick();
      fixture.detectChanges();
      page.checkCount('.sidebar-nav__selected', 0);
      router.navigateByUrl('/user/type');
      tick();
      fixture.detectChanges();
      page.checkCount('.sidebar-nav__selected', 0);
    }));
  });

  class PageObject {
    getEl<T>(cls: string, body = false) {
      const el = body
        ? document.querySelector(cls)
        : dl.query(By.css(cls))
          ? dl.query(By.css(cls)).nativeElement
          : null;
      return el ? (el as T) : null;
    }
    checkText(cls: string, value: any) {
      const el = this.getEl<HTMLElement>(cls);
      expect(el ? el.innerText.trim() : '').toBe(value);
    }
    checkCount(cls: string, count = 1) {
      expect(dl.queryAll(By.css(cls)).length).toBe(count);
      return this;
    }
    /** 期望显示子菜单，默认：`true` */
    showSubMenu(resultExpectShow = true) {
      let conEl = this.getEl<HTMLElement>(floatingShowCls, true);
      expect(conEl).toBeNull();
      const subTitleEl = this.getEl<HTMLElement>('.sidebar-nav__item-link');
      subTitleEl.dispatchEvent(new Event('mouseenter'));
      fixture.detectChanges();
      conEl = this.getEl<HTMLElement>(floatingShowCls, true);
      if (resultExpectShow) {
        expect(conEl).not.toBeNull();
      } else {
        expect(conEl).toBeNull();
      }
    }
    /** 期望隐藏子菜单，默认：`true` */
    hideSubMenu(resultExpectHide = true) {
      const containerEl = this.getEl<HTMLElement>(floatingShowCls, true);
      expect(containerEl).not.toBeNull();
      containerEl.querySelector(resultExpectHide ? 'a' : 'li').click();
      fixture.detectChanges();
      const conEl = this.getEl<HTMLElement>(floatingShowCls, true);
      if (resultExpectHide) expect(conEl).toBeNull();
      else expect(conEl).not.toBeNull();
    }
  }
});

@Component({
  template: `
    <sidebar-nav #comp [disabledAcl]="disabledAcl" [autoCloseUnderPad]="autoCloseUnderPad" [recursivePath]="recursivePath" (select)="select()"></sidebar-nav>
    `,
})
class TestComponent {
  @ViewChild('comp')
  comp: SidebarNavComponent;
  disabledAcl = false;
  autoCloseUnderPad = false;
  recursivePath = false;
  select() {}
}

@Component({ template: `` })
class TestRouteComponent {}
