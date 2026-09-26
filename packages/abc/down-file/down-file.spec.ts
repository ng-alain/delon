/* eslint-disable */
import { HttpHeaders, HttpResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, TestRequest, provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, DebugElement, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { saveAs } from 'file-saver';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { DownFileDirective } from './down-file.directive';

// Vite 预打包后具名导入是快照，spyOn 模块对象无法影响指令内部的 saveAs
vi.mock('file-saver', () => ({ saveAs: vi.fn() }));

function genFile(isRealFile: boolean = true): Blob {
  const blob = new Blob([
    isRealFile ? `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==` : ''
  ]);
  return blob;
}

describe('abc: down-file', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let httpBed: HttpTestingController;

  function createComp(): void {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
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
      it(`should be down ${ext}`, async () => {
        if (ext === 'docx') context.data.set(null);
        fixture.detectChanges();
        (dl.query(By.css(`#down-${ext}`)).nativeElement as HTMLButtonElement).click();
        await vi.advanceTimersByTimeAsync(0);
        const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
        ret.flush(genFile());
        expect(saveAs).toHaveBeenCalled();
      });
    });

    it('should be used custom filename', async () => {
      let fn: string;
      const filename = 'newfile.docx';
      vi.mocked(saveAs).mockImplementation(((_body: NzSafeAny, fileName: string) => (fn = fileName)) as NzSafeAny);
      context.fileName.set(rep => rep.headers.get('a')!);
      fixture.detectChanges();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      await vi.advanceTimersByTimeAsync(0);
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(), {
        headers: new HttpHeaders({ a: filename })
      });
      expect(fn!).toBe(filename);
    });

    it('should be using header filename when repseon has [filename]', async () => {
      let fn: string;
      const filename = 'newfile.docx';
      vi.mocked(saveAs).mockImplementation(((_body: NzSafeAny, fileName: string) => (fn = fileName)) as NzSafeAny);
      context.fileName.set(null);
      fixture.detectChanges();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      await vi.advanceTimersByTimeAsync(0);
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(), {
        headers: new HttpHeaders({ filename })
      });
      expect(fn!).toBe(filename);
    });

    it('should be using header filename when repseon has [x-filename]', async () => {
      let fn: string;
      const filename = 'x-newfile.docx';
      vi.mocked(saveAs).mockImplementation(((_body: NzSafeAny, fileName: string) => (fn = fileName)) as NzSafeAny);
      context.fileName.set(null);
      fixture.detectChanges();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      await vi.advanceTimersByTimeAsync(0);
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(), {
        headers: new HttpHeaders({ 'x-filename': filename })
      });
      expect(fn!).toBe(filename);
    });

    it('should be throw error when a bad request', async () => {
      vi.spyOn(context, 'error').mockReturnValue(undefined);
      expect(context.error).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      await vi.advanceTimersByTimeAsync(0);
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.error(new ErrorEvent(''), { status: 404 });
      expect(context.error).toHaveBeenCalled();
    });

    it('should be throw error when a empty file', async () => {
      vi.spyOn(context, 'error').mockReturnValue(undefined);
      expect(context.error).not.toHaveBeenCalled();
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      await vi.advanceTimersByTimeAsync(0);
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(genFile(false));
      expect(context.error).toHaveBeenCalled();
    });

    it('should be throw error when http status is not 200', async () => {
      vi.spyOn(context, 'error').mockReturnValue(undefined);
      expect(context.error).not.toHaveBeenCalled();
      expect(saveAs).not.toHaveBeenCalled();
      const el = dl.query(By.css('#down-docx')).nativeElement as HTMLElement;
      el.click();
      expect(el.classList.contains(`down-file__disabled`)).toBe(true);
      await vi.advanceTimersByTimeAsync(0);
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      ret.flush(null, { status: 201, statusText: '201' });
      expect(saveAs).not.toHaveBeenCalled();
      expect(context.error).toHaveBeenCalled();
      expect(el.classList.contains(`down-file__disabled`)).toBe(false);
    });

    it('should be request via post', async () => {
      (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
      await vi.advanceTimersByTimeAsync(0);
      const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
      expect(ret.request.body.a).toBe(1);
    });

    describe('#pre', () => {
      it('should be download when return true', async () => {
        const btn = dl.query(By.css('#down-xlsx')).nativeElement as HTMLButtonElement;
        context.pre.set(() => Promise.resolve(true));
        fixture.detectChanges();
        btn.click();
        await vi.advanceTimersByTimeAsync(0);
        fixture.detectChanges();
        expect(btn.classList).toContain(`down-file__disabled`);
      });
      it('should be cannot download when return false', () => {
        const btn = dl.query(By.css('#down-xlsx')).nativeElement as HTMLButtonElement;
        context.pre.set(() => Promise.resolve(false));
        fixture.detectChanges();
        btn.click();
        expect(btn.classList).not.toContain(`down-file__disabled`);
      });
    });
  });

  it('should be using content-disposition filename', async () => {
    createComp();
    fixture.detectChanges();
    let fn: string;
    const filename = 'newfile.docx';
    vi.mocked(saveAs).mockImplementation(((_body: NzSafeAny, fileName: string) => (fn = fileName)) as NzSafeAny);
    context.fileName.set(null);
    fixture.detectChanges();
    (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
    await vi.advanceTimersByTimeAsync(0);
    const ret = httpBed.expectOne(req => req.url.startsWith('/')) as TestRequest;
    ret.flush(genFile(), {
      headers: new HttpHeaders({
        'Content-Disposition': `attachment; filename=${filename}; filename*=UTF-8''${filename}`
      })
    });
    expect(fn!).toBe(filename);
  });

  it('should be down-file__not-support when not supoort fileSaver', () => {
    class MockBlob {
      constructor() {
        throw new Error('');
      }
    }
    vi.spyOn(window, 'Blob').mockImplementation(MockBlob as NzSafeAny);
    createComp();
    fixture.detectChanges();
    const el = dl.query(By.css('#down-xlsx')).nativeElement as HTMLButtonElement;
    el.click();
    expect(el.classList).toContain(`down-file__not-support`);
  });
});

@Component({
  template: `
    @for (i of fileTypes; track $index) {
      <button
        id="down-{{ i }}"
        down-file
        [http-data]="data()"
        [http-body]="body"
        [http-method]="method"
        http-url="/demo.{{ i }}"
        [file-name]="fileName()!"
        [pre]="pre()"
        (success)="success()"
        (error)="error()"
      >
        {{ i }}
      </button>
    }
  `,
  imports: [DownFileDirective]
})
class TestComponent {
  fileTypes = ['xlsx', 'docx', 'pptx', 'pdf'];

  readonly data = signal<NzSafeAny>({
    otherdata: 1,
    time: new Date()
  });

  body = {
    a: 1
  };

  method = 'get';

  readonly fileName = signal<string | ((rep: HttpResponse<Blob>) => string) | null>('demo中文');

  readonly pre = signal<((ev: MouseEvent) => Promise<boolean>) | undefined>(undefined);

  success(): void {}

  error(): void {}
}
