// tslint:disable: deprecation
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { _HttpClient } from '@delon/theme';
import * as fs from 'file-saver';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { DownFileDirective } from './down-file.directive';
import { DownFileModule } from './down-file.module';

function genFile(isRealFile: boolean = true): Blob {
  const blob = new Blob([
    isRealFile ? `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==` : '',
  ]);
  return blob;
}

describe('abc: down-file', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let httpBed: HttpTestingController;

  function createComp(): void {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, DownFileModule],
      declarations: [TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;

    httpBed = TestBed.inject(HttpTestingController);
  }

  describe('[default]', () => {
    beforeEach(() => {
      createComp();
      fixture.detectChanges();
    });
    ['xlsx', 'docx', 'pptx', 'pdf'].forEach(ext => {
      it(`should be down ${ext}`, () => {
        spyOn(fs, 'saveAs');
        if (ext === 'docx') context.data = null;
        fixture.detectChanges();
        (dl.query(By.css('#down-' + ext)).nativeElement as HTMLButtonElement).click();
        const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
        ret.flush(genFile());
        expect(fs.saveAs).toHaveBeenCalled();
      });
    });

    it('should be used custom filename', () => {
      let fn: string;
      const filename = 'newfile.docx';
      spyOn(fs, 'saveAs').and.callFake(((_body: {}, fileName: string) => (fn = fileName)) as NzSafeAny);
      context.fileName = rep => rep.headers.get('a')!;
      fixture.detectChanges();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(), {
        headers: new HttpHeaders({ a: filename }),
      });
      expect(fn!).toBe(filename);
    });

    it('should be using header filename when repseon has [filename]', () => {
      let fn: string;
      const filename = 'newfile.docx';
      spyOn(fs, 'saveAs').and.callFake(((_body: {}, fileName: string) => (fn = fileName)) as NzSafeAny);
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
      spyOn(fs, 'saveAs').and.callFake(((_body: {}, fileName: string) => (fn = fileName)) as NzSafeAny);
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
      spyOn(fs, 'saveAs');
      spyOn(context, 'error');
      expect(context.error).not.toHaveBeenCalled();
      expect(fs.saveAs).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(null, { status: 201, statusText: '201' });
      expect(fs.saveAs).not.toHaveBeenCalled();
      expect(context.error).toHaveBeenCalled();
    });

    it('should be request via post', () => {
      spyOn(fs, 'saveAs');
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      expect(ret.request.body.a).toBe(1);
    });
  });

  it('should be using content-disposition filename', () => {
    createComp();
    fixture.detectChanges();
    let fn: string;
    const filename = 'newfile.docx';
    spyOn(fs, 'saveAs').and.callFake(((_body: {}, fileName: string) => (fn = fileName)) as NzSafeAny);
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

  it('should be down-file__not-support when not supoort fileSaver', () => {
    spyOn(window, 'Blob').and.callThrough();
    createComp();
    fixture.detectChanges();
    const el = dl.query(By.css('#down-xlsx')).nativeElement as HTMLButtonElement;
    el.click();
    expect(el.classList).toContain(`down-file__not-support`);
  });
});

@Component({
  template: `
    <button
      *ngFor="let i of fileTypes"
      id="down-{{ i }}"
      down-file
      [http-data]="data"
      [http-body]="body"
      [http-method]="method"
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

  body = {
    a: 1,
  };

  method = 'get';

  fileName: string | ((rep: HttpResponse<Blob>) => string) | null = 'demo中文';

  success(): void {}

  error(): void {}
}
