import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import { LazyService } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types/any';

import { PdfComponent } from './pdf.component';
import { PdfModule } from './pdf.module';

describe('abc: pdf', () => {
  let fixture: ComponentFixture<TestComponent>;
  let page: PageObject;
  let lazySrv: LazyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PdfModule],
      declarations: [TestComponent]
    });
    ({ fixture } = createTestContext(TestComponent));
    page = new PageObject();
    lazySrv = TestBed.inject(LazyService);
    spyOn(lazySrv, 'load').and.returnValue(Promise.resolve([]));
  });

  it('should be throw error when not found pdfjsViewer in window', fakeAsync(() => {
    expect(() => page.cd().end()).toThrow();
  }));

  class PageObject {
    cd(time: number = 0): this {
      fixture.detectChanges();
      tick(time);
      fixture.detectChanges();
      return this;
    }

    end(): void {
      discardPeriodicTasks();
      flush();
    }
  }
});

@Component({
  template: ` <pdf #comp [src]="src" [options]="options" [delay]="delay" (change)="change()"></pdf> `
})
class TestComponent {
  @ViewChild('comp') comp!: PdfComponent;
  options: NzSafeAny;
  src = '';
  delay = 0;
  change(): void {}
}
