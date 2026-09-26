import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  DebugElement,
  inject,
  Injectable,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  ExtraOptions,
  RouteReuseStrategy,
  ROUTER_CONFIGURATION,
  RouterModule,
  RouterOutlet,
  RouterLink
} from '@angular/router';
import { Observable, of } from 'rxjs';

import type { Mock } from 'vitest';

import { ALAIN_I18N_TOKEN, DelonLocaleModule, DelonLocaleService, en_US, MenuService, zh_CN } from '@delon/theme';
import { ScrollService } from '@delon/util/browser';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { provideReuseTabConfig } from './provide';
import { ReuseTabComponent } from './reuse-tab.component';
import {
  ReuseCanClose,
  ReuseCustomContextMenu,
  ReuseItem,
  ReuseTabMatchMode,
  ReuseTabRouteParamMatchMode
} from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
import { REUSE_TAB_STORAGE_STATE } from './reuse-tab.state';
import { ReuseTabStrategy } from './reuse-tab.strategy';
import { AlainI18NServiceFake } from '../../theme/src/services/i18n/i18n';

let i18nResult = 'zh';
@Injectable()
class MockI18NServiceFake extends AlainI18NServiceFake {
  fanyi(): string {
    return i18nResult;
  }
}

describe('abc: reuse-tab', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<AppComponent>;
  let dl: DebugElement;
  let layoutComp: LayoutComponent;
  let rtComp: ReuseTabComponent;
  let srv: ReuseTabService;
  let page: PageObject;

  function genModule(needI18n: boolean = false): void {
    TestBed.configureTestingModule({
      imports: [
        DelonLocaleModule,
        ReuseTabComponent,
        RouterModule.forRoot(
          [
            {
              path: '',
              component: LayoutComponent,
              children: [
                { path: 'a', component: AComponent },
                { path: 'b/:id', component: BComponent },
                { path: 'c', component: CComponent },
                { path: 'd', component: DComponent },
                { path: 'e', component: EComponent, data: { titleI18n: 'i18n' } },
                { path: 'lazy', loadChildren: vi.fn().mockName('lazy') },
                {
                  path: 'leave',
                  component: DComponent,
                  canDeactivate: ['CanDeactivate']
                }
              ]
            }
          ],
          { scrollPositionRestoration: 'disabled' }
        )
      ],
      providers: [
        { provide: RouteReuseStrategy, useClass: ReuseTabStrategy, deps: [ReuseTabService] },
        MenuService,
        provideReuseTabConfig(),
        {
          provide: 'CanDeactivate',
          useValue: () => {
            return new Observable((observer: NzSafeAny) => observer.next(false));
          }
        }
      ].concat(
        !needI18n
          ? []
          : [
              {
                provide: ALAIN_I18N_TOKEN,
                useClass: MockI18NServiceFake
              } as NzSafeAny
            ]
      )
    });
  }

  async function createComp(layoutTemplate?: string): Promise<void> {
    if (layoutTemplate) TestBed.overrideTemplate(LayoutComponent, layoutTemplate);
    fixture = TestBed.createComponent(AppComponent);
    dl = fixture.debugElement;
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(101);
    fixture.detectChanges();

    srv = TestBed.inject<ReuseTabService>(ReuseTabService);
    page = new PageObject();
    TestBed.inject(ApplicationRef).tick();
    await vi.advanceTimersByTimeAsync(0);
    fixture.detectChanges();
    layoutComp = dl.query(By.directive(LayoutComponent)).injector.get<LayoutComponent>(LayoutComponent);
    rtComp = dl.query(By.directive(ReuseTabComponent)).injector.get<ReuseTabComponent>(ReuseTabComponent);
    vi.spyOn(layoutComp, 'change').mockReturnValue(undefined);
    vi.spyOn(layoutComp, 'close').mockReturnValue(undefined);

    vi.advanceTimersByTime(1000);
    vi.clearAllTimers();
  }

  describe('', () => {
    beforeEach(async () => {
      genModule();
      await createComp();
      await vi.runOnlyPendingTimersAsync();
    });

    describe('[default]', () => {
      it('should be create an instance', () => {
        page.expectCount(1);
      });
      it('should be add a tab when route changed', async () => {
        await page.to('#b');
        page.expectCount(2).end();
      });
      it('should be change tab via click', async () => {
        expect(layoutComp.change).not.toHaveBeenCalled();
        await page.to('#b');
        await page.go(0);
        expect(layoutComp.change).toHaveBeenCalled();
        page.end();
      });
      it('should be two tab in routing parameters', async () => {
        await page.to('#b');
        await page.tap(async () => {
          await page.to('#b2');
        });
        page.expectCount(3).end();
      });
      it('should be keep open order', async () => {
        srv.max = 10;
        await page.to('#b');
        page.expectUrl(0, '/a').expectUrl(1, '/b/1');
        await page.to('#a');
        page.expectUrl(0, '/a').expectUrl(1, '/b/1');
        await page.to('#c');
        page.expectUrl(0, '/a').expectUrl(1, '/c').expectUrl(2, '/b/1');
        await page.to('#d');
        page.expectUrl(0, '/a').expectUrl(1, '/c').expectUrl(2, '/d').expectUrl(3, '/b/1').end();
      });
    });

    describe('#close', () => {
      it('should be close a tab', async () => {
        await page.to('#b');
        page.expectUrl(0, '/a').expectUrl(1, '/b/1').close(0).expectUrl(0, '/b/1');
        expect(layoutComp.close).toHaveBeenCalled();
        page.end();
      });
      it('should show next tab when closed a has next tab', async () => {
        srv.max = 10;
        await page.to('#b');
        await page.to('#c');
        await page.go(1);
        // a, b/1, c
        page.expectUrl(1, '/b/1');
        page.close(1);
        page.expectUrl(1, '/c');
        page.end();
      });
      it('issues-363', async () => {
        await page.to('#b');
        page.expectCount(2).close(1).expectCount(1).expectAttr(0, 'closable', false).end();
      });
      it('#canClose', async () => {
        layoutComp.canClose = () => of(false);
        layoutComp.cdr.markForCheck();
        page.cd();
        await page.to('#b');
        page.expectCount(2).close(1).expectCount(2);
        layoutComp.canClose = () => of(true);
        layoutComp.cdr.markForCheck();
        page.cd();
        await page.to('#b');
        page.expectCount(2).close(1).expectCount(1).end();
      });
    });

    describe('#title', () => {
      it(`should reset title via component`, async () => {
        await page.to('#c');
        expect(page.list[page.count - 1].title).toBe(`new c title`);
        page.end();
      });
      it(`should reset title via service`, async () => {
        await page.to('#c');
        srv.title = 'NEW TITLE';
        expect(page.list[page.count - 1].title).toBe(`NEW TITLE`);
        page.end();
      });
    });

    describe('[property]', () => {
      describe('#mode', () => {
        [ReuseTabMatchMode.Menu, ReuseTabMatchMode.MenuForce, ReuseTabMatchMode.URL].forEach(type => {
          it(`with ${type}`, () => {
            layoutComp.mode = type;
            layoutComp.cdr.markForCheck();
            fixture.detectChanges();
            expect(srv.mode).toBe(type);
          });
        });
      });
      describe('#debug', () => {
        [true, false].forEach(type => {
          it(`with ${type}`, () => {
            layoutComp.debug = type;
            layoutComp.cdr.markForCheck();
            fixture.detectChanges();
            expect(srv.debug).toBe(type);
          });
        });
      });
      describe('#max', () => {
        const MAX = 2;
        beforeEach(() => {
          layoutComp.max = MAX;
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
        });
        it('should working', async () => {
          await page.to('#b');
          page.expectCount(MAX);
          await page.to('#c');
          page.expectCount(MAX);
          await page.to('#d');
          page.expectCount(MAX).end();
        });
      });
      describe('#allowClose', () => {
        it('with true', async () => {
          layoutComp.allowClose = true;
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
          await page.to('#b');
          expect(dl.queryAll(By.css('.reuse-tab__op')).length).toBe(2);
          await page.to('#c');
          expect(dl.queryAll(By.css('.reuse-tab__op')).length).toBe(3);
          page.end();
        });
        it('with false', async () => {
          layoutComp.allowClose = false;
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
          await page.to('#b');
          expect(dl.queryAll(By.css('.reuse-tab__op')).length).toBe(0);
          await page.to('#c');
          expect(dl.queryAll(By.css('.reuse-tab__op')).length).toBe(0);
          page.end();
        });
      });
      describe('#tabMaxWidth', () => {
        it('with 100', () => {
          layoutComp.tabMaxWidth = 100;
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
          const el = page.getEl('.reuse-tab__name-width');
          expect(el != null).toBe(true);
          expect(el.style.maxWidth).toBe(`100px`);
        });
      });
      describe('#routeParamMatchMode', () => {
        describe('with loos', () => {
          it('should be only one tab', async () => {
            layoutComp.routeParamMatchMode = 'loose';
            layoutComp.cdr.markForCheck();
            fixture.detectChanges();
            await page.to('#b');
            await page.to('#b2');
            await page.to('#b3');
            page.expectCount(2);
          });
        });
        it('with custom function', async () => {
          layoutComp.routeParamMatchMode = (future, curr) => future.routeConfig?.path === curr.routeConfig?.path;
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
          await page.to('#b');
          await page.to('#b2');
          await page.to('#b3');
          page.expectCount(2);
        });
      });
      it('#disabled', () => {
        layoutComp.disabled = true;
        layoutComp.cdr.markForCheck();
        page.cd(0);
        expect(page.getEl('.reuse-tab__disabled') != null).toBe(true);
      });
      it('#titleRender', () => {
        layoutComp.titleRender = layoutComp.titleRenderTpl;
        layoutComp.cdr.markForCheck();
        page.cd(0);
        expect(page.getEl('.reuse-tab__name').textContent?.trim()).toBe('/a');
      });
    });

    describe('[context-menu]', () => {
      beforeEach(() => (srv.max = 10));
      it('should closed current tab', async () => {
        expect(layoutComp.close).not.toHaveBeenCalled();
        await page.to('#b');
        page.expectCount(2).openContextMenu(1);
        await page.clickContentMenu('close');
        page.expectCount(1);
        expect(layoutComp.close).toHaveBeenCalled();
        page.end();
      });
      it('should keeping tab if closed include multi prev tab', async () => {
        let cTime = '';
        await page.to('#b'); // 1
        await page.to('#c'); // 2
        await page.tap(() => (cTime = page.time));
        await page.to('#d'); // 3
        await page.go(2);
        page.expectCount(4).openContextMenu(1);
        await page.clickContentMenu('close');
        page.expectCount(3).expectActive(1, true).expectUrl(1, '/c').expectTime(cTime).end();
      });
      it('should show the previous tab if the right not tab', async () => {
        let aTime = '';
        await page.tap(() => (aTime = page.time));
        await page.to('#b'); // 1
        page.expectCount(2).openContextMenu(1);
        await page.clickContentMenu('close');
        page.expectCount(1).expectActive(0, true).expectUrl(0, '/a').expectTime(aTime).end();
      });
      it('should show next tab if closed include multi right tab', async () => {
        await page.to('#b'); // 1
        await page.to('#c'); // 2
        await page.to('#d'); // 3
        await page.go(1);
        page.expectCount(4).openContextMenu(1);
        await page.clickContentMenu('close');
        page.expectCount(3).expectActive(1, true).expectUrl(1, '/c').end();
      });
      it('should keeping tab when closed prev tab', async () => {
        await page.to('#b');
        page.expectCount(2).openContextMenu(0);
        await page.clickContentMenu('close');
        page.expectCount(1).expectActive(0, true).end();
      });
      it('should keeping tab when closed next tab', async () => {
        await page.to('#b');
        await page.go(0);
        page.expectCount(2).openContextMenu(1);
        await page.clickContentMenu('close');
        page.expectCount(1).expectActive(0, true).end();
      });
      it('should keeping tab of closed right tab', async () => {
        let bTime = '';
        await page.to('#b'); // 1
        await page.tap(() => (bTime = page.time));
        await page.to('#c'); // 2
        await page.to('#d'); // 3
        await page.go(1);
        page.expectCount(4).openContextMenu(1);
        await page.clickContentMenu('closeRight');
        page.expectCount(2).expectActive(1, true).expectUrl(1, '/b/1').expectTime(bTime).end();
      });
      it('should acitved select tab of closed right tab', async () => {
        let bTime = '';
        await page.to('#b'); // 1
        await page.tap(() => (bTime = page.time));
        await page.to('#c'); // 2
        await page.to('#d'); // 3
        page.openContextMenu(1);
        await page.clickContentMenu('closeRight');
        page.expectCount(2).expectActive(1, true).expectUrl(1, '/b/1').expectTime(bTime).end();
      });
      it('should keeping tab of close other tab', async () => {
        let bTime = '';
        await page.to('#b'); // 1
        await page.tap(() => (bTime = page.time));
        await page.to('#c'); // 2
        await page.to('#d'); // 3
        await page.go(1);
        page.expectCount(4).openContextMenu(1);
        await page.clickContentMenu('closeOther');
        page.expectCount(1).expectActive(0, true).expectUrl(0, '/b/1').expectTime(bTime).end();
      });
      it('should trigger off close when closable: false', async () => {
        await page.to('#b');
        await page.tap(() => (srv.closable = false));
        page.cd().openContextMenu(1).expectCount(2);
        await page.clickContentMenu('close');
        page.expectCount(2).end();
      });
      it('should trigger off closeRight when is last', async () => {
        await page.to('#b');
        page.openContextMenu(1).expectCount(2);
        await page.clickContentMenu('closeRight');
        page.expectCount(2).end();
      });
      it('should hide context menu via click', async () => {
        await page.to('#b');
        page.openContextMenu(1).expectCount(2);
        expect(document.querySelectorAll('.reuse-tab__cm').length).toBe(1);
        document.dispatchEvent(new Event('click'));
        page.cd();
        expect(document.querySelectorAll('.reuse-tab__cm').length).toBe(0);
        page.end();
      });
      it('should be allow multi context menu', async () => {
        await page.to('#b');
        page.openContextMenu(1).expectCount(2);
        expect(document.querySelectorAll('.reuse-tab__cm').length).toBe(1);
        document.dispatchEvent(new MouseEvent('click', { button: 2 }));
        page.cd();
        expect(document.querySelectorAll('.reuse-tab__cm').length).toBe(1);
        page.end();
      });
      it('should be include non-closeable when push ctrl key', async () => {
        await page.to('#e');
        page.openContextMenu(1);
        await page.tap(() =>
          expect(document.querySelector(`.reuse-tab__cm li[data-type="close"]`)!.classList).toContain(
            'ant-menu-item-disabled'
          )
        );
        page.openContextMenu(1, { ctrlKey: true });
        await page.tap(() =>
          expect(document.querySelector(`.reuse-tab__cm li[data-type="close"]`)!.classList).not.toContain(
            'ant-menu-item-disabled'
          )
        );
        page.expectCount(2).end();
      });
      describe('custom menu', () => {
        beforeEach(() => {
          layoutComp.customContextMenu = [
            {
              id: 'custom1',
              title: '自定义1',
              fn: vi.fn().mockName('custom.menu.1')
            },
            {
              id: 'custom2',
              title: '自定义2',
              disabled: () => true,
              fn: vi.fn().mockName('custom.menu.2')
            }
          ];
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
        });
        it('should working', async () => {
          expect(layoutComp.customContextMenu[0].fn).not.toHaveBeenCalled();
          await page.to('#b');
          page.openContextMenu(1);
          await page.clickContentMenu('custom1');
          expect(layoutComp.customContextMenu[0].fn).toHaveBeenCalled();
        });
        it('should be disabled', async () => {
          expect(layoutComp.customContextMenu[1].fn).not.toHaveBeenCalled();
          await page.to('#b');
          page.openContextMenu(1);
          await page.clickContentMenu('custom2');
          expect(layoutComp.customContextMenu[1].fn).not.toHaveBeenCalled();
        });
      });
      describe('#tabType', () => {
        it('with line', () => {
          layoutComp.tabType = 'line';
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
          expect(dl.queryAll(By.css('.reuse-tab__line')).length).toBe(1);
        });
        it('with card', () => {
          layoutComp.tabType = 'card';
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
          expect(dl.queryAll(By.css('.reuse-tab__card')).length).toBe(1);
        });
      });
    });

    describe('[replace]', () => {
      it('shoulde be working', async () => {
        await page.to('#a');
        await page.to('#d');
        page.expectCount(2).expectUrl(0, '/a').expectUrl(1, '/d').cd();
        srv.replace('/c');
        await vi.advanceTimersByTimeAsync(0);
        page.cd(1).expectCount(2).expectUrl(0, '/a').expectUrl(1, '/c').end();
      });
    });

    describe('[routing]', () => {
      it('[ng-alain #326] should be restricted by canDeactivate when changing tab', async () => {
        let lTime = '';
        await page.to('#leave');
        await page.tap(() => (lTime = page.time));
        page.expectCount(2).expectActive(0, false).expectActive(1, true);
        await page.go(0);
        page.expectActive(0, false).expectActive(1, true).expectTime(lTime);
      });
    });

    describe('#keepingScroll', () => {
      const KSTIME = 2;
      let ss: ScrollService;
      let getScrollPositionSpy: Mock;
      beforeEach(() => {
        ss = TestBed.inject(ScrollService) as ScrollService;
        getScrollPositionSpy = vi.spyOn(ss, 'getScrollPosition').mockReturnValue([0, 666]);
        vi.spyOn(ss, 'scrollToPosition').mockReturnValue(undefined);
      });
      it('with true', async () => {
        srv.keepingScroll = true;
        await page.to('#a'); // default page, not trigger store
        await page.to('#b');
        page.cd(KSTIME);
        await page.tap(() => {
          expect(srv.items[0].position != null).toBe(true);
          expect(srv.items[0].position![1]).toBe(666);
          expect(ss.scrollToPosition).not.toHaveBeenCalled();
        });
        await page.to('#a');
        page.cd(KSTIME);
        await page.tap(() => {
          expect(srv.items[1].position != null).toBe(true);
          expect(srv.items[1].position![1]).toBe(666);
          expect(ss.scrollToPosition).toHaveBeenCalled();
        });
        page.end();
      });
      it('with false', async () => {
        srv.keepingScroll = false;
        await page.to('#a'); // default page, not trigger store
        await page.to('#b');
        page.cd(KSTIME);
        await page.tap(() => {
          expect(ss.getScrollPosition).not.toHaveBeenCalled();
        });
        await page.to('#a');
        page.cd(KSTIME);
        await page.tap(() => {
          expect(ss.getScrollPosition).not.toHaveBeenCalled();
        });
        page.end();
      });
      describe('should be delay trigger when has setting scrollPositionRestoration', () => {
        it('with disabled (not delay)', async () => {
          const cog = TestBed.inject(ROUTER_CONFIGURATION) as ExtraOptions;
          cog.scrollPositionRestoration = 'disabled';
          srv.keepingScroll = true;
          await page.to('#a'); // default page, not trigger store
          await page.to('#b');
          await page.to('#a');
          await page.tap(() => {
            expect(ss.scrollToPosition).toHaveBeenCalled();
          });
          page.end();
        });
        it('with enabled (must delay)', async () => {
          const cog = TestBed.inject(ROUTER_CONFIGURATION) as ExtraOptions;
          cog.scrollPositionRestoration = 'enabled';
          srv.keepingScroll = true;
          await page.to('#a'); // default page, not trigger store
          await page.to('#b');
          await page.to('#a');
          page.cd(KSTIME);
          await page.tap(() => {
            expect(ss.scrollToPosition).toHaveBeenCalled();
          });
          page.end();
        });
        it('with top (must delay)', async () => {
          const cog = TestBed.inject(ROUTER_CONFIGURATION) as ExtraOptions;
          cog.scrollPositionRestoration = 'top';
          srv.keepingScroll = true;
          await page.to('#a'); // default page, not trigger store
          await page.to('#b');
          await page.to('#a');
          page.cd(KSTIME);
          await page.tap(() => {
            expect(ss.scrollToPosition).toHaveBeenCalled();
          });
          page.end();
        });
      });
      describe('#keepingScrollContainer', () => {
        beforeEach(() => {
          const cog = TestBed.inject(ROUTER_CONFIGURATION) as ExtraOptions;
          cog.scrollPositionRestoration = 'disabled';
          layoutComp.keepingScroll = true;
          layoutComp.cdr.markForCheck();
        });
        it('with window', async () => {
          layoutComp.keepingScrollContainer = window;
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
          await page.to('#a'); // default page, not trigger store
          await page.to('#b');
          page.cd(KSTIME);
          await page.tap(() => {
            expect(srv.items[0].position != null).toBe(true);
            expect(srv.items[0].position![1]).toBe(666);
            expect(vi.mocked(getScrollPositionSpy).mock.lastCall![0]).toBe(window);
          });
          page.end();
        });
        it('with Element', async () => {
          const el = document.querySelector('#children');
          layoutComp.keepingScrollContainer = el;
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
          await page.to('#a'); // default page, not trigger store
          await page.to('#b');
          page.cd(KSTIME);
          await page.tap(() => {
            expect(srv.items[0].position != null).toBe(true);
            expect(srv.items[0].position![1]).toBe(666);
            expect(vi.mocked(getScrollPositionSpy).mock.lastCall![0]).toBe(el);
          });
          page.end();
        });
        it('with String', async () => {
          layoutComp.keepingScrollContainer = '#children';
          layoutComp.cdr.markForCheck();
          fixture.detectChanges();
          await page.to('#a'); // default page, not trigger store
          await page.to('#b');
          page.cd(KSTIME);
          await page.tap(() => {
            expect(srv.items[0].position != null).toBe(true);
            expect(srv.items[0].position![1]).toBe(666);
            expect(vi.mocked(getScrollPositionSpy).mock.lastCall![0]).toBe(document.querySelector('#children'));
          });
          page.end();
        });
      });
    });

    it('#storageState', async () => {
      layoutComp.storageState = true;
      layoutComp.cdr.markForCheck();
      page.cd();
      const stateSrv = TestBed.inject(REUSE_TAB_STORAGE_STATE);
      vi.spyOn(stateSrv, 'update').mockReturnValue(undefined as NzSafeAny);
      await page.to('#b');
      expect(stateSrv.update).toHaveBeenCalled();
      page.end();
    });
  });

  describe('[refresh]', () => {
    beforeEach(() => genModule(false));
    it('should be can not call _onReuseInit when router-outlet not define (activate) event in refresh active tab', async () => {
      await createComp(`<reuse-tab #comp [mode]="mode"></reuse-tab><router-outlet></router-outlet>`);
      let time = 0;
      await page.to('#a');
      await page.tap(() => (time = +page.time));
      page.openContextMenu(0);
      await page.clickContentMenu('refresh');
      expect(time).toBe(+page.time);
    });
    it('should be call _onReuseInit when refresh active tab', async () => {
      await createComp(
        `<reuse-tab #comp [mode]="mode"></reuse-tab><router-outlet (activate)="comp.activate($event)"></router-outlet>`
      );
      await page.to('#a');
      page.openContextMenu(0);
      vi.spyOn(srv.componentRef!.instance, '_onReuseInit').mockReturnValue(undefined);
      await page.clickContentMenu('refresh');
      expect(srv.componentRef!.instance._onReuseInit).toHaveBeenCalled();
    });
    it('should be not trigger _onReuseInit when refresh non-active tab', async () => {
      await createComp(
        `<reuse-tab #comp [mode]="mode"></reuse-tab><router-outlet (activate)="comp.activate($event)"></router-outlet>`
      );
      await page.to('#a');
      await page.to('#b');
      page.openContextMenu(0);
      expect(page.getContentMenu('refresh') == null).toBe(true);
    });
    it('should be not trigger _onReuseInit when refresh non-active tab and not define (activate) event', async () => {
      await createComp(`<reuse-tab #comp [mode]="mode"></reuse-tab><router-outlet></router-outlet>`);
      await page.to('#a');
      await page.to('#b');
      page.openContextMenu(0);
      expect(page.getContentMenu('refresh') == null).toBe(true);
    });
  });

  describe('[i18n]', () => {
    it('should be rendered', async () => {
      genModule(true);
      await createComp();
      await page.to('#e');
      page.expectAttr(1, 'title', 'zh');
      i18nResult = 'en';
      TestBed.inject(ALAIN_I18N_TOKEN).use('en', {});
      page.cd().expectAttr(1, 'title', 'en').end();
    });
    it('#context-menu-text', async () => {
      genModule();
      await createComp();
      await page.to('#b');
      page.openContextMenu(1);
      expect(document.querySelector('[data-type="close"]')!.textContent).toBe(zh_CN.reuseTab.close);
      TestBed.inject<DelonLocaleService>(DelonLocaleService).setLocale(en_US);
      fixture.detectChanges();
      await page.to('#a');
      page.openContextMenu(1);
      expect(document.querySelector('[data-type="close"]')!.textContent).toBe(en_US.reuseTab.close);
    });
  });

  class PageObject {
    constructor() {
      this.clickLink('#a');
    }
    async tap(cb: () => unknown): Promise<this> {
      await cb();
      return this;
    }
    get time(): string {
      return this.getEl('#time').innerHTML.trim();
    }
    getEl(cls: string): HTMLElement {
      return dl.query(By.css(cls)).nativeElement as HTMLElement;
    }
    cd(time: number = 101): this {
      fixture.detectChanges();
      if (time > 0) {
        vi.advanceTimersByTime(time);
        fixture.detectChanges();
      }
      return this;
    }
    /** 路由跳转挂在微任务链上，同步 CD 排不空它 */
    async to(id: string): Promise<this> {
      this.clickLink(id);
      await vi.advanceTimersByTimeAsync(0);
      this.cd();
      return this;
    }
    private clickLink(id: string): void {
      this.getEl(id).click();
      this.cd();
    }
    get list(): ReuseItem[] {
      return rtComp.list();
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
    expectAttr(pos: number, attrName: string, value: NzSafeAny): this {
      expect((this.list[pos] as NzSafeAny)[attrName]).toBe(value);
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
        expect(false, `the pos muse be 0-${ls.length}`).toBe(true);
        return this;
      } else if (ls.length === 0) {
        expect(false, `invalid close element`).toBe(true);
        return this;
      }
      (ls[pos] as HTMLElement).click();
      return this.cd();
    }
    async go(pos: number): Promise<this> {
      const ls = document.querySelectorAll('.ant-tabs-tab');
      if (pos > ls.length) {
        expect(false, `the pos muse be 0-${ls.length}`).toBe(true);
        return this;
      } else if (ls.length === 0) {
        expect(false, `invalid item element`).toBe(true);
        return this;
      }
      rtComp._to(pos);
      this.cd();
      await vi.advanceTimersByTimeAsync(0);
      this.cd();
      return this;
    }
    openContextMenu(pos: number, eventArgs?: MouseEventInit): this {
      const ls = document.querySelectorAll('.reuse-tab__name');
      if (pos > ls.length) {
        expect(false, `the pos muse be 0-${ls.length}`).toBe(true);
        return this;
      }
      (ls[pos] as HTMLElement).dispatchEvent(new MouseEvent('contextmenu', eventArgs));
      this.cd();
      return this;
    }
    getContentMenu(type: string): Element | null {
      return document.querySelector(`.reuse-tab__cm li[data-type="${type}"]`);
    }
    async clickContentMenu(type: string): Promise<this> {
      const el = this.getContentMenu(type);
      expect(el, `the ${type} is invalid element of content menu container`).not.toBeNull();
      (el as HTMLElement).click();
      this.cd();
      await vi.advanceTimersByTimeAsync(0);
      this.cd();
      return this;
    }
    end(): void {
      vi.advanceTimersByTime(1000);
      vi.clearAllTimers();
    }
  }
});

