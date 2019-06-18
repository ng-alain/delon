import { HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Component, DebugElement, ViewChild, Type } from '@angular/core';
import { ComponentFixture, TestBed, TestBedStatic } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestSuite } from '@delon/testing';
import { _HttpClient } from '@delon/theme';
import * as fs from 'file-saver';

import { DownFileDirective } from './down-file.directive';
import { DownFileModule } from './down-file.module';

function genFile(isRealFile = true): Blob {
  const blob = new Blob([
    isRealFile ? `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==` : '',
  ]);
  return blob;
}

describe('abc: down-file', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let injector: TestBedStatic;
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

    httpBed = injector.get(HttpTestingController as Type<HttpTestingController>);
  }

  describe('[default]', () => {
    beforeEach(() => createComp());
    ['xlsx', 'docx', 'pptx', 'pdf'].forEach(ext => {
      it(`should be down ${ext}`, () => {
        spyOn(fs.default, 'saveAs');
        if (ext === 'docx') context.data = null;
        fixture.detectChanges();
        (dl.query(By.css('#down-' + ext)).nativeElement as HTMLButtonElement).click();
        const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
        ret.flush(genFile());
        expect(fs.default.saveAs).toHaveBeenCalled();
      });
    });

    it('should be using header filename when repseon has [filename]', () => {
      let fn: string;
      const filename = 'newfile.docx';
      spyOn(fs.default, 'saveAs').and.callFake((_body: {}, fileName: string) => (fn = fileName));
      context.fileName = null;
      fixture.detectChanges();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(), {
        headers: new HttpHeaders({ filename }),
      });
      expect(fn!).toBe(filename);
    });

    it('should be using header filename when repseon has [x-filename]', () => {
      let fn: string;
      const filename = 'x-newfile.docx';
      spyOn(fs.default, 'saveAs').and.callFake((_body: {}, fileName: string) => (fn = fileName));
      context.fileName = null;
      fixture.detectChanges();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(), {
        headers: new HttpHeaders({ 'x-filename': filename }),
      });
      expect(fn!).toBe(filename);
    });

    it('should be throw error when a bad request', () => {
      spyOn(context, 'error');
      expect(context.error).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.error(new ErrorEvent(''), { status: 404 });
      expect(context.error).toHaveBeenCalled();
    });

    it('should be throw error when a empty file', () => {
      spyOn(context, 'error');
      expect(context.error).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(false));
      expect(context.error).toHaveBeenCalled();
    });

    it('should be throw error when http status is not 200', () => {
      spyOn(fs.default, 'saveAs');
      spyOn(context, 'error');
      expect(context.error).not.toHaveBeenCalled();
      expect(fs.default.saveAs).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(null, { status: 201, statusText: '201' });
      expect(fs.default.saveAs).not.toHaveBeenCalled();
      expect(context.error).toHaveBeenCalled();
    });
  });

  it('should be using content-disposition filename', () => {
    createComp();
    let fn: string;
    const filename = 'newfile.docx';
    spyOn(fs.default, 'saveAs').and.callFake((_body: {}, fileName: string) => (fn = fileName));
    context.fileName = null;
    fixture.detectChanges();
    (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
    const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
    ret.flush(genFile(), {
      headers: new HttpHeaders({
        'Content-Disposition': `attachment; filename=${filename}; filename*=UTF-8''${filename}`,
      }),
    });
    expect(fn!).toBe(filename);
  });
});

@Component({
  template: `
    <button
      *ngFor="let i of fileTypes"
      id="down-{{ i }}"
      down-file
      [http-data]="data"
      http-method="get"
      http-url="/demo.{{ i }}"
      [file-name]="fileName"
      (success)="success()"
      (error)="error()"
    >
      {{ i }}
    </button>
  `,
})
class TestComponent {
  @ViewChild(DownFileDirective, { static: true }) comp: DownFileDirective;
  fileTypes = ['xlsx', 'docx', 'pptx', 'pdf'];

  data: any = {
    otherdata: 1,
    time: new Date(),
  };

  fileName: string | null = 'demo中文';

  success() {}

  error() {}
}
