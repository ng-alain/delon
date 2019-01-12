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

  it('General Configuration', inject([ImageConfig], (cog: ImageConfig) => {
    cog.error = 'e.png';
    ({ fixture, dl, context } = createTestContext(TestComponent));
    expect(context.comp.error).toBe('e.png');
    expect(context.comp.size).toBe(64);
  }));

  describe('', () => {
    beforeEach(() => ({ fixture, dl, context } = createTestContext(TestComponent)));

    it('should be support qlogo auto size', () => {
      context.src = `${SRC}0`;
      fixture.detectChanges();
      const newSrc = (dl.query(By.css('div')).nativeElement as HTMLElement).getAttribute('src');
      expect(newSrc).toBe(`${SRC.substr(5)}${context.size}`);
    });

    it('should be support qlogo auto size when not full original address', () => {
      context.src = `${SRC}${context.size}`;
      fixture.detectChanges();
      const newSrc = (dl.query(By.css('div')).nativeElement as HTMLElement).getAttribute('src');
      expect(newSrc).toBe(`${SRC.substr(5)}${context.size}`);
    });

    it('should be auto resize when is qlogo thum', () => {
      context.src = `${SRC}32`;
      context.size = 96;
      fixture.detectChanges();
      const newSrc = (dl.query(By.css('div')).nativeElement as HTMLElement).getAttribute('src');
      expect(newSrc).toBe(`${SRC.substr(5)}${context.size}`);
    });

    it('should be custom error src', () => {
      context.error = 'error.png';
      fixture.detectChanges();
      const imgEl = dl.query(By.css('div')).nativeElement as HTMLImageElement;
      // tslint:disable-next-line:no-string-literal
      expect(imgEl.attributes['onerror'].nodeValue).toContain(context.error);
    });
  });
});

@Component({
  template: `<div [_src]="src" #comp="srcDirective" [size]="size" [error]="error"></div>`,
})
class TestComponent {
  @ViewChild('comp') comp: ImageDirective;
  src = './assets/img/logo.svg';
  size = 64;
  error = './assets/img/logo.svg';
}
