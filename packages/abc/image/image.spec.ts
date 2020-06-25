import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { createTestContext } from '@delon/testing';
import { AlainThemeModule } from '@delon/theme';
import { ImageDirective } from './image.directive';
import { ImageModule } from './image.module';

const SRC = 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLL1byctY955Htv9ztzVlIzY9buI9zRLg5QrkpOynrmObArKicy9icIX7aVgv3UqIbeIEo2xuUtsqYw/';

describe('abc: _src', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImageModule, AlainThemeModule, HttpClientTestingModule],
      declarations: [TestComponent],
    });
  });

  function getEl(): HTMLImageElement {
    return dl.query(By.css('img')).nativeElement;
  }

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
  });

  it('should be support qlogo auto size', () => {
    context.src = `${SRC}0`;
    fixture.detectChanges();
    expect(getEl().src).toContain(`${SRC.substr(5)}${context.size}`);
  });

  it('should be support qlogo auto size when not full original address', () => {
    context.src = `${SRC}${context.size}`;
    fixture.detectChanges();
    expect(getEl().src).toContain(`${SRC.substr(5)}${context.size}`);
  });

  it('should be auto resize when is qlogo thum', () => {
    context.src = `${SRC}32`;
    context.size = 96;
    fixture.detectChanges();
    expect(getEl().src).toContain(`${SRC.substr(5)}${context.size}`);
  });

  it('should be custom error src', () => {
    context.error = 'error.png';
    fixture.detectChanges();
    const imgEl = getEl();
    imgEl.onerror!(null!);
    expect(imgEl.src).toContain(context.error);
  });

  it('should be ingore http', () => {
    context.src = `http://ng-alain.com/1.png`;
    fixture.detectChanges();
    expect(getEl().src).toContain(`//ng-alain.com/1.png`);
  });

  it('should be ingore https', () => {
    context.src = `https://ng-alain.com/1.png`;
    fixture.detectChanges();
    expect(getEl().src).toContain(`//ng-alain.com/1.png`);
  });

  describe('#useHttp', () => {
    let httpBed: HttpTestingController;
    const BASE64 = 'test-base64-image';
    const mockFileReader = {
      result: '',
      readAsDataURL: (_blob: Blob) => {},
      onloadend: () => {},
      onerror: () => {},
    };
    beforeEach(() => {
      spyOn(window, 'FileReader').and.returnValue(mockFileReader as any);
      httpBed = TestBed.inject(HttpTestingController);
      context.useHttp = true;
      fixture.detectChanges();
    });

    it('should working', () => {
      spyOn(mockFileReader, 'readAsDataURL').and.callFake((_blob: Blob) => {
        mockFileReader.result = BASE64;
        mockFileReader.onloadend();
      });
      const ret = httpBed.expectOne(req => req.url.startsWith('./assets')) as TestRequest;
      ret.flush(new Blob([BASE64]));
      expect(getEl().src).toContain(BASE64);
    });

    it('should http request is error', () => {
      spyOn(mockFileReader, 'readAsDataURL').and.callFake((_blob: Blob) => {
        mockFileReader.result = BASE64;
        mockFileReader.onloadend();
      });
      const ret = httpBed.expectOne(req => req.url.startsWith('./assets')) as TestRequest;
      ret.error({} as any);
      expect(getEl().src).toContain('error.svg');
    });

    it('should invalid convert base64', () => {
      spyOn(mockFileReader, 'readAsDataURL').and.callFake((_blob: Blob) => {
        mockFileReader.result = BASE64;
        mockFileReader.onerror();
      });
      const ret = httpBed.expectOne(req => req.url.startsWith('./assets')) as TestRequest;
      ret.flush(new Blob([BASE64]));
      expect(getEl().src).toContain('error.svg');
    });
  });
});

@Component({
  template: ` <img [_src]="src" #comp="_src" [size]="size" [error]="error" [useHttp]="useHttp" />`,
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp: ImageDirective;
  src = './assets/img/logo.svg';
  size = 64;
  error = 'error.svg';
  useHttp = false;
}
