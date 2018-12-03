import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ImageModule } from './image.module';
const SRC = 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLL1byctY955Htv9ztzVlIzY9buI9zRLg5QrkpOynrmObArKicy9icIX7aVgv3UqIbeIEo2xuUtsqYw/';

describe('abc: _src', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImageModule.forRoot()],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
  });

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
    expect(imgEl.attributes['onerror'].nodeValue).toContain(context.error);
  });
});

@Component({
  template: `<div [_src]="src" [size]="size" [error]="error"></div>`,
})
class TestComponent {
  src = './assets/img/logo.svg';
  size = 64;
  error = './assets/img/logo.svg';
}
