import { Component, DebugElement, NO_ERRORS_SCHEMA, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  NavigationCancel,
  NavigationError,
  provideRouter,
  RouteConfigLoadEnd,
  RouteConfigLoadStart
} from '@angular/router';

import { createTestContext } from '@delon/testing';
import { provideNzIconsTesting } from 'ng-zorro-antd/icon/testing';
import { NzMessageService } from 'ng-zorro-antd/message';

import { LayoutDefaultComponent } from './layout.component';
import { LayoutDefaultModule } from './layout.module';
import { LayoutDefaultService } from './layout.service';
import { SettingsService } from '../src/services/settings/settings.service';
import { AlainThemeModule } from '../src/theme.module';

describe('theme: layout-default', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideNzIconsTesting(), provideRouter([])],
      imports: [LayoutDefaultModule, AlainThemeModule],
      declarations: [TestComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    ({ fixture, dl, context } = createTestContext(TestComponent));
    page = new PageObject();
  });

  it('should be toggle collapsed', () => {
    const srv = TestBed.inject(LayoutDefaultService);
    srv.toggleCollapsed(true);
    fixture.detectChanges();
    const el = page.getEl('.alain-default__nav-item--collapse');
    expect(el.querySelector('.anticon-menu-unfold') != null).toBe(true);
    srv.toggleCollapsed(false);
    fixture.detectChanges();
    expect(el.querySelector('.anticon-menu-fold') != null).toBe(true);
  });

  it('#colorWeak', () => {
    const srv = TestBed.inject(SettingsService);
    srv.setLayout('colorWeak', true);
    fixture.detectChanges();
    expect(document.body.classList).toContain(`color-weak`);
  });

  describe('RTL', () => {
    it('should be toggle collapsed', () => {
      const settingSrv = TestBed.inject(SettingsService);
      const srv = TestBed.inject(LayoutDefaultService);
      settingSrv.setLayout('direction', 'rtl');
      srv.toggleCollapsed(true);
      fixture.detectChanges();
      const el = page.getEl('.alain-default__nav-item--collapse');
      expect(el.querySelector('.anticon-menu-fold') != null).toBe(true);
      el.click();
      fixture.detectChanges();
      expect(el.querySelector('.anticon-menu-unfold') != null).toBe(true);
    });
  });

  describe('lazy load', () => {
    let msgSrv: NzMessageService;
    function lazyTick(): void {
      tick(101);
    }
    function lazyStart(): void {
      context.comp.processEv(new RouteConfigLoadStart({}));
      lazyTick();
    }

    function lazyError(): void {
      context.comp.processEv(new NavigationError(0, '/', {}));
      lazyTick();
    }

    function lazyCancel(reason: string = 'cancel'): void {
      context.comp.processEv(new NavigationCancel(0, '/', reason));
      lazyTick();
    }

    function lazyEnd(): void {
      context.comp.processEv(new RouteConfigLoadEnd({}));
      lazyTick();
    }

    beforeEach(fakeAsync(() => {
      lazyStart();
      msgSrv = TestBed.inject(NzMessageService);
    }));

    it('should toggle fetching status when load lzay config', fakeAsync(() => {
      expect(context.comp.showFetching()).toBe(true);
      lazyEnd();
    }));

    describe('when error', () => {
      it('should be invalid module', fakeAsync(() => {
        const spy = vi.spyOn(msgSrv, 'error');
        lazyError();
        expect(context.comp.showFetching()).toBe(false);
        expect(spy).toHaveBeenCalled();
        expect(spy.mock.calls[0][0]).toContain('Could not load ');
        lazyEnd();
      }));

      it('should be cancel load config', fakeAsync(() => {
        lazyCancel();
        expect(context.comp.showFetching()).toBe(false);
        lazyEnd();
      }));
    });
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
    <layout-default #comp>
      test
    </layout-default>
  `,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp!: LayoutDefaultComponent;
}
