import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { createTestContext } from '@delon/testing';
import { of } from 'rxjs';
import { AlainConfigService, LazyService } from '../../util';
import { PriceComponent } from './price.component';
import { PriceModule } from './price.module';

describe('abc: qr', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  const win: any = window;

  class MockQRious {
    set(): jasmine.Spy<jasmine.Func> {
      return jasmine.createSpy('set');
    }
    toDataURL(): jasmine.Spy<jasmine.Func> {
      return jasmine.createSpy('toDataURL');
    }
  }

  function createModule(): void {
    TestBed.configureTestingModule({
      imports: [PriceModule],
      declarations: [TestComponent],
    });
  }

  function mockQRious(): void {
    win.QRious = MockQRious;
  }

  afterEach(() => {
    // if (context.comp && context.comp.ngOnDestroy) context.comp.ngOnDestroy();
    delete win.QRious;
  });

  describe('', () => {
    beforeEach(fakeAsync(() => {
      createModule();
      mockQRious();
      ({ fixture, dl, context } = createTestContext(TestComponent));
      fixture.detectChanges();
      spyOn(context, 'change');
      tick(100);
    }));

    function getDataURL(): string {
      return (dl.query(By.css('img')).nativeElement as HTMLImageElement).src;
    }

    it('should be generate a qr', () => {
      expect(getDataURL().length).toBeGreaterThan(1);
    });

    it('should be support unicode value', () => {
      context.value = 'test';
      fixture.detectChanges();
      expect(context.change).toHaveBeenCalled();
      context.value = `中国🇨🇳`;
      fixture.detectChanges();
      expect(context.change).toHaveBeenCalled();
    });
  });

  it('should be lazy load libary', () => {
    createModule();
    const cogSrv = TestBed.inject(AlainConfigService);
    const lazySrv = TestBed.inject(LazyService);
    spyOn(cogSrv, 'merge').and.returnValue({ lib: '1.js' });
    spyOnProperty(lazySrv, 'change').and.returnValue(of([{ path: '1.js', status: 'ok' }]));
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
    mockQRious();
    spyOn(context, 'change');
    context.value = '11';
    fixture.detectChanges();
    expect(context.change).toHaveBeenCalled();
  });
});

@Component({
  template: `
    <qr
      #comp
      [value]="value"
      [background]="background"
      [backgroundAlpha]="backgroundAlpha"
      [foreground]="foreground"
      [foregroundAlpha]="foregroundAlpha"
      [level]="level"
      [mime]="mime"
      [padding]="padding"
      [size]="size"
      (change)="change($event)"
    ></qr>
  `,
})
class TestComponent {
  @ViewChild('comp', { static: true })
  comp: PriceComponent;

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

  change(): void {}
}
