import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LazyService, LazyResult } from '@delon/util';

import { XlsxExportOptions, XlsxExportSheet } from './xlsx.types';
import { XlsxConfig } from './xlsx.config';

declare var XLSX: any;

@Injectable()
export class XlsxService {
  constructor(
    private cog: XlsxConfig,
    private http: HttpClient,
    private lazy: LazyService,
  ) {}

  private init(): Promise<LazyResult[]> {
    return this.lazy.load([this.cog.url].concat(this.cog.modules));
  }

  private read(wb: any): { [key: string]: any[][] } {
    const ret: any = {};
    wb.SheetNames.forEach(name => {
      const sheet: any = wb.Sheets[name];
      ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    });
    return ret;
  }

  /**
   * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
   * @param rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
   */
  import(
    fileOrUrl: File | string,
    rABS: 'readAsBinaryString' | 'readAsArrayBuffer' = 'readAsBinaryString',
  ): Promise<{ [key: string]: any[][] }> {
    return new Promise<{ [key: string]: any[][] }>((resolver, reject) => {
      this.init().then(() => {
        // from url
        if (typeof fileOrUrl === 'string') {
          this.http
            .request('GET', fileOrUrl, { responseType: 'arraybuffer' })
            .subscribe(
              (res: ArrayBuffer) => {
                const wb = XLSX.read(new Uint8Array(res), { type: 'array' });
                resolver(this.read(wb));
              },
              (err: any) => {
                reject(err);
              },
            );
          return;
        }
        // from file
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
          const wb: any = XLSX.read(e.target.result, { type: 'binary' });
          resolver(this.read(wb));
        };
        reader[rABS](fileOrUrl);
      });
    });
  }

  /** 导出 */
  export(options: XlsxExportOptions): Promise<void> {
    return this.init().then(() => {
      const wb: any = XLSX.utils.book_new();
      if (Array.isArray(options.sheets)) {
        (<XlsxExportSheet[]>options.sheets).forEach(
          (value: XlsxExportSheet, index: number) => {
            const ws: any = XLSX.utils.aoa_to_sheet(value.data);
            XLSX.utils.book_append_sheet(
              wb,
              ws,
              value.name || `Sheet${index + 1}`,
            );
          },
        );
      } else {
        wb.SheetNames = Object.keys(options.sheets);
        wb.Sheets = options.sheets;
      }

      if (options.callback) options.callback(wb);

      const wbout: ArrayBuffer = XLSX.write(
        wb,
        Object.assign(
          {
            bookType: 'xlsx',
            bookSST: false,
            type: 'array',
          },
          options.opts,
        ),
      );
      saveAs(
        new Blob([wbout], { type: 'application/octet-stream' }),
        options.filename || 'export.xlsx',
      );
    });
  }
}
