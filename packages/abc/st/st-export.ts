import { Injectable, Optional } from '@angular/core';
import { XlsxService } from '@delon/abc/xlsx';
import { deepGet } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { STColumn, STExportOptions } from './st.interfaces';

@Injectable()
export class STExport {
  constructor(@Optional() private xlsxSrv: XlsxService) {}

  private _stGet(item: any, col: STColumn, index: number): any {
    const ret: { [key: string]: any } = { t: 's', v: '' };

    if (col.format) {
      ret.v = col.format(item, col, index);
    } else {
      const val = deepGet(item, col.index as string[], '');
      ret.v = val;
      if (val) {
        switch (col.type) {
          case 'currency':
            ret.t = 'n';
            break;
          case 'date':
            ret.t = 'd';
            break;
          case 'yn':
            ret.v = ret.v === col.ynTruth ? col.ynYes || '是' : col.ynNo || '否';
            break;
        }
      }
    }

    ret.v = ret.v || '';

    return ret;
  }

  private genSheet(opt: STExportOptions): { [sheet: string]: {} } {
    const sheets: { [sheet: string]: { [key: string]: NzSafeAny } } = {};
    const sheet: { [key: string]: NzSafeAny } = (sheets[opt.sheetname || 'Sheet1'] = {});
    const colData = opt._c!.filter(w => w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0));
    const colLen = colData.length;
    const dataLen = opt._d!.length;

    // column
    for (let i = 0; i < colLen; i++) {
      const tit = colData[i].title;
      sheet[`${this.xlsxSrv.numberToSchema(i + 1)}1`] = {
        t: 's',
        v: typeof tit === 'object' ? tit.text : tit,
      };
    }

    // content
    for (let i = 0; i < dataLen; i++) {
      for (let j = 0; j < colLen; j++) {
        sheet[`${this.xlsxSrv.numberToSchema(j + 1)}${i + 2}`] = this._stGet(opt._d![i], colData[j], i);
      }
    }

    if (colLen > 0 && dataLen > 0) {
      sheet['!ref'] = `A1:${this.xlsxSrv.numberToSchema(colLen)}${dataLen + 1}`;
    }

    return sheets;
  }

  export(opt: STExportOptions) {
    const sheets = this.genSheet(opt);
    return this.xlsxSrv.export({
      sheets,
      filename: opt.filename,
      callback: opt.callback,
    });
  }
}