@Component({
  selector: 'a-comp',
  template: `
    <a id="a" [routerLink]="['/a']">a</a>
    <a id="b" [routerLink]="['/b/1']">b1</a>
    <a id="b2" [routerLink]="['/b/2']">b2</a>
    <a id="b3" [routerLink]="['/b/3']">b3</a>
    <a id="c" [routerLink]="['/c']">c</a>
    <a id="d" [routerLink]="['/d']">d</a>
    <a id="e" [routerLink]="['/e']">e</a>
    <a id="leave" [routerLink]="['/leave']">leave</a>
    <router-outlet />
  `,
  imports: [RouterLink, RouterOutlet]
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
      [keepingScroll]="keepingScroll"
      [keepingScrollContainer]="$any(keepingScrollContainer)"
      [customContextMenu]="customContextMenu"
      [tabType]="tabType"
      [tabMaxWidth]="tabMaxWidth"
      [routeParamMatchMode]="routeParamMatchMode"
      [disabled]="disabled"
      [titleRender]="titleRender"
      [storageState]="storageState"
      [canClose]="canClose"
      (change)="change($event)"
      (close)="close($event)"
    />
    <div id="children"><router-outlet /></div>
    <ng-template #titleRender let-i>{{ i.url }}</ng-template>
  `,
  imports: [ReuseTabComponent, RouterOutlet]
})
class LayoutComponent {
  /** 直接改普通属性不会标脏，zoneless 下本视图必须显式标脏 */
  readonly cdr = inject(ChangeDetectorRef);
  @ViewChild('comp', { static: true })
  comp!: ReuseTabComponent;
  @ViewChild('titleRender', { static: true })
  titleRenderTpl!: TemplateRef<{
    $implicit: ReuseItem;
  }>;
  mode: ReuseTabMatchMode = ReuseTabMatchMode.URL;
  debug = false;
  max: number = 3;
  excludes: RegExp[] = [];
  allowClose = true;
  keepingScroll = false;
  keepingScrollContainer: Window | Element | string | null = null;
  customContextMenu: ReuseCustomContextMenu[] = [];
  tabType: 'line' | 'card' = 'line';
  tabMaxWidth?: number;
  routeParamMatchMode: ReuseTabRouteParamMatchMode = 'strict';
  disabled = false;
  titleRender?: TemplateRef<{
    $implicit: ReuseItem;
  }>;
  storageState = false;
  canClose?: ReuseCanClose;
  change(_item: ReuseItem): void {}
  close(_item: ReuseItem | null): void {}
}

@Component({
  selector: 'a-comp',
  template: `
    a:
    <div id="time">{{ time }}</div>
  `
})
class AComponent {
  time = +new Date();
  _onReuseInit(): void {}
  _onReuseDestroy(): void {}
}

@Component({
  selector: 'b-comp',
  template: `
    b:
    <div id="time">{{ time }}</div>
    <a id="b2" [routerLink]="['/b/2']">b2</a>
    <a id="b3" [routerLink]="['/b/3']">b3</a>
  `,
  imports: [RouterLink]
})
class BComponent {
  time = +new Date();
  _onReuseInit(): void {}
  _onReuseDestroy(): void {}
}

@Component({
  selector: 'c-comp',
  template: `
    c:
    <div id="time">{{ time }}</div>
    <a id="to-d" routerLink="/d">to-d</a>
  `,
  imports: [RouterLink]
})
class CComponent {
  private readonly srv = inject(ReuseTabService);
  time = +new Date();
  constructor() {
    this.srv.title = 'new c title';
  }
  _onReuseInit(): void {}
  _onReuseDestroy(): void {}
}

@Component({
  selector: 'd-comp',
  template: `
    d:
    <div id="time">{{ time }}</div>
    <a id="to-c" routerLink="/c">to-c</a>
  `,
  imports: [RouterLink]
})
class DComponent {
  time = +new Date();
  _onReuseInit(): void {}
  _onReuseDestroy(): void {}
}

@Component({
  selector: 'e-comp',
  template: `
    e:
    <div id="time">{{ time }}</div>
  `
})
class EComponent {
  private readonly reuse = inject(ReuseTabService);
  time = +new Date();
  constructor() {
    this.reuse.closable = false;
  }
  _onReuseInit(): void {}
  _onReuseDestroy(): void {}
}
