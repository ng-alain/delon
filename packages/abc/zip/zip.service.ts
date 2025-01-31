import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone, inject } from '@angular/core';

import { saveAs } from 'file-saver';
import type jsZipType from 'jszip';

import { AlainConfigService, AlainZipConfig } from '@delon/util/config';
import { ZoneOutside } from '@delon/util/decorator';
import { LazyResult, LazyService } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ZipSaveOptions } from './zip.types';

declare const JSZip: jsZipType;

@Injectable({ providedIn: 'root' })
export class ZipService {
  private readonly http = inject(HttpClient);
  private readonly lazy = inject(LazyService);
  private readonly ngZone = inject(NgZone);

  private cog: AlainZipConfig;

  constructor(configSrv: AlainConfigService) {
    this.cog = configSrv.merge('zip', {
      url: 'https://cdn.jsdelivr.net/npm/jszip@3/dist/jszip.min.js',
      utils: []
    })!;
  }

  private init(): Promise<LazyResult[]> {
    return this.lazy.load([this.cog.url!].concat(this.cog.utils!));
  }

  private check(zip?: jsZipType | null): void {
    if (!zip) throw new Error('get instance via `ZipService.create()`');
  }

  /** 解压 */
  @ZoneOutside()
  read(fileOrUrl: File | string, options?: jsZipType.JSZipLoadOptions): Promise<jsZipType> {
    return new Promise<jsZipType>((resolve, reject) => {
      const resolveCallback = (data: jsZipType): void => {
        this.ngZone.run(() => resolve(data));
      };
      this.init().then(() => {
        // from url
        if (typeof fileOrUrl === 'string') {
          this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe({
            next: (res: ArrayBuffer) => {
              JSZip.loadAsync(res, options).then((ret: jsZipType) => resolveCallback(ret));
            },
            error: err => {
              reject(err);
            }
          });
          return;
        }
        // from file
        const reader: FileReader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          JSZip.loadAsync(e.target!.result as ArrayBuffer, options).then((ret: jsZipType) => resolveCallback(ret));
        };
        reader.readAsBinaryString(fileOrUrl as File);
      });
    });
  }

  /** 创建 Zip 实例，用于创建压缩文件 */
  create(): Promise<jsZipType | null> {
    return new Promise<jsZipType | null>(resolve => {
      this.init()
        .then(() => {
          const zipFile = new JSZip();
          resolve(zipFile);
        })
        .catch(() => resolve(null));
    });
  }

  /**
   * 下载URL资源并写入 zip
   *
   * @param zip Zip 实例
   * @param path Zip 路径，例如： `text.txt`、`txt/hi.txt`
   * @param url URL 地址
   */
  pushUrl(zip: jsZipType | null, path: string, url: string): Promise<void> {
    this.check(zip);
    return new Promise<void>((resolve, reject) => {
      this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe({
        next: (res: ArrayBuffer) => {
          zip!.file(path, res);
          resolve();
        },
        error: error => {
          reject({ url, error });
        }
      });
    });
  }

  /**
   * 保存Zip并执行打开保存对话框
   *
   * @param zip zip 对象，务必通过 `create()` 构建
   * @param options 额外参数，
   */
  save(zip: jsZipType | null, options?: ZipSaveOptions): Promise<void> {
    this.check(zip);
    const opt = { filename: 'download.zip', ...options } as ZipSaveOptions;
    return new Promise<void>((resolve, reject) => {
      zip!.generateAsync<'blob'>({ type: 'blob', ...opt.options } as NzSafeAny, opt.update as NzSafeAny).then(
        data => {
          if (opt.callback) opt.callback(data);
          saveAs(data, opt.filename);
          resolve();
        },
        err => {
          reject(err);
        }
      );
    });
  }
}
