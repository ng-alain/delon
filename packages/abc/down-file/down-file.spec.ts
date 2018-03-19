import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement, Injector } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as fs from 'file-saver';

import { AdDownFileModule } from './down-file.module';

function genFile(ext: string, isRealFile = true): Blob {
    const blob = new Blob([ isRealFile ? `iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==` : '' ]);
    return blob;
}

describe('abc: down-file', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;
    let injector: Injector;
    let http: HttpClient;
    let httpBed: HttpTestingController;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, AdDownFileModule.forRoot() ],
            declarations: [ TestComponent ]
        });

        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();

        http = injector.get(HttpClient);
        httpBed = injector.get(HttpTestingController);
    });

    ['xlsx', 'docx', 'pptx', 'pdf'].forEach(ext => {
        it(`should be down ${ext}`, () => {
            spyOn(fs, 'saveAs');
            if (ext === 'docx') context.data = null;
            fixture.detectChanges();
            (dl.query(By.css('#down-' + ext)).nativeElement as HTMLButtonElement).click();
            const ret = httpBed
                .expectOne(req => req.url.startsWith('/')) as TestRequest;
            ret.flush(genFile(ext));
            expect(fs.saveAs).toHaveBeenCalled();
        });
    });

    it('should be using header filename when repseon has [filename]', () => {
        let fn: string;
        const filename = 'newfile.docx';
        spyOn(fs, 'saveAs').and.callFake((body: any, fileName: string) => fn = fileName);
        context.fileName = null;
        fixture.detectChanges();
        (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
        const ret = httpBed
            .expectOne(req => req.url.startsWith('/')) as TestRequest;
        ret.flush(
            genFile('docx'), {
                headers: new HttpHeaders({ filename })
            }
        );
        expect(fn).toBe(filename);
    });

    it('should be using header filename when repseon has [x-filename]', () => {
        let fn: string;
        const filename = 'x-newfile.docx';
        spyOn(fs, 'saveAs').and.callFake((body: any, fileName: string) => fn = fileName);
        context.fileName = null;
        fixture.detectChanges();
        (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
        const ret = httpBed
            .expectOne(req => req.url.startsWith('/')) as TestRequest;
        ret.flush(
            genFile('docx'), {
                headers: new HttpHeaders({ 'x-filename': filename })
            }
        );
        expect(fn).toBe(filename);
    });

    it('should be throw error when a bad request', () => {
        spyOn(context, 'error');
        expect(context.error).not.toHaveBeenCalled();
        (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
        const ret = httpBed
            .expectOne(req => req.url.startsWith('/')) as TestRequest;
        ret.error(null, { status: 404 });
        expect(context.error).toHaveBeenCalled();
    });

    it('should be throw error when a empty file', () => {
        spyOn(context, 'error');
        expect(context.error).not.toHaveBeenCalled();
        (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
        const ret = httpBed
            .expectOne(req => req.url.startsWith('/')) as TestRequest;
        ret.flush(genFile('docx', false));
        expect(context.error).toHaveBeenCalled();
    });

    it('should be throw error when http status is not 200', () => {
        spyOn(fs, 'saveAs');
        spyOn(context, 'error');
        expect(context.error).not.toHaveBeenCalled();
        expect(fs.saveAs).not.toHaveBeenCalled();
        (dl.query(By.css('#down-docx')).nativeElement as HTMLButtonElement).click();
        const ret = httpBed
            .expectOne(req => req.url.startsWith('/')) as TestRequest;
        ret.flush(null, { status: 201, statusText: '201' });
        expect(fs.saveAs).not.toHaveBeenCalled();
        expect(context.error).toHaveBeenCalled();
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
        (error)="error()">{{i}}</button>`
})
class TestComponent {

    fileTypes = ['xlsx', 'docx', 'pptx', 'pdf'];

    data = {
        otherdata: 1,
        time: new Date()
    };

    fileName = 'demo中文';

    success() {}

    error() {}
}
