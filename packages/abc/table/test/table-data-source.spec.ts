import { DecimalPipe } from '@angular/common';
import { of, throwError } from 'rxjs';

import { CNCurrencyPipe, DatePipe, YNPipe } from '@delon/theme';
import { deepCopy } from '@delon/util';

import { HttpParams } from '@angular/common/http';
import { STDataSource, STDataSourceOptions } from '../table-data-source';
import { STConfig } from '../table.config';
import { STColumnFilterMenu } from '../table.interfaces';

const DEFAULT = {
  pi: 1,
  ps: 3,
  total: 10,
  maxPi: 0,
};
DEFAULT.maxPi = Math.ceil(DEFAULT.total / DEFAULT.ps);

function genData(count = DEFAULT.total, whetherRandom = false) {
  return Array(count)
    .fill({})
    .map((item: any, idx: number) => {
      return {
        id: whetherRandom ? Math.ceil(Math.random() * 1) + count : idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
      };
    });
}

describe('abc: table: data-souce', () => {
  let srv: STDataSource;
  let options: STDataSourceOptions;
  let http: MockHttpClient;
  let currentyPipe: CNCurrencyPipe;
  let datePipe: DatePipe;
  let ynPipe: YNPipe;
  let decimalPipe: DecimalPipe;
  // tslint:disable-next-line:prefer-const
  let httpResponse: any;

  class MockHttpClient {
    request(method: string, url: string, opt: any) {
      return of(httpResponse);
    }
  }

  class MockDomSanitizer {
    bypassSecurityTrustHtml(val: any) {
      return val;
    }
  }

  function genModule() {
    const def = new STConfig();
    options = {
      pi: DEFAULT.pi,
      ps: DEFAULT.ps,
      data: [],
      total: DEFAULT.total,
      req: deepCopy(def.req),
      res: deepCopy(def.res),
      page: deepCopy(def.page),
      columns: [{ title: '', index: 'id' }],
    };
    currentyPipe = new CNCurrencyPipe('zh-CN');
    datePipe = new DatePipe();
    ynPipe = new YNPipe(new MockDomSanitizer() as any);
    decimalPipe = new DecimalPipe('zh-CN');
    http = new MockHttpClient();
    srv = new STDataSource(
      http as any,
      currentyPipe,
      datePipe,
      ynPipe,
      decimalPipe,
      new MockDomSanitizer() as any,
    );
  }

  describe('[local data]', () => {
    beforeEach(() => genModule());
    describe('[paging]', () => {
      describe('with front', () => {
        beforeEach(() => {
          options.page.front = true;
          options.data = genData();
        });
        it(`should return ${DEFAULT.ps} rows of data`, (done: () => void) => {
          srv.process(options).then(res => {
            expect(res.list.length).toBe(DEFAULT.ps);
            done();
          });
        });
        it('should return second page of data', (done: () => void) => {
          options.pi = 2;
          srv.process(options).then(res => {
            expect(res.list[0].id).toBe(DEFAULT.ps + 1);
            expect(res.pi).toBe(2);
            done();
          });
        });
        it('should limit the maximum page', (done: () => void) => {
          options.pi = DEFAULT.maxPi + 1;
          srv.process(options).then(res => {
            expect(res.pi).toBe(DEFAULT.maxPi);
            done();
          });
        });
        it('should return all data when page.show is false', (done: () => void) => {
          options.page.show = false;
          srv.process(options).then(res => {
            expect(res.pageShow).toBe(false);
            expect(res.list.length).toBe(DEFAULT.total);
            done();
          });
        });
      });
      describe('without front', () => {
        beforeEach(() => {
          options.page.front = false;
          options.data = genData();
        });
        it('should not handle pi & total', (done: () => void) => {
          srv.process(options).then(res => {
            expect(res.pi).toBe(undefined);
            expect(res.total).toBe(undefined);
            done();
          });
        });
        it('should auto show when ps less than total and page.show is undefined', (done: () => void) => {
          options.page.show = undefined;
          options.total = DEFAULT.ps + 1;
          options.data = genData(options.total);
          srv.process(options).then(res => {
            expect(res.pageShow).toBe(true);
            done();
          });
        });
      });
      describe('#page.show', () => {
        describe('is undefined', () => {
          beforeEach(() => {
            options.page.show = undefined;
          });
          it('should auto hide when total less than ps', (done: () => void) => {
            options.data = genData(DEFAULT.ps);
            srv.process(options).then(res => {
              expect(res.pageShow).toBe(false);
              done();
            });
          });
          it('should auto show when ps less than total', (done: () => void) => {
            options.data = genData(DEFAULT.ps + 1);
            srv.process(options).then(res => {
              expect(res.pageShow).toBe(true);
              done();
            });
          });
        });
      });
    });
    describe('[sort]', () => {
      beforeEach(() => {
        options.data = genData(DEFAULT.total, true);
        options.columns[0]._sort = {
          enabled: true,
          compare: (a: any, b: any) => a.id - b.id,
        };
      });
      it(`should be decremented`, (done: () => void) => {
        options.data[5].id = 100000;
        options.columns[0]._sort.default = 'descend';
        srv.process(options).then(res => {
          expect(res.list[0].id).toBe(100000);
          done();
        });
      });
      it(`should be incremented`, (done: () => void) => {
        options.data[5].id = -100000;
        options.columns[0]._sort.default = 'ascend';
        srv.process(options).then(res => {
          expect(res.list[0].id).toBe(-100000);
          done();
        });
      });
    });
    describe('[filter]', () => {
      beforeEach(() => {
        options.data = genData();
        options.columns[0].filter = {
          menus: [{ text: '', value: '1', checked: true }],
          fn: (filter: STColumnFilterMenu, record: any) => record.name.includes(filter.value),
        };
      });
      it(`should be filter [1] in name`, (done: () => void) => {
        const expectCount = (options.data as any[]).filter(w => w.name.includes(`1`)).length;
        srv.process(options).then(res => {
          expect(res.list.length).toBe(expectCount);
          done();
        });
      });
      it(`should be clean filtered`, (done: () => void) => {
        const expectCount = (options.data as any[]).filter(w => w.name.includes(`1`)).length;
        srv
          .process(options)
          .then(res => {
            expect(res.list.length).toBe(expectCount);
          })
          .then(() => {
            options.columns[0].filter.menus[0].checked = false;
            return srv.process(options);
          })
          .then(res => {
            expect(res.list.length).toBe(DEFAULT.ps);
            done();
          });
      });
    });
    describe('with observable data', () => {
      it(`should be running`, (done: () => void) => {
        options.data = of(genData(2));
        srv.process(options).then(res => {
          expect(res.list.length).toBe(2);
          done();
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
      it('should be default method to GET', (done: () => void) => {
        options.req.method = undefined;
        let resMethod = '';
        spyOn(http, 'request').and.callFake((method: string) => {
          resMethod = method;
          return of([]);
        });
        srv.process(options).then(res => {
          expect(resMethod).toBe('GET');
          done();
        });
      });
      it('should be re-name pi & ps', (done: () => void) => {
        options.req.reName = { pi: 'PI', ps: 'PS' };
        let resParams: any = {};
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
        srv.process(options).then(res => {
          expect(resParams.PI).toBe(options.pi);
          expect(resParams.PS).toBe(options.ps);
          done();
        });
      });
      it('should be zero indexed of start index', (done: () => void) => {
        options.page.zeroIndexed = true;
        let resParams: any = {};
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
        srv.process(options).then(res => {
          expect(resParams.pi).toBe(options.pi - 1);
          done();
        });
      });
      it('should be all in body when method is post', (done: () => void) => {
        options.req.allInBody = true;
        options.req.method = 'post';
        let resBody: any = {};
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          resBody = opt.body;
          return of([]);
        });
        srv.process(options).then(res => {
          expect(resBody.pi).toBe(options.pi);
          done();
        });
      });
      it('should be process', (done: () => void) => {
        options.req.process = (a) => {
          // tslint:disable-next-line:no-string-literal
          a.params['PI'] = 2;
          return a;
        };
        let resParams: any = {};
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
        srv.process(options).then(res => {
          expect(resParams.PI).toBe(2);
          done();
        });
      });
      describe('type is skip', () => {
        beforeEach(() => (options.req.type = 'skip'));
        it('should be re-name skip & limit', (done: () => void) => {
          options.req.reName = { skip: 'SKIP', limit: 'LIMIT' };
          let resParams: any = {};
          spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
            resParams = opt.params;
            return of([]);
          });
          srv.process(options).then(res => {
            expect(resParams.SKIP).toBe(0);
            expect(resParams.LIMIT).toBe(options.ps);
            done();
          });
        });
        it('should be changed next page', (done: () => void) => {
          options.pi = 2;
          let resParams: any = {};
          spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
            resParams = opt.params;
            return of([]);
          });
          srv.process(options).then(res => {
            expect(resParams.skip).toBe(options.ps);
            expect(resParams.limit).toBe(options.ps);
            done();
          });
        });
      });
    });
    describe('[response]', () => {
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
      });
      it('should be re-name total & list', (done: () => void) => {
        options.res.reName = { total: 'T', list: 'L' };
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          return of({ L: genData(DEFAULT.ps), T: DEFAULT.ps });
        });
        srv.process(options).then(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(DEFAULT.ps);
          done();
        });
      });
      it('should be invalid re-name config', (done: () => void) => {
        options.res.reName = { total: 'T', list: 'L1' };
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          return of({ L: genData(DEFAULT.ps), T: DEFAULT.ps });
        });
        srv.process(options).then(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(0);
          done();
        });
      });
      it('should be return empty when result is not array', (done: () => void) => {
        options.res.reName = { total: 'T', list: 'L' };
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          return of({ L: 1, T: DEFAULT.ps });
        });
        srv.process(options).then(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(0);
          done();
        });
      });
      it('should be keep total when total invalid config', (done: () => void) => {
        options.res.reName = { total: 'T1', list: '1L' };
        options.total = 4;
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          return of({ L: 1, T: DEFAULT.ps });
        });
        srv.process(options).then(res => {
          expect(res.total).toBe(options.total);
          expect(res.list.length).toBe(0);
          done();
        });
      });
      it('should be return 0 when total invalid config and unspecified total', (done: () => void) => {
        options.res.reName = { total: 'T1', list: '1L' };
        options.total = undefined;
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          return of({ L: 1, T: DEFAULT.ps });
        });
        srv.process(options).then(res => {
          expect(res.total).toBe(0);
          expect(res.list.length).toBe(0);
          done();
        });
      });
      it('should be catch response error', (done: () => void) => {
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          return throwError('aa');
        });
        srv
          .process(options)
          .then(res => {
            expect(false).toBe(true);
            done();
          })
          .catch(err => {
            expect(err).toBe('aa');
            done();
          });
      });
      it('should be support array data', (done: () => void) => {
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          return of(genData(DEFAULT.ps));
        });
        srv.process(options).then(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(DEFAULT.ps);
          expect(res.ps).toBe(res.total);
          done();
        });
      });
    });
    describe('[sort]', () => {
      let resParams: any;
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
        options.columns[0]._sort = {
          enabled: true,
          key: 'id',
        };
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
      });
      it(`should be decremented`, (done: () => void) => {
        options.columns[0]._sort.default = 'descend';
        srv.process(options).then(res => {
          expect(resParams.id).toBe('descend');
          done();
        });
      });
      it(`should be incremented`, (done: () => void) => {
        options.columns[0]._sort.default = 'ascend';
        srv.process(options).then(res => {
          expect(resParams.id).toBe('ascend');
          done();
        });
      });
      it(`should be re-name`, (done: () => void) => {
        options.columns[0]._sort.default = 'ascend';
        options.columns[0]._sort.reName = { ascend: 'A', descend: 'D' };
        srv.process(options).then(res => {
          expect(resParams.id).toBe('A');
          done();
        });
      });
      it(`should be used default key when invalid re-name paraments`, (done: () => void) => {
        options.columns[0]._sort.default = 'ascend';
        options.columns[0]._sort.reName = {};
        srv.process(options).then(res => {
          expect(resParams.id).toBe('ascend');
          done();
        });
      });
      describe('#multi sort', () => {
        beforeEach(() => {
          options.multiSort = {
            key: 'SORT',
            separator: '-',
            nameSeparator: '.',
          };
          options.columns = [
            {
              title: '',
              index: 'id1',
              _sort: { enabled: true, default: 'descend', key: 'id1' },
            },
            {
              title: '',
              index: 'id2',
              _sort: { enabled: true, default: 'ascend', key: 'id2' },
            },
          ];
        });
        it(`should be`, (done: () => void) => {
          srv.process(options).then(res => {
            expect(resParams.SORT).toBe('id1.descend-id2.ascend');
            done();
          });
        });
        it(`should be re-name`, (done: () => void) => {
          options.columns[0]._sort.reName = { ascend: 'A', descend: 'D' };
          srv.process(options).then(res => {
            expect(resParams.SORT).toBe('id1.D-id2.ascend');
            done();
          });
        });
        it(`should be used default key when invalid re-name paraments`, (done: () => void) => {
          options.columns[0]._sort.reName = {};
          srv.process(options).then(res => {
            expect(resParams.SORT).toBe('id1.descend-id2.ascend');
            done();
          });
        });
        it(`should be in user order`, (done: () => void) => {
          options.columns[1]._sort.tick = srv.nextSortTick;
          options.columns[0]._sort.tick = srv.nextSortTick;
          srv.process(options).then(res => {
            expect(resParams.SORT).toBe('id2.ascend-id1.descend');
            done();
          });
        });
      });
      describe('[singleSort]', () => {
        it(`should working`, (done: () => void) => {
          options.columns[0]._sort.default = 'ascend';
          options.singleSort = {};
          srv.process(options).then(res => {
            expect(resParams.sort).toBe('id.ascend');
            done();
          });
        });
        it(`should specify options`, (done: () => void) => {
          options.columns[0]._sort.default = 'ascend';
          options.singleSort = { key: 'SORT', nameSeparator: '-' };
          srv.process(options).then(res => {
            expect(resParams.SORT).toBe('id-ascend');
            done();
          });
        });
      });
    });
    describe('[filter]', () => {
      let resParams: any;
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
        options.columns[0].filter = {
          default: true,
          key: 'id',
          menus: [{ text: '', value: 'a', checked: true }, { text: '', value: 'b', checked: true }],
        };
        spyOn(http, 'request').and.callFake((method: string, url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
      });
      it(`should be mulit field`, (done: () => void) => {
        srv.process(options).then(res => {
          expect(resParams.id).toBe('a,b');
          done();
        });
      });
      it(`should be re-name`, (done: () => void) => {
        options.columns[0].filter.reName = (list: STColumnFilterMenu[]) => {
          return { id: list.map(i => i.value + '1').join(',') };
        };
        srv.process(options).then(res => {
          expect(resParams.id).toBe('a1,b1');
          done();
        });
      });
    });
  });

  describe('[data process]', () => {
    beforeEach(() => genModule());
    describe('#pre-process', () => {
      it('should run', (done: () => void) => {
        options.res.process = jasmine.createSpy().and.returnValue([]);
        srv.process(options).then(res => {
          expect(options.res.process).toHaveBeenCalled();
          done();
        });
      });
    });
    describe('#accelerator', () => {
      beforeEach(() => (options.data = genData()));
      describe('via format', () => {
        it('should be working', done => {
          options.columns[0].format = jasmine.createSpy().and.returnValue('');
          srv.process(options).then(res => {
            expect(options.columns[0].format).toHaveBeenCalled();
            done();
          });
        });
        it('should be return empty string when is null or undefined', done => {
          options.columns[0].format = jasmine.createSpy().and.returnValue(null);
          srv.process(options).then(res => {
            expect(res.list[0]._values[0].text).toBe(``);
            done();
          });
        });
      });
      it('via index', (done: () => void) => {
        options.columns[0].index = 'name';
        srv.process(options).then(res => {
          expect(res.list[0]._values[0].text).toBe(`name 1`);
          done();
        });
      });
      describe('via no', () => {
        it('with start 1', (done: () => void) => {
          options.columns[0].type = 'no';
          options.columns[0].noIndex = 1;
          srv.process(options).then(res => {
            expect(res.list[0]._values[0].text).toBe(1);
            done();
          });
        });
        it('with start 0', (done: () => void) => {
          options.columns[0].type = 'no';
          options.columns[0].noIndex = 0;
          srv.process(options).then(res => {
            expect(res.list[0]._values[0].text).toBe(0);
            done();
          });
        });
        it('with function', (done: () => void) => {
          options.columns[0].type = 'no';
          options.columns[0].noIndex = () => 10;
          srv.process(options).then(res => {
            expect(res.list[0]._values[0].text).toBe(10);
            done();
          });
        });
      });
      describe('via img', () => {
        it('with value', (done: () => void) => {
          options.columns[0].type = 'img';
          srv.process(options).then(res => {
            expect(res.list[0]._values[0].text).toContain(`class="img"`);
            done();
          });
        });
        it('without value', (done: () => void) => {
          options.columns[0].type = 'img';
          options.data[0].id = '';
          srv.process(options).then(res => {
            expect(res.list[0]._values[0].text).toBe(``);
            done();
          });
        });
      });
      it('via number', (done: () => void) => {
        options.columns[0].type = 'number';
        spyOn(decimalPipe, 'transform');
        srv.process(options).then(res => {
          expect(decimalPipe.transform).toHaveBeenCalled();
          done();
        });
      });
      it('via currency', (done: () => void) => {
        options.columns[0].type = 'currency';
        spyOn(currentyPipe, 'transform');
        srv.process(options).then(res => {
          expect(currentyPipe.transform).toHaveBeenCalled();
          done();
        });
      });
      it('via date', (done: () => void) => {
        options.columns[0].type = 'date';
        spyOn(datePipe, 'transform');
        srv.process(options).then(res => {
          expect(datePipe.transform).toHaveBeenCalled();
          done();
        });
      });
      it('via yn', (done: () => void) => {
        options.columns[0].type = 'yn';
        options.columns[0].yn = {};
        spyOn(ynPipe, 'transform');
        srv.process(options).then(res => {
          expect(ynPipe.transform).toHaveBeenCalled();
          done();
        });
      });
    });
    it('#rowClassName', (done: () => void) => {
      options.rowClassName = () => `aaa`;
      options.data = genData();
      srv.process(options).then(res => {
        expect(res.list[0]._rowClassName).toBe('aaa');
        done();
      });
    });
    it('should be return empty string when is null or undefined', (done: () => void) => {
      options.data = genData(1);
      options.columns = [{ title: '', index: 'aa' }];
      srv.process(options).then(res => {
        expect(res.list[0]._values[0].text).toBe('');
        done();
      });
    });
  });

  describe('[statistical]', () => {
    beforeEach(() => {
      genModule();
      options.pi = 1;
      options.ps = 100;
      spyOn(currentyPipe, 'transform');
    });

    it('should be use key instead of index as result key', done => {
      options.columns = [{ title: '', index: 'a', key: 'a', statistical: { type: 'sum' } }];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).then(res => {
        expect(res.statistical.a.value).toBe(3);
        done();
      });
    });

    it('should be custom function', done => {
      let callbackRawData = null;
      options.columns = [{ title: '', index: 'a', statistical: {
        type: (values, col, list, rawData) => {
          callbackRawData = rawData;
          return { value: values[0] };
        },
      } }];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).then(res => {
        expect(res.statistical[0].value).toBe(1);
        expect(Array.isArray(callbackRawData)).toBe(true);
        done();
      });
    });

    it('should be 3 digits', done => {
      options.columns = [{ title: '', index: 'a', statistical: { type: 'sum', digits: 3 } }];
      options.data = [{ a: 1 }, { a: 2.5666 }];

      srv.process(options).then(res => {
        expect(res.statistical[0].value).toBe(3.567);
        done();
      });
    });

    it('should be return 0 when invalid type', done => {
      options.columns = [{ title: '', index: 'a', statistical: { type: 'invalid-type' as any } }];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).then(res => {
        expect(res.statistical[0].value).toBe(0);
        done();
      });
    });

    describe('#currency', () => {
      it('should working', done => {
        options.columns = [{ title: '', index: 'a', statistical: { type: 'sum', currency: true } }];
        options.data = [{ a: 1 }, { a: 2 }, { a: 0.1 }];
        expect(currentyPipe.transform).not.toHaveBeenCalled();

        srv.process(options).then(res => {
          expect(currentyPipe.transform).toHaveBeenCalled();
          done();
        });
      });
      it('should be ingore currency', done => {
        options.columns = [{ title: '', index: 'a', statistical: { type: 'sum', currency: false } }];
        options.data = [{ a: 1 }, { a: 2 }, { a: 0.1 }];

        srv.process(options).then(res => {
          expect(res.statistical[0].text).toBe('3.1');
          done();
        });
      });
    });

    describe('#type', () => {
      it('with count', done => {
        options.columns = [{ title: '', index: 'a', statistical: 'count' }];
        options.data = [{ a: 1 }, { a: 1 }, { a: 1 }];

        srv.process(options).then(res => {
          expect(res.statistical[0].value).toBe(3);
          done();
        });
      });

      describe('with distinctCount', () => {
        it('should working', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'distinctCount' }];
          options.data = [{ a: 1 }, { a: 2 }, { a: 1 }];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(2);
            done();
          });
        });
        it('when include null or undefined', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'distinctCount' }];
          options.data = [{ a: 1 }, { a: null }, { a: 1 }];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(2);
            done();
          });
        });
      });

      describe('with sum', () => {
        it('should working', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'sum' }];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(3.1);
            done();
          });
        });
        it('should be return 0 when the value > MAX_VALUE', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'sum' }];
          options.data = [{ a: Number.MAX_VALUE }, { a: Number.MAX_VALUE }];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(0);
            done();
          });
        });
        it('should be return 0 when data is empty', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'sum' }];
          options.data = [];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(0);
            done();
          });
        });
      });

      describe('with average', () => {
        it('should working', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'average' }];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(0.62);
            done();
          });
        });
        it('should be return 0 when the value > MAX_VALUE', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'average' }];
          options.data = [{ a: Number.MAX_VALUE }, { a: Number.MAX_VALUE }];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(0);
            done();
          });
        });
        it('should be return 0 when data is empty', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'average' }];
          options.data = [];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(0);
            done();
          });
        });
      });

      describe('with max', () => {
        it('should working', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'max' }];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(2);
            done();
          });
        });
      });

      describe('with min', () => {
        it('should working', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'min' }];
          options.data = [{ a: 1 }, { a: 2 }, { a: 0.1 }];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(0.1);
            done();
          });
        });
        it('should be return 0 when include null or undefined value', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'min' }];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).then(res => {
            expect(res.statistical[0].value).toBe(0);
            done();
          });
        });
      });
    });
  });
});
