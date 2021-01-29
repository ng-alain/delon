import { TestBed } from '@angular/core/testing';
import { AlainConfig, ALAIN_CONFIG } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { concat } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { LodopModule } from './lodop.module';
import { LodopService } from './lodop.service';
import { Lodop } from './lodop.types';

const cog: AlainConfig = {
  lodop: { name: 'LODOP' },
};
let mockLodop: any;
let isErrRequest = false;
let loadCount = 0;
let isNullLodop = false;
class MockLazyService {
  loadScript(): Promise<{ status: string }> {
    ++loadCount;
    if (isErrRequest) return Promise.resolve({ status: 'error' });

    (window as NzSafeAny)[cog.lodop!.name!] = isNullLodop ? null : mockLodop;
    return Promise.resolve({ status: 'ok' });
  }
}

describe('abc: lodop', () => {
  let srv: LodopService;

  function fnLodopConfig(): AlainConfig {
    return cog;
  }

  function genModule(): void {
    TestBed.configureTestingModule({
      imports: [LodopModule],
      providers: [
        {
          provide: ALAIN_CONFIG,
          useFactory: fnLodopConfig,
        },
        { provide: LazyService, useClass: MockLazyService },
      ],
    });
    srv = TestBed.inject<LodopService>(LodopService);
    isErrRequest = false;
    loadCount = 0;
    isNullLodop = false;
    mockLodop = {
      SET_LICENSES: jasmine.createSpy('SET_LICENSES'),
      GET_PRINTER_COUNT: jasmine.createSpy('GET_PRINTER_COUNT').and.returnValue(1),
      GET_PRINTER_NAME: jasmine.createSpy('GET_PRINTER_NAME').and.returnValue('1'),
      webskt: {
        readyState: 1,
      },
    };
  }

  describe('[default]', () => {
    it('should get lodop instance', (done: () => void) => {
      genModule();
      srv.lodop.subscribe(res => {
        expect(res).not.toBeNull();
        expect(true).toBe(true);
        done();
      });
    });
    it('should throw err when can not get variable name', (done: () => void) => {
      genModule();
      isNullLodop = true;
      srv.lodop.subscribe(res => {
        expect(res.status).toBe('load-variable-name-error');
        done();
      });
    });
    it('should wait for websocket completed', (done: () => void) => {
      genModule();
      mockLodop = {
        SET_LICENSES: jasmine.createSpy('SET_LICENSES'),
        webskt: {
          readyState: 0,
        },
      };
      setTimeout(() => {
        const obj = (window as NzSafeAny)[cog.lodop!.name!] as Lodop;
        (obj.webskt as any).readyState = 1;
      }, 30);
      srv.lodop.subscribe(res => {
        expect(res).not.toBeNull();
        expect(true).toBe(true);
        done();
      });
    });
    it('should be multi get', (done: () => void) => {
      genModule();
      concat(srv.lodop, srv.lodop).subscribe(
        () => {
          expect(loadCount).toBe(1);
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        },
      );
    });
    it('#checkMaxCount', (done: () => void) => {
      cog.lodop!.checkMaxCount = 2;
      genModule();
      mockLodop = {
        SET_LICENSES: jasmine.createSpy('SET_LICENSES'),
        webskt: {
          readyState: 0,
        },
      };
      srv.lodop.subscribe(res => {
        expect(res.status).toBe('check-limit');
        done();
      });
    });
    it('should get exists lodop', (done: () => void) => {
      genModule();
      srv.lodop.subscribe(() => {
        srv.lodop.subscribe(res => {
          expect(res).not.toBeNull();
          expect(true).toBe(true);
          done();
        });
      });
    });
    it('should get printer list', (done: () => void) => {
      genModule();
      srv.lodop.subscribe(() => {
        expect(srv.printer.length).toBe(1);
        srv.ngOnDestroy();
        done();
      });
    });
    it('should throw error when lodop is null', () => {
      expect(() => {
        genModule();
        const ls = srv.printer;
        console.log(ls);
      }).toThrowError('请务必先调用 lodop 获取对象');
    });
    it('should throw error when http request error', (done: () => void) => {
      genModule();
      isErrRequest = true;
      srv.lodop.subscribe(res => {
        expect(res.status).toBe('script-load-error');
        done();
      });
    });
    it('#reset', (done: () => void) => {
      genModule();
      srv.lodop.subscribe(res => {
        expect(res).not.toBeNull();
        expect(true).toBe(true);
        done();
      });
      srv.reset();
    });
  });

  describe('#attachCode', () => {
    it('should be attach to lodop', (done: () => void) => {
      genModule();
      const code = `
            LODOP.PRINT_INITA(10, 10, 762, 533, 'title');

            LODOP.xxx(10, 10, 762, 533, 'title');
            `;
      mockLodop = {
        SET_LICENSES: jasmine.createSpy('SET_LICENSES'),
        PRINT_INITA: jasmine.createSpy('PRINT_INITA'),
        webskt: {
          readyState: 1,
        },
      };

      srv.lodop.subscribe(() => {
        expect(mockLodop.PRINT_INITA).not.toHaveBeenCalled();
        srv.attachCode(code);
        expect(mockLodop.PRINT_INITA).toHaveBeenCalled();
        done();
      });
    });
    it('should be custom parser', (done: () => void) => {
      genModule();
      const code = `
            LODOP.PRINT_INITA(10, 10, 762, 533, '{{title}}');
            LODOP.SET_PRINT_STYLEA(0, 'FontName', '{{fs}}');
            LODOP.NEWPAGE();
            LODOP.xxx(10, 10, 762, 533, '{{title2}}');
            `;
      let mockRes = '';
      const contextData = { title: 'aaa' };
      mockLodop = {
        SET_LICENSES: jasmine.createSpy('SET_LICENSES'),
        SET_PRINT_STYLEA: jasmine.createSpy('SET_PRINT_STYLEA'),
        // tslint:disable-next-line: only-arrow-functions
        PRINT_INITA: jasmine.createSpy('PRINT_INITA').and.callFake(function (): void {
          mockRes = arguments[4];
        }),
        webskt: {
          readyState: 1,
        },
      };

      srv.lodop.subscribe(() => {
        expect(mockLodop.PRINT_INITA).not.toHaveBeenCalled();
        srv.attachCode(code, contextData, /LODOP\.([^(]+)\(([^\n]+)?\);/i);
        expect(mockLodop.PRINT_INITA).toHaveBeenCalled();
        expect(mockRes).toBe(contextData.title);
        done();
      });
    });
  });

  it('#design', (done: () => void) => {
    genModule();
    const code = `
        LODOP.PRINT_INITA(10, 10, 762, 533, '{{title}}');
        LODOP.xxx(10, 10, 762, 533, '{{title2}}');
        `;
    mockLodop = {
      SET_LICENSES: jasmine.createSpy('SET_LICENSES'),
      PRINT_DESIGN: jasmine.createSpy('PRINT_DESIGN').and.callFake(function (): number {
        const that = this;
        setTimeout(() => that.On_Return(0, code), 30);
        setTimeout(() => that.On_Return(1, code), 31);
        return 1;
      }),
      webskt: {
        readyState: 1,
      },
    };

    srv.lodop.subscribe(() => {
      expect(mockLodop.PRINT_DESIGN).not.toHaveBeenCalled();
      srv.design().then(returnCode => {
        expect(returnCode).toBe(code);
        done();
      });
      expect(mockLodop.PRINT_DESIGN).toHaveBeenCalled();
    });
  });

  describe('#print', () => {
    const code = `LODOP.PRINT_INITA(0, 0, 100, 100, 'test');`;
    let isPrintError = false;
    beforeEach(() => {
      isPrintError = false;
      genModule();
      mockLodop = {
        SET_LICENSES: jasmine.createSpy('SET_LICENSES'),
        PRINT_INITA: jasmine.createSpy('PRINT_INITA'),
        PRINT: jasmine.createSpy('PRINT').and.callFake(function (): number {
          const that = this;
          if (isPrintError) {
            setTimeout(() => that.On_Return(0, '缺纸'), 10);
          } else {
            setTimeout(() => that.On_Return(1, true), 10);
            setTimeout(() => that.On_Return(0, true), 30);
          }
          return 0;
        }),
        webskt: {
          readyState: 1,
        },
      };
    });
    it('should be print', (done: () => void) => {
      srv.lodop
        .pipe(
          filter(w => w.ok),
          tap(() => srv.print(code, {})),
          mergeMap(() => srv.events),
          filter(w => w.ok),
        )
        .subscribe(() => {
          expect(mockLodop.PRINT).toHaveBeenCalled();
          done();
        });
    });
    it('should be betch printes', (done: () => void) => {
      srv.lodop
        .pipe(
          filter(w => w.ok),
          tap(() => srv.print(code, [{ index: 0 }, { index: 1 }])),
          mergeMap(() => srv.events),
          filter(w => w.ok && w.item.index === 1),
        )
        .subscribe(() => {
          expect(mockLodop.PRINT).toHaveBeenCalled();
          done();
        });
    });
    it('should be call bat not data', (done: () => void) => {
      srv.lodop
        .pipe(
          filter(w => w.ok),
          tap(() => srv.print(code, null!)),
        )
        .subscribe(() => {
          expect(mockLodop.PRINT).not.toHaveBeenCalled();
          done();
        });
    });
    it('should report error when lodp throw 缺纸', (done: () => void) => {
      srv.lodop
        .pipe(
          filter(w => w.ok),
          tap(() => {
            isPrintError = true;
            srv.print(code, {});
          }),
          mergeMap(() => srv.events),
        )
        .subscribe(res => {
          expect(mockLodop.PRINT).toHaveBeenCalled();
          expect(res.error).toBe('缺纸');
          done();
        });
    });
  });
});
