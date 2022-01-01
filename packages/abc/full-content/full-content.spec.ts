import { APP_BASE_HREF, DOCUMENT } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { FullContentComponent } from './full-content.component';
import { FullContentModule } from './full-content.module';
import { FullContentService } from './full-content.service';

describe('abc: full-content', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let doc: Document;
  let el: HTMLElement;
  let bodyEl: HTMLBodyElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FullContentModule, RouterTestingModule.withRoutes([])],
      declarations: [TestComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    });
  });

  function createComp(): void {
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
    doc = TestBed.inject(DOCUMENT);
    bodyEl = document.querySelector('body') as HTMLBodyElement;
    el = dl.query(By.css('full-content')).nativeElement as HTMLElement;
  }

  describe('#fullscreen', () => {
    beforeEach(() => createComp());
    it('with true', () => {
      context.fullscreen = true;
      fixture.detectChanges();
      expect(doc.body.classList.contains('full-content__opened')).toBe(true);
    });
    it('with false', () => {
      context.fullscreen = false;
      fixture.detectChanges();
      expect(doc.body.classList.contains('full-content__opened')).toBe(false);
    });
  });

  describe('#hideTitle', () => {
    beforeEach(() => createComp());
    describe('#with [true]', () => {
      beforeEach(() => (context.hideTitle = true));
      it('when fullscreen', () => {
        context.fullscreen = true;
        fixture.detectChanges();
        expect(doc.body.classList.contains('full-content__hidden-title')).toBe(true);
      });
      it('when not fullscreen', () => {
        context.fullscreen = false;
        fixture.detectChanges();
        expect(doc.body.classList.contains('full-content__hidden-title')).toBe(false);
      });
    });
    describe('#with [false]', () => {
      beforeEach(() => (context.hideTitle = false));
      it('when fullscreen', () => {
        context.fullscreen = true;
        fixture.detectChanges();
        expect(doc.body.classList.contains('full-content__hidden-title')).toBe(false);
      });
      it('when not fullscreen', () => {
        context.fullscreen = false;
        fixture.detectChanges();
        expect(doc.body.classList.contains('full-content__hidden-title')).toBe(false);
      });
    });
  });

  describe('logic', () => {
    it('should be switch fullscreen via directive', () => {
      createComp();
      expect(context.fullscreen).toBe(false);
      (dl.query(By.css('button')).nativeElement as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(context.fullscreen).toBe(true);
      (dl.query(By.css('button')).nativeElement as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(context.fullscreen).toBe(false);
    });
    it('should be switch fullscreen via service', () => {
      createComp();
      const srv = TestBed.inject(FullContentService);
      expect(context.fullscreen).toBe(false);
      srv.toggle();
      fixture.detectChanges();
      expect(context.fullscreen).toBe(true);
      srv.toggle();
      fixture.detectChanges();
      expect(context.fullscreen).toBe(false);
    });
    it('should be recalculate height when trigger resize', fakeAsync(() => {
      createComp();
      const bodyHeight = 10;
      spyOn(bodyEl, 'getBoundingClientRect').and.returnValue({
        height: bodyHeight
      } as NzSafeAny);
      expect(bodyEl.getBoundingClientRect).not.toHaveBeenCalled();
      window.dispatchEvent(new Event('resize'));
      fixture.detectChanges();
      tick(210);
      expect(bodyEl.getBoundingClientRect).toHaveBeenCalled();
      expect(context.comp._height).toBe(bodyHeight - el.getBoundingClientRect().top - context.padding);
    }));
    it('should be clear class when go to other route', () => {
      const eventsSub = new BehaviorSubject<NzSafeAny>(null);
      class MockRouter {
        events = eventsSub;
      }
      TestBed.overrideProvider(Router, {
        useFactory: () => {
          return new MockRouter();
        },
        deps: []
      });
      createComp();
      // mock component destroy
      (dl.nativeElement as HTMLElement).innerHTML = ``;

      eventsSub.next(new ActivationEnd(null!));
      eventsSub.complete();
      expect(bodyEl.classList.contains('full-content')).toBe(false);
    });
    it('should be attach class when back route', () => {
      const eventsSub = new BehaviorSubject<NzSafeAny>(null);
      class MockRouter {
        events = eventsSub;
      }
      TestBed.overrideProvider(Router, {
        useFactory: () => {
          return new MockRouter();
        },
        deps: []
      });
      createComp();

      bodyEl.classList.remove('full-content__body');

      eventsSub.next(new ActivationEnd(null!));
      eventsSub.complete();

      expect(bodyEl.classList.contains('full-content__body')).toBe(true);
    });
  });
});

@Component({
  template: `
    <full-content
      #comp
      [(fullscreen)]="fullscreen"
      [hideTitle]="hideTitle"
      [padding]="padding"
      (fullscreenChange)="change()"
    >
      <button full-toggle>Full</button>
    </full-content>
  `
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp!: FullContentComponent;
  fullscreen: boolean = false;
  hideTitle?: boolean;
  padding = 24;
  change(): void {}
}
