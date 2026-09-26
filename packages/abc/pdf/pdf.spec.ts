import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import { LazyService } from '@delon/util/other';

import { PdfComponent } from './pdf.component';

describe('abc: pdf', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestComponent>;
  let page: PageObject;
  let lazySrv: LazyService;

  beforeEach(() => {
    ({ fixture } = createTestContext(TestComponent));
    page = new PageObject();
    lazySrv = TestBed.inject(LazyService);
    vi.spyOn(lazySrv, 'load').mockResolvedValue([]);
  });

  it('should be throw error when not found pdfjsViewer in window', async () => {
    const reason = new Promise<unknown>(resolve => {
      window.addEventListener(
        'unhandledrejection',
        e => {
          e.preventDefault();
          resolve(e.reason);
        },
        { once: true }
      );
    });
    page.cd();
    await expect(reason).resolves.toMatchObject({
      message: expect.stringContaining('No window.pdfjsLib found')
    });
  });

  class PageObject {
    cd(time: number = 0): this {
      fixture.detectChanges();
      vi.advanceTimersByTime(time);
      fixture.detectChanges();
      return this;
    }
  }
});

@Component({
  template: ` <pdf #comp [src]="src" [delay]="delay" (change)="change()" /> `,
  imports: [PdfComponent]
})
class TestComponent {
  @ViewChild('comp') comp!: PdfComponent;
  src = '';
  delay = 0;
  change(): void {}
}
