import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { LazyService } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types/any';
import { MediaComponent } from './media.component';
import { MediaModule } from './media.module';
import { PlyrMediaType } from './plyr.types';

class MockPlyr {
  source: NzSafeAny;
  on() {}
  destroy() {}
}

describe('abc: media', () => {
  let fixture: ComponentFixture<TestComponent>;
  // let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;
  let lazySrv: LazyService;
  const win: NzSafeAny = window;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MediaModule],
      declarations: [TestComponent],
    });
    ({ fixture, context } = createTestContext(TestComponent));
    page = new PageObject();
    lazySrv = TestBed.inject(LazyService);
    spyOn(lazySrv, 'load').and.returnValue(Promise.resolve([]));
  });

  it('should be throw error when not found Plyr in window', fakeAsync(() => {
    expect(() => page.cd().end()).toThrow();
  }));

  describe('', () => {
    beforeEach(() => (win.Plyr = MockPlyr));
    afterEach(() => delete win.Plyr);
    it('should be working', fakeAsync(() => {
      page.cd();
      expect(page.player != null).toBe(true);
    }));
  });

  class PageObject {
    cd(time = 0): this {
      fixture.detectChanges();
      tick(time);
      fixture.detectChanges();
      return this;
    }

    get player() {
      return context.comp.player;
    }

    end() {
      discardPeriodicTasks();
      flush();
    }
  }
});

@Component({
  template: ` <media #comp [type]="type" [source]="source" [options]="options" [delay]="delay" (ready)="ready()"></media> `,
})
class TestComponent {
  @ViewChild('comp') comp: MediaComponent;
  type: PlyrMediaType = 'video';
  source: string | MediaSource;
  options: NzSafeAny;
  delay = 0;
  ready() {}
}
