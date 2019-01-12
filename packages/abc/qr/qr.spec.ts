import { Component, DebugElement, Injector, ViewChild } from '@angular/core';
import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestSuite, createTestContext } from '@delon/testing';

import { QRComponent } from './qr.component';
import { QRConfig } from './qr.config';
import { QRModule } from './qr.module';
import { QRService } from './qr.service';

describe('abc: qr', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let srv: QRService;

  configureTestSuite(() => {
    injector = TestBed.configureTestingModule({
      imports: [QRModule],
      declarations: [TestComponent],
    });
  });

  it('General Configuration', inject([QRConfig], (cog: QRConfig) => {
    cog.background = '#f50';
    ({ fixture, dl, context } = createTestContext(TestComponent));
    expect(context.comp.background).toBe('#f50');
    expect(context.comp.level).toBe('L');
  }));

  describe('', () => {
    beforeEach(() => {
      ({ fixture, dl, context } = createTestContext(TestComponent));
      fixture.detectChanges();
      srv = injector.get(QRService);
    });

    function getDataURL() {
      return (dl.query(By.css('img')).nativeElement as HTMLImageElement).src;
    }

    it('should be generate a qr', () => {
      expect(getDataURL().length).toBeGreaterThan(1);
    });

    it('#change', () => {
      spyOn(context, 'change');
      context.value = 'test';
      fixture.detectChanges();
      expect(context.change).toHaveBeenCalled();
    });

    describe('#QRService', () => {
      it('should be refresh via string value', () => {
        srv.refresh('test');
        expect(srv.dataURL).toBe(
          `data:image/png;base64,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`,
        );
      });
      it('should be refresh via null value', () => {
        srv.refresh();
        expect(getDataURL().length).toBeGreaterThan(1);
      });
    });
  });
});

@Component({
  template: `
  <qr #comp
    [value]="value"
    [background]="background"
    [backgroundAlpha]="backgroundAlpha"
    [foreground]="foreground"
    [foregroundAlpha]="foregroundAlpha"
    [level]="level"
    [mime]="mime"
    [padding]="padding"
    [size]="size"
    (change)="change($event)"></qr>
    `,
})
class TestComponent {
  @ViewChild('comp')
  comp: QRComponent;

  value = 'https://ng-alain.com/';
  background = 'white';
  // tslint:disable-next-line:number-literal-format
  backgroundAlpha = 1.0;
  foreground = 'black';
  // tslint:disable-next-line:number-literal-format
  foregroundAlpha = 1.0;
  level = 'L';
  mime = 'image/png';
  padding = 10;
  size = 220;

  change(dataURL: string) {}
}
