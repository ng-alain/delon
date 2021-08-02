import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ModalOptions } from 'ng-zorro-antd/modal';

import { cleanCdkOverlayHtml, createTestContext } from '@delon/testing';
import { AlainThemeModule, _HttpClient } from '@delon/theme';

import { ImageDirective } from './image.directive';
import { ImageModule } from './image.module';

const SRC =
  'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLL1byctY955Htv9ztzVlIzY9buI9zRLg5QrkpOynrmObArKicy9icIX7aVgv3UqIbeIEo2xuUtsqYw/';

describe('abc: _src', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImageModule, AlainThemeModule, HttpClientTestingModule, NoopAnimationsModule],
      declarations: [TestComponent]
    });
  });

  function getEl(): HTMLImageElement {
    return dl.query(By.css('img')).nativeElement;
  }

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestComponent));
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
    let _http: _HttpClient;
    const BASE64 = 'test-base64-image';
    const mockFileReader = {
      result: '',
      readAsDataURL: (_blob: Blob) => {},
      onloadend: () => {},
      onerror: () => {}
    };
    beforeEach(() => {
      spyOn(window, 'FileReader').and.returnValue(mockFileReader as NzSafeAny);
      _http = TestBed.inject(_HttpClient);
      context.useHttp = true;
    });

    it('should working', () => {
      spyOn(mockFileReader, 'readAsDataURL').and.callFake((_blob: Blob) => {
        mockFileReader.result = BASE64;
        mockFileReader.onloadend();
      });
      spyOn(_http, 'get').and.returnValue(of(new Blob([BASE64])));
      fixture.detectChanges();
      expect(getEl().src).toContain(BASE64);
    });

    it('should http request is error', () => {
      spyOn(mockFileReader, 'readAsDataURL').and.callFake((_blob: Blob) => {
        mockFileReader.result = BASE64;
        mockFileReader.onloadend();
      });
      spyOn(_http, 'get').and.returnValue(throwError({}));
      fixture.detectChanges();
      expect(getEl().src).toContain('error.svg');
    });

    it('should invalid convert base64', () => {
      spyOn(mockFileReader, 'readAsDataURL').and.callFake((_blob: Blob) => {
        mockFileReader.result = BASE64;
        mockFileReader.onerror();
      });
      spyOn(_http, 'get').and.returnValue(of(new Blob([BASE64])));
      fixture.detectChanges();
      expect(getEl().src).toContain('error.svg');
    });
  });

  describe('#preview', () => {
    afterEach(cleanCdkOverlayHtml);
    it('should be working', fakeAsync(() => {
      context.previewSrc = `${SRC}`;
      fixture.detectChanges();
      getEl().click();
      tick(1000);
      fixture.detectChanges();
      const el = document.querySelector('.img-fluid') as HTMLImageElement;
      expect(el != null).toBe(true);
      expect(el.src.endsWith(SRC)).toBe(true);
    }));
    it('should be ingore click when previewSrc is null', fakeAsync(() => {
      context.previewSrc = null;
      fixture.detectChanges();
      getEl().click();
      tick(1000);
      fixture.detectChanges();
      const el = document.querySelector('.img-fluid') as HTMLImageElement;
      expect(el != null).toBe(false);
    }));
  });
});

@Component({
  template: ` <img
    [_src]="src"
    #comp="_src"
    [size]="size"
    [error]="error"
    [useHttp]="useHttp"
    [previewSrc]="previewSrc"
    [previewModalOptions]="previewModalOptions"
  />`
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp: ImageDirective;
  src = './assets/img/logo.svg';
  size = 64;
  error = 'error.svg';
  useHttp = false;
  previewSrc: string | null;
  previewModalOptions: ModalOptions;
}
