import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import * as fs from 'file-saver';

import { _HttpClient } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { DownFileModule } from './down-file.module';

function genFile(isRealFile: boolean = true): Blob {
  const blob = new Blob([
    isRealFile ? `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==` : ''
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
      declarations: [TestComponent]
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
      it(`should be down ${ext}`, fakeAsync(() => {
        spyOn(fs, 'saveAs');
        if (ext === 'docx') context.data = null;
        fixture.detectChanges();
        (dl.query(By.css(`#down-${ext}`)).nativeElement as HTMLButtonElement).click();
        tick();
        const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
        ret.flush(genFile());
        expect(fs.saveAs).toHaveBeenCalled();
      }));
    });

    it('should be used custom filename', fakeAsync(() => {
      let fn: string;
      const filename = 'newfile.docx';
      spyOn(fs, 'saveAs').and.callFake(((_body: NzSafeAny, fileName: string) => (fn = fileName)) as NzSafeAny);
      context.fileName = rep => rep.headers.get('a')!;
      fixture.detectChanges();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      tick();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(), {
        headers: new HttpHeaders({ a: filename })
      });
      expect(fn!).toBe(filename);
    }));

    it('should be using header filename when repseon has [filename]', fakeAsync(() => {
      let fn: string;
      const filename = 'newfile.docx';
      spyOn(fs, 'saveAs').and.callFake(((_body: NzSafeAny, fileName: string) => (fn = fileName)) as NzSafeAny);
      context.fileName = null;
      fixture.detectChanges();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      tick();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(), {
        headers: new HttpHeaders({ filename })
      });
      expect(fn!).toBe(filename);
    }));

    it('should be using header filename when repseon has [x-filename]', fakeAsync(() => {
      let fn: string;
      const filename = 'x-newfile.docx';
      spyOn(fs, 'saveAs').and.callFake(((_body: NzSafeAny, fileName: string) => (fn = fileName)) as NzSafeAny);
      context.fileName = null;
      fixture.detectChanges();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      tick();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(), {
        headers: new HttpHeaders({ 'x-filename': filename })
      });
      expect(fn!).toBe(filename);
    }));

    it('should be throw error when a bad request', fakeAsync(() => {
      spyOn(context, 'error');
      expect(context.error).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      tick();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.error(new ErrorEvent(''), { status: 404 });
      expect(context.error).toHaveBeenCalled();
    }));

    it('should be throw error when a empty file', fakeAsync(() => {
      spyOn(context, 'error');
      expect(context.error).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      tick();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(false));
      expect(context.error).toHaveBeenCalled();
    }));

    it('should be throw error when http status is not 200', fakeAsync(() => {
      spyOn(fs, 'saveAs');
      spyOn(context, 'error');
      expect(context.error).not.toHaveBeenCalled();
      expect(fs.saveAs).not.toHaveBeenCalled();
      const el = dl.query(By.css('#down-docx')).nativeElement as HTMLElement;
      el.click();
      expect(el.classList.contains(`down-file__disabled`)).toBe(true);
      tick();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(null, { status: 201, statusText: '201' });
      expect(fs.saveAs).not.toHaveBeenCalled();
      expect(context.error).toHaveBeenCalled();
      expect(el.classList.contains(`down-file__disabled`)).toBe(false);
    }));

    it('should be request via post', fakeAsync(() => {
      spyOn(fs, 'saveAs');
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      tick();
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      expect(ret.request.body.a).toBe(1);
    }));

    describe('#pre', () => {
      it('should be download when return true', fakeAsync(() => {
        const btn = dl.query(By.css('#down-xlsx')).nativeElement as HTMLButtonElement;
        context.pre = () => Promise.resolve(true);
        fixture.detectChanges();
        btn.click();
        tick();
        fixture.detectChanges();
        expect(btn.classList).toContain(`down-file__disabled`);
      }));
      it('should be cannot download when return false', () => {
        const btn = dl.query(By.css('#down-xlsx')).nativeElement as HTMLButtonElement;
        context.pre = () => Promise.resolve(false);
        fixture.detectChanges();
        btn.click();
        expect(btn.classList).not.toContain(`down-file__disabled`);
      });
    });
  });

  it('should be using content-disposition filename', fakeAsync(() => {
    createComp();
    fixture.detectChanges();
    let fn: string;
    const filename = 'newfile.docx';
    spyOn(fs, 'saveAs').and.callFake(((_body: NzSafeAny, fileName: string) => (fn = fileName)) as NzSafeAny);
    context.fileName = null;
    fixture.detectChanges();
    (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
    tick();
    const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
    ret.flush(genFile(), {
      headers: new HttpHeaders({
        'Content-Disposition': `attachment; filename=${filename}; filename*=UTF-8''${filename}`
      })
    });
    expect(fn!).toBe(filename);
  }));

  it('should be down-file__not-support when not supoort fileSaver', () => {
    class MockBlob {
      constructor() {
        throw new Error('');
      }
    }
    spyOn(window, 'Blob').and.callFake(() => new MockBlob() as NzSafeAny);
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
      [pre]="pre"
      (success)="success()"
      (error)="error()"
    >
      {{ i }}
    </button>
  `
})
class TestComponent {
  fileTypes = ['xlsx', 'docx', 'pptx', 'pdf'];

  data: NzSafeAny = {
    otherdata: 1,
    time: new Date()
  };

  body = {
    a: 1
  };

  method = 'get';

  fileName: string | ((rep: HttpResponse<Blob>) => string) | null = 'demo中文';

  pre: (ev: MouseEvent) => Promise<boolean>;

  success(): void {}

  error(): void {}
}
