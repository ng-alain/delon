import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LazyService } from '../utils/lazy.service';
import { ZipConfig, DA_ZIP_CONFIG, ZipWriteOptions } from './interface';

declare var JSZip: any;

@Injectable()
export class ZipService {
    constructor(
        @Inject(DA_ZIP_CONFIG) private config: ZipConfig,
        private http: HttpClient,
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

    private check(zip: any) {
        if (!zip) throw new Error('get instance via `ZipService.create()`');
    }

    /** 解压 */
    read(fileOrUrl: File | string, options?: any): Promise<any> {
        return new Promise<any>((resolve) => {
            this.init().then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((res: ArrayBuffer) => {
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
    create(): Promise<any> {
        return new Promise<any>((resolve) => {
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
            this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe((res: ArrayBuffer) => {
                zip.file(path, res);
                resolve();
            }, () => {
                reject();
            });
        });
    }

    /** 保存Zip */
    save(zip: any, options?: any): Promise<void> {
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
