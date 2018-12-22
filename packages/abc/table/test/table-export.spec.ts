import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { XlsxService } from '../../xlsx/xlsx.service';
import { XlsxExportOptions } from '../../xlsx/xlsx.types';
import { STExport } from '../table-export';
import { STColumn } from '../table.interfaces';

class MockXlsxService {
  export(options: XlsxExportOptions) {
    return options;
  }
}
const columns: STColumn[] = [
  { title: 'id', index: ['id'], type: 'checkbox' },
  { title: 'name', index: ['name'] },
  { title: 'img', index: ['img'], type: 'img', exported: false },
  { title: 'currency', index: ['currency'], type: 'currency' },
  { title: 'date', index: ['date'], type: 'date' },
  { title: 'status', index: ['status'], type: 'yn', ynTruth: true },
  { title: 'format', index: ['status'], format: a => a.id },
  { title: 'invalid_index' },
  { title: 'customYN', index: ['status'], type: 'yn', ynTruth: true, ynYes: 'Y', ynNo: 'N' },
  {
    title: '',
    index: 'id',
    buttons: [
      { text: '' },
    ],
  },
];
const data: any[] = [
  {
    id: 1,
    name: 'n1',
    img: '1.jpg',
    currency: 10000,
    date: '2018-1-1',
    status: true,
  },
  {
    id: 2,
    name: 'n2',
    img: '2.jpg',
    currency: 20000,
    date: '2018-1-2',
    status: false,
  },
  {
    id: 3,
    name: 'n3',
    img: '3.jpg',
    currency: 30000,
    date: '2018-1-3',
    status: false,
  },
  {
    id: 4,
    name: 'n4',
    img: '4.jpg',
    currency: 40000,
    date: '2018-1-4',
    status: true,
  },
];

describe('abc: table: export', () => {
  let injector: Injector;
  let srv: STExport;

  describe('[default]', () => {
    beforeEach(() => {
      injector = TestBed.configureTestingModule({
        providers: [
          { provide: XlsxService, useClass: MockXlsxService },
          STExport,
        ],
      });
      srv = injector.get(STExport);
    });

    it('should be export a excel', () => {
      const ret: any = srv.export({
        _d: data,
        _c: columns,
        sheetname: 'sn',
        filename: 'filename.xlsx',
        callback: (wb: any) => { },
      });
      expect(ret).not.toBeNull();
      expect(ret.sheets).not.toBeNull();
      const sheet = ret.sheets.sn;
      expect(sheet).not.toBeNull();
      const cc = columns.filter(
        w =>
          w.exported !== false &&
          w.index &&
          (!w.buttons || w.buttons.length === 0),
      );
      expect(sheet['!ref']).toBe(
        // tslint:disable-next-line:binary-expression-operand-order
        `A1:${String.fromCharCode(65 + cc.length - 1)}${data.length + 1}`,
      );
    });

    it('should auto specify sheet name [Sheet1]', () => {
      const ret: any = srv.export({
        _d: data,
        _c: columns,
        filename: 'filename.xlsx',
        callback: (wb: any) => { },
      });
      expect(ret).not.toBeNull();
      expect(Object.keys(ret.sheets)).toContain('Sheet1');
    });

    it('should be generate empty sheet', () => {
      const ret: any = srv.export({
        _d: [],
        _c: [],
      });
      expect(ret).not.toBeNull();
      expect(Object.keys(ret.sheets.Sheet1).length).toBe(0);
    });
  });
});
