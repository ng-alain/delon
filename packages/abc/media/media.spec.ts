import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import { LazyService } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types/any';

import { MediaComponent } from './media.component';
import { MediaModule } from './media.module';
import { PlyrMediaSource, PlyrMediaType } from './plyr.types';

class MockPlyr {
  source: NzSafeAny = {};
  on(_key: string, fn: () => void): void {
    fn();
  }
  destroy(): void {}
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
      declarations: [TestComponent, TestCustomVideoComponent]
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

    it('should be load once libs', fakeAsync(() => {
      page.cd();
      expect(lazySrv.load).toHaveBeenCalledTimes(1);
      const fixture2 = TestBed.createComponent(TestComponent);
      fixture2.detectChanges();
      tick();
      fixture2.detectChanges();
      expect(lazySrv.load).toHaveBeenCalledTimes(1);
    }));

    it('should be used full source argument', fakeAsync(() => {
      page.cd();
      expect(page.player.source.type).toBe('video');
      context.source = { type: 'audio', sources: [] };
      page.cd();
      expect(page.player.source.type).toBe('audio');
    }));

    it('#ready', fakeAsync(() => {
      spyOn(context, 'ready');
      page.cd();
      expect(context.ready).toHaveBeenCalled();
    }));

    it('should be custom vedio dom', fakeAsync(() => {
      const fixture2 = TestBed.createComponent(TestCustomVideoComponent);
      fixture2.detectChanges();
      tick();
      fixture2.detectChanges();
      expect(fixture2.componentInstance.comp['videoEl'].dataset.type).toBe(`custom`);
    }));
  });

  class PageObject {
    cd(time: number = 0): this {
      fixture.detectChanges();
      tick(time);
      fixture.detectChanges();
      return this;
    }

    get player(): NzSafeAny {
      return context.comp.player;
    }

    end(): void {
      discardPeriodicTasks();
      flush();
    }
  }
});

@Component({
  template: `
    <media #comp [type]="type" [source]="source" [options]="options" [delay]="delay" (ready)="ready()"></media>
  `
})
class TestComponent {
  @ViewChild('comp') comp: MediaComponent;
  type: PlyrMediaType = 'video';
  source: string | PlyrMediaSource = '1.mp4';
  options: NzSafeAny;
  delay = 0;
  ready(): void {}
}
@Component({
  template: `<media #comp [source]="source"><video data-type="custom"></video></media>
    <media [source]="source"></media>`
})
class TestCustomVideoComponent extends TestComponent {}
