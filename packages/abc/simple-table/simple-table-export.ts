import { Injectable, Optional } from '@angular/core';
import { deepGet } from '@delon/util';
import { NaXlsxService } from '../xlsx/xlsx.service';
import { SimpleTableColumn, STExportOptions } from './interface';

@Injectable()
export class SimpleTableExport {
  constructor(@Optional() private xlsxSrv: NaXlsxService) {}

  private _stGet(item: any, col: SimpleTableColumn): any {
    const ret: any = { t: 's', v: '' };

    if (col.format) {
      ret.v = col.format(item, col);
    } else {
      const val = deepGet(item, col.index as string[], '');
      ret.v = val;
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

    return ret;
  }

  private genSheet(opt: STExportOptions): { [sheet: string]: any } {
    const sheets: { [sheet: string]: any } = {};
    const sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
    const colData = opt._c.filter(
      w =>
        w.exported !== false &&
        w.index &&
        (!w.buttons || w.buttons.length === 0),
    );
    const cc = colData.length,
      dc = opt._d.length;
    // region: column
    for (let i = 0; i < cc; i++) {
      sheet[`${String.fromCharCode(65 + i)}1`] = {
        t: 's',
        v: colData[i].title,
      };
    }
    // endregion

    // region: content
    for (let i = 0; i < dc; i++) {
      for (let j = 0; j < cc; j++) {
        sheet[`${String.fromCharCode(65 + j)}${i + 2}`] = this._stGet(
          opt._d[i],
          colData[j],
        );
      }
    }
    // endregion

    if (cc > 0 && dc > 0) {
      sheet['!ref'] = `A1:${String.fromCharCode(65 + cc - 1)}${dc + 1}`;
    }

    return sheets;
  }

  export(opt: STExportOptions) {
    if (!this.xlsxSrv)
      throw new Error(`muse be import 'AdXlsxModule' module, but got null`);
    const sheets = this.genSheet(opt);
    return this.xlsxSrv.export({
      sheets,
      filename: opt.filename,
      callback: opt.callback,
    });
  }
}
