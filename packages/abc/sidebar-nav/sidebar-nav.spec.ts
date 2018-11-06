import { Component, DebugElement, ViewChild, Injector } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { APP_BASE_HREF, DOCUMENT } from '@angular/common';

import {
  AlainThemeModule,
  MenuService,
  SettingsService,
  MenuIcon,
} from '@delon/theme';
import { deepCopy } from '@delon/util';

import { SidebarNavModule } from './sidebar-nav.module';
import { SidebarNavComponent } from './sidebar-nav.component';
import { Nav } from './sidebar-nav.types';
import { RouterTestingModule } from '@angular/router/testing';

const floatingShowCls = '.sidebar-nav__floating-show';
const MOCKMENUS = <Nav[]>[
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
            text: 'externalLink',
            externalLink: '//ng-alain.com',
            target: '_blank',
          },
        ],
      },
    ],
  },
];
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

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        AlainThemeModule.forRoot(),
        SidebarNavModule.forRoot(),
      ],
      declarations: [TestComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

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

    describe('should be exact highlighting item', () => {
      beforeEach(() => {
        injector = TestBed.configureTestingModule({
          imports: [
            RouterModule.forRoot([]),
            AlainThemeModule.forRoot(),
            SidebarNavModule.forRoot(),
            RouterTestingModule.withRoutes([
              { path: 'group', component: TestRouteComponent },
              { path: 'group/type', component: TestRouteComponent },
            ]),
          ],
          declarations: [TestComponent, TestRouteComponent],
          providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
        });
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        menuSrv = injector.get(MenuService);
        fixture.detectChanges();
      });
      it('when linkExact is [false]', (done: () => void) => {
        const data = <Nav[]>[
          {
            text: '',
            children: [
              { text: 'group', link: '/group' },
              { text: 'group/type', link: '/group/type' },
            ],
          },
        ];
        menuSrv.add(data);
        router = injector.get(Router);
        router.navigateByUrl('/group/type').then((res: any) => {
          fixture.detectChanges();
          expect(dl.queryAll(By.css('.sidebar-nav__selected')).length).toBe(2);
          done();
        });
      });
      it('when linkExact is [true]', (done: () => void) => {
        const data = <Nav[]>[
          {
            text: '',
            children: [
              { text: 'group', link: '/group', linkExact: true },
              { text: 'group/type', link: '/group/type', linkExact: true },
            ],
          },
        ];
        menuSrv.add(data);
        router = injector.get(Router);
        router.navigateByUrl('/group/type').then((res: any) => {
          fixture.detectChanges();
          expect(dl.queryAll(By.css('.sidebar-nav__selected')).length).toBe(1);
          done();
        });
      });
    });
  });

  describe('#icon', () => {
    function updateIcon(icon: string | MenuIcon) {
      createComp();

      menuSrv.add(<Nav[]>[
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
      ]);

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
      it('should be navigate to external', () => {
        page.showSubMenu();
        const containerEl = page.getEl<HTMLElement>(floatingShowCls, true);
        const externalEl = containerEl.querySelector('[data-type="external"]');
        expect(externalEl).not.toBeNull();
        (externalEl as HTMLElement).click();
        fixture.detectChanges();
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
      it('muse be hide via click menu link in hash route mode', () => {
        TestBed.overrideProvider(APP_BASE_HREF, {
          useFactory: () => {
            return '#';
          },
          deps: [],
        });
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
    describe('should be process baseHref', () => {
      ['/testbh', ''].forEach(baseHref => {
        it(baseHref ? 'with' : 'without', () => {
          TestBed.overrideProvider(APP_BASE_HREF, {
            useFactory: () => baseHref,
            deps: [],
          });
          createComp();
          setSrv.layout.collapsed = true;
          fixture.detectChanges();
          page.showSubMenu();
          const containerEl = page.getEl<HTMLElement>(floatingShowCls, true);
          expect(containerEl).not.toBeNull();
          expect(containerEl.querySelector('a').href).toContain(baseHref);
          page.hideSubMenu();
          expect(router.navigateByUrl).not.toHaveBeenCalledWith(baseHref);
        });
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

  describe('[underPad]', () => {
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
    <sidebar-nav #comp [autoCloseUnderPad]="autoCloseUnderPad" (select)="select()"></sidebar-nav>
    `,
})
class TestComponent {
  @ViewChild('comp')
  comp: SidebarNavComponent;
  autoCloseUnderPad = false;
  select() {}
}

@Component({ template: `` })
class TestRouteComponent {}
