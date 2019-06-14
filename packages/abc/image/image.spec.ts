import { Component, DebugElement, ViewChild } from '@angular/core';
import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestSuite, createTestContext } from '@delon/testing';

import { ImageConfig } from './image.config';
import { ImageDirective } from './image.directive';
import { ImageModule } from './image.module';
const SRC = 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLL1byctY955Htv9ztzVlIzY9buI9zRLg5QrkpOynrmObArKicy9icIX7aVgv3UqIbeIEo2xuUtsqYw/';

describe('abc: _src', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [ImageModule],
      declarations: [TestComponent],
    });
  });

  function getEl(): HTMLImageElement {
    return dl.query(By.css('div')).nativeElement;
  }

  it('General Configuration', inject([ImageConfig], (cog: ImageConfig) => {
    cog.error = 'e.png';
    ({ fixture, dl, context } = createTestContext(TestComponent));
    expect(context.comp.error).toBe('e.png');
    expect(context.comp.size).toBe(64);
  }));

  describe('', () => {
    beforeEach(() => {
      ({ fixture, dl, context } = createTestContext(TestComponent));
      fixture.detectChanges();
    });

    it('should be support qlogo auto size', () => {
      context.src = `${SRC}0`;
      fixture.detectChanges();
      expect(getEl().src).toBe(`${SRC.substr(5)}${context.size}`);
    });

    it('should be support qlogo auto size when not full original address', () => {
      context.src = `${SRC}${context.size}`;
      fixture.detectChanges();
      expect(getEl().src).toBe(`${SRC.substr(5)}${context.size}`);
    });

    it('should be auto resize when is qlogo thum', () => {
      context.src = `${SRC}32`;
      context.size = 96;
      fixture.detectChanges();
      expect(getEl().src).toBe(`${SRC.substr(5)}${context.size}`);
    });

    it('should be custom error src', () => {
      context.error = 'error.png';
      fixture.detectChanges();
      const imgEl = getEl();
      imgEl.onerror!(null!);
      expect(imgEl.src).toBe(context.error);
    });

    it('should be ingore http', () => {
      context.src = `http://ng-alain.com/1.png`;
      fixture.detectChanges();
      expect(getEl().src).toBe(`//ng-alain.com/1.png`);
    });

    it('should be ingore https', () => {
      context.src = `https://ng-alain.com/1.png`;
      fixture.detectChanges();
      expect(getEl().src).toBe(`//ng-alain.com/1.png`);
    });
  });
});

@Component({
  template: `
    <div [_src]="src" #comp="_src" [size]="size" [error]="error"></div>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: ImageDirective;
  src = './assets/img/logo.svg';
  size = 64;
  error = './assets/img/logo.svg';
}
