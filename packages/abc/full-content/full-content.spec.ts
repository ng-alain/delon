import {
  Component,
  DebugElement,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
  Injector,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { By, DOCUMENT } from '@angular/platform-browser';
import {
  RouterModule,
  Router,
  ActivationEnd,
} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

import { NaFullContentModule } from './full-content.module';
import { NaFullContentComponent } from './full-content.component';
import { NaFullContentService } from './full-content.service';

describe('abc: full-content', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let doc: Document;
  let el: HTMLElement;
  let bodyEl: HTMLElement;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [NaFullContentModule.forRoot(), RouterModule.forRoot([])],
      declarations: [TestComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  function createComp() {
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
    doc = injector.get(DOCUMENT);
    bodyEl = document.querySelector('body');
    el = dl.query(By.css('full-content')).nativeElement as HTMLElement;
  }

  afterEach(() => {
    context.comp.ngOnDestroy();
  });

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
      const srv = injector.get(NaFullContentService);
      expect(context.fullscreen).toBe(false);
      srv.toggle();
      fixture.detectChanges();
      expect(context.fullscreen).toBe(true);
      srv.toggle();
      fixture.detectChanges();
      expect(context.fullscreen).toBe(false);
    });
    it(
      'should be recalculate height when trigger resize',
      fakeAsync(() => {
        createComp();
        const bodyHeight = 10;
        spyOn(bodyEl, 'getBoundingClientRect').and.returnValue({
          height: bodyHeight,
        });
        expect(bodyEl.getBoundingClientRect).not.toHaveBeenCalled();
        window.dispatchEvent(new Event('resize'));
        fixture.detectChanges();
        tick(210);
        expect(bodyEl.getBoundingClientRect).toHaveBeenCalled();
        expect(context.comp._height).toBe(
          bodyHeight - el.getBoundingClientRect().top - context.padding,
        );
      }),
    );
    it('should be clear class when go to other route', () => {
      const eventsSub = new BehaviorSubject<any>(null);
      class MockRouter {
        events = eventsSub;
      }
      TestBed.overrideProvider(Router, {
        useFactory: () => {
          return new MockRouter();
        },
        deps: [],
      });
      createComp();
      // mock component destroy
      (dl.nativeElement as HTMLElement).innerHTML = ``;

      eventsSub.next(new ActivationEnd(null));
      eventsSub.complete();
      expect(bodyEl.classList.contains('full-content')).toBe(false);
    });
  });
});

@Component({
  template: `
    <full-content #comp
        [(fullscreen)]="fullscreen"
        [hideTitle]="hideTitle"
        [padding]="padding"
        (fullscreenChange)="change()">
        <button full-toggle>Full</button>
    </full-content>
    `,
})
class TestComponent {
  @ViewChild('comp') comp: NaFullContentComponent;
  fullscreen: boolean = false;
  hideTitle: boolean;
  padding = 24;
  change() {}
}
