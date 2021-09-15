import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of, throwError } from 'rxjs';

import { LazyService } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { XlsxModule } from './xlsx.module';
import { XlsxService } from './xlsx.service';
import { XlsxExportOptions } from './xlsx.types';

class MockLazyService {
  load(): Promise<void> {
    return Promise.resolve();
  }
}

let isErrorRequest = false;
class MockHttpClient {
  request(): Observable<null> {
    return isErrorRequest ? throwError(null) : of(null);
  }
}

describe('abc: xlsx', () => {
  let srv: XlsxService;
  function genModule(): void {
    TestBed.configureTestingModule({
      imports: [XlsxModule, HttpClientTestingModule],
      declarations: [TestComponent],
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: LazyService, useClass: MockLazyService }
      ]
    });
    srv = TestBed.inject<XlsxService>(XlsxService);
  }

  beforeEach(() => {
    (window as NzSafeAny).XLSX = {
      utils: {
        book_new: () => {
          return {};
        },
        aoa_to_sheet: () => {},
        book_append_sheet: () => {},
        sheet_to_json: () => {
          return {
            A1: 1,
            B1: 2
          };
        }
      },
      read: () => {
        return {
          SheetNames: ['sheet1'],
          Sheets: {
            sheet1: {}
          }
        };
      },
      writeFile: jasmine.createSpy('writeFile')
    };
    (window as NzSafeAny).cptable = {
      utils: {
        decode: (data: NzSafeAny) => {
          return data;
        }
      }
    };
    isErrorRequest = false;
  });

  afterEach(() => {
    delete (window as NzSafeAny).XLSX;
    delete (window as NzSafeAny).cptable;
  });

  describe('[#import]', () => {
    it('should be load xlsx lib when not found XLSX in window', () => {
      delete (window as NzSafeAny).XLSX;
      genModule();
      const lazySrv: LazyService = TestBed.inject<LazyService>(LazyService);
      spyOn(lazySrv, 'load').and.callFake(() => Promise.reject());
      expect(lazySrv.load).not.toHaveBeenCalled();
      srv.import('/1.xlsx').catch(() => {});
      expect(lazySrv.load).toHaveBeenCalled();
    });

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
        }
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
        }
      );
    });

    it('should be load xlsx via file object', (done: () => void) => {
      genModule();
      srv.import(new File([], '1.xlsx')).then(
        () => {
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        }
      );
    });
  });

  describe('[#export]', () => {
    beforeEach(() => genModule());
    it('should be export xlsx via array', (done: () => void) => {
      srv
        .export({
          sheets: [{ data: null, name: 'asdf.xlsx' }, { data: null }]
        } as XlsxExportOptions)
        .then(() => {
          expect((window as NzSafeAny).XLSX.writeFile).toHaveBeenCalled();
          done();
        });
    });
    it('should be export xlsx via object', (done: () => void) => {
      srv
        .export({
          sheets: {
            name: 'asdf'
          }
        } as XlsxExportOptions)
        .then(() => {
          expect((window as NzSafeAny).XLSX.writeFile).toHaveBeenCalled();
          done();
        });
    });
    it('should be call callback', (done: () => void) => {
      let count = 0;
      srv
        .export({
          sheets: {
            name: 'asdf'
          },
          callback: () => {
            ++count;
          }
        } as XlsxExportOptions)
        .then(() => {
          expect(count).toBe(1);
          done();
        });
    });
    it('should catch error when XLSX process error', done => {
      (window as NzSafeAny).XLSX.utils.book_new = null;
      srv
        .export({
          sheets: {
            name: 'asdf'
          }
        } as XlsxExportOptions)
        .then(() => {
          expect(true).toBe(false);
          done();
        })
        .catch(() => {
          expect(true).toBe(true);
          done();
        });
    });
    it('should be export csv', (done: () => void) => {
      srv
        .export({
          sheets: [{ data: null, name: 'asdf.csv' }, { data: null }],
          format: 'csv'
        } as XlsxExportOptions)
        .then(() => {
          expect((window as NzSafeAny).XLSX.writeFile).toHaveBeenCalled();
          done();
        });
    });
  });

  describe('[directive]', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    beforeEach(() => {
      genModule();
      fixture = TestBed.createComponent(TestComponent);
      dl = fixture.debugElement;
      fixture.detectChanges();
    });
    it('should be export via click', () => {
      spyOn(srv, 'export');
      expect(srv.export).not.toHaveBeenCalled();
      (dl.query(By.css('button')).nativeElement as HTMLButtonElement).click();
      expect(srv.export).toHaveBeenCalled();
    });
  });

  describe('[#numberToSchema]', () => {
    beforeEach(() => genModule());

    it('should be working', () => {
      expect(srv.numberToSchema(1)).toBe('A');
      expect(srv.numberToSchema(27)).toBe('AA');
      expect(srv.numberToSchema(28)).toBe('AB');
      expect(srv.numberToSchema(53)).toBe('BA');
    });
  });
});

@Component({
  template: ` <button [xlsx]="data"></button> `
})
class TestComponent {
  data: NzSafeAny = {};
}
