import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';

import { DatePipe, YNPipe } from '@delon/theme';
import { CurrencyService } from '@delon/util/format';
import { deepCopy } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { STDataSource, STDataSourceOptions } from '../st-data-source';
import { ST_DEFAULT_CONFIG } from '../st.config';
import { STColumnButton, STColumnFilterMenu, STData, STReq } from '../st.interfaces';
import { _STColumn, _STDataValue } from '../st.types';

const DEFAULT = {
  pi: 1,
  ps: 3,
  total: 10,
  maxPi: 0
};
DEFAULT.maxPi = Math.ceil(DEFAULT.total / DEFAULT.ps);

function genData(count: number = DEFAULT.total, whetherRandom: boolean = false): any[] {
  return Array(count)
    .fill({})
    .map((_item: any, idx: number) => {
      return {
        id: whetherRandom ? Math.ceil(Math.random() * 1) + count : idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20
      };
    });
}

describe('abc: table: data-souce', () => {
  let srv: STDataSource;
  let options: STDataSourceOptions;
  let http: MockHttpClient;
  let datePipe: DatePipe;
  let ynPipe: YNPipe;
  let decimalPipe: DecimalPipe;
  let currencySrv: CurrencyService;
  let mockDomSanitizer: MockDomSanitizer;

  class MockHttpClient {
    request(_method: string, _url: string, _opt: any): any {
      return of([]);
    }
  }

  class MockDomSanitizer {
    bypassSecurityTrustHtml(val: any): any {
      return val;
    }
  }

  function genModule(): void {
    options = {
      pi: DEFAULT.pi,
      ps: DEFAULT.ps,
      data: [],
      total: DEFAULT.total,
      req: deepCopy(ST_DEFAULT_CONFIG.req as unknown as STReq),
      res: deepCopy(ST_DEFAULT_CONFIG.res),
      page: deepCopy(ST_DEFAULT_CONFIG.page),
      columns: [{ title: '', index: 'id' }] as _STColumn[],
      headers: [[{ colSpan: 1, rowSpan: 1, hasSubColumns: false, column: { title: '', index: 'id' } as _STColumn }]],
      paginator: true,
      locale: { more: 'More' } as NzSafeAny
    };
    TestBed.configureTestingModule({
      providers: [DatePipe, YNPipe, DecimalPipe, CurrencyService]
    });
    mockDomSanitizer = new MockDomSanitizer() as any;
    datePipe = TestBed.inject(DatePipe);
    ynPipe = TestBed.inject(YNPipe);
    decimalPipe = TestBed.inject(DecimalPipe);
    http = new MockHttpClient();
    currencySrv = TestBed.inject(CurrencyService);
    srv = new STDataSource(http as any, datePipe, ynPipe, decimalPipe, currencySrv, mockDomSanitizer as any);
    srv.setCog(ST_DEFAULT_CONFIG);
  }

  describe('[local data]', () => {
    beforeEach(() => genModule());
    describe('[paging]', () => {
      describe('with front', () => {
        beforeEach(() => {
          options.page.front = true;
          options.data = genData();
        });
        it(`should return ${DEFAULT.ps} rows of data`, async () => {
          srv.process(options).subscribe(res => {
            expect(res.list!.length).toBe(DEFAULT.ps);
          });
        });
        it('should return second page of data', async () => {
          options.pi = 2;
          srv.process(options).subscribe(res => {
            expect(res.list![0].id).toBe(DEFAULT.ps + 1);
            expect(res.pi).toBe(2);
          });
        });
        it('should limit the maximum page', async () => {
          options.pi = DEFAULT.maxPi + 1;
          srv.process(options).subscribe(res => {
            expect(res.pi).toBe(DEFAULT.maxPi);
          });
        });
        it('should return all data when page.show is false', async () => {
          options.page.show = false;
          srv.process(options).subscribe(res => {
            expect(res.pageShow).toBe(false);
            expect(res.list!.length).toBe(DEFAULT.total);
          });
        });
      });
      describe('without front', () => {
        beforeEach(() => {
          options.page.front = false;
          options.data = genData();
        });
        it('should not handle pi & total', async () => {
          srv.process(options).subscribe(res => {
            expect(res.pi as any).toBe(undefined);
            expect(res.total as any).toBe(undefined);
          });
        });
        it('should auto show when ps less than total and page.show is undefined', async () => {
          options.page.show = undefined;
          options.total = DEFAULT.ps + 1;
          options.data = genData(options.total);
          srv.process(options).subscribe(res => {
            expect(res.pageShow).toBe(true);
          });
        });
      });
      describe('#page.show', () => {
        describe('is undefined', () => {
          beforeEach(() => {
            options.page.show = undefined;
          });
          it('should auto hide when total less than ps', async () => {
            options.data = genData(DEFAULT.ps);
            srv.process(options).subscribe(res => {
              expect(res.pageShow).toBe(false);
            });
          });
          it('should auto show when ps less than total', async () => {
            options.data = genData(DEFAULT.ps + 1);
            srv.process(options).subscribe(res => {
              expect(res.pageShow).toBe(true);
            });
          });
        });
      });
    });
    describe('[sort]', () => {
      beforeEach(() => {
        options.data = genData(DEFAULT.total, true);
        options.headers[0][0].column._sort = {
          enabled: true,
          compare: (a: any, b: any) => a.id - b.id
        };
      });
      it(`should be decremented`, async () => {
        (options.data as STData[])[1].id = 100000;
        options.headers[0][0].column._sort.default = 'descend';
        srv.process(options).subscribe(res => {
          expect(res.list[0].id).toBe(100000);
        });
      });
      it(`should be incremented`, async () => {
        (options.data as STData[])[1].id = -100000;
        options.headers[0][0].column._sort.default = 'ascend';
        srv.process(options).subscribe(res => {
          expect(res.list[0].id).toBe(-100000);
        });
      });
      it('should be null, muse be ingore sort processing', async () => {
        options.headers[0][0].column._sort = {
          enabled: true,
          compare: null,
          default: 'descend'
        };
        (options.data as STData[])[1].id = 100000;
        srv.process(options).subscribe(res => {
          expect(res.list[0].id).toBe(11);
        });
      });
    });
    describe('[filter]', () => {
      beforeEach(() => {
        options.data = genData();
        options.columns[0].filter = {
          type: 'default',
          menus: [{ text: '', value: '1', checked: true }],
          fn: (filter, record) => record.name.includes(filter.value)
        };
      });
      it(`should be filter [1] in name`, async () => {
        const expectCount = (options.data as STData[]).filter(w => w.name.includes(`1`)).length;
        srv.process(options).subscribe(res => {
          expect(res.list.length).toBe(expectCount);
        });
      });
      it(`should be clean filtered`, async () => {
        const expectCount = (options.data as STData[]).filter(w => w.name.includes(`1`)).length;
        await firstValueFrom(srv.process(options))
          .then(res => {
            expect(res.list.length).toBe(expectCount);
          })
          .then(() => {
            options.columns[0].filter!.menus![0].checked = false;
            return firstValueFrom(srv.process(options));
          })
          .then(res => {
            expect(res.list.length).toBe(DEFAULT.ps);
          });
      });
    });
    describe('with observable data', () => {
      it(`should be running`, async () => {
        options.data = of(genData(2));
        srv.process(options).subscribe(res => {
          expect(res.list.length).toBe(2);
        });
      });
    });
    describe('[filteredData]', () => {
      beforeEach(() => {
        options.paginator = false;
        options.data = genData(20);
      });
      it('should be always return full data when include filter', async () => {
        options.columns[0].filter = {
          menus: [{ text: '', value: '1', checked: true }],
          fn: (filter, record) => record.name.includes(filter.value)
        };
        const expectCount = (options.data as STData[]).filter(w => w.name.includes(`1`)).length;
        srv.process(options).subscribe(res => {
          expect(res.list.length).toBe(expectCount);
        });
      });
    });
  });

  describe('[remote data]', () => {
    describe('[request params]', () => {
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
      });
      it('should be default method to GET', async () => {
        options.req.method = undefined;
        let resMethod = '';
        vi.spyOn(http, 'request').mockImplementation((method: string) => {
          resMethod = method;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(resMethod).toBe('GET');
        });
      });
      it('should be re-name pi & ps', async () => {
        options.req.reName = { pi: 'PI', ps: 'PS' };
        let resParams: HttpParams;
        vi.spyOn(http, 'request').mockImplementation((_method: string, _url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(+resParams.get('PI')!).toBe(options.pi);
          expect(+resParams.get('PS')!).toBe(options.ps);
        });
      });
      it('should be zero indexed of start index', async () => {
        options.page.zeroIndexed = true;
        let resParams: HttpParams;
        vi.spyOn(http, 'request').mockImplementation((_method: string, _url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(+resParams.get('pi')!).toBe(options.pi - 1);
        });
      });
      it('should be all in body when method is post', async () => {
        options.req.allInBody = true;
        options.req.method = 'post';
        let resBody: any = {};
        vi.spyOn(http, 'request').mockImplementation((_method: string, _url: string, opt: any) => {
          resBody = opt.body;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(resBody.pi).toBe(options.pi);
        });
      });
      it('should be process', async () => {
        options.req.process = a => {
          (a.params as NzSafeAny)!.pi = 2;
          return a;
        };
        let resParams!: HttpParams;
        vi.spyOn(http, 'request').mockImplementation((_method: string, _url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(resParams.get('pi')?.toString()).toBe('2');
        });
      });
      describe('type is skip', () => {
        beforeEach(() => (options.req.type = 'skip'));
        it('should be re-name skip & limit', async () => {
          options.req.reName = { skip: 'SKIP', limit: 'LIMIT' };
          let resParams: HttpParams;
          vi.spyOn(http, 'request').mockImplementation((_method: string, _url: string, opt: any) => {
            resParams = opt.params;
            return of([]);
          });
          srv.process(options).subscribe(() => {
            expect(+resParams.get('SKIP')!).toBe(0);
            expect(+resParams.get('LIMIT')!).toBe(options.ps);
          });
        });
        it('should be changed next page', async () => {
          options.pi = 2;
          let resParams: HttpParams;
          vi.spyOn(http, 'request').mockImplementation((_method: string, _url: string, opt: any) => {
            resParams = opt.params;
            return of([]);
          });
          srv.process(options).subscribe(() => {
            expect(+resParams.get('skip')!).toBe(options.ps);
            expect(+resParams.get('limit')!).toBe(options.ps);
          });
        });
      });
      it('should be ignoreParamNull', async () => {
        options.req.ignoreParamNull = true;
        options.req.params = { a: null, b: 1 };
        options.req.process = res => {
          expect(Object.keys(res.params!)).not.toContain(`a`);
          expect(Object.keys(res.params!)).toContain(`b`);
          return res;
        };
        await firstValueFrom(srv.process(options));
      });
    });
    describe('[response]', () => {
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
      });
      it('should be re-name total & list', async () => {
        options.res.reName = { total: 'T', list: 'L' };
        vi.spyOn(http, 'request').mockImplementation(() => {
          return of({ L: genData(DEFAULT.ps), T: DEFAULT.ps });
        });
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(DEFAULT.ps);
        });
      });
      it('should be invalid re-name config', async () => {
        options.res.reName = { total: 'T', list: 'L1' };
        vi.spyOn(http, 'request').mockImplementation(() => of({ L: genData(DEFAULT.ps), T: DEFAULT.ps }));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(0);
        });
      });
      it('should be function re-name config', async () => {
        options.res.reName = () => ({ total: 1, list: [{ a: 'L1' }] });
        vi.spyOn(http, 'request').mockImplementation(() => of({ L: genData(DEFAULT.ps), T: DEFAULT.ps }));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(1);
          expect(res.list.length).toBe(1);
          expect(res.list[0].a).toBe('L1');
        });
      });
      it('should be return empty when result is not array', async () => {
        options.res.reName = { total: 'T', list: 'L' };
        vi.spyOn(http, 'request').mockImplementation(() => of({ L: 1, T: DEFAULT.ps }));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(0);
        });
      });
      it('should be keep total when total invalid config', async () => {
        options.res.reName = { total: 'T1', list: '1L' };
        options.total = 4;
        vi.spyOn(http, 'request').mockImplementation(() => of({ L: 1, T: DEFAULT.ps }));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(options.total);
          expect(res.list.length).toBe(0);
        });
      });
      it('should be return 0 when total invalid config and unspecified total', async () => {
        options.res.reName = { total: 'T1', list: '1L' };
        options.total = undefined!;
        vi.spyOn(http, 'request').mockImplementation(() => of({ L: 1, T: DEFAULT.ps }));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(0);
          expect(res.list.length).toBe(0);
        });
      });
      it('should be catch response error', async () => {
        vi.spyOn(http, 'request').mockImplementation(() => throwError(() => new Error('aa')));
        srv.process(options).subscribe({
          next: () => {
            expect(false).toBe(true);
          },
          error: (err: Error) => {
            expect(err.message).toBe('aa');
          }
        });
      });
      it('should be support array data', async () => {
        vi.spyOn(http, 'request').mockImplementation(() => of(genData(DEFAULT.ps)));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(DEFAULT.ps);
          expect(res.ps).toBe(res.total);
        });
      });
    });
    describe('[sort]', () => {
      let resParams: HttpParams;
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
        options.headers[0][0].column._sort = {
          enabled: true,
          key: 'id'
        };
        vi.spyOn(http, 'request').mockImplementation((_method: string, _url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
      });
      it(`should be decremented`, async () => {
        options.headers[0][0].column._sort.default = 'descend';
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')!).toBe('descend');
        });
      });
      it(`should be incremented`, async () => {
        options.headers[0][0].column._sort.default = 'ascend';
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')!).toBe('ascend');
        });
      });
      it(`should be re-name`, async () => {
        options.headers[0][0].column._sort.default = 'ascend';
        options.headers[0][0].column._sort.reName = { ascend: 'A', descend: 'D' };
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')!).toBe('A');
        });
      });
      it(`should be used default key when invalid re-name paraments`, async () => {
        options.headers[0][0].column._sort.default = 'ascend';
        options.headers[0][0].column._sort.reName = {};
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')!).toBe('ascend');
        });
      });
      describe('#multi sort', () => {
        beforeEach(() => {
          options.multiSort = {
            key: 'SORT',
            separator: '-',
            nameSeparator: '.'
          };
          options.columns = [
            {
              title: '',
              index: 'id1',
              _sort: { enabled: true, default: 'descend', key: 'id1' },
              _left: false,
              _right: false
            },
            {
              title: '',
              index: 'id2',
              _sort: { enabled: true, default: 'ascend', key: 'id2' },
              _left: false,
              _right: false
            }
          ];
          options.headers = [
            [
              { colSpan: 1, rowSpan: 1, hasSubColumns: false, column: options.columns[0] },
              { colSpan: 1, rowSpan: 1, hasSubColumns: false, column: options.columns[1] }
            ]
          ];
        });
        it(`should be`, async () => {
          srv.process(options).subscribe(() => {
            expect(resParams.get('SORT')).toBe('id1.descend-id2.ascend');
          });
        });
        it(`should be re-name`, async () => {
          options.columns[0]._sort.reName = { ascend: 'A', descend: 'D' };
          srv.process(options).subscribe(() => {
            expect(resParams.get('SORT')).toBe('id1.D-id2.ascend');
          });
        });
        it(`should be removed key when no any sort of keepEmptyKey is false`, async () => {
          options.multiSort = {
            ...options.multiSort,
            keepEmptyKey: false
          };
          options.columns = [
            {
              title: '',
              index: 'id1',
              sort: true
            },
            {
              title: '',
              index: 'id2',
              sort: true
            }
          ] as _STColumn[];
          options.headers = [
            [
              { colSpan: 1, rowSpan: 1, hasSubColumns: false, column: options.columns[0] },
              { colSpan: 1, rowSpan: 1, hasSubColumns: false, column: options.columns[1] }
            ]
          ];
          srv.process(options).subscribe(() => {
            expect(resParams.has('SORT')).toBe(false);
          });
        });
        it(`should be used default key when invalid re-name paraments`, async () => {
          options.columns[0]._sort.reName = {};
          srv.process(options).subscribe(() => {
            expect(resParams.get('SORT')).toBe('id1.descend-id2.ascend');
          });
        });
        it(`should be in user order`, async () => {
          options.columns[1]._sort.tick = srv.nextSortTick;
          options.columns[0]._sort.tick = srv.nextSortTick;
          srv.process(options).subscribe(() => {
            expect(resParams.get('SORT')).toBe('id2.ascend-id1.descend');
          });
        });
        it(`#arrayParam`, async () => {
          options.multiSort = {
            ...options.multiSort,
            arrayParam: true
          };
          srv.process(options).subscribe(() => {
            expect(resParams.toString()).toContain(`SORT=id1.descend&SORT=id2.ascend`);
          });
        });
      });
      describe('[singleSort]', () => {
        it(`should working`, async () => {
          options.headers[0][0].column._sort.default = 'ascend';
          options.singleSort = {};
          srv.process(options).subscribe(() => {
            expect(resParams.get('sort')).toBe('id.ascend');
          });
        });
        it(`should specify options`, async () => {
          options.headers[0][0].column._sort.default = 'ascend';
          options.singleSort = { key: 'SORT', nameSeparator: '-' };
          srv.process(options).subscribe(() => {
            expect(resParams.get('SORT')).toBe('id-ascend');
          });
        });
      });
    });
    describe('[filter]', () => {
      let resParams: HttpParams;
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
        options.columns[0].filter = {
          type: 'default',
          default: true,
          key: 'id',
          menus: [
            { text: '', value: 'a', checked: true },
            { text: '', value: 'b', checked: true }
          ]
        };
        vi.spyOn(http, 'request').mockImplementation((_method: string, _url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
      });
      it(`should be mulit field`, async () => {
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')).toBe('a,b');
        });
      });
      it(`should be re-name`, async () => {
        options.columns[0].filter!.reName = (list: STColumnFilterMenu[]) => {
          return { id: list.map(i => `${i.value}1`).join(',') };
        };
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')).toBe('a1,b1');
        });
      });
      it('should be always return first value when type with keyword', async () => {
        options.columns[0].filter!.type = 'keyword';
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')).toBe('a');
        });
      });
    });
    describe('[filteredData]', () => {
      beforeEach(() => {
        genModule();
        options.paginator = false;
        options.data = '/mockurl';
      });
      it(`should be include [pi] & [ps] request params`, async () => {
        let params: any;
        vi.spyOn(http, 'request').mockImplementation((_method: string, _url: string, opt: any) => {
          params = opt.params;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(params.pi).toBeUndefined();
          expect(params.ps).toBeUndefined();
        });
      });
    });
  });

  describe('[data process]', () => {
    beforeEach(() => genModule());
    describe('#pre-process', () => {
      it('should run', async () => {
        options.res.process = vi.fn().mockReturnValue([]);
        srv.process(options).subscribe(() => {
          expect(options.res.process).toHaveBeenCalled();
        });
      });
    });
    describe('#accelerator', () => {
      beforeEach(() => (options.data = genData()));
      describe('via format', () => {
        it('should be working', async () => {
          options.columns[0].format = vi.fn().mockReturnValue('');
          srv.process(options).subscribe(() => {
            expect(options.columns[0].format).toHaveBeenCalled();
          });
        });
        it('should be return empty string when is null or undefined', async () => {
          options.columns[0].format = vi.fn().mockReturnValue(null);
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe(``);
          });
        });
      });
      it('via index', async () => {
        options.columns[0].index = 'name';
        srv.process(options).subscribe(res => {
          expect(res.list[0]._values[0].text).toBe(`name 1`);
        });
      });
      describe('via no', () => {
        it('with start 1', async () => {
          options.columns[0].type = 'no';
          options.columns[0].noIndex = 1;
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe(1);
          });
        });
        it('with start 0', async () => {
          options.columns[0].type = 'no';
          options.columns[0].noIndex = 0;
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe(0);
          });
        });
        it('with function', async () => {
          options.columns[0].type = 'no';
          options.columns[0].noIndex = () => 10;
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe(10);
          });
        });
      });
      describe('via img', () => {
        it('with value', async () => {
          options.columns[0].type = 'img';
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toContain(`class="img"`);
          });
        });
        it('without value', async () => {
          options.columns[0].type = 'img';
          (options.data as STData[])[0].id = '';
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe(``);
          });
        });
      });
      it('via number', async () => {
        options.columns[0].type = 'number';
        vi.spyOn(decimalPipe, 'transform').mockReturnValue(undefined as NzSafeAny);
        srv.process(options).subscribe(() => {
          expect(decimalPipe.transform).toHaveBeenCalled();
        });
      });
      it('via currency', async () => {
        options.columns[0].type = 'currency';
        vi.spyOn(currencySrv, 'format').mockReturnValue(undefined as NzSafeAny);
        srv.process(options).subscribe(() => {
          expect(currencySrv.format).toHaveBeenCalled();
        });
      });
      describe('via date', () => {
        it('should be working', async () => {
          options.columns[0].type = 'date';
          vi.spyOn(datePipe, 'transform').mockReturnValue(undefined as NzSafeAny);
          srv.process(options).subscribe(() => {
            expect(datePipe.transform).toHaveBeenCalled();
          });
        });
        it('should be return default value', async () => {
          options.columns[0] = { index: 'date', type: 'date', default: '-' } as _STColumn;
          options.data = [{}, { date: new Date() }];
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe('-');
          });
        });
        it('should be return default value when is 0 timestamp', async () => {
          options.columns[0] = { index: 'date', type: 'date', default: '-' } as _STColumn;
          options.data = [{ date: 0 }, { date: new Date() }];
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe('-');
          });
        });
      });
      it('via yn', async () => {
        options.columns[0].type = 'yn';
        options.columns[0].yn = {};
        vi.spyOn(ynPipe, 'transform').mockReturnValue(undefined as NzSafeAny);
        srv.process(options).subscribe(() => {
          expect(ynPipe.transform).toHaveBeenCalled();
        });
      });
      it('via tag', async () => {
        options.columns[0].type = 'tag';
        options.columns[0].tag = {
          1: { text: '一' }
        };
        srv.process(options).subscribe(res => {
          expect(res.list[0]._values[0].text).toBe('一');
          expect(res.list[1]._values[0].text).toBe('');
        });
      });
      it('via badge', async () => {
        options.columns[0].type = 'badge';
        options.columns[0].badge = {
          1: { text: '一' }
        };
        srv.process(options).subscribe(res => {
          expect(res.list[0]._values[0].text).toBe('一');
          expect(res.list[1]._values[0].text).toBe('');
        });
      });
      it('via enum', async () => {
        options.columns[0].type = 'enum';
        options.columns[0].enum = {
          1: '一'
        };
        srv.process(options).subscribe(res => {
          expect(res.list[0]._values[0].text).toBe('一');
          expect(res.list[1]._values[0].text).toBe('');
        });
      });
      describe('#safeType', () => {
        beforeEach(() => {
          vi.spyOn(mockDomSanitizer, 'bypassSecurityTrustHtml').mockReturnValue(undefined);
        });
        it('with safeHtml', async () => {
          options.columns[0].safeType = 'safeHtml';
          srv.process(options).subscribe(() => {
            expect(mockDomSanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
          });
        });
        it('with safeHtml in format', async () => {
          options.columns[0].safeType = 'safeHtml';
          options.columns[0].format = () => 'a';
          srv.process(options).subscribe(() => {
            expect(mockDomSanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
          });
        });
        it('with html', async () => {
          options.columns[0].safeType = 'html';
          srv.process(options).subscribe(() => {
            expect(mockDomSanitizer.bypassSecurityTrustHtml).not.toHaveBeenCalled();
          });
        });
        it('with text', async () => {
          options.columns[0].safeType = 'text';
          srv.process(options).subscribe(() => {
            expect(mockDomSanitizer.bypassSecurityTrustHtml).not.toHaveBeenCalled();
          });
        });
      });
    });
    it('#rowClassName', async () => {
      options.rowClassName = () => `aaa`;
      options.data = genData();
      srv.process(options).subscribe(res => {
        expect(res.list[0]._rowClassName).toBe('aaa');
      });
    });
    it('should be return empty string when is null or undefined', async () => {
      options.data = genData(1);
      options.columns = [{ title: '', index: 'aa' }] as _STColumn[];
      srv.process(options).subscribe(res => {
        expect(res.list[0]._values[0].text).toBe('');
      });
    });
    it('should be throw error when is invalid data', async () => {
      options.data = [{ age: 'invalid-number' }];
      options.columns = [{ title: '', index: 'age', type: 'number' }] as _STColumn[];
      vi.spyOn(console, 'error').mockReturnValue(undefined);
      srv.process(options).subscribe(res => {
        expect(console.error).toHaveBeenCalled();
        expect(res.list[0]._values[0].text).toBe('INVALID DATA');
      });
    });
    it('should be buttons', async () => {
      options.data = [{ id: 1 }];
      options.columns = [
        { title: '', index: 'id' },
        {
          title: 'btn',
          iif: () => true,
          buttons: [
            { text: 'btn1', iif: () => true, children: [{ text: 'btn1-1' }] },
            { text: 'btn2', iif: () => true, children: [{ text: 'btn2-1', iif: () => true, children: [] }] },
            { text: 'btn3', children: [] } // When children is empty, btn3 will be ignored
          ]
        }
      ] as _STColumn[];
      srv.process(options).subscribe(res => {
        const btns = res.list[0]._values[1].buttons;
        expect(Array.isArray(btns)).toBe(true);
        expect(btns.length).toBe(2);
      });
    });
    describe('#onCell', () => {
      it('should be working', async () => {
        const index = 1;
        options.data = genData();
        options.columns = [
          { index: 'a', onCell: (_, idx) => ({ colSpan: idx === index ? 2 : 1 }) },
          { index: 'b', onCell: (_, idx) => ({ rowSpan: idx === index ? 2 : 1 }) }
        ] as _STColumn[];
        srv.process(options).subscribe(res => {
          const values = res.list[index]._values as _STDataValue[];
          expect(values[0].props?.colSpan).toBe(2);
          expect(values[0].props?.rowSpan).toBe(1);

          expect(values[1].props?.colSpan).toBe(1);
          expect(values[1].props?.rowSpan).toBe(2);
        });
      });
      it('should be ignore when set 0', async () => {
        const index = 1;
        options.data = genData();
        options.columns = [
          { index: 'a', onCell: (_, idx) => ({ colSpan: idx === index ? 0 : 1 }) },
          { index: 'b', onCell: (_, idx) => ({ rowSpan: idx === index ? 0 : 1 }) }
        ] as _STColumn[];
        srv.process(options).subscribe(res => {
          const values = res.list[index]._values as _STDataValue[];
          expect(values[0].props?.colSpan).toBeNull();
          expect(values[0].props?.rowSpan).toBe(1);

          expect(values[1].props?.colSpan).toBe(1);
          expect(values[1].props?.rowSpan).toBeNull();
        });
      });
    });
  });

  describe('[buttons]', () => {
    beforeEach(() => genModule());

    it('text with function', async () => {
      options.data = [{ id: 1 }];
      options.columns = [
        {
          buttons: [{ text: (_, __) => `fn` }]
        }
      ] as _STColumn[];
      srv.process(options).subscribe(res => {
        const btns: STColumnButton[] = res.list[0]._values[0].buttons;
        expect(btns.length).toBe(1);
        expect(btns[0]._text).toBe('fn');
      });
    });

    it('text with null value', async () => {
      options.data = [{ id: 1 }];
      options.columns = [
        {
          buttons: [{ text: undefined }]
        }
      ] as _STColumn[];
      srv.process(options).subscribe(res => {
        const btns: STColumnButton[] = res.list[0]._values[0].buttons;
        expect(btns.length).toBe(1);
        expect(btns[0]._text).toBe('');
      });
    });

    describe('#maxMultipleButton', () => {
      it('with number', async () => {
        options.data = [{ id: 1 }];
        options.columns = [
          {
            maxMultipleButton: 1,
            buttons: [{ text: 'btn1' }, { text: 'btn2' }, { text: 'btn3' }]
          }
        ] as _STColumn[];
        srv.process(options).subscribe(res => {
          const btns: STColumnButton[] = res.list[0]._values[0].buttons;
          expect(btns.length).toBe(2);
          expect(btns[1].children?.length).toBe(2);
        });
      });

      it('with object', async () => {
        options.data = [{ id: 1 }];
        options.columns = [
          {
            maxMultipleButton: { text: 'More', count: 2 },
            buttons: [{ text: 'btn1' }, { text: 'btn2' }, { text: 'btn3' }]
          }
        ] as _STColumn[];
        srv.process(options).subscribe(res => {
          const btns: STColumnButton[] = res.list[0]._values[0].buttons;
          expect(btns.length).toBe(3);
          expect(btns[2]._text).toBe('More');
          expect(btns[2].children?.length).toBe(1);
        });
      });

      it('when the number is less than count', async () => {
        options.data = [{ id: 1 }];
        options.columns = [
          { maxMultipleButton: 4, buttons: [{ text: 'btn1' }, { text: 'btn2' }, { text: 'btn3' }] }
        ] as _STColumn[];
        srv.process(options).subscribe(res => {
          const btns: STColumnButton[] = res.list[0]._values[0].buttons;
          expect(btns.length).toBe(3);
        });
      });
    });
  });

  describe('[statistical]', () => {
    beforeEach(() => {
      genModule();
      options.pi = 1;
      options.ps = 100;
      vi.spyOn(currencySrv, 'format').mockReturnValue(undefined as NzSafeAny);
    });

    it('should be use key instead of index as result key', async () => {
      options.columns = [{ title: '', index: 'a', key: 'a', statistical: { type: 'sum' } }] as _STColumn[];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).subscribe(res => {
        expect(res.statistical.a.value).toBe(3);
      });
    });

    it('should be use indexKey instead of key when not spcify key', async () => {
      options.columns = [{ title: '', index: 'a', indexKey: 'a', statistical: { type: 'sum' } }] as _STColumn[];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).subscribe(res => {
        expect(res.statistical.a.value).toBe(3);
      });
    });

    it('should be custom function', async () => {
      let callbackRawData: NzSafeAny = null;
      options.columns = [
        {
          title: '',
          statistical: {
            type: (_values, _col, _list, rawData) => {
              callbackRawData = rawData;
              return { value: 10 };
            }
          }
        }
      ] as _STColumn[];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).subscribe(res => {
        expect(res.statistical[0].value).toBe(10);
        expect(Array.isArray(callbackRawData)).toBe(true);
      });
    });

    it('should be 3 digits', async () => {
      options.columns = [{ title: '', index: 'a', statistical: { type: 'sum', digits: 3 } }] as _STColumn[];
      options.data = [{ a: 1 }, { a: 2.5666 }];

      srv.process(options).subscribe(res => {
        expect(res.statistical[0].value).toBe(3.567);
      });
    });

    it('should be return 0 when invalid type', async () => {
      options.columns = [{ title: '', index: 'a', statistical: { type: 'invalid-type' as any } }] as _STColumn[];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).subscribe(res => {
        expect(res.statistical[0].value).toBe(0);
      });
    });

    describe('#currency', () => {
      it('should working', async () => {
        options.columns = [{ title: '', index: 'a', statistical: { type: 'sum', currency: true } }] as _STColumn[];
        options.data = [{ a: 1 }, { a: 2 }, { a: 0.1 }];
        expect(currencySrv.format).not.toHaveBeenCalled();

        srv.process(options).subscribe(() => {
          expect(currencySrv.format).toHaveBeenCalled();
        });
      });
      it('should be ingore currency', async () => {
        options.columns = [{ title: '', index: 'a', statistical: { type: 'sum', currency: false } }] as _STColumn[];
        options.data = [{ a: 1 }, { a: 2 }, { a: 0.1 }];

        srv.process(options).subscribe(res => {
          expect(res.statistical[0].text).toBe('3.1');
        });
      });
    });

    describe('#type', () => {
      it('with count', async () => {
        options.columns = [{ title: '', index: 'a', statistical: 'count' }] as _STColumn[];
        options.data = [{ a: 1 }, { a: 1 }, { a: 1 }];

        srv.process(options).subscribe(res => {
          expect(res.statistical[0].value).toBe(3);
        });
      });

      describe('with distinctCount', () => {
        it('should working', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'distinctCount' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: 1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(2);
          });
        });
        it('when include null or undefined', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'distinctCount' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: null }, { a: 1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(2);
          });
        });
      });

      describe('with sum', () => {
        it('should working', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'sum' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(3.1);
          });
        });
        it('should be return 0 when the value > MAX_VALUE', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'sum' }] as _STColumn[];
          options.data = [{ a: Number.MAX_VALUE }, { a: Number.MAX_VALUE }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0);
          });
        });
        it('should be return 0 when data is empty', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'sum' }] as _STColumn[];
          options.data = [];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0);
          });
        });
      });

      describe('with average', () => {
        it('should working', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'average' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0.62);
          });
        });
        it('should be return 0 when the value > MAX_VALUE', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'average' }] as _STColumn[];
          options.data = [{ a: Number.MAX_VALUE }, { a: Number.MAX_VALUE }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0);
          });
        });
        it('should be return 0 when data is empty', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'average' }] as _STColumn[];
          options.data = [];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0);
          });
        });
      });

      describe('with max', () => {
        it('should working', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'max' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(2);
          });
        });
      });

      describe('with min', () => {
        it('should working', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'min' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: 0.1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0.1);
          });
        });
        it('should be return 0 when include null or undefined value', async () => {
          options.columns = [{ title: '', index: 'a', statistical: 'min' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0);
          });
        });
      });
    });
  });
});
