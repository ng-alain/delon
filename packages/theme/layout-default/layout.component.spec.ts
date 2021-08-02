import { Component, DebugElement, NgModule, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadingStrategy, Route, Router, RouterModule, RouterPreloader } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconTestModule } from 'ng-zorro-antd/icon/testing';
import { NzMessageService } from 'ng-zorro-antd/message';

import { createTestContext } from '@delon/testing';

import { SettingsService } from '../src/services/settings/settings.service';
import { AlainThemeModule } from '../src/theme.module';
import { LayoutDefaultComponent } from './layout.component';
import { LayoutDefaultModule } from './layout.module';
import { LayoutDefaultOptions } from './types';

describe('theme: layout-default', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  describe('', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [LayoutDefaultModule, RouterTestingModule, NzIconTestModule, AlainThemeModule],
        declarations: [TestComponent]
      });

      ({ fixture, dl, context } = createTestContext(TestComponent));
      page = new PageObject();
    });

    it('should be custom nav', () => {
      context.nav = context.navTpl;
      fixture.detectChanges();
      page.expectEl('.custom-nav', true);
      page.expectEl('layout-default-nav', false);
    });

    it('should be custom aside user', () => {
      context.asideUser = context.asideUserTpl;
      fixture.detectChanges();
      page.expectEl('.custom-aside-user', true);
    });

    it('should be custom content', () => {
      context.content = context.contentTpl;
      fixture.detectChanges();
      page.expectEl('.custom-content', true);
    });

    it('should be toggle collapsed', () => {
      const srv = TestBed.inject(SettingsService);
      let collapsed = false;
      spyOnProperty(srv, 'layout').and.returnValue({ collapsed });
      fixture.detectChanges();
      const el = page.getEl('.alain-default__nav-item--collapse');
      expect(el.querySelector('.anticon-menu-fold') != null).toBe(true);
      collapsed = true;
      el.click();
      fixture.detectChanges();
      expect(el.querySelector('.anticon-menu-unfold') != null).toBe(true);
    });

    it('#colorWeak', () => {
      const srv = TestBed.inject(SettingsService);
      spyOnProperty(srv, 'layout').and.returnValue({ colorWeak: true });
      fixture.detectChanges();
      expect(document.body.classList).toContain(`color-weak`);
    });

    describe('#options', () => {
      it('#logoLink', () => {
        context.options = { logoLink: '/home' };
        fixture.detectChanges();
        const el = page.getEl<HTMLLinkElement>('.alain-default__header-logo-link');
        expect(el.href.endsWith('/home')).toBe(true);
      });

      it('#logoFixWidth', () => {
        context.options = { logoFixWidth: 100 };
        fixture.detectChanges();
        const el = page.getEl('.alain-default__header-logo');
        expect(el.style.width).toBe(`100px`);
      });

      it('#hideAside', () => {
        context.options = { hideAside: true };
        fixture.detectChanges();
        page.expectEl(`.alain-default__hide-aside`).expectEl(`.alain-default__nav-item--collapse`, false);
      });
    });

    describe('RTL', () => {
      it('should be toggle collapsed', () => {
        const srv = TestBed.inject(SettingsService);
        let collapsed = false;
        spyOnProperty(srv, 'layout').and.returnValue({ collapsed, direction: 'rtl' });
        fixture.detectChanges();
        const el = page.getEl('.alain-default__nav-item--collapse');
        expect(el.querySelector('.anticon-menu-unfold') != null).toBe(true);
        collapsed = true;
        el.click();
        fixture.detectChanges();
        expect(el.querySelector('.anticon-menu-fold') != null).toBe(true);
      });
    });
  });

  describe('Module Fetching', () => {
    const lazyLoadChildrenSpy = jasmine.createSpy('lazymodule');
    const mockPreloaderFactory = (): PreloadingStrategy => {
      class DelayedPreLoad implements PreloadingStrategy {
        preload(_route: Route, fn: () => Observable<NzSafeAny>): Observable<NzSafeAny> {
          return fn().pipe(catchError(() => of(null)));
          // const routeName =
          //     route.loadChildren ? (route.loadChildren as jasmine.Spy).and.identity : 'noChildren';
          // return delayLoadObserver$.pipe(
          //     filter(unpauseList => unpauseList.indexOf(routeName) !== -1),
          //     take(1),
          //     switchMap(() => {
          //       return fn().pipe(catchError(() => of(null)));
          //     }),
          // );
        }
      }
      return new DelayedPreLoad();
    };
    let layoutComp: LayoutComponent;

    @Component({ template: '<layout-default #comp><router-outlet></router-outlet></layout-default>' })
    class LayoutComponent {
      @ViewChild('comp', { static: true }) comp!: LayoutDefaultComponent;
    }

    @Component({ template: '' })
    class LazyLoadedComponent {}

    @NgModule({
      declarations: [LayoutComponent, LazyLoadedComponent]
    })
    class SharedModule {}

    @NgModule({
      imports: [SharedModule, RouterModule.forChild([{ path: 'LoadedModule1', component: LazyLoadedComponent }])]
    })
    class LoadedModule1 {}

    beforeEach(() => {
      lazyLoadChildrenSpy.calls.reset();
      TestBed.configureTestingModule({
        declarations: [LayoutComponent],
        imports: [
          LayoutDefaultModule,
          NzIconTestModule,
          NoopAnimationsModule,
          RouterTestingModule.withRoutes([{ path: 'lazy', loadChildren: lazyLoadChildrenSpy }]),
          AlainThemeModule
        ],
        providers: [{ provide: PreloadingStrategy, useFactory: mockPreloaderFactory }]
      });
      layoutComp = TestBed.createComponent(LayoutComponent).componentInstance;
    });

    it('should working', fakeAsync(() => {
      const preloader = TestBed.inject(RouterPreloader);
      const router = TestBed.inject(Router);
      const msgSrv = TestBed.inject(NzMessageService);
      lazyLoadChildrenSpy.and.returnValue(of(LoadedModule1));

      // App start activation of preloader
      preloader.preload().subscribe(() => {});
      tick();
      expect(layoutComp.comp.isFetching).toBe(true, 'Shoule be true when router is just begin start and not end');
      router.navigateByUrl('/lazy/LoadedModule1');
      tick(101);
      expect(layoutComp.comp.isFetching).toBe(false, 'Shoule be false when lazy router is end');
      try {
        spyOn(msgSrv, 'error');
        router.navigateByUrl('/lazy/invalid-module');
        tick(101);
        expect(layoutComp.comp.isFetching).toBe(false, 'Shoule be false when lazy router is invalid module');
        expect(msgSrv.error).toHaveBeenCalled();
      } catch {}
    }));
  });

  class PageObject {
    getEl<T extends HTMLElement>(cls: string): T {
      return dl.query(By.css(cls)).nativeElement as T;
    }

    expectEl(cls: string, result: boolean = true): this {
      expect(dl.queryAll(By.css(cls)).length > 0).toBe(result);
      return this;
    }
  }
});

@Component({
  template: `
    <layout-default [options]="options" [asideUser]="asideUser" [nav]="nav" [content]="content">
      <layout-default-header-item direction="left">
        <span class="header-left">left</span>
      </layout-default-header-item>
      test
      <layout-default-header-item direction="right">
        <span class="header-right">right</span>
      </layout-default-header-item>
    </layout-default>
    <ng-template #asideUserTpl>
      <span class="custom-aside-user">custom-aside-user</span>
    </ng-template>
    <ng-template #navTpl>
      <span class="custom-nav">custom-nav</span>
    </ng-template>
    <ng-template #contentTpl>
      <span class="custom-content">custom-content</span>
    </ng-template>
  `
})
class TestComponent {
  @ViewChild('asideUserTpl', { static: true }) asideUserTpl!: TemplateRef<void>;
  @ViewChild('navTpl', { static: true }) navTpl!: TemplateRef<void>;
  @ViewChild('contentTpl', { static: true }) contentTpl!: TemplateRef<void>;
  options: LayoutDefaultOptions = {};
  asideUser: TemplateRef<void>;
  nav: TemplateRef<void>;
  content: TemplateRef<void>;
}
