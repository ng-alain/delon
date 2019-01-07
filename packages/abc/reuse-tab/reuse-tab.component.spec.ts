import { Component, DebugElement, Injector, ViewChild } from '@angular/core';
import {
  fakeAsync,
  tick,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ExtraOptions,
  Router,
  RouterStateSnapshot,
  RouteReuseStrategy,
  ROUTER_CONFIGURATION,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

import { configureTestSuite } from '@delon/testing';
import {
  en_US,
  zh_CN,
  ALAIN_I18N_TOKEN,
  DelonLocaleModule,
  DelonLocaleService,
  MenuService,
  ScrollService,
  WINDOW,
} from '@delon/theme';

import { AlainI18NServiceFake } from '../../theme/src/services/i18n/i18n';
import { ReuseTabComponent } from './reuse-tab.component';
import { ReuseCustomContextMenu, ReuseTabMatchMode } from './reuse-tab.interfaces';
import { ReuseTabModule } from './reuse-tab.module';
import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabStrategy } from './reuse-tab.strategy';

let i18nResult = 'zh';
class MockI18NServiceFake extends AlainI18NServiceFake {
  fanyi(key: string) {
    return i18nResult;
  }
}

describe('abc: reuse-tab', () => {
  let injector: Injector;
  let fixture: ComponentFixture<AppComponent>;
  let dl: DebugElement;
  let layoutComp: LayoutComponent;
  let rtComp: ReuseTabComponent;
  let srv: ReuseTabService;
  let page: PageObject;

  function genModule(needI18n = false) {
    injector = TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LayoutComponent,
        AComponent,
        BComponent,
        CComponent,
        DComponent,
        EComponent,
      ],
      imports: [
        DelonLocaleModule,
        ReuseTabModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: LayoutComponent,
            children: [
              { path: 'a', component: AComponent },
              { path: 'b/:id', component: BComponent },
              { path: 'c', component: CComponent },
              { path: 'd', component: DComponent },
              { path: 'e', component: EComponent, data: { titleI18n: 'i18n' } },
              { path: 'lazy', loadChildren: 'lazy' },
              {
                path: 'leave',
                component: DComponent,
                canDeactivate: ['CanDeactivate'],
              },
            ],
          },
        ], { scrollPositionRestoration: 'disabled' }),
      ],
      providers: [
        MenuService,
        { provide: WINDOW, useValue: window },
        {
          provide: RouteReuseStrategy,
          useClass: ReuseTabStrategy,
          deps: [ReuseTabService],
        },
        {
          provide: 'CanDeactivate',
          useValue: (
            c: DComponent,
            a: ActivatedRouteSnapshot,
            b: RouterStateSnapshot,
          ) => {
            return Observable.create((observer: any) => observer.next(false));
          },
        },
      ].concat(
        !needI18n
          ? []
          : [
              {
                provide: ALAIN_I18N_TOKEN,
                useClass: MockI18NServiceFake,
              } as any,
            ],
      ),
    });
  }

  function createComp() {
    fixture = TestBed.createComponent(AppComponent);
    dl = fixture.debugElement;
    tick();
    fixture.detectChanges();

    srv = injector.get(ReuseTabService);
    const router = injector.get(Router) as Router;
    router.routeReuseStrategy = new ReuseTabStrategy(srv);

    page = new PageObject();
    layoutComp = dl
      .query(By.directive(LayoutComponent))
      .injector.get(LayoutComponent);
    rtComp = dl
      .query(By.directive(ReuseTabComponent))
      .injector.get(ReuseTabComponent);
    spyOn(layoutComp, 'change');
    spyOn(layoutComp, 'close');
  }

  afterEach(() => rtComp.ngOnDestroy());

  describe('', () => {
    configureTestSuite(genModule);

    beforeEach(fakeAsync(() => createComp()));

    describe('[default]', () => {
      it('should be create an instance', fakeAsync(() => {
        page.expectCount(1);
      }));
      it('should be add a tab when route changed', fakeAsync(() => {
        page.to('#b').expectCount(2);
      }));
      it('should be change tab via click', fakeAsync(() => {
        expect(layoutComp.change).not.toHaveBeenCalled();
        page.to('#b').go(0);
        expect(layoutComp.change).toHaveBeenCalled();
      }));
      it('should be two tab in routing parameters', fakeAsync(() => {
        page
          .to('#b')
          .tap(() => {
            page.getEl('#b2').click();
            page.advance();
          })
          .expectCount(3);
      }));
    });

    describe('#close', () => {
      it('should be close a tab', fakeAsync(() => {
        page
          .to('#b')
          .expectUrl(0, '/a')
          .expectUrl(1, '/b/1')
          .close(0)
          .expectUrl(0, '/b/1');
        expect(layoutComp.close).toHaveBeenCalled();
      }));
      it('should keep one tab when [showCurrent: true]', fakeAsync(() => {
        page
          .to('#b')
          .expectCount(2)
          .close(0)
          .expectCount(1);
        expect(document.querySelectorAll('.anticon-close').length).toBe(0);
      }));
      it('should close all tab when [showCurrent: false]', fakeAsync(() => {
        layoutComp.showCurrent = false;
        fixture.detectChanges();
        page
          .to('#b')
          .expectCount(1)
          .close(0)
          .expectCount(0);
        expect(page.getEl('reuse-tab').style.display).toBe('none');
      }));
      it('should show next tab when closed a has next tab', fakeAsync(() => {
        srv.max = 10;
        page
          .to('#b')
          .to('#c')
          .go(1)
          // a, b/1, c
          .expectUrl(1, '/b/1')
          .close(1)
          .expectUrl(1, '/c');
      }));
      it('issues-363', fakeAsync(() => {
        page
          .to('#b')
          .expectCount(2)
          .close(1)
          .expectCount(1)
          .expectAttr(0, 'closable', false);
      }));
    });

    describe('#title', () => {
      it(`should reset title via component`, fakeAsync(() => {
        page.to('#c');
        expect(page.list[page.count - 1].title).toBe(`new c title`);
      }));
    });

    describe('[property]', () => {
      describe('#showCurrent', () => {
        it('with true', fakeAsync(() => {
          layoutComp.showCurrent = true;
          fixture.detectChanges();
          page
            .to('#b')
            .expectCount(2)
            .expectUrl(0, '/a')
            .expectUrl(1, '/b/1')
            .to('#c')
            .expectCount(3)
            .expectUrl(0, '/a')
            .expectUrl(1, '/b/1')
            .expectUrl(2, '/c');
        }));
        it('with false', fakeAsync(() => {
          layoutComp.showCurrent = false;
          fixture.detectChanges();
          page
            .to('#b')
            .expectCount(1)
            .expectUrl(0, '/a')
            .to('#c')
            .expectCount(2)
            .expectUrl(1, '/b/1');
        }));
      });
      describe('#mode', () => {
        [
          ReuseTabMatchMode.Menu,
          ReuseTabMatchMode.MenuForce,
          ReuseTabMatchMode.URL,
        ].forEach(type => {
          it(`with ${type}`, () => {
            layoutComp.mode = type;
            fixture.detectChanges();
            expect(srv.mode).toBe(type);
          });
        });
      });
      describe('#debug', () => {
        [true, false].forEach(type => {
          it(`with ${type}`, () => {
            layoutComp.debug = type;
            fixture.detectChanges();
            expect(srv.debug).toBe(type);
          });
        });
      });
      describe('#max', () => {
        const MAX = 2;
        beforeEach(() => {
          layoutComp.max = MAX;
          fixture.detectChanges();
        });
        it('should working', fakeAsync(() => {
          page
            .to('#b')
            .expectCount(MAX)
            .to('#c')
            .expectCount(MAX + (layoutComp.showCurrent ? 1 : 0))
            .to('#d')
            .expectCount(MAX + (layoutComp.showCurrent ? 1 : 0));
        }));
      });
      describe('#allowClose', () => {
        it('with true', fakeAsync(() => {
          layoutComp.allowClose = true;
          fixture.detectChanges();
          page.to('#b');
          expect(dl.queryAll(By.css('.reuse-tab__op')).length).toBe(2);
          page.to('#c');
          expect(dl.queryAll(By.css('.reuse-tab__op')).length).toBe(3);
        }));
        it('with false', fakeAsync(() => {
          layoutComp.allowClose = false;
          fixture.detectChanges();
          page.to('#b');
          expect(dl.queryAll(By.css('.reuse-tab__op')).length).toBe(0);
          page.to('#c');
          expect(dl.queryAll(By.css('.reuse-tab__op')).length).toBe(0);
        }));
      });
    });

    describe('[context-menu]', () => {
      beforeEach(() => (srv.max = 10));
      it('should closed current tab', fakeAsync(() => {
        expect(layoutComp.close).not.toHaveBeenCalled();
        page
          .to('#b')
          .expectCount(2)
          .openContextMenu(1)
          .clickContentMenu('close')
          .expectCount(1);
        expect(layoutComp.close).toHaveBeenCalled();
      }));
      it('should keeping tab if closed include multi prev tab', fakeAsync(() => {
        let cTime: string;
        page
          .to('#b') // 1
          .to('#c') // 2
          .tap(() => (cTime = page.time))
          .to('#d') // 3
          .go(2)
          .expectCount(4)
          .openContextMenu(1)
          .clickContentMenu('close')
          .expectCount(3)
          .expectActive(1, true)
          .expectUrl(1, '/c')
          .expectTime(cTime);
      }));
      it('should show the previous tab if the right not tab', fakeAsync(() => {
        let aTime: string;
        page
          .tap(() => (aTime = page.time))
          .to('#b') // 1
          .expectCount(2)
          .openContextMenu(1)
          .clickContentMenu('close')
          .expectCount(1)
          .expectActive(0, true)
          .expectUrl(0, '/a')
          .expectTime(aTime);
      }));
      it('should show next tab if closed include multi right tab', fakeAsync(() => {
        let cTime: string;
        page
          .to('#b') // 1
          .to('#c') // 2
          .tap(() => (cTime = page.time))
          .to('#d') // 3
          .go(1)
          .expectCount(4)
          .openContextMenu(1)
          .clickContentMenu('close')
          .expectCount(3)
          .expectActive(1, true)
          .expectUrl(1, '/c')
          .expectTime(cTime);
      }));
      it('should keeping tab when closed prev tab', fakeAsync(() => {
        page
          .to('#b')
          .expectCount(2)
          .openContextMenu(0)
          .clickContentMenu('close')
          .expectCount(1)
          .expectActive(0, true);
      }));
      it('should keeping tab when closed next tab', fakeAsync(() => {
        page
          .to('#b')
          .go(0)
          .expectCount(2)
          .openContextMenu(1)
          .clickContentMenu('close')
          .expectCount(1)
          .expectActive(0, true);
      }));
      it('should keeping tab of closed right tab', fakeAsync(() => {
        let bTime: string;
        page
          .to('#b') // 1
          .tap(() => (bTime = page.time))
          .to('#c') // 2
          .to('#d') // 3
          .go(1)
          .expectCount(4)
          .openContextMenu(1)
          .clickContentMenu('closeRight')
          .expectCount(2)
          .expectActive(1, true)
          .expectUrl(1, '/b/1')
          .expectTime(bTime);
      }));
      it('should keeping tab of close other tab', fakeAsync(() => {
        let bTime: string;
        page
          .to('#b') // 1
          .tap(() => (bTime = page.time))
          .to('#c') // 2
          .to('#d') // 3
          .go(1)
          .expectCount(4)
          .openContextMenu(1)
          .clickContentMenu('closeOther')
          .expectCount(1)
          .expectActive(0, true)
          .expectUrl(0, '/b/1')
          .expectTime(bTime);
      }));
      it('should keeping tab of clear tab', fakeAsync(() => {
        let bTime: string;
        page
          .to('#b') // 1
          .tap(() => (bTime = page.time))
          .to('#c') // 2
          .to('#d') // 3
          .go(1)
          .expectCount(4)
          .openContextMenu(1)
          .clickContentMenu('clear')
          .expectCount(1)
          .expectActive(0, true)
          .expectUrl(0, '/b/1')
          .expectTime(bTime);
      }));
      it('should trigger off close when closable: false', fakeAsync(() => {
        page
          .to('#b')
          .tap(() => (srv.closable = false))
          .openContextMenu(1)
          .expectCount(2)
          .clickContentMenu('close')
          .expectCount(2);
      }));
      it('should trigger off closeRight when is last', fakeAsync(() => {
        page
          .to('#b')
          .openContextMenu(1)
          .expectCount(2)
          .clickContentMenu('closeRight')
          .expectCount(2);
      }));
      it('should hide context menu via click', fakeAsync(() => {
        page
          .to('#b')
          .openContextMenu(1)
          .expectCount(2);
        expect(document.querySelectorAll('.reuse-tab__cm').length).toBe(1);
        document.dispatchEvent(new Event('click'));
        page.advance();
        expect(document.querySelectorAll('.reuse-tab__cm').length).toBe(0);
      }));
      it('should be allow multi context menu', fakeAsync(() => {
        page
          .to('#b')
          .openContextMenu(1)
          .expectCount(2);
        expect(document.querySelectorAll('.reuse-tab__cm').length).toBe(1);
        document.dispatchEvent(new MouseEvent('click', { button: 2 }));
        page.advance();
        expect(document.querySelectorAll('.reuse-tab__cm').length).toBe(1);
      }));
      it('should be include non-closeable when push ctrl key', fakeAsync(() => {
        page
          .to('#e')
          .openContextMenu(1)
          .tap(() =>
            expect(
              document.querySelector(`.reuse-tab__cm li[data-type="close"]`)
                .classList,
            ).toContain('ant-menu-item-disabled'),
          )
          .openContextMenu(1, { ctrlKey: true })
          .tap(() =>
            expect(
              document.querySelector(`.reuse-tab__cm li[data-type="close"]`)
                .classList,
            ).not.toContain('ant-menu-item-disabled'),
          )
          .expectCount(2);
      }));
      describe('custom menu', () => {
        beforeEach(() => {
          layoutComp.customContextMenu = [
            {
              id: 'custom1',
              title: '自定义1',
              fn: jasmine.createSpy('custom.menu.1'),
            },
            {
              id: 'custom2',
              title: '自定义2',
              disabled: () => true,
              fn: jasmine.createSpy('custom.menu.2'),
            },
          ];
          fixture.detectChanges();
        });
        it('should working', fakeAsync(() => {
          expect(layoutComp.customContextMenu[0].fn).not.toHaveBeenCalled();
          page
            .to('#b')
            .openContextMenu(1)
            .clickContentMenu('custom1');
          expect(layoutComp.customContextMenu[0].fn).toHaveBeenCalled();
        }));
        it('should be disabled', fakeAsync(() => {
          expect(layoutComp.customContextMenu[1].fn).not.toHaveBeenCalled();
          page
            .to('#b')
            .openContextMenu(1)
            .clickContentMenu('custom2');
          expect(layoutComp.customContextMenu[1].fn).not.toHaveBeenCalled();
        }));
      });
    });

    describe('[routing]', () => {
      it('[ng-alain #326] should be restricted by canDeactivate when changing tab', fakeAsync(() => {
        let lTime: string;
        page
          .to('#leave')
          .tap(() => (lTime = page.time))
          .expectCount(2)
          .expectActive(0, false)
          .expectActive(1, true)
          .go(0)
          .expectActive(0, false)
          .expectActive(1, true)
          .expectTime(lTime);
      }));
    });

    describe('#keepingScroll', () => {
      const KSTIME = 2;
      let ss: ScrollService;
      let getScrollPositionSpy: jasmine.Spy;
      beforeEach(() => {
        ss = injector.get(ScrollService) as ScrollService;
        getScrollPositionSpy = spyOn(ss, 'getScrollPosition').and.returnValue([0, 666]);
        spyOn(ss, 'scrollToPosition');
      });
      it('with true', fakeAsync(() => {
        srv.keepingScroll = true;
        page
          .to('#a') // default page, not trigger store
          .to('#b')
          .advance(KSTIME)
          .tap(() => {
            expect(srv.items[0].position != null).toBe(true);
            expect(srv.items[0].position[1]).toBe(666);
            expect(ss.scrollToPosition).not.toHaveBeenCalled();
          })
          .to('#a')
          .advance(KSTIME)
          .tap(() => {
            expect(srv.items[1].position != null).toBe(true);
            expect(srv.items[1].position[1]).toBe(666);
            expect(ss.scrollToPosition).toHaveBeenCalled();
          });
      }));
      it('with false', fakeAsync(() => {
        srv.keepingScroll = false;
        page
          .to('#a') // default page, not trigger store
          .to('#b')
          .advance(KSTIME)
          .tap(() => {
            expect(ss.getScrollPosition).not.toHaveBeenCalled();
          })
          .to('#a')
          .advance(KSTIME)
          .tap(() => {
            expect(ss.getScrollPosition).not.toHaveBeenCalled();
          });
      }));
      describe('should be delay trigger when has setting scrollPositionRestoration', () => {
        it('with disabled (not delay)', fakeAsync(() => {
          const cog = injector.get(ROUTER_CONFIGURATION) as ExtraOptions;
          cog.scrollPositionRestoration = 'disabled';
          srv.keepingScroll = true;
          page
            .to('#a') // default page, not trigger store
            .to('#b')
            .to('#a')
            .tap(() => {
              expect(ss.scrollToPosition).toHaveBeenCalled();
            });
        }));
        it('with enabled (must delay)', fakeAsync(() => {
          const cog = injector.get(ROUTER_CONFIGURATION) as ExtraOptions;
          cog.scrollPositionRestoration = 'enabled';
          srv.keepingScroll = true;
          page
            .to('#a') // default page, not trigger store
            .to('#b')
            .to('#a')
            .advance(KSTIME)
            .tap(() => {
              expect(ss.scrollToPosition).toHaveBeenCalled();
            });
        }));
        it('with top (must delay)', fakeAsync(() => {
          const cog = injector.get(ROUTER_CONFIGURATION) as ExtraOptions;
          cog.scrollPositionRestoration = 'top';
          srv.keepingScroll = true;
          page
            .to('#a') // default page, not trigger store
            .to('#b')
            .to('#a')
            .advance(KSTIME)
            .tap(() => {
              expect(ss.scrollToPosition).toHaveBeenCalled();
            });
        }));
      });
      describe('#keepingScrollContainer', () => {
        beforeEach(() => {
          const cog = injector.get(ROUTER_CONFIGURATION) as ExtraOptions;
          cog.scrollPositionRestoration = 'disabled';
          layoutComp.keepingScroll = true;
        });
        it('with window', fakeAsync(() => {
          layoutComp.keepingScrollContainer = window;
          fixture.detectChanges();
          page
            .to('#a') // default page, not trigger store
            .to('#b')
            .advance(KSTIME)
            .tap(() => {
              expect(srv.items[0].position != null).toBe(true);
              expect(srv.items[0].position[1]).toBe(666);
              expect(getScrollPositionSpy.calls.mostRecent().args[0]).toBe(window);
            });
        }));
        it('with Element', fakeAsync(() => {
          const el = document.querySelector('#children');
          layoutComp.keepingScrollContainer = el;
          fixture.detectChanges();
          page
            .to('#a') // default page, not trigger store
            .to('#b')
            .advance(KSTIME)
            .tap(() => {
              expect(srv.items[0].position != null).toBe(true);
              expect(srv.items[0].position[1]).toBe(666);
              expect(getScrollPositionSpy.calls.mostRecent().args[0]).toBe(el);
            });
        }));
        it('with String', fakeAsync(() => {
          layoutComp.keepingScrollContainer = '#children';
          fixture.detectChanges();
          page
            .to('#a') // default page, not trigger store
            .to('#b')
            .advance(KSTIME)
            .tap(() => {
              expect(srv.items[0].position != null).toBe(true);
              expect(srv.items[0].position[1]).toBe(666);
              expect(getScrollPositionSpy.calls.mostRecent().args[0]).toBe(document.querySelector('#children'));
            });
        }));
      });
    });
  });

  describe('[i18n]', () => {
    it('should be rendered', fakeAsync(() => {
      genModule(true);
      createComp();
      page.to('#e').expectAttr(1, 'title', 'zh');

      i18nResult = 'en';
      injector.get(ALAIN_I18N_TOKEN).use('en');
      tick(101);
      page.expectAttr(1, 'title', 'en');
    }));
    it('#context-menu-text', fakeAsync(() => {
      genModule();
      createComp();
      page.to('#b').openContextMenu(1);
      expect(document.querySelector('[data-type="close"]').textContent).toBe(
        zh_CN.reuseTab.close,
      );
      injector.get(DelonLocaleService).setLocale(en_US);
      fixture.detectChanges();
      page.to('#a').openContextMenu(1);
      expect(document.querySelector('[data-type="close"]').textContent).toBe(
        en_US.reuseTab.close,
      );
    }));
  });

  describe('#issues', () => {
    it('#361', fakeAsync(() => {
      injector = TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          LayoutComponent,
          CComponent,
          DComponent,
        ],
        imports: [
          DelonLocaleModule,
          ReuseTabModule,
          RouterTestingModule.withRoutes([
            {
              path: '',
              component: LayoutComponent,
              children: [
                { path: 'a', redirectTo: 'c', pathMatch: 'full' },
                { path: 'b', component: DComponent, data: { title: 'b', reuse: false } },
                { path: 'c', component: CComponent, data: { title: 'c', reuse: false } },
                { path: 'd', component: DComponent, data: { title: 'd', reuse: true } },
              ],
            },
          ]),
        ],
        providers: [
          MenuService,
          { provide: WINDOW, useValue: window },
          {
            provide: RouteReuseStrategy,
            useClass: ReuseTabStrategy,
            deps: [ReuseTabService],
          },
        ],
      });
      createComp();

      page.to('#to-d')
          .to('#to-c')
          .close(0)
          .to('#to-d');
    }));
  });

  class PageObject {
    constructor() {
      this.to('#a');
    }
    tap(cb: () => void): this {
      cb();
      return this;
    }
    get time(): string {
      return this.getEl('#time').innerHTML.trim();
    }
    getEl(cls: string): HTMLElement {
      return dl.query(By.css(cls)).nativeElement as HTMLElement;
    }
    advance(time = 0): this {
      tick(time);
      fixture.detectChanges();
      return this;
    }
    to(id: string): this {
      this.getEl(id).click();
      this.advance();
      return this;
    }
    get list() {
      return rtComp.list;
    }
    get count(): number {
      return this.list.length;
    }
    expectCount(count: number): this {
      expect(page.count).toBe(count);
      return this;
    }
    expectUrl(pos: number, url: string): this {
      expect(this.list[pos].url).toBe(url);
      return this;
    }
    expectAttr(pos: number, attrName: string, value: any): this {
      expect(this.list[pos][attrName]).toBe(value);
      return this;
    }
    expectActive(pos: number, result: boolean): this {
      expect(this.list[pos].active).toBe(result);
      return this;
    }
    expectTime(result: string): this {
      expect(this.time).toBe(result);
      return this;
    }
    close(pos: number): this {
      const ls = document.querySelectorAll('.anticon-close');
      if (pos > ls.length) {
        expect(false).toBe(true, `the pos muse be 0-${ls.length}`);
        return this;
      } else if (ls.length === 0) {
        expect(false).toBe(true, `invalid close element`);
        return this;
      }
      (ls[pos] as HTMLElement).click();
      this.advance();
      return this;
    }
    go(pos: number): this {
      const ls = document.querySelectorAll('.reuse-tab__name');
      if (pos > ls.length) {
        expect(false).toBe(true, `the pos muse be 0-${ls.length}`);
        return this;
      } else if (ls.length === 0) {
        expect(false).toBe(true, `invalid item element`);
        return this;
      }
      (ls[pos] as HTMLElement).click();
      this.advance();
      return this;
    }
    openContextMenu(pos: number, eventArgs?: any): this {
      const ls = document.querySelectorAll('.reuse-tab__name');
      if (pos > ls.length) {
        expect(false).toBe(true, `the pos muse be 0-${ls.length}`);
        return this;
      }
      (ls[pos] as HTMLElement).dispatchEvent(
        new MouseEvent('contextmenu', eventArgs),
      );
      this.advance();
      return this;
    }
    clickContentMenu(type: string): this {
      const el = document.querySelector(
        `.reuse-tab__cm li[data-type="${type}"]`,
      );
      expect(el).not.toBeNull(
        `the ${type} is invalid element of content menu container`,
      );
      (el as HTMLElement).click();
      this.advance();
      return this;
    }
  }
});

