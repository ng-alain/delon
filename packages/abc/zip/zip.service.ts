// tslint:disable:no-any
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyResult, LazyService } from '@delon/util';
import { saveAs } from 'file-saver';

import { ZipConfig } from './zip.config';
import { ZipSaveOptions } from './zip.types';

declare var JSZip: any;

@Injectable({ providedIn: 'root' })
export class ZipService {
  constructor(
    private cog: ZipConfig,
    private http: HttpClient,
    private lazy: LazyService,
  ) { }

  private init(): Promise<LazyResult[]> {
    return this.lazy.load([this.cog.url].concat(this.cog.utils));
  }

  private check(zip: any) {
    if (!zip) throw new Error('get instance via `ZipService.create()`');
  }

  /** 解压 */
  read(fileOrUrl: File | string, options?: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.init().then(() => {
        // from url
        if (typeof fileOrUrl === 'string') {
          this.http
            .request('GET', fileOrUrl, { responseType: 'arraybuffer' })
            .subscribe(
              (res: ArrayBuffer) => {
                JSZip.loadAsync(res, options).then(ret => resolve(ret));
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
          JSZip.loadAsync(e.target.result, options).then(ret => resolve(ret));
        };
        reader.readAsBinaryString(fileOrUrl as File);
      });
    });
  }

  /** 创建 Zip 实例，用于创建压缩文件 */
  create(): Promise<any> {
    return new Promise<any>(resolve => {
      this.init().then(() => {
        const zipFile: any = new JSZip();
        resolve(zipFile);
      });
    });
  }

  /**
   * 下载URL资源并写入 zip
   * @param zip Zip 实例
   * @param path Zip 路径，例如： `text.txt`、`txt/hi.txt`
   * @param url URL 地址
   */
  pushUrl(zip: any, path: string, url: string): Promise<void> {
    this.check(zip);
    return new Promise<void>((resolve, reject) => {
      this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe(
        (res: ArrayBuffer) => {
          zip.file(path, res);
          resolve();
        },
        (error: any) => {
          reject({ url, error });
        },
      );
    });
  }

  /**
   * 保存Zip并执行打开保存对话框
   *
   * @param zip zip 对象，务必通过 `create()` 构建
   * @param options 额外参数，
   */
  save(zip: any, options?: ZipSaveOptions): Promise<void> {
    this.check(zip);
    const opt = { ...options };
    return new Promise<void>((resolve, reject) => {
      zip
        .generateAsync({ type: 'blob', ...opt.options }, opt.update)
        .then(
          (data: Blob) => {
            if (opt.callback) opt.callback(data);
            saveAs(data, opt.filename || 'download.zip');
            resolve();
          },
          err => {
            reject(err);
          },
        );
    });
  }
}
