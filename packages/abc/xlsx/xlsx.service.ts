import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone, inject } from '@angular/core';

import isUtf8 from 'isutf8';

import { AlainConfigService, AlainXlsxConfig } from '@delon/util/config';
import { ZoneOutside } from '@delon/util/decorator';
import { LazyResult, LazyService } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { XlsxExportOptions, XlsxExportResult, XlsxExportSheet } from './xlsx.types';

declare const XLSX: NzSafeAny;
declare const cptable: NzSafeAny;

@Injectable({ providedIn: 'root' })
export class XlsxService {
  private readonly http = inject(HttpClient);
  private readonly lazy = inject(LazyService);
  private readonly ngZone = inject(NgZone);

  private cog: AlainXlsxConfig;

  constructor(configSrv: AlainConfigService) {
    this.cog = configSrv.merge('xlsx', {
      url: 'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js',
      modules: [`https://cdn.jsdelivr.net/npm/xlsx/dist/cpexcel.js`]
    })!;
  }

  private init(): Promise<LazyResult[]> {
    return typeof XLSX !== 'undefined'
      ? Promise.resolve([])
      : this.lazy.load([this.cog.url!].concat(this.cog.modules!));
  }

  @ZoneOutside()
  private read(data: NzSafeAny): Record<string, NzSafeAny[][]> {
    const {
      read,
      utils: { sheet_to_json }
    } = XLSX;
    const ret: NzSafeAny = {};
    const buf = new Uint8Array(data);
    let type = 'array';
    if (!isUtf8(buf)) {
      try {
        data = cptable.utils.decode(936, buf);
        type = 'string';
      } catch {}
    }
    const wb = read(data, { type });
    wb.SheetNames.forEach((name: string) => {
      const sheet: NzSafeAny = wb.Sheets[name];
      ret[name] = sheet_to_json(sheet, { header: 1 });
    });
    return ret;
  }

  /**
   * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
   */
  import(fileOrUrl: File | string): Promise<Record<string, NzSafeAny[][]>> {
    return new Promise<Record<string, NzSafeAny[][]>>((resolve, reject) => {
      const r = (data: NzSafeAny): void => this.ngZone.run(() => resolve(this.read(data)));
      this.init()
        .then(() => {
          // from url
          if (typeof fileOrUrl === 'string') {
            this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe({
              next: (res: ArrayBuffer) => r(new Uint8Array(res)),
              error: (err: NzSafeAny) => reject(err)
            });
            return;
          }
          // from file
          const reader: FileReader = new FileReader();
          reader.onload = (e: NzSafeAny) => r(e.target.result);
          reader.onerror = (e: NzSafeAny) => reject(e);
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
          options = { format: 'xlsx', ...options };
          const {
            writeFile,
            utils: { book_new, aoa_to_sheet, book_append_sheet }
          } = XLSX;
          const wb: NzSafeAny = book_new();
          if (Array.isArray(options.sheets)) {
            (options.sheets as XlsxExportSheet[]).forEach((value: XlsxExportSheet, index: number) => {
              const ws: NzSafeAny = aoa_to_sheet(value.data);
              book_append_sheet(wb, ws, value.name || `Sheet${index + 1}`);
            });
          } else {
            wb.SheetNames = Object.keys(options.sheets);
            wb.Sheets = options.sheets;
          }

          if (options.callback) options.callback(wb);

          const filename = options.filename || `export.${options.format}`;
          writeFile(wb, filename, {
            bookType: options.format,
            bookSST: false,
            type: 'array',
            ...options.opts
          });

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
