import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { Component, DebugElement, Injector } from '@angular/core';
import { ComponentFixture, TestBed, TestBedStatic } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestSuite, createTestContext } from '@delon/testing';
import { _HttpClient } from '@delon/theme';
import * as fs from 'file-saver';

import { DownFileModule } from './down-file.module';

function genFile(ext: string, isRealFile = true): Blob {
  const blob = new Blob([
    isRealFile
      ? `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==`
      : '',
  ]);
  return blob;
}

describe('abc: down-file', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let injector: TestBedStatic;
  let http: HttpClient;
  let _http: _HttpClient;
  let httpBed: HttpTestingController;

  configureTestSuite(() => {
    injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, DownFileModule],
      declarations: [TestComponent],
    });
  });

  function createComp() {
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();

    http = injector.get(HttpClient);
    _http = injector.get(_HttpClient);
    httpBed = injector.get(HttpTestingController);
  }

  describe('[default]', () => {
    beforeEach(() => createComp());
    ['xlsx', 'docx', 'pptx', 'pdf'].forEach(ext => {
      it(`should be down ${ext}`, () => {
        spyOn(fs.default, 'saveAs');
        if (ext === 'docx') context.data = null;
        fixture.detectChanges();
        (dl.query(By.css('#down-' + ext))
          .nativeElement as HTMLButtonElement).click();
        const ret = httpBed.expectOne(req =>
          req.url.startsWith('/'),
        ) as TestRequest;
        ret.flush(genFile(ext));
        expect(fs.default.saveAs).toHaveBeenCalled();
      });
    });

    it('should be using header filename when repseon has [filename]', () => {
      let fn: string;
      const filename = 'newfile.docx';
      spyOn(fs.default, 'saveAs').and.callFake(
        (body: any, fileName: string) => (fn = fileName),
      );
      context.fileName = null;
      fixture.detectChanges();
      (dl.query(By.css('#down-docx'))
        .nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req =>
        req.url.startsWith('/'),
      ) as TestRequest;
      ret.flush(genFile('docx'), {
        headers: new HttpHeaders({ filename }),
      });
      expect(fn).toBe(filename);
    });

    it('should be using header filename when repseon has [x-filename]', () => {
      let fn: string;
      const filename = 'x-newfile.docx';
      spyOn(fs.default, 'saveAs').and.callFake(
        (body: any, fileName: string) => (fn = fileName),
      );
      context.fileName = null;
      fixture.detectChanges();
      (dl.query(By.css('#down-docx'))
        .nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req =>
        req.url.startsWith('/'),
      ) as TestRequest;
      ret.flush(genFile('docx'), {
        headers: new HttpHeaders({ 'x-filename': filename }),
      });
      expect(fn).toBe(filename);
    });

    it('should be throw error when a bad request', () => {
      spyOn(context, 'error');
      expect(context.error).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx'))
        .nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req =>
        req.url.startsWith('/'),
      ) as TestRequest;
      ret.error(null, { status: 404 });
      expect(context.error).toHaveBeenCalled();
    });

    it('should be throw error when a empty file', () => {
      spyOn(context, 'error');
      expect(context.error).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx'))
        .nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req =>
        req.url.startsWith('/'),
      ) as TestRequest;
      ret.flush(genFile('docx', false));
      expect(context.error).toHaveBeenCalled();
    });

    it('should be throw error when http status is not 200', () => {
      spyOn(fs.default, 'saveAs');
      spyOn(context, 'error');
      expect(context.error).not.toHaveBeenCalled();
      expect(fs.default.saveAs).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx'))
        .nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req =>
        req.url.startsWith('/'),
      ) as TestRequest;
      ret.flush(null, { status: 201, statusText: '201' });
      expect(fs.default.saveAs).not.toHaveBeenCalled();
      expect(context.error).toHaveBeenCalled();
    });
  });

  it('should be support nativity HttpClient', () => {
    TestBed.overrideProvider(_HttpClient, { useFactory: () => null, deps: [] });
    createComp();
    spyOn(fs.default, 'saveAs');
    const ext = 'docx';
    if (ext === 'docx') context.data = null;
    fixture.detectChanges();
    (dl.query(By.css('#down-' + ext))
      .nativeElement as HTMLButtonElement).click();
    const ret = httpBed.expectOne(req =>
      req.url.startsWith('/'),
    ) as TestRequest;
    ret.flush(genFile(ext));
    expect(fs.default.saveAs).toHaveBeenCalled();
  });

  it('should be using content-disposition filename', () => {
    createComp();
    let fn: string;
    const filename = 'newfile.docx';
    spyOn(fs.default, 'saveAs').and.callFake(
      (body: any, fileName: string) => (fn = fileName),
    );
    context.fileName = null;
    fixture.detectChanges();
    (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
    const ret = httpBed.expectOne(req =>
      req.url.startsWith('/'),
    ) as TestRequest;
    ret.flush(genFile('docx'), {
      headers: new HttpHeaders({
        'Content-Disposition': `attachment; filename=${filename}; filename*=UTF-8''${filename}`,
      }),
    });
    expect(fn).toBe(filename);
  });
});

@Component({
  template: `
    <button *ngFor="let i of fileTypes" id="down-{{i}}" class="mr-sm"
        down-file
        [http-data]="data"
        http-method="get"
        http-url="/demo.{{i}}"
        [file-name]="fileName"
        (success)="success()"
        (error)="error()">{{i}}</button>`,
})
class TestComponent {
  fileTypes = ['xlsx', 'docx', 'pptx', 'pdf'];

  data = {
    otherdata: 1,
    time: new Date(),
  };

  fileName = 'demo中文';

  success() {}

  error() {}
}