@Component({
  selector: 'a-comp',
  template: `
    <a id="a" [routerLink]="['/a']">a</a>
    <a id="b" [routerLink]="['/b/1']">b1</a>
    <a id="c" [routerLink]="['/c']">c</a> <a id="d" [routerLink]="['/d']">d</a>
    <a id="e" [routerLink]="['/e']">e</a>
    <a id="leave" [routerLink]="['/leave']">leave</a>
    <router-outlet></router-outlet>
  `,
})
class AppComponent {}

@Component({
  template: `
    <reuse-tab
      #comp
      [mode]="mode"
      [debug]="debug"
      [max]="max"
      [debug]="debug"
      [excludes]="excludes"
      [allowClose]="allowClose"
      [showCurrent]="showCurrent"
      [keepingScroll]="keepingScroll"
      [keepingScrollContainer]="keepingScrollContainer"
      [customContextMenu]="customContextMenu"
      (change)="change($event)"
      (close)="close($event)"
    >
    </reuse-tab>
    <div id="children"><router-outlet></router-outlet></div>
  `,
})
class LayoutComponent {
  @ViewChild('comp')
  comp: ReuseTabComponent;
  mode: ReuseTabMatchMode = ReuseTabMatchMode.URL;
  debug = false;
  max: number = 3;
  excludes: RegExp[] = [];
  allowClose = true;
  showCurrent = true;
  keepingScroll = false;
  keepingScrollContainer = null;
  customContextMenu: ReuseCustomContextMenu[] = [];
  change() {}
  close() {}
}

