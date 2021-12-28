import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';

import { createTestContext } from '@delon/testing';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { OnboardingModule } from './onboarding.module';
import { OnboardingService } from './onboarding.service';
import { OnboardingConfig, OnboardingOpType } from './onboarding.types';

describe('abc: onboarding', () => {
  let fixture: ComponentFixture<TestComponent>;
  let srv: OnboardingService;
  let page: PageObject;

  function genModule(): void {
    TestBed.configureTestingModule({
      imports: [OnboardingModule, NoopAnimationsModule, RouterTestingModule],
      declarations: [TestComponent]
    });
    ({ fixture } = createTestContext(TestComponent));
    srv = TestBed.inject<OnboardingService>(OnboardingService);
    fixture.detectChanges();
    page = new PageObject();
  }

  afterEach(fakeAsync(() => {
    if (srv) {
      srv.done();
      srv.ngOnDestroy();
      page.cd();
    }
  }));

  beforeEach(() => genModule());

  it('should working', fakeAsync(() => {
    page.start().checkActive().click('next').checkDone(false).click('done').checkDone();
  }));

  it('#skip', fakeAsync(() => {
    page.start().checkActive().click('skip').checkDone();
  }));

  describe('#next', () => {
    it('should working', fakeAsync(() => {
      page.start().next().checkActive(1);
    }));
    it('should be done when next is last', fakeAsync(() => {
      page.start().next().next().checkDone();
    }));
  });

  describe('#prev', () => {
    it('should working in op', fakeAsync(() => {
      page.start().click('next').checkActive(1).click('prev').checkActive(0);
    }));
    it('should working in service', fakeAsync(() => {
      page.start().next().prev().checkActive(0);
    }));
    it('should be ingore when prev is first', fakeAsync(() => {
      page.start().prev().checkActive(0);
    }));
  });

  describe('#mask', () => {
    const maskCls = '.onboarding__mask';
    it('with true', fakeAsync(() => {
      page.start({ mask: true, maskClosable: true }).checkEl(maskCls, true);
      page.getEl(maskCls).click();
      page.cd().checkDone();
    }));
    it('with false', fakeAsync(() => {
      page.start({ mask: false }).checkEl(maskCls, false);
    }));
    it('shoudl be disabled done when maskClosable is false', fakeAsync(() => {
      page.start({ mask: true, maskClosable: false }).checkEl(maskCls, true);
      page.getEl(maskCls).click();
      page.cd().checkDone(false);
    }));
  });

  it('should be hide panel when selector is invalid', fakeAsync(() => {
    spyOn(console, 'warn');
    page.start({ items: [{ selectors: 'invalid-el' }] });
    expect(console.warn).toHaveBeenCalled();
  }));

  it('#showTotal', fakeAsync(() => {
    page.start({ showTotal: true });
    expect(document.querySelector('.onboarding__total') != null).toBe(true);
  }));

  it('should navigate first', fakeAsync(() => {
    const router = TestBed.inject<Router>(Router);
    spyOn(router, 'navigateByUrl');
    page.start({ items: [{ url: '/', selectors: '#a' }] });
    expect(router.navigateByUrl).toHaveBeenCalled();
  }));

  it('should be delay with before', fakeAsync(() => {
    page.start({ items: [{ before: 1, selectors: '#a' }] }).checkActive();
  }));

  it('should be done when before is throw error', fakeAsync(() => {
    spyOn(srv, 'done');
    page.start({ items: [{ before: throwError(() => Error('')), selectors: '#a' }] });
    expect(srv.done).toHaveBeenCalled();
  }));

  it('should ingore start when current is running', fakeAsync(() => {
    page.start();
    spyOnProperty(srv, 'running').and.returnValue(true);
    const srvAny = srv as NzSafeAny;
    spyOn(srvAny as NzSafeAny, 'attach');
    page.start();
    expect(srvAny.attach).not.toHaveBeenCalled();
  }));

  class PageObject {
    get el(): HTMLElement {
      return document.querySelector('onboarding') as HTMLElement;
    }

    getEl(cls: string): HTMLElement {
      return this.el.querySelector(cls) as HTMLElement;
    }

    checkActive(active: number = 0): this {
      expect(parseInt(this.el.dataset.onboardingActive?.toString()!, 10)).toBe(active);
      return this;
    }

    checkEl(cls: string, status: boolean): this {
      expect(this.getEl(cls) != null).toBe(status);
      return this;
    }

    click(type: OnboardingOpType): this {
      const btn = document.querySelector(`[data-btnType="${type}"]`) as HTMLElement;
      expect(btn == null).toBe(false);
      btn.dispatchEvent(new Event('click'));
      return this.cd();
    }

    checkDone(done: boolean = true): this {
      expect(this.el == null).toBe(done);
      return this.cd();
    }

    start(config?: OnboardingConfig): this {
      config = {
        items: [
          { selectors: '#a', title: 'atitle', content: 'acontent' },
          { selectors: '#b', title: 'btitle' }
        ],
        ...config
      };
      srv.start(config);
      return this.cd();
    }

    next(): this {
      srv.next();
      return this.cd();
    }

    prev(): this {
      srv.prev();
      return this.cd();
    }

    done(): this {
      srv.done();
      return this.cd();
    }

    cd(time: number = 301): this {
      fixture.detectChanges();
      tick(time);
      fixture.detectChanges();
      return this;
    }
  }
});

@Component({
  template: ` <div id="a" style="width: 100px; height: 50px">a</div>
    <div style="padding: 100px">
      <div id="b" style="width: 1000px; height: 50px">b</div>
    </div>
    <div id="c" style="width: 100px; height: 50px">c</div>`
})
class TestComponent {}
