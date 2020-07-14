import { TestBed } from '@angular/core/testing';
import { XlsxService } from '../../xlsx/xlsx.service';
import { XlsxExportOptions } from '../../xlsx/xlsx.types';
import { STExport } from '../st-export';
import { STColumn } from '../st.interfaces';

class MockXlsxService {
  export(options: XlsxExportOptions) {
    return options;
  }
  numberToSchema(val: number): string {
    return String.fromCharCode(64 + val);
  }
}
const columns: STColumn[] = [
  { title: 'id', index: ['id'], type: 'checkbox' },
  { title: { text: 'name' }, index: ['name'] },
  { title: 'img', index: ['img'], type: 'img', exported: false },
  { title: 'currency', index: ['currency'], type: 'currency' },
  { title: 'date', index: ['date'], type: 'date' },
  { title: 'status', index: ['status'], type: 'yn', yn: { truth: true } },
  { title: 'format', index: ['status'], format: a => a.id },
  { title: 'invalid_index' },
  { title: 'null', index: 'null' },
  { title: 'customYN', index: 'customYn', type: 'yn', yn: { truth: 'Y', yes: 'Y', no: 'N' } },
  {
    title: '',
    index: 'id',
    buttons: [{ text: '' }],
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
    null: null,
    customYn: 'Y',
  },
  {
    id: 2,
    name: 'n2',
    img: '2.jpg',
    currency: 20000,
    date: '2018-1-2',
    status: false,
    null: null,
    customYn: 'N',
  },
  {
    id: 3,
    name: 'n3',
    img: '3.jpg',
    currency: 30000,
    date: '2018-1-3',
    status: false,
    null: null,
    customYn: 'Y',
  },
  {
    id: 4,
    name: 'n4',
    img: '4.jpg',
    currency: 40000,
    date: '2018-1-4',
    status: true,
    null: null,
    customYn: 'Y',
  },
];

describe('abc: table: export', () => {
  let srv: STExport;

  describe('[default]', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: XlsxService, useClass: MockXlsxService }, STExport],
      });
      srv = TestBed.inject<STExport>(STExport);
    });

    it('should be export a excel', () => {
      const ret: any = srv.export({
        _d: data,
        _c: columns,
        sheetname: 'sn',
        filename: 'filename.xlsx',
        callback: () => {},
      });
      expect(ret).not.toBeNull();
      expect(ret.sheets).not.toBeNull();
      const sheet = ret.sheets.sn;
      expect(sheet).not.toBeNull();
      const cc = columns.filter(w => w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0));
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
        callback: () => {},
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
