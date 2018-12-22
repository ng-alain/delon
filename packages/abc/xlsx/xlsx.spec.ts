import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { deepCopy, LazyService } from '@delon/util';
import * as fs from 'file-saver';
import { of, throwError } from 'rxjs';
import { XlsxModule } from './xlsx.module';
import { XlsxService } from './xlsx.service';
import { XlsxExportOptions } from './xlsx.types';

class MockLazyService {
  load() {
    (window as any).XLSX = deepCopy(DEFAULTMOCKXLSX);
    return Promise.resolve();
  }
}

const DEFAULTMOCKXLSX = {
  utils: {
    book_new: () => {
      return {};
    },
    aoa_to_sheet: () => {},
    book_append_sheet: () => {},
    sheet_to_json: () => {
      return {
        A1: 1,
        B1: 2,
      };
    },
  },
  read: () => {
    return {
      SheetNames: ['sheet1'],
      Sheets: {
        sheet1: {},
      },
    };
  },
  write: () => {},
};

let isErrorRequest = false;
class MockHttpClient {
  request() {
    return isErrorRequest ? throwError(null) : of(null);
  }
}

describe('abc: xlsx', () => {
  let srv: XlsxService;
  function genModule() {
    const injector = TestBed.configureTestingModule({
      imports: [XlsxModule, HttpClientTestingModule],
      declarations: [TestComponent],
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: LazyService, useClass: MockLazyService },
      ],
    });
    srv = injector.get(XlsxService);
  }

  beforeEach(() => {
    isErrorRequest = false;
  });

  describe('[#import]', () => {
    it('should be load xlsx via url', (done: () => void) => {
      genModule();
      srv.import('/1.xlsx').then(
        () => {
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        },
      );
    });

    it('should be throw error when request error via url', (done: () => void) => {
      isErrorRequest = true;
      genModule();
      srv.import('/1.xlsx').then(
        () => {
          expect(false).toBe(true);
          done();
        },
        () => {
          expect(true).toBe(true);
          done();
        },
      );
    });

    it('should be load xlsx via file object', (done: () => void) => {
      genModule();
      srv.import(new File([], '1.xlsx'), 'readAsArrayBuffer').then(
        () => {
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        },
      );
    });
  });

  describe('[#export]', () => {
    beforeEach(() => {
      spyOn(fs.default, 'saveAs');
      genModule();
    });
    it('should be export xlsx via array', (done: () => void) => {
      srv
        .export({
          sheets: [{ data: null, name: 'asdf.xlsx' }, { data: null }],
        } as XlsxExportOptions)
        .then(() => {
          expect(fs.default.saveAs).toHaveBeenCalled();
          done();
        });
    });
    it('should be export xlsx via object', (done: () => void) => {
      srv
        .export({
          sheets: {
            name: 'asdf',
          },
        } as XlsxExportOptions)
        .then(() => {
          expect(fs.default.saveAs).toHaveBeenCalled();
          done();
        });
    });
    it('should be call callback', (done: () => void) => {
      let count = 0;
      srv
        .export({
          sheets: {
            name: 'asdf',
          },
          callback: () => {
            ++count;
          },
        } as XlsxExportOptions)
        .then(() => {
          expect(count).toBe(1);
          done();
        });
    });
  });

  describe('[directive]', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;
    beforeEach(() => {
      genModule();
      fixture = TestBed.createComponent(TestComponent);
      dl = fixture.debugElement;
      context = fixture.componentInstance;
      fixture.detectChanges();
    });
    it('should be export via click', () => {
      spyOn(srv, 'export');
      expect(srv.export).not.toHaveBeenCalled();
      (dl.query(By.css('button')).nativeElement as HTMLButtonElement).click();
      expect(srv.export).toHaveBeenCalled();
    });
  });
});

@Component({
  template: `<button [xlsx]="data"></button>`,
})
class TestComponent {
  data: any = {};
}