@Component({
  selector: 'a-comp',
  template: `
    a:
    <div id="time">{{ time }}</div>
  `,
})
class AComponent {
  time = +new Date();
}

@Component({
  selector: 'b-comp',
  template: `
    b:
    <div id="time">{{ time }}</div>
    <a id="b2" [routerLink]="['/b/2']">b2</a>
    <a id="b3" [routerLink]="['/b/3']">b3</a>
  `,
})
class BComponent {
  time = +new Date();
  constructor(private router: ActivatedRoute) {}
}

@Component({
  selector: 'c-comp',
  template: `
    c:
    <div id="time">{{ time }}</div>
    <a id="to-d" routerLink="/d">to-d</a>
  `,
})
class CComponent {
  time = +new Date();
  constructor(private srv: ReuseTabService) {
    this.srv.title = 'new c title';
  }
}

@Component({
  selector: 'd-comp',
  template: `
    d:
    <div id="time">{{ time }}</div>
    <a id="to-c" routerLink="/c">to-c</a>
  `,
})
class DComponent {
  time = +new Date();
}

@Component({
  selector: 'e-comp',
  template: `
    e:
    <div id="time">{{ time }}</div>
  `,
})
class EComponent {
  time = +new Date();
  constructor(private reuse: ReuseTabService) {
    reuse.closable = false;
  }
}
