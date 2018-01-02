import { Injectable, Inject } from '@angular/core';
import { saveAs } from 'file-saver';
import * as JSZip from 'jszip';
import { _HttpClient } from '@delon/theme';
import { LazyService } from '../utils/lazy.service';
import { ZipConfig, DA_ZIP_CONFIG, ZipWriteOptions } from './interface';

@Injectable()
export class ZipService {
    constructor(
        @Inject(DA_ZIP_CONFIG) private config: ZipConfig,
        private _http: _HttpClient,
        private lazy: LazyService
    ) {
    }

    private init(): Promise<void> {
        const config = Object.assign({
            url: `//cdn.bootcss.com/jszip/3.1.5/jszip.min.js`,
            utils: [ ]
        }, this.config);

        return this.lazy.load([ config.url ].concat(config.utils));
    }

    private check(zip: JSZip) {
        if (!zip) throw new Error('get instance via `ZipService.create()`');
    }

    /** 解压 */
    read(fileOrUrl: File | string, options?: JSZip.JSZipLoadOptions): Promise<JSZip> {
        return new Promise<JSZip>((resolve) => {
            this.init().then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this._http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((res: ArrayBuffer) => {
                        JSZip.loadAsync(res, options).then(ret => resolve(ret));
                    });
                    return;
                }
                // from file
                const reader: FileReader = new FileReader();
                reader.onload = (e: any) => {
                    JSZip.loadAsync(e.target.result, options).then(ret => resolve(ret));
                };
                reader.readAsBinaryString(<File>fileOrUrl);
            });
        });
    }

    /** 创建 Zip 实例，用于创建压缩文件 */
    create(): Promise<JSZip> {
        return new Promise<JSZip>((resolve) => {
            this.init().then(() => {
                const zipFile: JSZip = new JSZip();
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
    pushUrl(zip: JSZip, path: string, url: string): Promise<void> {
        this.check(zip);
        return new Promise<void>((resolve, reject) => {
            this._http.request('GET', url, { responseType: 'arraybuffer' }).subscribe((res: ArrayBuffer) => {
                zip.file(path, res);
                resolve();
            }, () => {
                reject();
            });
        });
    }

    /** 保存Zip */
    save(zip: JSZip, options?: ZipWriteOptions): Promise<void> {
        this.check(zip);
        const opt = Object.assign({}, options);
        return new Promise<void>((resolve) => {
            zip.generateAsync(
                Object.assign({type: 'blob'}, opt.options),
                opt.update
            ).then((data: Blob) => {
                if (opt.callback) opt.callback();
                saveAs(data, opt.filename || 'download.zip');
            });
        });
    }
}
