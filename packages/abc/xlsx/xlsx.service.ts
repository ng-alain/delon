import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';

import { saveAs } from 'file-saver';
import isUtf8 from 'isutf8';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { AlainConfigService, AlainXlsxConfig } from '@delon/util/config';
import { ZoneOutside } from '@delon/util/decorator';
import { LazyResult, LazyService } from '@delon/util/other';

import { XlsxExportOptions, XlsxExportResult, XlsxExportSheet } from './xlsx.types';

declare var XLSX: any;
declare var cptable: any;

@Injectable({ providedIn: 'root' })
export class XlsxService {
  constructor(
    private http: HttpClient,
    private lazy: LazyService,
    configSrv: AlainConfigService,
    private ngZone: NgZone
  ) {
    this.cog = configSrv.merge('xlsx', {
      url: 'https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/xlsx.full.min.js',
      modules: [`https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/cpexcel.min.js`]
    })!;
  }
  private cog: AlainXlsxConfig;

  private init(): Promise<LazyResult[]> {
    return typeof XLSX !== 'undefined'
      ? Promise.resolve([])
      : this.lazy.load([this.cog.url!].concat(this.cog.modules!));
  }

  @ZoneOutside()
  private read(data: NzSafeAny, options: { type: 'array' | 'binary' | 'string' }): { [key: string]: NzSafeAny[][] } {
    const ret: NzSafeAny = {};
    if (options.type === 'binary') {
      const buf = new Uint8Array(data);
      if (!isUtf8(buf)) {
        try {
          data = cptable.utils.decode(936, buf);
          options.type = 'string';
        } catch {
          options.type = 'array';
        }
      }
    }
    const wb = XLSX.read(data, options);
    wb.SheetNames.forEach((name: string) => {
      const sheet: NzSafeAny = wb.Sheets[name];
      ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    });
    return ret;
  }

  /**
   * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
   */
  import(fileOrUrl: File | string): Promise<{ [key: string]: any[][] }> {
    return new Promise<{ [key: string]: any[][] }>((resolve, reject) => {
      this.init()
        .then(() => {
          // from url
          if (typeof fileOrUrl === 'string') {
            this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe(
              (res: ArrayBuffer) => {
                this.ngZone.run(() => resolve(this.read(new Uint8Array(res), { type: 'array' })));
              },
              (err: any) => {
                reject(err);
              }
            );
            return;
          }
          // from file
          const reader: FileReader = new FileReader();
          reader.onload = (e: any) => {
            this.ngZone.run(() => resolve(this.read(e.target.result, { type: 'binary' })));
          };
          reader.readAsArrayBuffer(fileOrUrl);
        })
        .catch(() => reject(`Unable to load xlsx.js`));
    });
  }

  @ZoneOutside()
  async export(options: XlsxExportOptions): Promise<XlsxExportResult> {
    return new Promise<XlsxExportResult>((resolve, reject) => {
      this.init()
        .then(() => {
          const wb: any = XLSX.utils.book_new();
          if (Array.isArray(options.sheets)) {
            (options.sheets as XlsxExportSheet[]).forEach((value: XlsxExportSheet, index: number) => {
              const ws: any = XLSX.utils.aoa_to_sheet(value.data);
              XLSX.utils.book_append_sheet(wb, ws, value.name || `Sheet${index + 1}`);
            });
          } else {
            wb.SheetNames = Object.keys(options.sheets);
            wb.Sheets = options.sheets;
          }

          if (options.callback) options.callback(wb);

          const wbout: ArrayBuffer = XLSX.write(wb, {
            bookType: 'xlsx',
            bookSST: false,
            type: 'array',
            ...options.opts
          });
          const filename = options.filename || 'export.xlsx';
          saveAs(new Blob([wbout], { type: 'application/octet-stream' }), filename);

          resolve({ filename, wb });
        })
        .catch(err => reject(err));
    });
  }

  /**
   * 数据转符号名
   * - `1` => `A`
   * - `27` => `AA`
   * - `703` => `AAA`
   */
  numberToSchema(val: number): string {
    const startCode = 'A'.charCodeAt(0);
    let res = '';

    do {
      --val;
      res = String.fromCharCode(startCode + (val % 26)) + res;
      val = (val / 26) >> 0;
    } while (val > 0);

    return res;
  }
}
