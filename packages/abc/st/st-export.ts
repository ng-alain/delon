import { Injectable, Optional } from '@angular/core';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { XlsxExportResult, XlsxService } from '@delon/abc/xlsx';
import { deepGet } from '@delon/util/other';

import { STColumn, STExportOptions } from './st.interfaces';
import { _STColumn } from './st.types';

@Injectable()
export class STExport {
  constructor(@Optional() private xlsxSrv: XlsxService) {}

  private _stGet(item: NzSafeAny, col: STColumn, index: number, colIndex: number): NzSafeAny {
    const ret: { [key: string]: NzSafeAny } = { t: 's', v: '' };

    if (col.format) {
      ret.v = col.format(item, col, index);
    } else {
      const val = item._values ? item._values[colIndex].text : deepGet(item, col.index as string[], '');
      ret.v = val;
      if (val != null) {
        switch (col.type) {
          case 'currency':
            ret.t = 'n';
            break;
          case 'date':
            ret.t = 'd';
            break;
          case 'yn':
            const yn = col.yn!;
            ret.v = ret.v === yn.truth ? yn.yes : yn.no;
            break;
        }
      }
    }

    ret.v = ret.v || '';

    return ret;
  }

  private genSheet(opt: STExportOptions): { [sheet: string]: unknown } {
    const sheets: { [sheet: string]: { [key: string]: NzSafeAny } } = {};
    const sheet: { [key: string]: NzSafeAny } = (sheets[opt.sheetname || 'Sheet1'] = {});
    const dataLen = opt.data!.length;
    let validColCount = 0;
    let loseCount = 0;
    const columns = opt.columens! as _STColumn[];
    if (columns.findIndex(w => w._width != null) !== -1) {
      // wpx: width in screen pixels https://github.com/SheetJS/sheetjs#column-properties
      sheet['!cols'] = columns.map(col => ({ wpx: col._width }));
    }
    for (let colIdx = 0; colIdx < columns.length; colIdx++) {
      const col = columns[colIdx];
      if (col.exported === false || !col.index || !(!col.buttons || col.buttons.length === 0)) {
        ++loseCount;
        continue;
      }
      ++validColCount;
      const columnName = this.xlsxSrv.numberToSchema(colIdx + 1 - loseCount);
      sheet[`${columnName}1`] = {
        t: 's',
        v: typeof col.title === 'object' ? col.title.text : col.title
      };
      for (let dataIdx = 0; dataIdx < dataLen; dataIdx++) {
        sheet[`${columnName}${dataIdx + 2}`] = this._stGet(opt.data![dataIdx], col, dataIdx, colIdx);
      }
    }

    if (validColCount > 0 && dataLen > 0) {
      sheet['!ref'] = `A1:${this.xlsxSrv.numberToSchema(validColCount)}${dataLen + 1}`;
    }

    return sheets;
  }

  async export(opt: STExportOptions): Promise<XlsxExportResult> {
    const sheets = this.genSheet(opt);
    return this.xlsxSrv.export({
      sheets,
      filename: opt.filename,
      callback: opt.callback
    });
  }
}
